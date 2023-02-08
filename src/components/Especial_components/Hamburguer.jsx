import React from 'react'
import Squash from 'hamburger-react'

const Hamburguer = () => {
  var navbar = document.getElementById("NavBar");
  return (
    <Squash onToggle={toggled => {
      if (toggled) {
         navbar.classList.add("closeNavbar")
      } else {
         navbar.classList.remove("closeNavbar")
      }
    }} />
  )
}

export default Hamburguer;