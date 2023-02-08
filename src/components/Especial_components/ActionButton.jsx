import React, { useState } from 'react';

function LinkChanger() {
  const [link, setLink] = useState('#Hero');

  function handleClick() {
    if(link==="#Hero"){
      setLink('#Footer');

    }else{
      setLink('#Hero')
    }
  }
  return (
    <div>
      <a href={link} onClick={handleClick}>
        {link==="#Hero"?"Down⬇":"Up↑"}
      </a>
    </div>
  );
}

export default LinkChanger;
