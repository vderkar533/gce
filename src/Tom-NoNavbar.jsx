import React, { useState, useEffect } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavbarWithDropdown() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50; // Adjust the value based on when you want the background color to change
      if (isScrolled !== scrolling) {
        setScrolling(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolling]);

  return (
    <Navbar
      style={{
        backgroundColor: scrolling ? 'black' : 'transparent',
        borderBottom: '1px solid rgba(255,255,255,0.3)',
        color: 'white',
        fontWeight: 'bold',
        transition: 'background-color 0.3s ease',
      }}
      expand="lg"
      fixed="top"
      variant="dark"
    >
      <div className="container-fluid">
        <Navbar.Brand href="#">
          <img
            src="gcoe.png"
            width="50"
            height="30"
            className="d-inline-block align-top"
            alt="Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNavDropdown" />
        <Navbar.Collapse id="navbarNavDropdown">
          <Nav className="me-auto">
            <NavDropdown
              title="About Us"
              id="nav-dropdown-about"
              style={{ color: 'white', fontWeight: 'bold' }}
            >
              <NavDropdown.Item href="#">Academic Calendar</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              title="Admission"
              id="nav-dropdown-admission"
              style={{ color: 'white', fontWeight: 'bold' }}
            >
              <NavDropdown.Item href="#">Admission</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              title="Administration"
              id="nav-dropdown-administration"
              style={{ color: 'white', fontWeight: 'bold' }}
            >
              <NavDropdown.Item href="#">Administration</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              title="Academics"
              id="nav-dropdown-academics"
              style={{ color: 'white', fontWeight: 'bold' }}
            >
              <NavDropdown.Item href="#">Academics</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              title="Student Portal"
              id="nav-dropdown-student-portal"
              style={{ color: 'white', fontWeight: 'bold' }}
            >
              <NavDropdown.Item href="#">Student</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              title="Training and Placement"
              id="nav-dropdown-tp"
              style={{ color: 'white', fontWeight: 'bold' }}
            >
              <NavDropdown.Item href="#">T&P</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              title="Events & Achievements"
              id="nav-dropdown-events-achievements"
              style={{ color: 'white', fontWeight: 'bold' }}
            >
              <NavDropdown.Item href="#">Achievements</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              title="Alumni"
              id="nav-dropdown-alumni"
              style={{ color: 'white', fontWeight: 'bold' }}
            >
              <NavDropdown.Item href="#">
                Alumni Association Student Co-ordinators
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              title="Resources"
              id="nav-dropdown-resources"
              style={{ color: 'white', fontWeight: 'bold' }}
            >
              <NavDropdown.Item href="#">Resources</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              title="Hostel"
              id="nav-dropdown-hostel"
              style={{ color: 'white', fontWeight: 'bold' }}
            >
              <NavDropdown.Item href="#">Hostel</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default NavbarWithDropdown;
