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

/* 
    const wave1 = document.getElementById('wave1');
    const wave2 = document.getElementById('wave2');
    const wave3 = document.getElementById('wave3');
    const wave4 = document.getElementById('wave4');
    
    wave1.src = wave1_after;
    wave2.src = wave2_after;
    wave3.src = wave3_after;
    wave4.src = wave4_after;

    wave1.scr = waveInitial;
    wave2.scr = wave2Initial;
    wave3.scr = wave3Initial;
    wave4.scr = wave4Initial;
    
    */
