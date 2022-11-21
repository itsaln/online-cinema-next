import { useQuery } from 'react-query'

import { IOption } from '@/ui/select/select.interface'

import { ActorService } from '@/services/actor.service'

import { toastError } from '@/utils/toast-error'

export const useAdminActors = () => {
	const queryData = useQuery('List of actor', () => ActorService.getAll(), {
		select: ({ data }) =>
			data.map(
				(genre): IOption => ({
					label: genre.name,
					value: genre._id
				})
			),
		onError: (error) => {
			toastError(error, 'Actor list')
		}
	})

	return queryData
}
