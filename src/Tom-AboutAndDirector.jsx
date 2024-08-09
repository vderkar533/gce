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
        {/* First Card */}
        <div className="col-md-6">
          <div className="card mb-3" style={cardStyle}>
            <div className="row no-gutters">
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">About Alumni</h5>
                  <p className="card-text">
                    Aim of Alumni is to expand the association of Alumni for the excellence in the state-of-the-art technologies in engineering through Institute-Alumni Interaction.
                    The main objectives of GCOEC Alumni Office are:
                    To collect and update the database of alumni residing in India and abroad:
                    To inculcate the institute-alumni interactive culture.
                    To probe the training, R & D, and placement opportunities through alumni.
                    To facilitate alumni to strengthen the bond towards the betterment of the institute.
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

        {/* Second Card */}
        <div className="col-md-6">
          <div className="card mb-3" style={{ ...cardStyle, ...greyBackground }}>
            <div className="row no-gutters">
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Alumni Association</h5>
                  <p className="card-text">
                    To strengthen ties between the GCOEC and alumni and encourage them to participate in the various cultural, social and scientific activities.
                    To encourage alumni and prospective graduates to participate in the self-development and professional development programs set up by the alumni committee of GCOEC.
                    To guide the GCOEC in the process of developing and planning academic programs targeted at alumni.
                    To make follow-up studies of employed alumni in order to improve their conditions.
                    To serve the community.
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

        {/* Third Card */}
       

      </div>
    </div>
  );
}

export default AboutAndDirector;
