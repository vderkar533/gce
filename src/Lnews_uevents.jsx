import React from 'react';
import { Carousel, Card, Button } from 'react-bootstrap';

const Lnews_uevents = () => {
  //-------------------
  const tickerContainerStyle = {
    boxShadow: 'inset 0 -15px 30px rgba(0, 0, 0, 0.4), 0 5px 10px rgba(0, 0, 0, 0.5)',
    width: '550px',
    height: '30px',
    margin: '10px auto',
    overflow: 'hidden',
    borderRadius: '4px',
    padding: '3px',
    WebkitUserSelect: 'none',
  };

  const fullWidthStyle = {
    width: '100%',
  };

  const breakingNewsStyle = {
    float: 'left',
    color: '#fff',
    padding: '6px',
    position: 'relative',
    top: '1%',
    borderRadius: '4px',
    boxShadow: 'inset 0 -15px 30px rgba(0, 0, 0, 0.4)',
    font: '16px "Source Sans Pro", Helvetica, Arial, sans-serif',
    WebkitFontSmoothing: 'antialiased',
    WebkitUserSelect: 'none',
    cursor: 'pointer',
  };

  const tickerListStyle = {
    float: 'left',
    paddingLeft: '20px',
    animation: 'ticker 10s cubic-bezier(1, 0, .5, 0) infinite',
    WebkitUserSelect: 'none',
  };

  const tickerListItemStyle = {
    lineHeight: '30px',
    listStyle: 'none',
  };

  const tickerLinkStyle = {
    color: '#fff',
    textDecoration: 'none',
    font: '14px Helvetica, Arial, sans-serif',
    WebkitFontSmoothing: 'antialiased',
    WebkitUserSelect: 'none',
  };

  const tickerAnimationStyle = {
    '@keyframes ticker': {
      '0%': { marginTop: '0' },
      '25%': { marginTop: '-30px' },
      '50%': { marginTop: '-60px' },
      '75%': { marginTop: '-90px' },
      '100%': { marginTop: '0' },
    },
  };

  const pauseOnHoverStyle = {
    ':hover': {
      animationPlayState: 'paused',
    },
  };
  //-------------------
  
  // Inline CSS for the sections
  const sectionStyle = {
    height: '700px', // Increase the height as needed
    padding: '2px', // Add padding for content spacing
    border: 'transparent', // Remove the border
    marginTop: '50px',
    marginBottom: '50px',
  };

  // Inline CSS for the card body elements
  const cardBodyStyle = {
    height: '100%', // Increase the card body height as needed
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    border: 'transparent',
    background : "#d9d9d9",
    marginTop: '50px',
    
  };

  // Inline CSS for the "READ MORE" and "VIEW ALL" buttons
  const buttonStyle = {
    backgroundColor: 'white', // White background
    color: '#FF0000', // Red text color
    border: '1px solid #FF0000', // Red border
    transition: 'background-color 0.3s, border-color 0.3s', // Add transition for smooth color change
  };

  // Inline CSS for the button hover style
  const buttonHoverStyle = {
    backgroundColor: 'red', // Red background color on hover
    borderColor: '#FF0000', // Red border color on hover
    color: 'white', // Change text color to white on hover
  };

  // Inline CSS for the left section with padding at the bottom
  const leftSectionStyle = {
    ...sectionStyle,
    paddingBottom: '80px', // Add padding at the bottom
    textAlign: 'center', // Center the text horizontally
    marginTop: '50px', // Add top margin
    marginBottom: '50px', // Add bottom margin
    background:"",
  };

  const viewAllButtonContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // Center horizontally
    justifyContent: 'center', // Center vertically
    height: '100%', // Ensure the button container takes up the full height
  };

  const stylezz ={
     textAlign: 'justify',
  }

  // Inline CSS for the card images
  const cardImageStyle = {
    maxWidth: '100%', // Set a maximum width of 100% of the parent container
    height: 'auto', // Auto-adjust height to maintain aspect ratio
    margin: '0 auto', // Center the images horizontally
  };

  // Inline CSS for the carousel slider buttons
  const carouselButtonStyle = {
    backgroundColor: 'black', // Black background color
    border: '2px', // No border
  };

  // Inline CSS for the right section content
  const containerStyle = {
    maxWidth: '100%', // Increased width
    maxHeight: '800px', // Increased height
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // Center horizontally
    justifyContent: 'center', // Center vertically
    // Add top margin
    // Add bottom margin
    marginTop: '58px',
  };

  return (
    <div className="container" >
      <div className="row">
        {/* Left Section with Carousel */}
        <div className="col-md-6">
          <div className="left-section" style={leftSectionStyle} >
            <h2><h2>LATEST NEWS</h2></h2>
            <Carousel interval={500} slide={false} fade={false} indicators={false}>
              <Carousel.Item >
                <Card style={cardBodyStyle}>
                  <Card.Img src="news1.jpg" alt="Image 1" style={cardImageStyle} />
                  <Card.Body>
                    <Card.Title><Card.Title>CHANDRAPUR GOVERNMENT ENGINEERING COLLEGE GETS NBA STATUS</Card.Title></Card.Title>
                    <Card.Text style={stylezz}>
                      Chandrapur: As per the central government's policy, two departments of machine and electrical engineering at Chandrapur Government Engineering College have been accorded special status by the NBA. It has become the first college in Gondwana University to achieve this status, which will speed up the work, said principal Dr. Which. Which. Bhutada said at a press conference at Chandrapur Press Club on Monday.As per the central government's policy, international standards have been fixed for all engineering colleges in the state. Colleges that adhere to these standards...
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    {/* <Button
                      variant="primary"
                      style={buttonStyle}
                      // Apply the hover style on mouse hover
                      onMouseEnter={() => {
                        document.getElementById("read-more-button-1").style.backgroundColor = '#C60063';
                        document.getElementById("read-more-button-1").style.borderColor = '#C60063';
                        document.getElementById("read-more-button-1").style.color = 'white';
                      }}
                      // Revert to the original style on mouse leave
                      onMouseLeave={() => {
                        document.getElementById("read-more-button-1").style.backgroundColor = 'white';
                        document.getElementById("read-more-button-1").style.borderColor = '#C60063';
                        document.getElementById("read-more-button-1").style.color = '#C60063';
                      }}
                      id="read-more-button-1" // Unique ID for the first button
                    >
                      Read More
                    </Button> */}
                  </Card.Footer>
                </Card>
              </Carousel.Item>
              <Carousel.Item>
                <Card style={cardBodyStyle}>
                  <Card.Img src="news2.jpg" alt="Image 2" style={cardImageStyle} />
                  <Card.Body>
                    <Card.Title>UGG APPROVES GONDWANA UNIVERSITY TO RECEIVE CENTRAL FUNDS </Card.Title>
                    <Card.Text style={stylezz}>
                      Gondwana University in Gadchiroli district was on Wednesday declared fit to receive central funds by the University Grants Commission (UGC). Minister of Higher and Technical Education Uday Samant said the 12B status will help the university progress speedily.

                      UGC provides financial assistance to eligible colleges that are declared fit to receive central assistance (UGC grant) under Section 12 (B) of the UGC Act, 1956 as per approved pattern of assistance under various schemes. 
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    {/* <Button
                      variant="primary"
                      style={buttonStyle}
                      onMouseEnter={() => {
                        document.getElementById("read-more-button-2").style.backgroundColor = '#C60063';
                        document.getElementById("read-more-button-2").style.borderColor = '#C60063';
                        document.getElementById("read-more-button-2").style.color = 'white';
                      }}
                      onMouseLeave={() => {
                        document.getElementById("read-more-button-2").style.backgroundColor = 'white';
                        document.getElementById("read-more-button-2").style.borderColor = '#C60063';
                        document.getElementById("read-more-button-2").style.color = '#C60063';
                      }}
                      id="read-more-button-2" // Unique ID for the second button
                    >
                      Read More
                    </Button> */}
                  </Card.Footer>
                </Card>
              </Carousel.Item>
              <Carousel.Item>
                <Card style={cardBodyStyle}>
                  <Card.Img src="news3.jpeg" alt="Image 3" style={cardImageStyle} />
                  <Card.Body>
                    <Card.Title>PRESIDENT MURMU TO ATTEND GONDWANA UNIVERSITY CONVOCATION DURING MAHA VISIT</Card.Title>
                    <Card.Text style={stylezz}>
                      President Droupadi Murmu has arrived in Nagpur on a visit to Maharashtra where she will address the convocation of the Gondwana University in Gadchiroli and attend other events.

                      This is Murmu's first visit to Maharashtra after assuming the top constitutional office in July last year.The President arrived at the city airport on Tuesday evening and was welcomed by Maharashtra Governor Ramesh Bais, Chief Minister Eknath Shinde...
                      
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    {/* <Button
                      variant="primary"
                      style={buttonStyle}
                      onMouseEnter={() => {
                        document.getElementById("read-more-button-3").style.backgroundColor = '#C60063';
                        document.getElementById("read-more-button-3").style.borderColor = '#C60063';
                        document.getElementById("read-more-button-3").style.color = 'white';
                      }}
                      onMouseLeave={() => {
                        document.getElementById("read-more-button-3").style.backgroundColor = 'white';
                        document.getElementById("read-more-button-3").style.borderColor = '#C60063';
                        document.getElementById("read-more-button-3").style.color = '#C60063';
                      }}
                      id="read-more-button-3" // Unique ID for the third button
                    >
                      Read More
                    </Button> */}
                  </Card.Footer>
                </Card>
              </Carousel.Item>
              {/* Add more Carousel.Items for additional cards */}
            </Carousel>
          </div>
        </div>

        {/* Right Section */}
        <div className="col-md-6">
          <div className="right-section" style={sectionStyle}>
            <h2 style={{ textAlign: 'center' }}><h2>UPCOMING EVENTS</h2></h2>
            <div className="overflow-auto p-3 bg-light" style={containerStyle}>


              
              <div style={tickerContainerStyle}>
                <span style={breakingNewsStyle}>Notice</span>
                <ul style={tickerListStyle}>
                  <li style={tickerListItemStyle}><a href="https://www.gcoec.ac.in/gcoec/PDF/Second,%20Third%20&%20Final%20year%20Girls%20Hostel%20Allotment%20Round-1%202023-24.pdf" style={tickerLinkStyle}>Girls hostel Direct second year Allotment Round-1 2023-24</a></li>
                </ul>
              </div>

              <div style={tickerContainerStyle}>
                <span style={breakingNewsStyle}>Notice</span>
                <ul style={tickerListStyle}>
                  <li style={tickerListItemStyle}><a href="https://www.gcoec.ac.in/gcoec/PDF/Boys%20Hostel%20Round%20III%20Allotment-2023-24.pdf" style={tickerLinkStyle}>Boys Hostel Admission Round I for Direct Second Year 2023-24</a></li>
                </ul>
              </div>

              <div style={tickerContainerStyle}>
                <span style={breakingNewsStyle}>Notice</span>
                <ul style={tickerListStyle}>
                  <li style={tickerListItemStyle}><a href="#" style={tickerLinkStyle}>Direct second year girls hostel provisional Allotment merit list 2023-24</a></li>
                </ul>
              </div>

              <div style={tickerContainerStyle}>
                <span style={breakingNewsStyle}>Notice</span>
                <ul style={tickerListStyle}>
                  <li style={tickerListItemStyle}><a href="#" style={tickerLinkStyle}>Boys Hostel (Direct Second Year Provisional Merit List 2023-24</a></li>
                </ul>
              </div>

              <div style={tickerContainerStyle}>
                <span style={breakingNewsStyle}>Notice</span>
                <ul style={tickerListStyle}>
                  <li style={tickerListItemStyle}><a href="#" style={tickerLinkStyle}>First Year Girls Quarter Allotment Round -1</a></li>
                </ul>
              </div>

              <div style={tickerContainerStyle}>
                <span style={breakingNewsStyle}>Notice</span>
                <ul style={tickerListStyle}>
                  <li style={tickerListItemStyle}><a href="#" style={tickerLinkStyle}>Girls hostel first year allotment round 2nd, 3rd 2023-24</a></li>
                </ul>
              </div>

              <div style={tickerContainerStyle}>
                <span style={breakingNewsStyle}>Notice</span>
                <ul style={tickerListStyle}>
                  <li style={tickerListItemStyle}><a href="#" style={tickerLinkStyle}>Boys Hostel Round III Allotment list</a></li>
                </ul>
              </div>

              <div style={tickerContainerStyle}>
                <span style={breakingNewsStyle}>Notice</span>
                <ul style={tickerListStyle}>
                  <li style={tickerListItemStyle}><a href="#" style={tickerLinkStyle}>Fee structure Institute round 2023-24</a></li>
                </ul>
              </div>

              <div style={tickerContainerStyle}>
                <span style={breakingNewsStyle}>Notice</span>
                <ul style={tickerListStyle}>
                  <li style={tickerListItemStyle}><a href="#" style={tickerLinkStyle}> Admission B.Tech. and M.Tech. First Year Institute level round 23-24</a></li>
                </ul>
              </div>

              


             
              
             
              
              <div style={viewAllButtonContainerStyle}>
                {/* <Button
                  variant="primary"
                  style={buttonStyle}
                  // Apply the hover style on mouse hover
                  onMouseEnter={() => {
                    document.getElementById("view-all-button").style.backgroundColor = '#C60063';
                    document.getElementById("view-all-button").style.borderColor = '#C60063';
                    document.getElementById("view-all-button").style.color = 'white';
                  }}
                  // Revert to the original style on mouse leave
                  onMouseLeave={() => {
                    document.getElementById("view-all-button").style.backgroundColor = 'white';
                    document.getElementById("view-all-button").style.borderColor = '#C60063';
                    document.getElementById("view-all-button").style.color = '#C60063';
                  }}
                  id="view-all-button" // Unique ID for the "View All" button
                >
                  View All
                </Button> */}
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Lnews_uevents;
