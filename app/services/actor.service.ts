import { IActorEditInput } from '@/screens/admin/actor/actor-edit.interface'

import { IActor, IGenre } from '@/shared/types/movie.types'

import { getActorsUrl, getGenresUrl } from '@/configs/api.config'

import axios, { axiosClassic } from '../api/interceptors'

export const ActorService = {
	async getAll(searchTerm?: string) {
		return axiosClassic.get<IActor[]>(getActorsUrl(''), {
			params: searchTerm
				? {
						searchTerm
				  }
				: {}
		})
	},

	async getOne(_id: string) {
		return axios.get<IActorEditInput>(getActorsUrl(`/${_id}`))
	},

	async getOneBySlug(slug: string) {
		return axiosClassic.get<IActor>(getActorsUrl(`/by-slug/${slug}`))
	},

	async create() {
		return axios.post<string>(getActorsUrl(''))
	},

	async update(_id: string, data: IActorEditInput) {
		return axios.put<string>(getActorsUrl(`/${_id}`), data)
	},

	async delete(_id: string) {
		return axios.delete<string>(getActorsUrl(`/${_id}`))
	}
}
