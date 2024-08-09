
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaGraduationCap, FaCalendarAlt, FaFileAlt, FaUsers, FaFile, FaBook, FaChartBar, FaInfoCircle, FaFilePdf, FaCogs, FaBuilding, FaUniversity, FaMapMarkerAlt } from 'react-icons/fa';

import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
const noUnderlineStyle = {
  textDecoration: 'none',
};
function Vinayakfooterend() {
  return (
    <footer className="bg-black text-light my-8 py-5" style={{noUnderlineStyle}}>
      <div className="container">
        <div className="row">
          {/* College Info Compartment */}
          <div className="col-md-4">
            <div className="text-center">
              
              <h6>Government College of Engineering </h6>
              <p>Chandrapur</p>
            </div>
            <div className="text-left">
              <p className="mb-1">Ballarpur Bypass Road , Babupeth , Chandrapur</p>
              <p className="mb-1">Phone: 07172-227334</p>
              <p className="mb-1 text-white">Website: <a href="#" className="text-white">www.gcoec.ac.in</a></p>
               <p className="mb-1 text-white">Email: <a href="mailto:collegeemail@example.com" className="text-white">office.gcoecchandrapur@dtemaharashtra.gov.in</a></p>
              <div className="text-center mt-3">
                <a href="#" className="me-3  text-white"><FaFacebook /></a>
                <a href="#" className="me-3  text-white"><FaTwitter /></a>
                <a href="#" className="me-3  text-white"><FaInstagram /></a>
                <a href="#" className="me-3  text-white"><FaLinkedin /></a>
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
                <div className="footer_links" style={{ noUnderlineStyle }}>
                  <h5>Quick Links</h5>
                  <ul className="list-unstyled text-white" style={{ noUnderlineStyle, color: 'white' }}>
                    <li><FaGraduationCap /> <a href="#" style={{ color: 'white' }}>Alumni</a></li>
                    <li><FaCalendarAlt /> <a href="#" style={{ color: 'white' }}>Alumni Activities</a></li>
                    <li><FaFileAlt /> <a href="#" style={{ color: 'white' }}>Meeting Circular & MoM</a></li>
                    <li><FaUsers /> <a href="#" style={{ color: 'white' }}>Executive Committee</a></li>
                    <li><FaFile /> <a href="#" style={{ color: 'white' }}>NBA Documents</a></li>
                    <li><FaBook /> <a href="#" style={{ color: 'white' }}>AICTE EOA</a></li>
                    <li><FaChartBar /> <a href="#" style={{ color: 'white' }}>NIRF</a></li>
                  </ul>
                </div>
                <div className="footer_links">
                  <h5>Quick Links</h5>
                  <ul className="list-unstyled text-white" style={{ color: 'white' }}>
                    <li><FaInfoCircle /> <a href="#" style={{ color: 'white' }}>Info Broucher</a></li>
                    <li><FaFilePdf /> <a href="#" style={{ color: 'white' }}>Audit Report</a></li>
                    <li><FaCogs /> <a href="#" style={{ color: 'white' }}>TEQIP</a></li>
                    <li><FaBuilding /> <a href="#" style={{ color: 'white' }}>Facilities</a></li>
                    <li><FaUniversity /> <a href="#" style={{ color: 'white' }}>AICTE</a></li>
                    <li><FaUniversity /> <a href="#" style={{ color: 'white' }}>DTE</a></li>
                    <li><FaMapMarkerAlt /> <a href="#" style={{ color: 'white' }}>RO, Nagpur</a></li>
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

export default Vinayakfooterend;


