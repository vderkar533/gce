import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown, Carousel, Card } from 'react-bootstrap';
import Footerend from './Chuck-Footerend';
import AboutAndDirector from './Chuck-AboutAndDirector'; 
import FaqAndPhoto from  './Chuck-FaqAndPhoto';
import ParthFAndP from './Chuck-FandP';

const ParthCustomNavbar = () => {
  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {/* <Navbar
        style={{
          backgroundColor: scrolling ? 'black' : 'transparent',
          borderBottom: '1px solid rgba(255,255,255,0.3)',
           color: 'white', fontWeight: 'bold' ,
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

            <NavDropdown title="About Us" id="nav-dropdown" style={{ color: 'white', fontWeight: 'bold' }}>
                <NavDropdown.Item href="#" >Academic Calendar</NavDropdown.Item>
              </NavDropdown>


              <NavDropdown title="Admission" id="nav-dropdown" style={{ color: 'white', fontWeight: 'bold' }}>
                <NavDropdown.Item href="#" >Admission</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Administration" id="nav-dropdown" style={{ color: 'white', fontWeight: 'bold' }}>
                <NavDropdown.Item href="#" >Administration</NavDropdown.Item>
              </NavDropdown>


              <NavDropdown title="Academics" id="nav-dropdown" style={{ color: 'white', fontWeight: 'bold' }}>
                <NavDropdown.Item href="#">Academics</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Student Portal" id="nav-dropdown" style={{ color: 'white', fontWeight: 'bold' }}>
                <NavDropdown.Item href="#" >Student</NavDropdown.Item>
              </NavDropdown>
               

              <NavDropdown title="Training and Placement" id="nav-dropdown" style={{ color: 'white', fontWeight: 'bold' }}>
                <NavDropdown.Item href="#">T&P</NavDropdown.Item>
              </NavDropdown>


              <NavDropdown title="Events & Achievements" id="nav-dropdown" style={{ color: 'white', fontWeight: 'bold' }}>
                <NavDropdown.Item href="#">Acheivements</NavDropdown.Item>
              </NavDropdown>


              <NavDropdown title="Alumni" id="nav-dropdown" style={{ color: 'white', fontWeight: 'bold' }}>
                <NavDropdown.Item href="#">Alumni Association Student Co-ordinators</NavDropdown.Item>
              </NavDropdown>


              <NavDropdown title="Resources" id="nav-dropdown" style={{ color: 'white', fontWeight: 'bold' }}>
                <NavDropdown.Item href="#" >Resources</NavDropdown.Item>
              </NavDropdown>


              <NavDropdown title="Hostel" id="nav-dropdown" style={{ color: 'white', fontWeight: 'bold' }}>
                <NavDropdown.Item href="#" >Hostel</NavDropdown.Item>
              </NavDropdown>
              
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar> */}

      <Carousel>
        {/* Your Carousel items */}
        <Carousel.Item>
          <img className="d-block w-100" src="boy.jpeg" alt="First slide" />
          <Carousel.Caption>
            {/* <h3> Computer Science Department</h3> */}
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src="girl.jpeg" alt="First slide" />
          <Carousel.Caption>
            {/* <h3> Computer Science Department</h3> */}
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>

        
      </Carousel>
      <AboutAndDirector />
      <div className="container my-5">
  <div className="row">
    <div className="col-md-6">
    <img src="girl.jpeg" alt="Sample Photo" className="img-fluid" style={{ width: '30%' ,transform: 'rotate(-90deg)'}} />
    </div>
    <div className="col-md-6">
      <p>
      <mark>Boy's Hostel</mark> 
      </p>
      <p>Welcome to our Boys Hostel, a vibrant and comfortable living space designed to cater to the needs of young men pursuing academic excellence and personal growth. Nestled in a safe and convenient location, our hostel provides a home away from home for students, fostering a supportive environment that encourages camaraderie and academic focus.


Our boys hostel offers state-of-the-art facilities to ensure a seamless living experience. Spacious and well-furnished rooms provide a comfortable retreat for residents, equipped with study desks, ample storage, and high-speed internet connectivity. Common areas are designed for recreation and socialization, promoting a healthy balance between study and leisure.</p>
      
      <div className="d-flex justify-content-center">
        <button type="button" className="btn btn-outline-danger">
          Explore
        </button>
      </div>
    </div>
  </div>

  {/* Table */}
  <div className="row mt-4">
    <div className="col-md-12">
      <table className="table">
        <thead>
          <tr>
            <th>Features</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Total Area	</td>
            <td>3132 Sq.m</td>
          </tr>
          <tr>
            <td>No. of Rooms	</td>
            <td>88</td>
          </tr>
          <tr>
            <td>Intake</td>
            <td>176</td>
          </tr>
          <tr>
            <td>Facilities</td>
            <td>Mess, Common Room, Badminton Court, Gym, Guest room, RO -water purifier, News paper, Magazine, 24 hr Security, Sweepers</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>


    
      <FaqAndPhoto/>

      <div className="container my-5">
        <div className="row">
          <div className="col-md-6">
            <img src="boy.jpeg" alt="Sample Photo" className="img-fluid" style={{ width: '30%' ,transform: 'rotate(-90deg)'}} />
          </div>
          <div className="col-md-6">
            <h4> <mark>Girl's Hostel</mark> </h4>
            <p>
              
              
            </p>
            <p>Welcome to our Girls Hostel, a haven of comfort and camaraderie designed to cater to the unique needs of young women pursuing their academic journey. Our hostel provides a secure and nurturing environment where residents can thrive academically, forge lasting friendships, and create cherished memories.

Facilities:
Our Girls Hostel offers modern and well-equipped facilities to ensure a pleasant and conducive living environment. Spacious and thoughtfully furnished rooms provide a comfortable living space, complete with study areas, ample storage, and high-speed internet connectivity. Common areas are designed for relaxation, fostering a sense of community among residents.</p>
            
            <div className="d-flex justify-content-center">
              <button type="button" className="btn btn-outline-danger">
                Explore
              </button>
            </div>
            
          </div>
          
        </div>
        <div className="row mt-4">
    <div className="col-md-12">
      <table className="table">
        <thead>
          <tr>
            <th>Features</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Total Area	</td>
            <td>2936 Sq.m</td>
          </tr>
          <tr>
            <td>No. of Rooms	</td>
            <td>80</td>
          </tr>
          <tr>
            <td>Intake</td>
            <td>156</td>
          </tr>
          <tr>
            <td>Facilities</td>
            <td>Mess, Common Room, Badminton Court, Gym, Guest room, RO -water purifier, News paper, Magazine, 24 hr Security, Sweepers</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <ParthFAndP/>

  <div className="row mt-4">
  <div className="col-md-12">
    <table className="table table-bordered">
      <thead>
        <tr style={{ backgroundColor: 'red', color: 'black' }}>
          <th><mark>Committee Members</mark></th>
          
          
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Sr.No</td>
          <td>Name of Faculty</td>
          <td>Responsibility</td>
        </tr>
        <tr>
          <td>1</td>
          <td>Dr. D. K. Maghade</td>
          <td>Rector</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Prof. L. P. Nikhade</td>
          <td>Warden (Boy's Hostel)</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Prof. Kranti Bhokare</td>
          <td>Warden (Girl's Hostel)</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Mr. Prem Banjara</td>
          <td>Assistant</td>
        </tr>
        <tr>
          <td>5</td>
          <td>Smt. Kanchan Khobragade</td>
          <td>Assistant</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>    



<div className="row mt-4">
  <div className="col-md-12">
    <table className="table table-bordered">
      <thead>
        <tr style={{ backgroundColor: 'red', color: 'black' }}>
          <th><mark>News</mark></th>
          <th><mark>Explore</mark></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td> Direct second year girls hostel provisional Allotment merit list  2023-24</td>
          <td>
            {/* Button in the first row */}
            <a href="https://www.gcoec.ac.in/gcoec/PDF/Direct%20second%20year%20girls%20hostel%20provisional%20Allotment%20merit%20list%202023-24.pdf " className="btn btn-danger">Visit</a>
          </td>
        </tr>
        <tr>
          <td> Direct second year boys hostel provisional Allotment merit list 2023-24</td>
          <td>
            {/* Button in the second row */}
            <a href="https://www.gcoec.ac.in/gcoec/PDF/DocScanner-25-09-2023-36.pdf" className="btn btn-danger">Visit</a>
          </td>
        </tr>
        <tr>
          <td>Girl's Hostel First year allotment round 2,3 list</td>
          <td>
            {/* Button in the third row */}
            <a href="https://www.gcoec.ac.in/gcoec/PDF/Girls%20hostel%20first%20year%20allotment%20round%202nd,%203rd%202023-24.pdf" className="btn btn-danger">Visit</a>
          </td>
        </tr>
        <tr>
          <td>Boys hostel round 2 allotment list</td>
          <td>
            {/* Button in the fourth row */}
            <a href="https://www.gcoec.ac.in/gcoec/PDF/New-Document-23.pdf" className="btn btn-danger">Visit</a>
          </td>
        </tr>
        <tr>
          <td>Boys hostel round 3 allotment list</td>
          <td>
            {/* Button in the fifth row */}
            <a href="https://www.gcoec.ac.in/gcoec/PDF/New%20Document(1).pdf" className="btn btn-danger">Visit</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>



      </div>
     
      
      

      
       {/* <Footerend /> */}
    </div>
  );
};

export default ParthCustomNavbar;
