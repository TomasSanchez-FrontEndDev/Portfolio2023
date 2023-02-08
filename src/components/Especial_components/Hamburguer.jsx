import React from 'react'
import { Squash as Hamburger } from 'hamburger-react'


var navbar = document.getElementById("NavBar");

const Hamburguer = () => {
  return (
    <Hamburger onToggle={toggled => {
      if (toggled) {
         navbar.classList.add("closeNavbar")
      } else {
         navbar.classList.remove("closeNavbar")
      }
    }} />
  )
}

export default Hamburguer;