import React, { useState } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import 'font-awesome/css/font-awesome.min.css'; // Import FontAwesome CSS

function FaqAndPhoto() {
  const imageUrls = [
    '121 (21).jpeg',
    '121 (22).jpeg',
    '121 (23).jpeg',
    '121 (24).jpeg',
    '121 (20).jpeg',
    '121 (27).jpeg',
    '121 (28).jpeg',
    '121 (29).jpeg',
    '121 (30).jpeg',
    '121 (31).jpeg',
    '121 (10).jpeg',
    '121 (11).jpeg',
    '121 (12).jpeg',
    '121 (13).jpeg',
    '121 (14).jpeg',
    '121 (15).jpeg',
    '121 (16).jpeg',
    '121 (17).jpeg',
    '121 (18).jpeg',
    '121 (19).jpeg',
  ];

  // Inline CSS for FAQ section
  const faqSectionStyle = {
    padding: '20px',
    border: '1px solid transparent',
    borderRadius: '5px',
    marginBottom: '20px',
    marginTop: '0px',
    backgroundColor: 'white', // Added background color
    paddingLeft: '60px',
    
  };

  // FAQ data
  const faqs = [
    {
      question: 'How can I apply to your college?',
      answer:
        'After 12th you can give engineering entrance exams like mht-cet or JEE and after that based on score admission will be done if meet cut-off',
    },
    {
      question: 'What programs and majors does the college offer?',
      answer:
        'College offers various domain engineering like civil,mechanical,computer,electrical,intrumentaion,etc',
    },
    {
      question: 'What are the admission requirements?',
      answer:
        'Entrance exam score that meets cut-offs with documents for scholarships if eligible',
    },
    {
      question: 'How can I schedule a campus tour?',
      answer: 'This can be achieved by taking the written permission by principal office'
    },
    {
      question: 'What financial aid and scholarship opportunities are available?',
      answer:
        'There are various financial aid and scholarship provided by government.The info can be collected from office.',
    },
    {
      question: 'How can I get involved in extracurricular activities?',
      answer:
        'There different committes and clubs created for this purpose,you can contact them.',
    },
    {
      question: 'What facilities and infrastructure does the engineering college provide to students?',
      answer:
        'Our engineering college is equipped with state-of-the-art facilities to support a conducive learning environment. We have well-equipped laboratories for practical sessions, modern classrooms with audio-visual aids, a comprehensive library with a vast collection of books and online resources, computer labs with the latest technology, and dedicated spaces for collaborative learning. Additionally, the college provides hostel facilities, sports amenities, and recreational spaces to ensure a well-rounded experience for our students. Our commitment to providing excellent infrastructure enhances the overall academic and extracurricular activities on campus.',
    },
    {
      question: 'How is the placement record of the college?',
      answer:
        'Our college has an excellent placement record, with a high percentage of students securing job offers from reputed companies. The placement cell actively collaborates with industry partners to organize recruitment drives and internship opportunities. Our graduates have been successfully placed in both national and international companies across diverse sectors.',
    },
    {
      question: 'Are there opportunities for research and innovation at the college?',
      answer:
        'Yes, our college encourages a culture of research and innovation. We have well-equipped research labs, and our faculty members are actively involved in cutting-edge research projects. Students also have the opportunity to participate in research initiatives, present papers at conferences, and collaborate with industry experts on innovative projects.',
    },
    {
      question: 'What extracurricular activities are available for students?',
      answer:
        'We believe in the holistic development of our students. Apart from academic excellence, our college offers a wide range of extracurricular activities, including sports, cultural events, technical competitions, and student clubs. These activities contribute to the overall personality development of our students.',
    },
    {
      question: ' How does the college support students in their career development?',
      answer:
        'Career development is a priority for us. The college conducts regular workshops on resume building, interview skills, and career counseling. We also have a dedicated placement cell that facilitates interactions between students and industry professionals. Additionally, we organize guest lectures, seminars, and industrial visits to provide insights into the current trends in the job market.',
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
    <Container fluid style={{ paddingBottom : '300px', backgroundColor : 'white',}}>
      <Row>
        <Col md={6}>
          <div style={faqSectionStyle}>
          <h2 style={{ paddingBottom: '20px' }}>FAQs</h2>
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
                      paddingLeft: '60px',
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
          <h5 style={{ paddingBottom: '10px' }}>PHOTO GALLERY <i className="fa fa-camera" style={{ fontSize: '20px', color: 'red' }}></i></h5>

          {/* <Button variant="danger">View All</Button> */}
          <h6 style={{ paddingBottom: '40px' }}>MULTI-HUED REFLECTION</h6>
          <Row >
            {imageUrls.map((imageUrl, index) => (
      <Col md={3} key={index} style={{ overflow: 'hidden', transition: 'transform 0.3s ease' }}>
        <Card
          style={{ transformOrigin: 'center center', transition: 'transform 0.3s ease' }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'scale(1.1)';
            e.currentTarget.querySelector('img').style.width = '150%';
            e.currentTarget.querySelector('img').style.height = 'auto';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.querySelector('img').style.width = '100%';
            e.currentTarget.querySelector('img').style.height = 'auto';
          }}
        >
          <Card.Img src={imageUrl} alt={`Image ${index + 1}`} style={{ width: '100%', height: 'auto' }} />
        </Card>
      </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default FaqAndPhoto;
