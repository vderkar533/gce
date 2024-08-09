
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
const noUnderlineStyle = {
  textDecoration: 'none',
};
function Footerend() {
  return (
    <footer className="bg-black text-light my-0 py-5" style={{ margin: '0' }}>
      <div className="container">
        <div className="row">
          {/* College Info Compartment */}
          <div className="col-md-4">
            <div className="text-center">
              <img src="logo.png" alt="College Logo" width="60" height="60" />
              <br />
              <br />
              <h6 style= { {color: "white "}}>Government College of Engineering </h6>
              <p>Chandrapur</p>
              <br />
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
                <div className="col text-white" style={{noUnderlineStyle}}>
                  <h5>Quick Links </h5>
                  <ul className="list-unstyled text-white" style={{noUnderlineStyle}}>
                    <li><a href="/alumini">Alumni</a></li>
                    {/* <li><a href="/alumini"> Alumni Activities</a></li>
                    <li><a href="/alumini"> Meeting Circular & MoM</a></li>
                    <li><a href="#">Executive Committee</a></li> */}
                    <li><a href="https://www.gcoec.ac.in/gcoec/PDF/NBA/GCOEC%20NBA%20ME%20and%20IE%2011-11-2022-12-25-26.pdf"> NBA Documents</a></li>
                    <li><a href="https://www.gcoec.ac.in/gcoec/PDF/EOA%20REPORT%202023-24%20R.PDF"> AICTE EOA</a></li>
                    <li><a href="https://www.gcoec.ac.in/gcoec/PDF/2022/NIRF-Data-2023.pdf">NIRF</a></li>
                    <li><a href="https://dte.maharashtra.gov.in/">DTE</a></li>
                    <li><a href="https://rdtenagpur.org.in/">RO, Nagpur</a></li>
                  </ul>
                </div>
                <div className="col text-white">
                  <h5>Quick Links </h5>
                  <ul className="list-unstyled text-white">
                    <li><a href="#"> Info Broucher</a></li>
                    <li><a href="https://www.gcoec.ac.in/gcoec/PDF/2022/Audit-Report-2021.PDF"> Audit Report</a></li>
                    <li><a href="https://www.gcoec.ac.in/gcoec/PDF/Procurement/Impact_analysis_PROCUREMENT_UNDER_TEQIP.pdf">TEQIP</a></li>
                    <li><a href="#">  Facilities</a></li>
                    <li><a href="https://www.aicte-india.org/"> AICTE</a></li>
                    
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
                <h5 style= { {color: "white "}}>Chandrapur</h5>
                <br />
                <div className="d-flex">
                  <p className="me-3">Day: {new Date().toLocaleDateString(undefined, { weekday: 'long' })}</p>
                  <p>Time: {new Date().toLocaleTimeString()}</p>
                </div>
                <div className="d-flex">
                  <p className="me-3">Temperature: 34°C</p>
                  <p>Climate: Sunny</p>
                </div>
                <div className="d-flex">
                  <p className="me-3">Humidity: 23%</p>
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

export default Footerend;


