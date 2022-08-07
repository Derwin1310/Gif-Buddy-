export async function getGifs(categories) {
  const URL = `https://api.giphy.com/v1/gifs/search?api_key=gfo6W2Fewnze32l1JeUsmc4oNwuQvMJz&q=${categories}&limit=9`
  const resp = await fetch(URL);
  const { data } = await resp.json();

  const gifs = data.map(({ id, title, images: { downsized_medium: { url } } }) => ({
    id,
    title,
    url
  }))

  return gifs
}