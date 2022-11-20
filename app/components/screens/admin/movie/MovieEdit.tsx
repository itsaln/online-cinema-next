import { FC } from 'react'
import { Controller, useForm } from 'react-hook-form'

import { IMovieEditInput } from '@/screens/admin/movie/movie-edit.interface'
import { useMovieEdit } from '@/screens/admin/movie/useMovieEdit'

import SkeletonLoader from '@/ui/SkeletonLoader'
import AdminNavigation from '@/ui/admin-navigation/AdminNavigation'
import Button from '@/ui/form-elements/Button'
import Field from '@/ui/form-elements/Field'
import SlugField from '@/ui/form-elements/SlugField/SlugField'
import UploadField from '@/ui/form-elements/UploadField/UploadField'
import formStyles from '@/ui/form-elements/admin-form.module.scss'
import Heading from '@/ui/heading/Heading'

import Meta from '@/utils/meta/Meta'
import { generateSlug } from '@/utils/string/generateSlug'

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
									required: 'Title is required!'
								})}
								placeholder='Title'
								error={errors.title}
							/>

							<SlugField
								register={register}
								generate={() => {
									setValue('slug', generateSlug(getValues('title')))
								}}
								error={errors.slug}
							/>

							<Field
								{...register('parameters.country', {
									required: 'Country is required!'
								})}
								placeholder='Country'
								error={errors.parameters?.country}
								style={{ width: '31%' }}
							/>

							<Field
								{...register('parameters.duration', {
									required: 'Duration is required!'
								})}
								placeholder='Duration'
								error={errors.parameters?.duration}
								style={{ width: '31%' }}
							/>

							<Field
								{...register('parameters.year', {
									required: 'Year is required!'
								})}
								placeholder='Year'
								error={errors.parameters?.year}
								style={{ width: '31%' }}
							/>

							{/* React Select */}

							<Controller
								control={control}
								name='poster'
								defaultValue=''
								render={({
									field: { value, onChange },
									fieldState: { error }
								}) => (
									<UploadField
										onChange={onChange}
										value={value}
										error={error}
										folder='movies'
										placeholder='Poster'
									/>
								)}
								rules={{
									required: 'Poster is required!'
								}}
							/>

							<Controller
								control={control}
								name='bigPoster'
								defaultValue=''
								render={({
									field: { value, onChange },
									fieldState: { error }
								}) => (
									<UploadField
										onChange={onChange}
										value={value}
										error={error}
										folder='movies'
										placeholder='Big poster'
									/>
								)}
								rules={{
									required: 'Big poster is required!'
								}}
							/>

							<Controller
								control={control}
								name='videoUrl'
								defaultValue=''
								render={({
									field: { value, onChange },
									fieldState: { error }
								}) => (
									<UploadField
										onChange={onChange}
										value={value}
										error={error}
										folder='movies'
										placeholder='Video'
										style={{ marginTop: -25 }}
										isNoImage
									/>
								)}
								rules={{
									required: 'Video is required!'
								}}
							/>
						</div>

						<Button>Update</Button>
					</>
				)}
			</form>
		</Meta>
	)
}

export default MovieEdit
