import { FC } from 'react'

import SlideArrow from '@/ui/slider/SlideArrow/SlideArrow'
import { ISlide } from '@/ui/slider/slider.interface'
import { useSlider } from '@/ui/slider/useSlider'

import { CSSTransition } from 'react-transition-group'

import styles from './Slider.module.scss'
import SlideItem from '@/ui/slider/SlideItem'

interface ISlider {
	slides: ISlide[]
	buttonTitle?: string
}

const Slider: FC<ISlider> = ({ slides, buttonTitle }) => {
	const { handleClick, index, isNext, isPrev, slideIn } = useSlider(
		slides.length
	)

	return (
		<div className={styles.slider}>
			<CSSTransition in={slideIn} classNames='slide-animation' timeout={300} unmountOnExit>
				<SlideItem slide={slides[index]} buttonTitle={buttonTitle} />
			</CSSTransition>

			{isPrev && (
				<SlideArrow variant='left' clickHandler={() => handleClick('prev')} />
			)}

			{isNext && (
				<SlideArrow variant='right' clickHandler={() => handleClick('next')} />
			)}
		</div>
	)
}

export default Slider
