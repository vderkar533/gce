import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import './PandeAboutSection.css'; 

const PandeAlumniSection2 = () => {
  const aboutSectionStyle = {
    backgroundColor: '#f0f0f0',
    padding: '30px',
    borderRadius: '15px',
    margin: '20px 0',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
  };

  const headingStyle = {
    fontSize: '24px',
    marginBottom: '20px',
    color: '#dc3545',
    fontWeight: 'bold',
  };

  const imageStyle = {
    width: '150px',
    height: '150px',
    objectFit: 'cover',
    borderRadius: '1%',
    marginBottom: '20px',
  };

  const textStyle = {
    fontSize: '16px',
    lineHeight: '1.6',
    color: '#555',
    marginTop: '20px', // Add some top margin for space
  };

  return (
    <section id="about" style={aboutSectionStyle} className="fade-in">
      <Container>
        <Row>
          <Col md={8}>
            {/* Adding the three items above the paragraph */}
            <h2 style={headingStyle}>Non Teaching Staff</h2>
            <div>
              <strong>Name:</strong> Mr.B.G.Kanhekar
            </div>
            <div>
              <strong>Designation:</strong> Programmer
            </div>
            <div>
              <strong>Qualification:</strong> M.Sc.(Maths), ADCSSAA
            </div>

            <div>
              <strong>Experience:</strong> 27 Years
            </div>

            <div>
              <strong>Email:</strong> bgkanhekar@gmail.com
            </div>


            

            <p style={textStyle}>
             
            </p>
          </Col>
          <Col md={4} className="d-flex justify-content-center align-items-center">
            <Image
              src="KanhekarBG.jpg"
              alt="College"
              style={imageStyle}
              fluid
            />
          </Col>
        </Row>
        <Row>
          <Col md={12} className="text-center mt-3">
            
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default PandeAlumniSection2;
