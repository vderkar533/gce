import React from 'react';
// Example of importing Bootstrap CSS in index.js or App.js
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Import Bootstrap JS bundle (includes Popper)


function Carousel() {
  // const carouselStyle = {
  //   width: '600px', // Set your desired width
  //   height: '100px', // Set your desired height
  //   zIndex: 0,
  //   position: 'relative',
    
  // };

  const captionStyle = {
    position: 'absolute',
    top: '75%', // Adjust the vertical position as needed
    left: '50%', // Adjust the horizontal position as needed
    transform: 'translate(-50%, -50%)', // Center the caption
    color: 'white', // Set text color
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', // Add text shadow for better visibility
  };
  const captionStyle1 = {
    position: 'absolute',
    top: '65%', // Adjust the vertical position as needed
    left: '50%', // Adjust the horizontal position as needed
    transform: 'translate(-50%, -50%)', // Center the caption
    color: 'white', // Set text color
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', // Add text shadow for better visibility
  };
  const captionStyle2 = {
    position: 'absolute',
    top: '80%', // Adjust the vertical position as needed
    left: '50%', // Adjust the horizontal position as needed
    transform: 'translate(-50%, -50%)', // Center the caption
    color: 'white', // Set text color
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', // Add text shadow for better visibility
  };
  const linkStyle = {
    fontFamily: "'Parisienne', cursive", // Apply the desired font family
    fontSize: '60px', // Set the desired font size
    color: 'white',
  };
  const linkStyle1 = {
    fontFamily: "'Parisienne', cursive", // Apply the desired font family
    fontSize: '50px', // Set the desired font size
    color: 'white',
  };
  const linkStyle2 = {
    fontFamily: "'Parisienne', cursive", // Apply the desired font family
    fontSize: '40px', // Set the desired font size
    color: 'white',
  };
  const linkStyle10 = {
    fontFamily: "'Parisienne', cursive", // Apply the desired font family
    fontSize: '50px', // Set the desired font size
    color: 'white',
    textAlign: 'center', 
  };

  
  return (
    <div id="carouselExampleCaptions" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{ zIndex: 0 , position: 'relative'}}  >
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="carousel img 1.jpeg" className="d-block w-100" alt="Placeholder 1" />
          <div className="carousel-caption d-none d-md-block" style={captionStyle} >
            <h5 style = {linkStyle}>WELCOME TO GCOEC</h5>
            <p style = {linkStyle}></p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="carousel img 2.jpeg" className="d-block w-100" alt="Placeholder 2" />
          <div className="carousel-caption d-none d-md-block" style={captionStyle1}>
            <h5 style = {linkStyle10}>FOLLOW YOUR DREAMS...</h5>
            <p style = {linkStyle1}></p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="lib.jpeg" className="d-block w-100" alt="Placeholder 3" />
          <div className="carousel-caption d-none d-md-block" style={captionStyle2}>
            <h5 style = {linkStyle2}>Source for knowledge...</h5>
            <p style = {linkStyle2}></p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="carousel img 3.jpeg" className="d-block w-100" alt="Placeholder 4" />
          <div className="carousel-caption d-none d-md-block" style={captionStyle2}>
            <h5 style = {linkStyle2}>Excellence through Research...</h5>
            <p style = {linkStyle2}></p>
          </div>
        </div>
        

        {/* <div className="carousel-item" style={{overflow: 'hidden'}}>
  <video controls className="d-block w-100" style={{transform: 'rotate(270deg)', marginLeft: '0%', marginTop: '-50%',width : '50%'}}>
    <source src="PM.mp4" type="video/mp4"/>
  </video>
</div> */}

      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousel;
