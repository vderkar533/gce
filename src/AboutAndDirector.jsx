import React from 'react';

function AboutAndDirector() {
  const cardStyle = {
    border: 'none', // Remove the border
  };

  const greyBackground = {
    backgroundColor: '#f08080', // Set the background color to grey
  };

  const containerStyle = {
    marginTop: '50px', // Add top margin to the container
    marginBottom: '80px',
  };

  const redButtonStyle = {
    backgroundColor: 'red', // Set the background color of the button to red
    border: '2px solid transparent', // Make the border transparent
  };

  const whiteButtonStyle = {
    backgroundColor: 'white', // Set the background color of the button to white
    color: 'black', // Set the text color to black for better visibility on white background
    border: '2px solid transparent', // Make the border transparent
  };

  return (
    <div className="container" style={containerStyle}>
      <div className="row">
        <div className="col-md-6">
          <div className="card mb-3" style={cardStyle}>
            <div className="row no-gutters">
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">About GCOEC</h5>
                  <p className="card-text">
                    Government College of Engineering Chandrapur is established in 1996 This is the only Government Institute under Gondwana University, Gadchiroli. This Government institute is completely funded by Government of Maharashtra. The Institute is under Director of Technical Education, M.S., Mumbai and is administered through its Regional office at ....
                  </p>
                  <a href="https://en.wikipedia.org/wiki/Government_College_of_Engineering,_Chandrapur" className="btn btn-primary" style={redButtonStyle}>Read More</a>
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
                  <h5 className="card-title">Principal's Corner</h5>
                  <p className="card-text">
                    Teaching faculty and non teaching staff of the Institute feel privileged to be a part of dedicated team for imparting quality technical education. They strive to upgrade and update their technical expertise with fervor. The Institute constantly endeavors to develop ethical and professional work culture among the students....
                  </p>
                  <a href="/about_principle" className="btn btn-primary" style={whiteButtonStyle}>Read More</a>
                </div>
              </div>
              <div className="col-md-4 d-flex align-items-center">
                <img src="principal23.jpg" className="card-img" alt="img" style={{ width: '90%' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutAndDirector;
