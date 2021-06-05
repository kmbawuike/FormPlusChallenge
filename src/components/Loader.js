import React from 'react'
import logo from '../assets/images/formplusLogo.png'

export default function Loader() {
  return (
    <div className="rotating-border rotating-border--black-white">
      <img src={logo} alt="formplus" width="50px" />
    </div>
  )
}
