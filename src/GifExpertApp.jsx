import { useState } from "react"
import { ButtonTheme } from "./components/ButtonTheme"
import { GifGrid } from "./components/GifGrid"
import { AddCategory } from "/src/components/AddCategory"


export function GifExpertApp() {

  const [categories, setCategories] = useState([])

  const onAddCategory = (newCategory) => {
    const getNamesCleared = categories.map(cat => cat.toLowerCase())

    if(getNamesCleared.includes(newCategory.toLowerCase())) return;

    setCategories([newCategory, ...getNamesCleared])
  }

  return (
    <main className="theme theme--animation" id="theme">
      <h1 className="title">GIF BUDDY</h1>
      <ButtonTheme />

      <AddCategory onNewCategory={onAddCategory} />

      {categories.map(item => <GifGrid key={item}  category={item}/>)}
    </main>
  )
}
