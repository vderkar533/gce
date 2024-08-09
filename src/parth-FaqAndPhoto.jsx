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
    'IMG20231121140221_(1)[1].jpg',
    'IMG20231121140234[1].jpg',
    'IMG20231121140319[1].jpg',
    'IMG20231121140703[1].jpg',
    'IMG20231121140725[1].jpg',
    'IMG20231121140730[1].jpg',
    'IMG20231121140751[1].jpg',
    'IMG20231121140436[1].jpg',
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
      question: 'How are the teaching faculties?',
      answer:
        'Teaching faculties are good and have good experience in teaching and have completed their Graduation from vairious prestigious Institutes , also there are vairious temporary faculties for dedicated subjects.',
    },
    {
      question: 'What courses are typically offered in the CSE program?',
      answer:
        'Courses may include Programming Fundamentals, Data Structures, Algorithms, Database Management, Operating Systems, Computer Networks, Software Engineering, and elective courses in specialized areas.',
    },
    {
      question: 'Are there opportunities for research in the CSE department?',
      answer:
        'Yes, the CSE department often provides opportunities for research projects and collaborations with faculty members. Students can engage in cutting-edge research in various fields of computer science.',
    },
    {
      question: 'Are there any events which are held only in cse?',
      answer: 'Yes! there is a list of events that are celebrated only by the department of computer science & engg.',
    },
    {
      question: 'What is the process for getting into cse?',
      answer:
        'CSE in GCOEC is the top most branch and to get admission into the CSE department one has to qualify mhtcet or the Institutional round.',
    },
    {
      question: 'How does the CSE department support hands-on learning?',
      answer:
        'The department may offer practical labs, coding assignments, projects, and internships to provide students with hands-on experience. This helps bridge the gap between theoretical knowledge and real-world applications.',
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
          <h5>PHOTO GALLERY <i className="fa fa-camera" style={{ fontSize: '20px', color: 'red' }}></i></h5>

          <Button variant="primary">View All</Button>
          <h6>MULTI-HUED REFLECTION</h6>
          <Row>
            {imageUrls.map((imageUrl, index) => (
              <Col md={3} key={index}>
                <Card>
                  <Card.Img src={imageUrl} alt={`Image ${index + 1}`} />
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default ParthFaqAndPhoto;
