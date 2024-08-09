import React, { useState } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import 'font-awesome/css/font-awesome.min.css';
// Import FontAwesome CSS

function ParthFaqAndPhoto() {
  const imageUrls = [
    'IMG20231121133830[1].jpg',
    'IMG20231121134421[1].jpg',
    'IMG20231121133801_(1)[1].jpg',
    'IMG20231121133838[1].jpg',
    'IMG20231121134039[1].jpg',
    'IMG20231121134809[1].jpg',
    'IMG20231121134409[1].jpg',
    'IMG20231121140303[1].jpg',
    
    
  ];

  // Inline CSS for FAQ section
  const faqSectionStyle = {
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    marginBottom: '20px',
    marginTop: '20px',
    backgroundColor: 'white', // Added background color
  };

  // FAQ data
  const faqs = [
    {
      question: 'What are the timings of Mess?',
      answer:
        'Mess is open from 9am to 8.30pm.',
    },
    {
      question: 'What are the timings to meet and invite guests?',
      answer:
        'From 12pm to 7pm.',
    },
    {
      question: 'Is their 24/7 water and electricity supply?',
      answer:
        'Yes.',
    },
    {
      question: 'Are there any events which are held only in Hostel?',
      answer: 'Yes! Ganesh Utsav and farewell.',
    },
    
  ];

  const [expanded, setExpanded] = useState(null);

  // Function to toggle the visibility of the answer
  const toggleAnswer = (index) => {
    if (expanded === index) {
      setExpanded(null);
    } else {
      setExpanded(index);
    }
  };

  return (
    <Container fluid>
      <Row>
        <Col md={6}>
          <div style={faqSectionStyle}>
            <h5>FAQs</h5>
            <div className="faq-style-wrapper">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`faq accordion ${expanded === index ? 'expanded' : ''}`}
                >
                  <div
                    className="question-wrapper"
                    onClick={() => toggleAnswer(index)}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      transition: 'background-color 0.25s ease-in-out',
                    }}
                  >
                    <div className="d-flex align-items-center">
                      <span className="q-mark d-block">
                        <i
                          className={`fa ${expanded === index ? 'fa-minus' : 'fa-plus'}`}
                          style={{ color: 'red', fontSize: '16px' }}
                        ></i>
                      </span>
                      <p className="question" title="">
                        {faq.question}
                      </p>
                    </div>
                  </div>
                  <div
                    className="answer-wrapper"
                    style={{
                      display: expanded === index ? 'block' : 'none',
                      padding: '16px',
                      paddingLeft: '0', // Adjusted padding here
                      paddingBottom: '32px',
                      backgroundColor: 'white',
                      transition: 'max-height 0.3s ease',
                    }}
                  >
                    <p className="answer">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Col>
        <Col md={6}>
          {/* <h5>PHOTO GALLERY <i className="fa fa-camera" style={{ fontSize: '20px', color: 'red' }}></i></h5>

         
          <h6></h6>
          <Row>
            {imageUrls.map((imageUrl, index) => (
              <Col md={3} key={index}>
                <Card>
                  <Card.Img src={imageUrl} alt={`Image ${index + 1}`} />
                </Card>
              </Col>
            ))}
          </Row> */}
        </Col>
      </Row>
    </Container>
  );
}

export default ParthFaqAndPhoto;
