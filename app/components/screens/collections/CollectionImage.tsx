import Image from 'next/image'
import { FC } from 'react'

import { ICollection } from '@/screens/collections/collections.interface'

const CollectionImage: FC<{ collection: ICollection }> = ({
	collection: { image, title }
}) => {
	return <Image src={image} alt={title} layout='fill' draggable={false} />
}

export default CollectionImage
