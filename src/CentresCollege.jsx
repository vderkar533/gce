import React from 'react';
import { Container, Row, Col, Carousel, Card } from 'react-bootstrap';

function CentresClg() {
  const containerStyle = {
    paddingTop: '100px', // Add padding to the top
    paddingBottom: '100px', // Add padding to the bottom
    backgroundColor: 'grey', // Set background color to grey
    marginTop: '100px',    // Add margin to the top
    marginBottom: '100px', // Add margin to the bottom
  };
  
  const carouselStyle = {
    width: '60%', // Adjust the width as needed
    margin: '0 auto', // Center the Carousel horizontally
    
  };
  const colzzz ={
     backgroundColor: 'grey',
    marginTop: '30px',
    border: 'transparent',
  }

  return (
    <Container className="text-center mt-7 mb-7" style={containerStyle}>
      <Row>
        <Col>
          <h2>CENTERS @GCOEC</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <i className="fa fa-icon"></i>
          <h4>Centre for Invention Innovation Incubation & Training (CIIIT)</h4>
          <h5>(A Joint Initiative of Tata Technologies Ltd. & GCOE Chandrapur)</h5>
        </Col>
      </Row>
      <Row >
        <Col>
          <Card style={colzzz}>
            <Carousel style={carouselStyle}>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="tata1.jpeg"
                  alt="Image 1"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="tata2.jpeg"
                  alt="Image 2"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="tata3.jpeg"
                  alt="Image 3"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="tata4.jpeg"
                  alt="Image 4"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="tata5.jpeg"
                  alt="Image 5"
                />
              </Carousel.Item>
            </Carousel>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default CentresClg;
