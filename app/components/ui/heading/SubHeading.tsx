import { FC } from 'react'

const SubHeading: FC<{ title: string }> = ({ title }) => {
	return <h2 className='text-white text-lg 2xl:text-xl mb-5 font-semibold'>{title}</h2>
}

export default SubHeading
