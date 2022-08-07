import { useFetchGifs } from '/src/hooks/useFetchGifs'
import { GifItem } from './GifItem'
import { Spinner } from '../helpers/spinners/Spinner'

export function GifGrid({ category }) {
	const { images, isLoading } = useFetchGifs(category)

	if (isLoading) return <Spinner />

	return (
		<>
			<h2 className='subtitle'>{category}</h2>
			<div className='card-grid'>
				{images.map(imgs => (
					<GifItem key={imgs.id} {...imgs} />
				))}
			</div>
		</>
	)
}
