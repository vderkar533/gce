import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Innovation() {
  const cardTextStyle = {
    textAlign: 'justify', // Justify the text
    color: 'black',       // Red text color
  };

  const grayCardTextStyle = {
    textAlign: 'justify', // Justify the text
    color: 'black',       // Gray text color
  };

  const redHeadingStyle = {
    color: 'red',         // Red text color for the heading
    textAlign: 'center',  // Center align the heading
  };

  return (
    <div className="container mt-5"> 
      <h5 style={redHeadingStyle}>Laboratory Architecture</h5>

      <div className="row mt-3">
        <div className="col-sm">
          <div className="card">
            <img src="l1.png" className="card-img-top" alt="Card 1" />
            <div className="card-body">
              <p className="card-text" style={cardTextStyle}>
                A network lab is a dedicated space equipped with the necessary infrastructure and tools for the practical study, experimentation, and analysis of computer networks. It serves as a hands-on environment where students, researchers.
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm">
          <div className="card">
            <img src="l2.png" className="card-img-top" alt="Card 2" />
            <div className="card-body">
              <p className="card-text" style={grayCardTextStyle}>
                Welcome to the Database Management System (DBMS) Lab! This laboratory course is designed to provide you with hands-on experience in working with databases, a crucial aspect of information management in various industries.
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm">
          <div className="card">
            <img src="l3.png" className="card-img-top" alt="Card 3" />
            <div className="card-body">
              <p className="card-text" style={grayCardTextStyle}>
                Welcome to the Java Programming Lab! This laboratory course is designed to provide you with practical experience in one of the most versatile and widely-used programming languages—Java Throughout the lab sessions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Innovation;
