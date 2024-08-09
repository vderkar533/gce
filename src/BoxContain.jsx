import React from 'react';
import Box from './box';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap-icons/font/bootstrap-icons.css';

const Appw = () => {
  const containerStyle = {
    backgroundColor: 'grey',
    color: 'white',
    minHeight: '10vh',
    position: 'relative', // Set the container to absolute position
    zindex : '5',
    top: '-30px',
  };

  return (
    <div className="container text-center" style={containerStyle}>
      <div className="row">
        <div className="col-md-3 col-sm-6">
          <Box
            title="RESEARCH"
            icon="bi bi-journal-text"
            description="Mapping the innovations & collaborations"
            targetId="homeSection"
          />
        </div>
        <div className="col-md-3 col-sm-6">
          <Box
            title="STARTUPS"
            icon="bi bi-rocket-takeoff"
            description="Success stories of researchers & entrepreneurs"
            targetId="aboutSection"
            backgroundColor="grey"
          />
        </div>
        <div className="col-md-3 col-sm-6">
          <Box
            title="NEWS"
            icon="bi bi-newspaper"
            description="Panorama of events"
            targetId="teamSection"
          />
        </div>
        <div className="col-md-3 col-sm-6">
          <Box
            title="CAMPUS LIFE"
            icon="bi bi-people-fill"
            description="Explore beyond the classroom"
            targetId="contactSection"
          />
        </div>
      </div>
    </div>
  );
};

export default Appw;
