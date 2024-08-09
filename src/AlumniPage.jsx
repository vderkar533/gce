import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, Container, Row, Col, Card, Button } from 'react-bootstrap';
import AboutAndDirector from './poAboutAndDirector'; 
const AlumniPage = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="asal.jpg"  // Replace with your image URL
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Welcome to Our Alumni Community</h3>
            <p>Stay connected, share memories, and celebrate achievements.</p>
          </Carousel.Caption>
        </Carousel.Item>
        {/* Add more Carousel.Items as needed */}
      </Carousel>
       <AboutAndDirector/>

      <div className="container my-5">
        <div className="row">
          <div className="col-md-6">
            <img src="asap (2).jpg" alt="Sample Photo" className="img-fluid" />
          </div>
          <div className="col-md-6">
            <p>
              As we reflect on the enduring legacy of our institution, the achievements and contributions of our esteemed alumni stand as a testament to the impact of education. The following statistics provide a glimpse into the diverse and impressive journeys our graduates have undertaken:

              Geographic Spread
              Our alumni community spans the globe, with graduates making their mark in various corners of the world. From bustling metropolises to serene landscapes, the reach of our alumni network continues to grow, fostering connections across borders.
            </p>
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
          <div className="col-md-6">
            <img src="list.png" alt="Sample Photo" className="img-fluid" />
          </div>
          <div className="col-md-6">
            <p>
              Our Alumni List is a comprehensive directory of distinguished graduates from [Your Institution's Name]. This platform serves as a valuable resource for reconnecting with former classmates, expanding professional networks, and celebrating the accomplishments of our esteemed alumni community.

              Accessing the Alumni List
              To access the Alumni List, current members of the alumni community can log in to the dedicated alumni portal on our website. 
            </p>
            <div className="d-flex justify-content-center">
              <button type="button" className="btn btn-outline-danger">
                Explore
              </button>
            </div>
          </div>
        </div>
      </div>

      <Container className="my-5">
        <h2 className="text-center mb-4">Featured Alumni</h2>
        <Row>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="fat.jpeg" alt="Alumni" />
              <Card.Body>
                <Card.Title></Card.Title>
                <Card.Text>
                  <br />
                  Er.Jai chaudhari 
                  A student of cse 2k22 has qualified the test and gained admission in one of the best university for higher studies.
                </Card.Text>
                <Button variant="danger">View Profile</Button>
              </Card.Body>
            </Card>
          </Col>
          {/* Add more Col components for additional featured alumni */}
        </Row>
      </Container>
    
      {/* Additional content or components can be added here */}
    </div>
  );
};

export default AlumniPage;
