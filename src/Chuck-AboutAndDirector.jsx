import React from 'react';
// In your parth-AboutAndDirector.jsx file
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
                  <h5 className="card-title">About Hostel Facility</h5>
                  <p className="card-text">
                  Both Boys and Girls hostel are located in residential zone of the college campus. Hostels are well surrounded by greenery. Hostel admissions are made strictly based on merit and reservation rules as per government norms. Admission progress is as per CAP round admission of Engineering admissions. Rooms are allotted to students as per their choice by giving priority to higher merit students first. During admissions students are made aware of hostel rules and regulations.
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
                  <h5 className="card-title">Admission Rules</h5>
                  <p className="card-text">
  <ul>
    <li>Student should fill the proper application for hostel admission.</li>
    <li>At the time of hostel admission, the student should submit the college admission receipt.</li>
    <li> First-year students should submit their application form on the date of admission itself.</li>
    <li>Students are admitted to the hostel on a merit basis and as per government rules.</li>
    <li>Hostel admission is applicable only for one academic year.</li>
    <li>Once admitted to the hostel, the student should occupy the room within 15 days of admission, failing which his admission will be canceled, and the seat will be allotted to a waitlisted candidate. </li>
    <li>First-year students should report to the hostel on the prescribed date at the time of admission.</li>
  </ul>
</p>

                  <a href="#" className="btn btn-danger">Read More</a>
                </div>
              </div>
              <div className="col-md-4 d-flex align-items-center">
                <img src="rul.1.jpg" className="card-img" alt="Video Thumbnail" style={{ width: '80%' }} />

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ParthAboutAndDirector;
