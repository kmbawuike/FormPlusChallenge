import React from 'react'

export default function Select({legend, options, name, onChange}) {
  return (
    <fieldset>
      <legend>{legend}</legend>
      <select name={name} id="" onChange={onChange}>
        {options && options.map((elem, key)=> <option key={key} value={elem}>{elem}</option>)}
      </select>
    </fieldset>
  )
}
