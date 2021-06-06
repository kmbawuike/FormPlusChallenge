import React from "react"
import { ReactComponent as SearchIcon } from "../assets/icons/search.svg"

export default function Input({
  id,
  type = "text",
  placeholder,
  onChange,
  onClick
}) {
  return (
    <section className="custom-input" data-testid="custom-input">
      <input placeholder={placeholder} id={id} type={type} onChange={onChange}/>
      <SearchIcon className="icon cursor" onClick={onClick}/>
    </section>
  )
}
