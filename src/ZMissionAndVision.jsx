import React from 'react';

const QMissionAndVision = () => {
  return (
    <div>
     
      {/* Jumbotron for the heading */}
      <div className="jumbotron jumbotron-fluid bg-dark text-white">
        <div className="container">
          <h1 className="display-4 text-center"></h1>
        </div>
      </div>

      {/* Main content */}
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-6">
            <div className="card shadow-lg rounded animate__animated animate__fadeInLeft" style={{ backgroundColor: '#dc3545', color: 'white' }}>
              <div className="card-body">
                <h5 className="card-title">Our Mission</h5>
                <p className="card-text">
                  We are committed to providing quality education, fostering research and innovation, and preparing students for successful careers in the dynamic field of Computer Science and Engineering.
                </p>
                <p className="card-text">
                  Our mission extends to nurturing a learning environment that promotes creativity, critical thinking, and ethical values.
                </p>
                <button type="button" class="btn btn-outline-black">Explore</button>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card shadow-lg rounded animate__animated animate__fadeInRight" style={{ backgroundColor: '#f8f9fa', color: '#343a40' }}>
              <div className="card-body">
                <h5 className="card-title">Our Vision</h5>
                <p className="card-text">
                  We envision being a leading department in Computer Science and Engineering, recognized for excellence in education, groundbreaking research, and impactful contributions to technological advancements in society.
                </p>
                 <button type="button" class="btn btn-outline-black">Explore</button>
                <p className="card-text">
      
                </p>
              </div>
            </div>
          </div>

          <div className="container my-5">
            <div className="row">
              <div className="col-md-6">
                <img src="vision-mission.jpeg" alt="Sample Photo" className="img-fluid" />
              </div>
              <div className="col-md-6">
                <p>
                  "Pioneering Innovation, Shaping Tomorrow"

                  At the heart of the Computer Science and Engineering department is a steadfast vision to be a trailblazer in the realm of technology and innovation. We envision a future where our department stands at the forefront of cutting-edge research, technological advancements, and transformative education. 
                </p>
                <div className="d-flex justify-content-center">
                  <button type="button" className="btn btn-outline-danger">
                    Explore
                  </button>
                </div>

              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default QMissionAndVision;
