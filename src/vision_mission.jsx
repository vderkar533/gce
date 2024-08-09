import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faBullseye } from '@fortawesome/free-solid-svg-icons';

function VisionMissionComponent() {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column', // Display sections vertically
    alignItems: 'center', // Center horizontally
    justifyContent: 'center', // Center vertically
    textAlign: 'center', // Center text within the container
    margin: '90px', // Add margin around the container
    border: '1px solid #ccc', // Add a border for better visualization
    position: 'relative', // Position relative for absolute positioning of background image
   
  };

  const sectionStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // Center horizontally
    textAlign: 'center', // Center text within the section
    padding: '80px', // Add space inside the section
  };

  const headingIconContainerStyle = {
    display: 'flex',
    alignItems: 'center', // Center horizontally within the section
    marginBottom: '10px', // Add margin below the heading and icon
  };

  const iconStyle = {
    marginRight: '10px', // Add space between the icon and heading
  };

  const headingStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    color: 'white',
  };

  const backgroundStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -1,
    filter: 'blur(10px)', // Adjust the blur amount as needed
  };

  return (
    <div style={containerStyle}>
      {/* Background Image */}
      <div style={backgroundStyle}>
        {/* Add your background image URL here */}
        <img src="bg.jpg" alt="Background" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>

      {/* Vision Section */}
      <div style={sectionStyle}>
        <div style={headingIconContainerStyle}>
          <FontAwesomeIcon icon={faEye} size="3x" color="blue" style={iconStyle} />
          <h2 style={headingStyle}>Vision</h2>
        </div>
        <p style={{ color: 'white', fontWeight: 'bold' }}>
          To excel in technical education having a focus on innovative design, entrepreneurship development, enhancing the employability rate, and developing an environmentally friendly society.
        </p>
      </div>

      {/* Mission Section */}
      <div style={sectionStyle}>
        <div style={headingIconContainerStyle}>
          <FontAwesomeIcon icon={faBullseye} size="3x" color="green" style={iconStyle} />
          <h2 style={headingStyle}>Mission</h2>
        </div>
        <p style={{ color: 'white', fontWeight: 'bold' }}>
          To educate and train undergraduate and research students for practicing professionalism, an ethical approach, leadership, and entrepreneurship ability.
        </p>
      </div>
    </div>
  );
}

export default VisionMissionComponent;
