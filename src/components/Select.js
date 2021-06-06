import React from 'react'

export default function Select({legend, options, name, onChange, value}) {
  return (
    <fieldset>
      <legend>{legend}</legend>
      <select name={name} id="" onChange={onChange} value={value}>
        {options && options.map((elem, key)=> <option key={key} value={elem}>{elem}</option>)}
      </select>
    </fieldset>
  )
}
