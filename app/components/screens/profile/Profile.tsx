import { FC } from 'react'
import { useForm } from 'react-hook-form'

import AuthFields from '@/screens/auth/AuthFields'
import { IProfileInput } from '@/screens/profile/profile.interface'
import { useProfile } from '@/screens/profile/useProfile'

import SkeletonLoader from '@/ui/SkeletonLoader'
import Button from '@/ui/form-elements/Button'
import Heading from '@/ui/heading/Heading'

import Meta from '@/utils/meta/Meta'

import styles from './Profile.module.scss'

const Profile: FC = () => {
	const { handleSubmit, register, formState, setValue } =
		useForm<IProfileInput>({
			mode: 'onChange'
		})

	const { isLoading, onSubmit } = useProfile(setValue)

	return (
		<Meta title='Auth'>
			<Heading title='Profile' className='mb-6' />
			<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
				{isLoading ? (
					<SkeletonLoader count={2} />
				) : (
					<AuthFields register={register} formState={formState} />
				)}

				<Button>Update</Button>
			</form>
		</Meta>
	)
}

export default Profile
