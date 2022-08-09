import { useState } from "react"
import magnifyingGlass from '/assets/magnifying-glass.svg'

export function AddCategory({ onNewCategory }) {

  const [inputValue, setInputValue] = useState('')

  const onInputChange = (e) => setInputValue(e.target.value)

  const onSubmit = (e) => {
    e.preventDefault()
    if(inputValue.trim().length <= 1) return;

    onNewCategory(inputValue.trim())
    setInputValue('')
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <input
        className="search-bar"
        type="text"
        placeholder="Search gifs"
        value={inputValue}
        onChange={onInputChange}
      />
      <button className="btn-search" type="submit">
        <img src={magnifyingGlass} alt="magnifying glass" />
      </button>
    </form>
  )
}
