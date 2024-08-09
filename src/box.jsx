import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap-icons/font/bootstrap-icons.css';

const Box = ({ icon, title, description, targetId, iconSize, boxPadding }) => {
  const handleClick = () => {
    // Scroll to the target element on click
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const iconStyle = {
    fontSize: iconSize || '70px', // Default size is 70px, you can change this as needed
  };

  const boxStyle = {
    padding: boxPadding || '40px', // Default padding is 10px, you can change this as needed
  };

  return (
    <div className="col">
      <div className="box" onClick={handleClick} style={boxStyle}>
        <h5>{title}</h5>
        <i className={`bi ${icon}`} style={iconStyle}></i>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Box;
