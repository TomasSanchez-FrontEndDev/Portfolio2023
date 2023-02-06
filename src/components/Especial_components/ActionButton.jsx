import React, { useState } from 'react';

function LinkChanger() {
  const [link, setLink] = useState('#');

  function handleClick() {
    setLink('#AboutMe');
  }

  return (
    <div>
      <a href={link}>Up</a>
      <button onClick={handleClick}>Change</button>
    </div>
  );
}

export default LinkChanger;
