import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

function YNavbarWithDropdown() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src="lo2.jpg" alt="Description of the image" style={{ width: '80px', height: '50px' }} />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a className="nav-link" href="https://cse-dept.insolventmayor.repl.co/">
                Home
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Academics
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">
                  Academic Calendar
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">
                  Time-Table
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">
                  Department Roll-list
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">
                  Topper-list
                </a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                People
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">
                  Student
                </a>
                 <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="https://faculty.insolventmayor.repl.co/">
                  Faculty
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="https://alumni.insolventmayor.repl.co/#">
                  Alumni
                </a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Research
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">
                  Areas
                </a>
                 <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">
                  Technical Reports
                </a>


              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                News & Events
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">
                  Department Newsletter
                </a>
                 <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">
                  CSE GCOEC Mission
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="https://academic-calender.insolventmayor.repl.co/">
                  Upcoming Events
                </a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                About CSE
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">
                  Infrastructure
                </a>
                 <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">
                  Laborataries
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">
                  Gallery
                </a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Student login
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default YNavbarWithDropdown;
