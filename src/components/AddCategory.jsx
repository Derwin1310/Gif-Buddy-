import { useState } from "react"

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
    <form onSubmit={onSubmit}>
      <input
        className="search-bar"
        type="text"
        placeholder="Search gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  )
}
