// import dynamic from 'next/dynamic'
import { FC } from 'react'
import { Controller, useForm } from 'react-hook-form'
// import { stripHtml } from 'string-strip-html'

import { IMovieEditInput } from '@/screens/admin/movie/movie-edit.interface'
import { useMovieEdit } from '@/screens/admin/movie/useMovieEdit'

import SkeletonLoader from '@/ui/SkeletonLoader'
import AdminNavigation from '@/ui/admin-navigation/AdminNavigation'
import Button from '@/ui/form-elements/Button'
import Field from '@/ui/form-elements/Field'
import SlugField from '@/ui/form-elements/SlugField/SlugField'
import formStyles from '@/ui/form-elements/admin-form.module.scss'
import Heading from '@/ui/heading/Heading'

import Meta from '@/utils/meta/Meta'
import { generateSlug } from '@/utils/string/generateSlug'

// const DynamicTextEditor = dynamic(
// 	() => import('@/ui/form-elements/TextEditor'),
// 	{
// 		ssr: false
// 	}
// )

const MovieEdit: FC = () => {
	const {
		handleSubmit,
		register,
		formState: { errors },
		setValue,
		getValues,
		control
	} = useForm<IMovieEditInput>({
		mode: 'onChange'
	})

	const { isLoading, onSubmit } = useMovieEdit(setValue)

	return (
		<Meta title='Edit movie'>
			<AdminNavigation />
			<Heading title='Edit movie' />
			<form onSubmit={handleSubmit(onSubmit)} className={formStyles.form}>
				{isLoading ? (
					<SkeletonLoader count={3} />
				) : (
					<>
						<div className={formStyles.fields}>
							<Field
								{...register('title', {
									required: 'Name is required!'
								})}
								placeholder='Title'
								error={errors.title}
								style={{ width: '31%' }}
							/>

							<div style={{ width: '31%' }}>
								<SlugField
									register={register}
									generate={() => {
										setValue('slug', generateSlug(getValues('title')))
									}}
									error={errors.slug}
								/>
							</div>

							{/*<Field*/}
							{/*	{...register('icon', {*/}
							{/*		required: 'Icon is required!'*/}
							{/*	})}*/}
							{/*	placeholder='Icon'*/}
							{/*	error={errors.name}*/}
							{/*	style={{ width: '31%' }}*/}
							{/*/>*/}
						</div>

						{/*<Controller*/}
						{/*	control={control}*/}
						{/*	name='description'*/}
						{/*	defaultValue=''*/}
						{/*	render={({*/}
						{/*		field: { value, onChange },*/}
						{/*		fieldState: { error }*/}
						{/*	}) => (*/}
						{/*		<DynamicTextEditor*/}
						{/*			onChange={onChange}*/}
						{/*			value={value}*/}
						{/*			error={error}*/}
						{/*			placeholder='Description'*/}
						{/*		/>*/}
						{/*	)}*/}
						{/*	rules={{*/}
						{/*		validate: {*/}
						{/*			required: (v) =>*/}
						{/*				(v && stripHtml(v).result.length > 0) ||*/}
						{/*				'Description is required!'*/}
						{/*		}*/}
						{/*	}}*/}
						{/*/>*/}

						<Button>Update</Button>
					</>
				)}
			</form>
		</Meta>
	)
}

export default MovieEdit
