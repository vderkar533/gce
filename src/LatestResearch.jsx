import React from 'react';
import { Container, Row, Col, Button, Card, Carousel } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';

function LatestResearch() {
  const cardData = [
    {
      imgSrc: 'research1.jpg',
      text: 'Eco-Freiendly Engineering',
    },
    {
      imgSrc: 'research2.jpg',
      text: 'Use of advance technology',
    },
    {
      imgSrc: 'research3.jpg',
      text: 'Use of Renewable energy',
    },
    {
      imgSrc: '912.jpg',
      text: 'Performing Complex Engineering',
    },
    {
      imgSrc: '913.jpg',
      text: 'Next generation concepts',
    },
    {
      imgSrc: '911.jpg',
      text: 'Industry oriented Engineering',
    },
  ];

  const itemsPerSlide = 3;

  const carouselItems = [];

  for (let i = 0; i < cardData.length; i += itemsPerSlide) {
    const cardGroup = cardData.slice(i, i + itemsPerSlide);

    carouselItems.push(
      <Carousel.Item key={i}>
        <Row>
          {cardGroup.map((card, index) => (
            <Col md={4} key={index}>
              <Card>
                <Card.Img
                  variant="top"
                  src={card.imgSrc}
                  alt={`Image ${i + index + 1}`}
                />
                <Card.Body>
                  <Card.Text>{card.text}</Card.Text>
                  {/* <Button variant="danger">Read More</Button> */}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Carousel.Item>
    );
  }

  return (
     <Container className="mt-4 pt-4"> {/* Add top margin here */}
      <Row className="align-items-center mb-2">
        <Col md={1}>
          <i className="bi bi-rocket-takeoff fs-2"></i>
        </Col>
        <Col md={5} className="pl-0">
          <h3 className="mb-0">LATEST RESEARCH</h3>
        </Col>
        {/* <Col md={4} className="pl-0">
          <Button variant="primary">View All</Button>
        </Col> */}
      </Row>

      <h6 className="mb-4">Creating new knowledge</h6>

      <Carousel>{carouselItems}</Carousel>
    </Container>
  );
}

export default LatestResearch;
