import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import './PandeAboutSection2.css'; 

const PandeAboutSection2 = () => {
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
            <h2 style={headingStyle}>Assistant Professor</h2>
            <div>
              <strong>Name:</strong> Prof.S.W.Shende
            </div>
            <div>
              <strong>Designation:</strong> Assistant Professor
            </div>
            <div>
              <strong>Qualification:</strong> M. Tech. (CSE), Ph.D (Pursuing)
            </div>

            <div>
              <strong>Experience:</strong> 20 Years
            </div>

            <div>
              <strong>Email:</strong> shailendrashende@gcoec.ac.in
            </div>

            <p style={textStyle}>
              As an Assistant Professor Shailendra Shende at our esteemed institution, I am dedicated to shaping the future of our students by imparting knowledge, fostering critical thinking, and nurturing academic growth. My passion for education and commitment to excellence drive me to provide the best learning experience for my students.

              In my role, I strive to create an engaging and inclusive learning environment where students can explore their academic interests and develop essential skills for their future careers. I firmly believe in the power of education to transform lives and society, and I am dedicated to inspiring and mentoring the next generation of professionals.

              I am actively involved in research and continuously seek opportunities to expand my knowledge and contribute to advancements in my field. Sharing these experiences with my students enriches their learning journey and exposes them to the latest developments in our discipline.

              I am always available to support my students, answer their questions, and provide guidance in both academic and personal matters. My door is open for discussions, and I encourage an open dialogue that fosters growth and understanding.

              Looking forward to a rewarding and impactful academic journey with my students and colleagues.
            </p>
          </Col>
          <Col md={4} className="d-flex justify-content-center align-items-center">
            <Image
              src="ss.jpg"
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

export default PandeAboutSection2;
