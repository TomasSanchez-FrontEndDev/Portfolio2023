import React, { useEffect, useState } from 'react';
import Squash from 'hamburger-react';
import wave1_after from '../../img/Wave1_After.png';
import waveInitial from '../../img/wave.png';
import wave2_after from '../../img/Wave2_After.png';
import wave2Initial from '../../img/Wave2.png';
import wave3_after from '../../img/Wave3_After.png';
import wave3Initial from '../../img/Wave 3.png';
import wave4_after from '../../img/FooterWave_After.png';
import wave4Initial from '../../img/Wave 4.png';

const Hamburguer = () => {
  /*var navbar = document.getElementById('NavBar');*/
  const [navbar, setNavbar] = useState(null);
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