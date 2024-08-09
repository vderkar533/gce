import React, { useState } from 'react';


function TpoPage() {
    const carouselImages = [
        'tpo1.png', // Replace with the path to your image
        'tpo2.png', // Replace with the path to your image
      ];
      
      const [currentImage, setCurrentImage] = useState(0);
    
      const nextImage = () => {
        setCurrentImage((prevImage) => (prevImage + 1) % carouselImages.length);
      };
    
      const prevImage = () => {
        setCurrentImage((prevImage) => (prevImage - 1 + carouselImages.length) % carouselImages.length);
      };
    
      // Inline styles
      const carouselStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      };
    
      const imageStyle = {
        width: '80%', // Adjust as needed
        maxHeight: '500px', // Adjust as needed
        objectFit: 'cover',
      };
    
      const buttonStyle = {
        cursor: 'pointer',
        padding: '10px 20px',
        margin: '5px',
        fontSize: '16px',
      };
  // Inline CSS styles
  const pageStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  };

  const headingStyle = {
    textAlign: 'center',
    margin: '20px 0',
  };

  const statsStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    width: '100%',
    margin: '20px 0',
  };

  const statCardStyle = {
    padding: '10px',
    borderRadius: '5px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    width: '20%',
    textAlign: 'center',
  };

  const logoGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '10px',
    width: '80%',
    margin: '20px 0',
  };

  const logoStyle = {
    width: '100%',
    height: 'auto',
  };

  // Dummy data for logos and stats
  const logos = ['logo1.png', 'logo2.jpg', 'logo3.jpg', 'logo4.jpg'];
  const stats = [
    { title: 'Companies Visited', value: '120+' },
    { title: 'Students Placed', value: '300+' },
    { title: 'Highest Package', value: '40 LPA' },
    { title: 'Average Package', value: '10 LPA' },
  ];

  return (
    <div style={pageStyle}>
      <h1 style={headingStyle}>Training and Placement Office</h1>
      <div style={statsStyle}>
        {stats.map((stat) => (
          <div key={stat.title} style={statCardStyle}>
            <h2>{stat.value}</h2>
            <p>{stat.title}</p>
          </div>
        ))}
      </div>
      <h2 style={headingStyle}>Our Recruiters</h2>
      <div style={logoGridStyle}>
        {logos.map((logo, index) => (
          <img key={index} src={logo} alt="Company logo" style={logoStyle} />
        ))}
      </div>
      <div style={carouselStyle}>
        <img src={carouselImages[currentImage]} alt="Carousel" style={imageStyle} />
        <button onClick={prevImage} style={buttonStyle}>Prev</button>
        <button onClick={nextImage} style={buttonStyle}>Next</button>
      </div>
    </div>
  );
}

export default TpoPage;
