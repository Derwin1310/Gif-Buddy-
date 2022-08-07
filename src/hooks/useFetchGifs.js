import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs"


export function useFetchGifs(category) {

  const [images, setImages] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const getNewGifs = async () => {
    const newGifs = await getGifs(category)
    setImages(newGifs)
    setIsLoading(false)
  }

  useEffect(() => { getNewGifs() }, [])

  return {
    images: images,
    isLoading
  }
}
