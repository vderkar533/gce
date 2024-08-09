import React from 'react';
import { Link } from 'react-router-dom';
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons'; // Import the home icon


function NavTwo() {
  const navTwoStyle = {
    position: 'absolute',
    zIndex: 2,
    width: '100%',
    top: '140px', // Fixed top value for initial positioning
    backgroundColor: 'red',
     padding: '0 0px',
  };




  // Use state to determine whether to apply fixed or absolute positioning
  const [isFixed, setIsFixed] = React.useState(false);

  const fixedNavTwoStyle = {
    position: 'fixed',
    top: '0', // Fixed top value when scrolling
    width: '100%', // Make it full-width
    backgroundColor: 'black', // Set background color to black when sticky
    color: 'red',
  };


  // Handle scroll event to toggle between fixed and absolute positioning
  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 180) {
        setIsFixed(true); // Apply fixed positioning when scrolling down
      } else {
        setIsFixed(false); // Apply absolute positioning when at the top
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const dropdownItemStyle = {
    backgroundColor: 'transparent',
    border: 'none',
    color: 'white',
  };



  
  return (
    <nav
      className={`navbar navbar-expand-lg ${
        isFixed ? 'bg-body-black-tertiary sticky-top ' : 'bg-transparent'
      }`}
      style={isFixed ? fixedNavTwoStyle : navTwoStyle }


    >
      <div className="container-fluid" style={{ width: '100%' }}>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/" style={{ color: 'white', fontWeight: 'bold' }}>

                <FontAwesomeIcon icon={faHome} />
              </a>
            </li>
            <li className="nav-item dropdown"
             >
              <a
                className="nav-link dropdown-toggle"
                href="/aboutuspage"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ color: 'white' , fontWeight: 'bold' }}
              >
                About Us
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="/aboutus">
                    About Institute
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/about_principle">
                    Principal's Desk
                  </a>
                </li>
                {/* <li className="dropdown-divider"></li> */}
                <li>
                  <a className="dropdown-item" href="/VisionMissionComponent">
                    Vision and Mission
                  </a>
                </li>
                <li>
                  {/* <a className="dropdown-item" href="#">
                    Who's who
                  </a> */}
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="adm.jsx"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ color: 'white' ,fontWeight: 'bold'}}
              >
                Admission
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="/admission">
                    Admission Process
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/course">
                    Courses Offered
                  </a>
                </li>

                {/* <li>
                  <a className="dropdown-item" href="/fees">
                    Fees Structure
                  </a>
                </li> */}
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ color: 'white' ,fontWeight: 'bold'}}
              >
                Administration
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="/administration">
                    Administration details
                  </a>
                  {/* <ul>
                    <a className="dropdown-item" href="https://administration.anonymousokay.repl.co/">
                    Anti-Ragging Committe
                  </a>
                    <a className="dropdown-item" href="https://administration.anonymousokay.repl.co/">
                      Griveance Committe
                    </a>
                    <a className="dropdown-item" href="https://administration.anonymousokay.repl.co/">
                      Internal Complaint Committe
                    </a>
                    <a className="dropdown-item" href="https://administration.anonymousokay.repl.co/">
                      SC/ST/Women's/Girl's Committe
                    </a>
                  </ul> */}
                </li>
                {/* <li>
                  <a className="dropdown-item" href="https://administration.anonymousokay.repl.co/">
                    Tenders
                  </a>
                </li> */}
                <li>
                  <a className="dropdown-item" href="https://docs.google.com/forms/d/e/1FAIpQLScqxzor8yoGoEG6qM24oCqdmuY-rvqkTvOe6eLYbboE0IY0Kg/viewform">
                   Grieveance form
                  </a>
                </li>
                
                {/* <li>
                  <a className="dropdown-item" href="https://administration.anonymousokay.repl.co/">
                    Staff
                  </a>
                </li> */}
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ color: 'white' ,fontWeight: 'bold'}}
              >
                Academics
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                                        DEPARTMENTS
                  </a>
                  <ul>
                    <a className="dropdown-item" href="/cse-dept">
                    Computer science and engineering
                  </a>
                    <a className="dropdown-item" href="#">
                      Civil engineering
                    </a>
                    
                    <a className="dropdown-item" href="#">
                      Mechanical engineering
                    </a>
                    <a className="dropdown-item" href="#">
                      Electrical engineering
                    </a>
                    <a className="dropdown-item" href="#">
                      Electronics and tele-communication engineering
                    </a>
                    <a className="dropdown-item" href="#">
                      Instrumentation engineering
                    </a>
                  </ul>
                  <li>
                    <br />
                  <a className="dropdown-item" href="https://onlinecourses.nptel.ac.in/">
                   SWAYAM NPTEL e-Courses
                  </a>
                </li>
                </li>
                {/* <li>
                  <a className="dropdown-item" href="#">
                    Centres
                  </a>
                </li> */}
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ color: 'white' ,fontWeight: 'bold'}}
              >
                Payments
              </a>
              <ul className="dropdown-menu">
                
                {/* <li>
                  <a className="dropdown-item" href="#">
                   Academic Verification / Security Deposit
                  </a>
                </li> */}

                <li>
                  <a className="dropdown-item" href="https://www.onlinesbi.sbi/sbicollect/icollecthome.htm?corpID=2976360">
                   Payment for Admission / Exam / CIIIT / Hostel
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="https://eazypay.icicibank.com/eazypayLink?P1=QgBSGQ03E9jZBrZgASNtLQ=">
                    Payments for Tenders/Testing
                  </a>
                </li>
                
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ color: 'white' ,fontWeight: 'bold'}}
              >
                Training and Placement
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="/TPO">
                    TPO Office
                  </a>
                </li>
                {/* <li>
                  <a className="dropdown-item" href="#">
                    Upcoming On-Campus Recruitment
                  </a>
                </li>
               
                <li>
                  <a className="dropdown-item" href="#">
                    Our Results
                  </a>
                </li> */}
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ color: 'white',fontWeight: 'bold' }}
              >
                Events and Achievements
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="/news & events">
                    News and Events
                  </a>
                </li>
                {/* <li>
                  <a className="dropdown-item" href="#">
                    Events
                  </a>
                </li> */}
                
                <li>
                  <a className="dropdown-item" href="/techno-utsav">
                   Technotsav
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                   Abhirang
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ color: 'white',fontWeight: 'bold' }}
              >
                Alumni
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="https://drive.google.com/file/d/1CQvJYb71wDwF6mlieke32FtFRVke4zfK/view">
                    Alumni section
                  </a>
                </li>
                {/* <li>
                  <a className="dropdown-item" href="#">
                    Alumni Activities
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Meeting Circular & MoM
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Executive Committee
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Alumni Association
                  </a>
                </li> */}
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ color: 'white' ,fontWeight: 'bold'}}
              >
                Resources
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="https://www.gcoec.ac.in/gcoec/PDF/NBA/GCOEC%20NBA%20ME%20and%20IE%2011-11-2022-12-25-26.pdf">
                    NBA Documents
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="https://www.gcoec.ac.in/gcoec/PDF/EOA-Report-2022-23.PDF">
                    AICTE EOA
                  </a>
                </li>
               
                <li>
                  <a className="dropdown-item" href="https://www.nirfindia.org/2023/Ranking.html">
                   NIRF
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                   Info Broucher
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="https://rtionline.gov.in/">
                   RTI
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="https://www.gcoec.ac.in/gcoec/PDF/2022/Audit-Report-2021.PDF">
                   Audit Report
                  </a>
                </li>
                {/* <li>
                  <a className="dropdown-item" href="#">
                   Mandatory Disclosure
                  </a>
                </li> */}
                {/* <li>
                  <a className="dropdown-item" href="#">
                   TEQIP
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                   Facilities
                  </a>
                </li> */}
                <li>
                  <a className="dropdown-item" href="https://www.aicte-india.org/">
                   AICTE
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="https://dte.maharashtra.gov.in/">
                   DTE
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="https://rdtenagpur.org.in/">
                   RO, Nagpur
                  </a>
                </li>
              </ul>
            </li>
            

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="adm.jsx"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ color: 'white' ,fontWeight: 'bold'}}
              >
                Hostel
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="/hostel">
                    hostel page
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="adm.jsx"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ color: 'white' ,fontWeight: 'bold'}}
              >
                Log In
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="/hostel">
                    Admin
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/hostel">
                    Student
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/hostel">
                    Professor
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          {/* <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search here"
              aria-label="GO"
            />
              <button
                className="btn btn-outline-success"
                type="submit"
                style={{ ...dropdownItemStyle, color: 'white', fontWeight: 'bold' }}
              >
              GO     
            </button>
          </form> */}
        </div>
      </div>
    </nav>
  );
}

export default NavTwo ;