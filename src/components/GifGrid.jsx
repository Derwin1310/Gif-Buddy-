import { useFetchGifs } from '/src/hooks/useFetchGifs'
import { Spinner } from '../helpers/spinners/Spinner'

export function GifGrid({ category }) {
	const { images, isLoading } = useFetchGifs(category)

	if (isLoading) return <Spinner />

	return (
		<>
			<h2 className='subtitle'>{category}</h2>
			<div className='card-grid'>
				{images.map(({ id, url, title }) => (
					<img key={id} className="card" src={url} alt={title} />
				))}
			</div>
		</>
	)
}
