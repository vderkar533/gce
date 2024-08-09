import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

function PandeFooterend() {
  return (
    <footer className="bg-dark text-light my-8 py-5">
      <div className="container">
        <div className="row">
          {/* College Info Compartment */}
          <div className="col-md-4">
            <div className="text-center">
              <img src="lo2.jpg" alt="College Logo" width="120" height="60" />
              <h6 style={{ paddingTop: '20px' }}>DEPARTMENT OF COMPUTER SCIENCE AND ENGINEERING</h6>
              <p>GCOEC</p>
            </div>
            <div className="text-left">
              <p className="mb-1">Ballarpur Bypass Road , Babupeth , Chandrapur</p>
              <p className="mb-1">Phone: 07172-227334</p>
              <p className="mb-1">Website: <a href="#">www.gcoec.ac.in</a></p>
              <p className="mb-1">Email: <a href="mailto:collegeemail@example.com">office.gcoec@cse.gov.in</a></p>
              <div className="text-center mt-3">
                <a href="#" className="me-3"><FaFacebook /></a>
                <a href="#" className="me-3"><FaTwitter /></a>
                <a href="#" className="me-3"><FaInstagram /></a>
                <a href="#"><FaLinkedin /></a>
              </div>
            </div>
          </div>

          {/* Vertical Dotted Line */}
          <div className="col-md-1">
            <div className="dotted-line"></div>
          </div>

          {/* 2nd Compartment */}
          <div className="col-md-3">
            <div className="mb-4">
              <div className="row">
                <div className="col">
                  <h5>Quick Links </h5>
                  <ul className="list-unstyled">
                    <li><a href="#">Innovations</a></li>
                    <li><a href="#">Hackathons</a></li>
                    <li><a href="#">CodeUnnati</a></li>
                    <li><a href="#">Codevita</a></li>

                  </ul>
                </div>
                <div className="col">
                  <h5>Quick Links </h5>
                  <ul className="list-unstyled">
                    <li><a href="#">Sports</a></li>
                    <li><a href="#">clubs</a></li>
                    <li><a href="#">ASCES</a></li>
                    <li><a href="#">Curriculum</a></li>

                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* 3rd Compartment */}
          <div className="col-md-4">
            <div className="mb-4" style={{ position: 'relative' , marginTop: '80px',paddingLeft: '80px'}}>
              <i className="bi bi-sun" style={{ fontSize: '40px', position: 'absolute', left: 30, top: '10%', transform: 'translateY(-50%)' }}></i>
              <div>
                <h5>Chandrapur</h5>
                <div className="d-flex">
                  <p className="me-3">Day: {new Date().toLocaleDateString(undefined, { weekday: 'long' })}</p>
                  <p>Time: {new Date().toLocaleTimeString()}</p>
                </div>
                <div className="d-flex">
                  <p className="me-3">Temperature: 25°C</p>
                  <p>Climate: Sunny</p>
                </div>
                <div className="d-flex">
                  <p className="me-3">Humidity: 50%</p>
                  <p>Wind: 10 mph</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default PandeFooterend;
