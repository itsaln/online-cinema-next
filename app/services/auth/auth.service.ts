import { axiosClassic } from 'api/interceptors'
import Cookies from 'js-cookie'

import { removeTokensStorage, saveToStorage } from '@/services/auth/auth.helper'

import { getAUthUrl } from '@/configs/api.config'

import { getContentType } from '../../api/api.helpers'

import { IAuthResponse } from '@/store/user/user.interface'

export const AuthService = {
	async register(email: string, password: string) {
		const response = await axiosClassic.post<IAuthResponse>(
			getAUthUrl('/register'),
			{ email, password }
		)

		if (response.data.accessToken) saveToStorage(response.data)

		return response
	},

	async login(email: string, password: string) {
		const response = await axiosClassic.post<IAuthResponse>(
			getAUthUrl('/login'),
			{ email, password }
		)

		if (response.data.accessToken) saveToStorage(response.data)

		return response
	},

	async logout() {
		removeTokensStorage()
		localStorage.removeItem('user')
	},

	async getNewTokens() {
		const refreshToken = Cookies.get('refreshToken')
		const response = await axiosClassic.post<IAuthResponse>(
			getAUthUrl('/login/access-token'),
			{ refreshToken },
			{ headers: getContentType() }
		)

		if (response.data.accessToken) saveToStorage(response.data)

		return response
	}
}
