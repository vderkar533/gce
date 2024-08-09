import React from 'react';

function ImageContainer() {
  const containerStyles = {
    width: '300px', // Set your desired width
    height: '200px', // Set your desired height
  };

  return (
    <div className="image-container" style={containerStyles}>
      <img src="001.jpg" alt="Your Image" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
    </div>
  );
}

export default ImageContainer;
