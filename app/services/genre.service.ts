import { IGenre } from '@/shared/types/movie.types'

import { getGenresUrl } from '@/configs/api.config'

import axios, { axiosClassic } from '../api/interceptors'

export const GenreService = {
	async getAll(searchTerm?: string) {
		return axiosClassic.get<IGenre[]>(getGenresUrl(''), {
			params: searchTerm
				? {
						searchTerm
				  }
				: {}
		})
	},

	async create() {
		return axios.post<string>(getGenresUrl(''))
	},

	async delete(_id: string) {
		return axios.delete<string>(getGenresUrl(`/${_id}`))
	}
}
