import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function AboutAndDirector() {
  const cardStyle = {
    border: 'none', // Remove the border
  };

  const greyBackground = {
    backgroundColor: 'gray', // Set the background color to grey
  };

  const containerStyle = {
    marginTop: '50px', // Add top margin to the container
    marginBottom: '80px',
  };

  return (
    <div className="container" style={containerStyle}>
      <div className="row">
        <div className="col-md-6">
          <div className="card mb-3" style={cardStyle}>
            <div className="row no-gutters">
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">About Alumni</h5>
                  <p className="card-text">
                    As we journey through the halls of education, we build not just academic knowledge but lasting connections that extend beyond our time in the classrooms. Our alumni community is a testament to the enduring bonds forged during those formative years.

                    Celebrating Achievements
                    Our alumni, a diverse and accomplished group, have ventured into various fields, leaving an indelible mark on their professions. From groundbreaking innovations to leadership roles in renowned organizations, our alumni continue to inspire the ....

                    
                  </p>
                  <a href="#" className="btn btn-danger">Read More</a>
                </div>
              </div>
              <div className="col-md-4 d-flex align-items-center">
                 <img src="p2.jpeg" className="card-img" alt="Video Thumbnail" />
                 
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card mb-3" style={{ ...cardStyle, ...greyBackground }}>
            <div className="row no-gutters">
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Alumni Association</h5>
                  <p className="card-text">
                    Our Alumni Association is a vibrant and dynamic community dedicated to fostering lifelong connections among graduates of [Your Institution's Name]. As a proud member of this association, you become part of a network that spans across years and continents, united by shared experiences, common goals, and a commitment to the alma mater.

                    Stay Connected
                    Stay connected with former classmates, professors, and the evolving landscape of our alma mater. The Alumni Association serves as a hub for news, updates, and events, keeping you....
                  </p>
                  <a href="#" className="btn btn-danger">Read More</a>
                </div>
              </div>
              <div className="col-md-3 d-flex align-items-center">
               <img src="alumina.png" className="card-img" alt="Video Thumbnail" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutAndDirector;
