import { useRouter } from 'next/router'

import { useAuth } from '@/hooks/useAuth'
import { useEffect } from 'react'

export const useAuthRedirect = () => {
	const { user } = useAuth()
	const { query, push } = useRouter()
	const redirect = String(query.redirect) || '/'

	useEffect(() => {
		if (user) push(redirect)
	}, [user, redirect, push])
}
