import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, Container, Row, Col, Card, Button } from 'react-bootstrap';
import AboutAndDirector from './Tom-AboutAndDirector';

const AlumniPage = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="sniff.jpg" // Replace with your image URL
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Welcome to Our Alumni Community</h3>
            <p>Stay connected, share memories, and celebrate achievements.</p>
          </Carousel.Caption>
        </Carousel.Item>
        {/* Add more Carousel.Items as needed */}
      </Carousel>
      <AboutAndDirector />

      <div className="container my-5">
        <div className="row">
          <div className="col-md-6">
            <img src="asap (2).jpg" alt="Sample Photo" className="img-fluid" />
          </div>
          <div className="col-md-4 mb-4">
            <p><mark>Placement Overview</mark></p>
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

          {/* Add the table here */}
          <div className="col-md-12">
            <table className="table table-bordered">
              <thead>
                <tr style={{ backgroundColor: 'red', color: 'black' }}>
                  <th><mark>Circulars and MOM's</mark></th>
                  <th><mark>Explore</mark></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Alumni Association Meeting Circular dated 23/02/2022</td>
                  <td>
                    <Button href="https://www.gcoec.ac.in/gcoec/PDF/2022/Alumni/Meeting-Circular-1.pdf" variant="danger">
                      Visit
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td>Alumni Association Meeting Circular dated 15/03/2022</td>
                  <td>
                    <Button href="https://www.gcoec.ac.in/gcoec/PDF/2022/Alumni/Meeting-Circular-2.pdf" variant="danger">
                      Visit
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td>Alumni Association Meeting Circular dated 10/04/2022</td>
                  <td>
                    <Button href="https://www.gcoec.ac.in/gcoec/PDF/2022/Alumni/Meeting-Circular-3.pdf" variant="danger">
                      Visit
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td>Minutes of Meeting (Meeting held on 28/02/2022 online mode)</td>
                  <td>
                    <Button href="https://www.gcoec.ac.in/gcoec/PDF/2022/Alumni/MoM-1.pdf" variant="danger">
                      Visit
                    </Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Add two cards here */}
          {/* First card */}
          <Col md={6} className="mb-4 mt-4">
            <Card style={{ backgroundColor: 'lightgrey' }}>
              <Card.Body>
                <Card.Title><mark>Alumni Association Student Co-Ordinators</mark></Card.Title>
                <Card.Text>
                  Alumni Association Student Coordinators play a crucial role in fostering a strong connection between the alumni and the current student body. These coordinators act as liaisons between the two groups, facilitating communication, collaboration, and various initiatives.
                </Card.Text>
                <Button href="https://www.pdffiller.com/jsfiller-desk14/?flat_pdf_quality=low&requestHash=c97f49f357acf9de2c19ddf4236083acba4e80419007fff80c3903f2e4b2f65a&projectId=1451610207&loader=tips&MEDIUM_PDFJS=true&PAGE_REARRANGE_V2_MVP=true&richTextFormatting=true&isPageRearrangeV2MVP=true&jsf-page-rearrange-v2=true&LATEST_PDFJS=true&jsf-document-scroll-zoom=true&jsf-redesign-full=true&act-notary-pro-integration=false&jsf-dss-v2=false&routeId=ea6c3a33a2a8d6265951d4e18f491005#8d40660e1413418daef2b05f631cc84d" variant="danger">
                  Explore
                </Button>
              </Card.Body>
            </Card>
          </Col>

          {/* Second card */}
          <Col md={6} className="mb-4 mt-4">
            <Card style={{ backgroundColor: 'lightred' }}>
              <Card.Body>
                <Card.Title><mark>Alumni Activities</mark></Card.Title>
                <Card.Text>
                  Alumni activities play a pivotal role in maintaining a vibrant and interconnected alumni community. These activities are designed to engage graduates in ongoing relationships with their alma mater and fellow alumni.
                </Card.Text>
                <Button href="https://www.pdffiller.com/jsfiller-desk14/?flat_pdf_quality=low&projectId=1451613449&loader=tips&MEDIUM_PDFJS=true&PAGE_REARRANGE_V2_MVP=true&richTextFormatting=true&isPageRearrangeV2MVP=true&jsf-page-rearrange-v2=true&LATEST_PDFJS=true&jsf-document-scroll-zoom=true&jsf-redesign-full=true&act-notary-pro-integration=false&jsf-dss-v2=false&routeId=09c44c040286edc83f9100c1c8a80f79#c65c88db317b4336aa01429900534f62" variant="danger">
                  Explore
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} className="mb-4 mt-4" >
            <Card style={{ backgroundColor: 'lightred' }}>
              <Card.Body>
                <Card.Title><mark>Executive Committee</mark></Card.Title>
                <Card.Text>
                  The Executive Committee on Alumni serves as a pivotal body within our institution, dedicated to fostering strong connections and meaningful engagement with our esteemed alumni community. Comprising dedicated individuals who have demonstrated exemplary commitment to the institution, this committee plays a vital role in shaping and advancing the vision of the alumni association
                </Card.Text>
                <Button href="https://www.pdffiller.com/jsfiller-desk14/?flat_pdf_quality=low&projectId=1451615724&loader=tips&MEDIUM_PDFJS=true&PAGE_REARRANGE_V2_MVP=true&richTextFormatting=true&isPageRearrangeV2MVP=true&jsf-page-rearrange-v2=true&LATEST_PDFJS=true&jsf-document-scroll-zoom=true&jsf-redesign-full=true&act-notary-pro-integration=false&jsf-dss-v2=false&routeId=767467ad882e98b3b5c02ee44b04ea38#e975c7e6c8914a0197e0f7af305c02e4" variant="danger">
                  Explore
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </div>
      </div>

      {/* Remaining code ... */}
    </div>
  );
};

export default AlumniPage;
