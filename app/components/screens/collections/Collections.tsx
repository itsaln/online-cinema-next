import { FC } from 'react'

import CollectionItem from '@/screens/collections/CollectionItem'
import { ICollection } from '@/screens/collections/collections.interface'

import Description from '@/ui/heading/Description'
import Heading from '@/ui/heading/Heading'

import Meta from '@/utils/meta/Meta'

import styles from './Collections.module.scss'

const title = 'Discovery'
const description = 'In this section you will find all genres on our site'

const Collections: FC<{ collections: ICollection[] }> = ({ collections }) => {
	return (
		<Meta title={title} description={description}>
			<Heading title={title} className={styles.heading} />
			<Description text={description} className={styles.description} />

			<section className={styles.collections}>
				{collections.map((collection) => (
					<CollectionItem key={collection._id} collection={collection} />
				))}
			</section>
		</Meta>
	)
}

export default Collections
