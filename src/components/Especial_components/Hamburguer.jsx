import React, { useEffect, useState } from 'react';
import Squash from 'hamburger-react';

const Hamburguer = () => {
  /*var navbar = document.getElementById('NavBar');*/
  const [navbar,setNavbar] = useState(null);
  useEffect(() => {
    const newNavbar = document.getElementById('NavBar');
    setNavbar(newNavbar);
  }, []);
  return (
    <Squash
      onToggle={(toggled) => {
        console.log(toggled);
        if (toggled) {
          navbar.classList.add('closeNavbar');
          
        } else {
          navbar.classList.remove('closeNavbar');
        }
      }}
    />
  );
};

export default Hamburguer;
