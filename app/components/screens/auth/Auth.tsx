import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { IAuthInput } from '@/screens/auth/auth.interface'
import { useAuthRedirect } from '@/screens/auth/useAuthRedirect'

import Heading from '@/ui/heading/Heading'

import { useAuth } from '@/hooks/useAuth'

import Meta from '@/utils/meta/Meta'

import styles from './Auth.module.scss'
import Button from '@/ui/form-elements/Button'

const Auth: FC = () => {
	useAuthRedirect()

	const { isLoading } = useAuth()
	const [type, setType] = useState<'login' | 'register'>('login')
	const {
		register: registerInput,
		handleSubmit,
		formState,
		reset
	} = useForm<IAuthInput>({
		mode: 'onChange'
	})

	const login = (data: any) => {}
	const register = (data: any) => {}

	const onSubmit: SubmitHandler<IAuthInput> = (data) => {
		if (type === 'login') login(data)
		else if (type === 'register') register(data)

		reset()
	}

	return (
		<Meta title='Auth'>
			<section className={styles.wrapper}>
				<form onSubmit={handleSubmit(onSubmit)}>
					<Heading title='Auth' className='mb-6' />

					{/* fields */}

					<div className={styles.buttons}>
						<Button type='submit' onClick={() => setType('login')} disabled={isLoading}>Login</Button>
						<Button type='submit' onClick={() => setType('register')} disabled={isLoading}>Register</Button>
					</div>
				</form>
			</section>
		</Meta>
	)
}

export default Auth
