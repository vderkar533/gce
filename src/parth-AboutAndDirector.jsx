import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function ParthAboutAndDirector() {
  const cardStyle = {
    border: 'none', // Remove the border
  };

  const greyBackground = {
    backgroundColor: 'gray', // Set the background color to grey
  };

  const containerStyle = {
    marginTop: '80px', // Add top margin to the container
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
                  <h5 className="card-title">About CSE</h5>
                  <p className="card-text">
                    Embark on a journey of innovation and discovery at the Computer Science Department of GCOEC. Committed to excellence in education, research, and technological advancement, our department is a dynamic hub where aspiring minds thrive.
                    Career Pathways

                    Whether you aspire to be a software engineer, data scientist, cybersecurity expert, or pursue...
                  </p>
                  <a href="#" className="btn btn-danger">Read More</a>
                </div>
              </div>
              <div className="col-md-4 d-flex align-items-center">

                 <video controls width="100%">
                  <source src="clg.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card mb-3" style={{ ...cardStyle, ...greyBackground }}>
            <div className="row no-gutters">
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">HOD's Corner</h5>
                  <p className="card-text">
                    Teaching faculty and non teaching staff of the Department feel privileged to be a part of dedicated team for imparting quality technical education. They strive to upgrade and update their technical expertise with fervor. The Department constantly endeavors to develop ethical and professional work culture among the students....
                  </p>
                  <a href="#" className="btn btn-danger">Read More</a>
                </div>
              </div>
              <div className="col-md-4 d-flex align-items-center">
                <img src="cc.jpg" className="card-img" alt="Video Thumbnail" style={{ width: '80%' }} />

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ParthAboutAndDirector;
