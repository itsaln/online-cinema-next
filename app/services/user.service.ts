import { IUser } from '@/shared/types/user.types'

import { getUsersUrl } from '@/configs/api.config'

import axios from '../api/interceptors'

export const UserService = {
	async getAll(searchTerm?: string) {
		return axios.get<IUser[]>(getUsersUrl(''), {
			params: searchTerm ? { search: searchTerm } : {}
		})
	},

	async deleteUser(_id: string) {
		return axios.delete<string>(getUsersUrl(`/${_id}`))
	}
}
