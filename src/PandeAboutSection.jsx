import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import './PandeAboutSection.css'; 


const PandeAboutSection = () => {
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

  const containerStyle = {
    margin: '60px', // Set your desired margin value
    // Add other styles as needed
  };
  

  return ( 
   
    <section id="about" style={aboutSectionStyle} className="fade-in">
        <Container style={containerStyle}>
        <h1 style={containerStyle}>Faculty</h1>
        <Row>
          <Col md={8}>
            {/* Adding the three items above the paragraph */}
            <h2 style={headingStyle}>Head Of The Department</h2>
            <div>
              <strong>Name:</strong> Prof. C.U. Chauhan
            </div>
            <div>
              <strong>Designation:</strong> Head of the Department
            </div>
            <div>
              <strong>Qualification:</strong> M. Tech. (CSE)
            </div>

            <div>
              <strong>Experience:</strong> 17 Years
            </div>

            <div>
              <strong>Email:</strong> chandrapalchauhan@gcoec.ac.in
            </div>

            <p style={textStyle}>
              As the Head of the Department 'Prof.C.U.Chauhan' at our esteemed institution, I take immense pride in leading a team of dedicated faculty and nurturing a community of eager learners. Our department is committed to delivering high-quality education, fostering research and innovation, and preparing our students to excel in their chosen fields.

              With a focus on academic excellence, we strive to create an environment that promotes critical thinking, creativity, and hands-on learning. Our goal is to equip our students with the necessary skills and knowledge to succeed in a rapidly evolving world.

              We encourage a collaborative approach, encouraging both students and faculty to engage in meaningful discussions, research projects, and extracurricular activities. Our aim is to produce professionals who not only excel academically but also possess a sense of responsibility towards society.

              I believe in an open-door policy and welcome discussions and suggestions from students, faculty, and stakeholders. Together, we can make a positive impact and contribute to the growth and success of our institution.
            </p>
          </Col>
          <Col md={4} className="d-flex justify-content-center align-items-center">
            <Image
              src="cc.jpg"
              alt="College"
              style={imageStyle}
              fluid
            />
          </Col>
        </Row>
        <Row>
          <Col md={12} className="text-center mt-3">
            <Button variant="danger" className="btn-hover">
              Read More
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default PandeAboutSection;
