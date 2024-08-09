import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons'; // Import the home icon


function PandeNavTwo() {
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
              <a className="nav-link active" aria-current="page" href="https://homepage.vderkar533.repl.co/" style={{ color: 'white', fontWeight: 'bold' }}>

                {/* <FontAwesomeIcon icon={faHome} /> */}
                <img src="lo2.jpg" alt="Description of the image" style={{ width: '80px', height: '50px' }} />
              </a>
            </li>
            <li className="nav-item "
             >
              <a
                className="nav-link "
                href="https://cse-dept.insolventmayor.repl.co/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ color: 'white' , fontWeight: 'bold' }}
              >
               Home
              </a>
              
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
                  <a className="dropdown-item" href="https://cse-dept.insolventmayor.repl.co/">
                                        Academic Calendar
                  </a>
                 
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Time Table
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Department Roll list
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Topper List
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
                People
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Student 
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                   Faculty
                  </a>
                </li>

                <li>
                  <a className="dropdown-item" href="https://alumni.insolventmayor.repl.co/#">
                   Alumni
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                   Non-Teaching Staff
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
                Research
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Areas
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Technical Reports
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
                News & Events
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Department Newsletter
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    CSE GCOEC Mission
                  </a>
                </li>

                <li>
                  <a className="dropdown-item" href="https://academic-calender.insolventmayor.repl.co/">
                  Upcoming Events
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
                About CSE
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Infrastructure
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Laboratories
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                   Gallery
                  </a>
                </li>
                
              </ul>
            </li>
            <li className="nav-item ">
              <a
                className="nav-link "
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ color: 'white' ,fontWeight: 'bold'}}
              >
                Student login
              </a>
              
            </li>
          </ul>
          
        </div>
      </div>
    </nav>
  );
}

export default PandeNavTwo ;