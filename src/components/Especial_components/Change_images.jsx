import React, { useState } from "react";

function Appn() {
  const [imageSrc, setImageSrc] = useState("image1.jpg");

  const handleClick = () => {
    if (imageSrc === "image1.jpg") {
      setImageSrc("image2.jpg");
    } else {
      setImageSrc("image1.jpg");
    }
  };

  return (
    <div>
      <img src={imageSrc} alt="Current Image" />
      <br />
      <button onClick={handleClick}>Change Image</button>
    </div>
  );
}

export default Appn;