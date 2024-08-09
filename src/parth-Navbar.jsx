import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown, Carousel, Card } from 'react-bootstrap';
import Footerend from './parth-Footerend';
import AboutAndDirector from './parth-AboutAndDirector'; 
import FaqAndPhoto from  './parth-FaqAndPhoto';

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
      <Navbar
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
          <Navbar.Brand href="/cse-dept">
            <img
              src="lo2.jpg"
              width="50"
              height="30"
              className="d-inline-block align-top"
              alt="Logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarNavDropdown" />
          <Navbar.Collapse id="navbarNavDropdown">
            <Nav className="me-auto">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/cse-dept" style={{ color: 'white', fontWeight: 'bold' }}>

                {/* <FontAwesomeIcon icon={faHome} /> */}
                {/* <img src="lo2.jpg" alt="Description of the image" style={{ width: '80px', height: '50px' }} /> */}
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
                  <a className="dropdown-item" href="/non-teaching staff">
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
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>

      <Carousel>
        {/* Your Carousel items */}
        <Carousel.Item>
          <img className="d-block w-100" src="01.jpg" alt="First slide" />
          <Carousel.Caption>
            {/* <h3> Computer Science Department</h3> */}
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src="cs1.jpg" alt="First slide" />
          <Carousel.Caption>
            {/* <h3> Computer Science Department</h3> */}
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src="cs2.png" alt="First slide" />
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
            <img src="download.png" alt="Sample Photo" className="img-fluid" style={{ width: '60%' }} />
          </div>
          <div className="col-md-6">
            <p>
              Coding training holds significant value for individuals embarking on careers in diverse fields such as software development, web development, and data science. The acquisition of coding skills is pivotal in navigating the ever-evolving landscape of technology-driven industries. In the realm of software development, coding is the foundational language that brings applications and systems to life. It empowers developers to craft innovative solutions, streamline processes, and create software that addresses complex challenges.
            </p>
            <p>Web development, a field intricately linked with the digital age, relies heavily on coding expertise. Proficiency in languages like HTML, CSS, and JavaScript enables developers to build responsive and visually appealing websites. As online presence becomes increasingly critical for businesses and individuals alike, the demand for skilled web developers continues to surge.</p>
            <p>In the realm of data science, coding serves as the backbone for analyzing vast datasets and extracting meaningful insights. Python, R, and other programming languages are indispensable tools for data scientists, enabling them to manipulate data, build predictive models, and uncover patterns that drive informed decision-making.</p>
            <div className="d-flex justify-content-center">
              <button type="button" className="btn btn-outline-danger">
                Explore
              </button>
            </div>
          </div>
        </div>
      </div>
      <FaqAndPhoto/>

      <div className="container my-5">
        <div className="row">
          <div className="col-md-6">
            <img src="ASCES.jpeg" alt="Sample Photo" className="img-fluid" style={{ width: '80%' }} />
          </div>
          <div className="col-md-6">
            <h4>ACSES COMMITTE </h4>
            <p>
              The Association of Computer Science and Engineering Students (ACSES) is a pivotal committee within the computer science and engineering department, comprising enthusiastic and dedicated students committed to advancing academic and extracurricular activities. At its core, ACSES plays a central role in orchestrating the department's annual seminars and workshops, serving as a platform for knowledge dissemination and skill enhancement.
              
            </p>
            <p>One of the key responsibilities of the ACSES committee is the establishment of general criteria for the election of participants to fill various leadership roles within the committee. The head of the ACSES committee, a position of significant influence and responsibility, assumes the crucial task of defining these criteria. This involves carefully assessing the skills, passion, and dedication of potential candidates to ensure that the selected individuals align with the committee's objectives and contribute positively to its endeavors.</p>
            <p>The election process, guided by the criteria set by the committee head, aims to identify students who not only excel academically but also exhibit leadership qualities, organizational skills, and a genuine enthusiasm for promoting the department's goals. Through this meticulous selection process, ACSES ensures that its leadership team comprises individuals who are not only academically proficient but also possess the drive to facilitate meaningful educational events, fostering a vibrant learning environment within the computer science and engineering community.</p>
            <div className="d-flex justify-content-center">
              <button type="button" className="btn btn-outline-danger">
                Explore
              </button>
            </div>
            
          </div>
          
        </div>
      </div>
      

      <div className="container my-5">
        <div className="row">
          <div className="col-md-4">
            <Card>
              <Card.Body>
                <Card.Title className="text-center">Announcement</Card.Title>
                <Card.Img variant="top" src="c7.jpeg" alt="Card Image 1" />
                <Card.Text>
                  <ul className="list-group">
                    <li className="list-group-item"> Event Announcements: Information about upcoming events, conferences, workshops, or gatherings.</li>
                    {/* ... (your other list items) */}
                  </ul>
                </Card.Text>
                <div className="d-flex justify-content-center">
                  <button type="button" className="btn btn-outline-danger">
                    Explore
                  </button>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4">
            <Card>
              <Card.Body>
                <Card.Title className="text-center">Latest @ CSE</Card.Title>
                <Card.Img variant="top" src="c4.jpg" alt="Card Image 2" />
                <Card.Text className="text-center">
                  <ul className="list-group">
                    <li className="list-group-item"> Artificial Intelligence and Machine Learning: AI and ML continue to be dominant research areas, focusing on deep learning, reinforcement learning, natural language processing, and computer vision. Applications span healthcare, finance, autonomous systems, and more.</li>
                    {/* ... (your other list items) */}
                  </ul>
                </Card.Text>
               
                <div className="d-flex justify-content-center">
                  <button type="button" className="btn btn-outline-danger">
                    Explore
                  </button>
                </div>
                
              </Card.Body>
            </Card>
          </div>
          
          <div className="col-md-4">
            <Card>
              <Card.Body>
                 
                <Card.Title className="text-center">Talks</Card.Title>
                <Card.Img variant="top" src="c5.jpg" alt="Card Image 3" />
                <Card.Text>
                  <ul className="list-group">
                    <li className="list-group-item"> Guest Lectures or Guest Speaker Talks: Inviting professionals, experts, or accomplished individuals to speak on specific topics related to their field of expertise.</li>
                    {/* ... (your other list items) */}
                  </ul>
                </Card.Text>
                
                <div className="d-flex justify-content-center">
                  <button type="button" className="btn btn-outline-danger">
                    Explore
                  </button>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
       <Footerend />
    </div>
  );
};

export default ParthCustomNavbar;
