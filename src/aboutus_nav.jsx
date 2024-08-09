import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons'; // Import the home icon


function NavTwo() {
  const navTwoStyle = {
    position: 'absolute',
    zIndex: 2,
    width: '100%',
    top: '0px', // Fixed top value for initial positioning
    backgroundColor: 'red',
     padding: '0 0px',
    height : '60px',
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
        isFixed ? 'bg-body-black-tertiary sticky-top ' : 'bg-black'
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
              <a className="nav-link active" aria-current="page" href="#" style={{ color: 'white', fontWeight: 'bold' }}>

                <FontAwesomeIcon icon={faHome} />
              </a>
            </li>
            <li className="nav-item dropdown"
             >
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ color: 'white' , fontWeight: 'bold' }}
              >
                About Us
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    About Institute
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Principal's Desk
                  </a>
                </li>
                {/* <li className="dropdown-divider"></li> */}
                <li>
                  <a className="dropdown-item" href="">
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
                  <a className="dropdown-item" href="#">
                    Admission Process
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Courses Offered
                  </a>
                </li>

                <li>
                  <a className="dropdown-item" href="#">
                    Fees Structure
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
                Administration
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Committees
                  </a>
                  <ul>
                    <a className="dropdown-item" href="#">
                    Anti-Ragging Committe
                  </a>
                    <a className="dropdown-item" href="#">
                      Griveance Committe
                    </a>
                    <a className="dropdown-item" href="#">
                      Internal Complaint Committe
                    </a>
                    <a className="dropdown-item" href="#">
                      SC/ST/Women's/Girl's Committe
                    </a>
                  </ul>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Tenders
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Payments for Tenders/Testing
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Staff
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
                Academics
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                                        DEPARTMENTS
                  </a>
                  <ul>
                    <a className="dropdown-item" href="#">
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
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Centres
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
                Student's Portal
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Student Login
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                   Academic Verification / Security Deposit
                  </a>
                </li>

                <li>
                  <a className="dropdown-item" href="#">
                   Payment for Admission / Exam / CIIIT / Hostel
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                   SWAYAM NPTEL e-Courses
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                   Grieveance form
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
                  <a className="dropdown-item" href="#">
                    Upcoming trainings
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Upcoming On-Campus Recruitment
                  </a>
                </li>

                <li>
                  <a className="dropdown-item" href="#">
                    Our Results
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
                Events and Achievements
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    News
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Events
                  </a>
                </li>

                <li>
                  <a className="dropdown-item" href="#">
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
                  <a className="dropdown-item" href="#">
                    Alumni Association Student Co-ordinators
                  </a>
                </li>
                <li>
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
                Resources
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    NBA Documents
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    AICTE EOA
                  </a>
                </li>

                <li>
                  <a className="dropdown-item" href="#">
                   NIRF
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                   Info Broucher
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                   RTI
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                   Audit Report
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                   Mandatory Disclosure
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                   TEQIP
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                   Facilities
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                   AICTE
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                   DTE
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                   RO, Nagpur
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <form className="d-flex" role="search">
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
          </form>
        </div>
      </div>
    </nav>
  );
}

export default NavTwo ;