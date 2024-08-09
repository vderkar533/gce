import React from 'react';
// Add these lines at the top of your main JavaScript file
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
 // Import Bootstrap CSS
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
              <a className="nav-link active" aria-current="page" href="/cse-dept" style={{ color: 'white', fontWeight: 'bold' }}>

                {/* <FontAwesomeIcon icon={faHome} /> */}
                <img src="lo2.jpg" alt="Description of the image" style={{ width: '80px', height: '50px' }} />
              </a>
            </li>
            <li className="nav-item "
             >
              <a
                className="nav-link "
                href="/"
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
                  <a className="dropdown-item" href="https://www.gcoec.ac.in/gcoec/PDF/cse/Academic%20Calender%202023-24.pdf">
                                        Academic Calendar
                  </a>
                 
                </li>
                <li>
                  <a className="dropdown-item" href="https://www.gcoec.ac.in/gcoec/PDF/cse/TimeTable2023-24.pdf">
                    Time Table
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="https://drive.google.com/file/d/1TgSPMigpM_LI2IL19qYjlToge_EebSlB/view">
                    Department Roll list
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
                Faculty
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="/faculty">
                    Teaching  
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                   Non-Teaching
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
                  <a className="dropdown-item" href="https://drive.google.com/file/d/1Q785QdCwxI8GJLvj8PLXyK4GwdkCzt2t/view">
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
                News
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Department Newsletter
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/mission_cse">
                    CSE GCOEC Mission
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
                  <a className="dropdown-item" href="/Infrastructure">
                    Infrastructure
                  </a>
                </li>
                
                <li>
                  <a className="dropdown-item" href="/gallery">
                   Gallery
                  </a>
                </li>
                
              </ul>
            </li>
           
          </ul>
          
        </div>
      </div>
    </nav>
  );
}

export default PandeNavTwo ;