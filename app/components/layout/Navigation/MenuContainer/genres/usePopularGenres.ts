import { useQuery } from 'react-query'

import { IMenuItem } from '@/components/layout/Navigation/MenuContainer/menu.interface'

import { getGenreUrl } from '@/config/url.config'

import { GenreService } from '@/services/genre.service'

export const usePopularGenres = () => {
	const queryData = useQuery(
		'popular genre menu',
		() => GenreService.getAll(),
		{
			select: ({ data }) =>
				data
					.filter((genre) => genre.icon)
					.map(
						(genre) =>
							({
								icon: genre.icon,
								link: getGenreUrl(genre.slug),
								title: genre.name
							} as IMenuItem)
					)
					.splice(0, 4)
		}
	)

	return queryData
}
