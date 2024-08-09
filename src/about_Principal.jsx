import React, { useState, useEffect } from 'react';

function ContentComponent1() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Set loaded to true after a delay to trigger the animation
    const timeout = setTimeout(() => {
      setLoaded(true);
    }, 500); // Adjust the delay as needed

    // Cleanup the timeout to avoid memory leaks
    return () => clearTimeout(timeout);
  }, []);

  const containerStyle = {
    display: 'flex',
    flexDirection: 'row', // Display the sections horizontally
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    margin: '20px', // Adjust margin
    padding: '50px', // Adjust padding
    border: '1px solid #ccc',
    transition: 'transform 0.5s ease-in-out', // Add a transition for smooth animation
    transform: loaded ? 'translateX(0)' : 'translateX(-100%)', // Initial position off-screen
    backgroundColor: 'grey', // Set the background color to red
    color: 'white', // Set the text color to white
  };

  const sectionStyle = {
    flex: 1, // Each section takes equal width
    margin: '20px', // Adjust margin
  };

  const imageStyle = {
    width: '80%', // Adjust image width to fill the container
    marginBottom: '600px', // Adjust margin-bottom
  };

  return (
    <div style={containerStyle}>
      <div style={sectionStyle}>
        <img
          src="principal23.jpg"
          alt="Your Image"
          style={imageStyle}
        />
      </div>
      <div style={sectionStyle}>
        <h1>Principal's Desk</h1>
        <hr style={{ border: '1px dotted white', width: '100%' }} />
        <br />
        <br />
        <h4>Dr. Prashant V. Washimkar.</h4>
        <h6>( Principal of Government College of Engineering Chandrapur)</h6>
        <h6 style={{ paddingBottom: '50px' }}>Email : principal.gcoechandrapur@dtemaharashtra.gov.in</h6>
        <p style={{  textAlign: 'left' }}>
          Warm greetings from Government College of Engineering Chandrapur (GCOEC) !!!
          Dr. Prashant V. Washimkar is a diligent human who strictly follows morals and is focused on strategic vision and the long term mission of GCOEC. Dr. Washimkar earned his Bachelors in Mechanical Engineering and a Master’s in Industrial Engineering from Visvesvaraya Regional College of Engineering (Now VNIT) Nagpur. </p>

         <p style={{  textAlign: 'left' }}>He completed his Ph.D. from Rashtrasant Tukadoji Maharaj Nagpur University Nagpur, he has served GCOEC in many capacities that includes Dean of Academics, Gymkhana Vice President, AICTE Co– ordinator, NIRF Nodal Officer, etc. He is life member of the Indian Society for Technical Education (ISTE), the Institution of Engineers India(IEI ), the Indian Institution of Industrial Engineering(IIIE). He has nearing 40 Publications at National, International Level to his credit. </p>

         <p style={{  textAlign: 'left' }} >This Institute started functioning in 1996 with 3 UG Engineering Programs under the administrative control of Higher and Technical Education Department, Govt. of Maharashtra, also it is affiliated to Gondwana University, Gadchiroli. GCOEC offers six UG Programs and two PG Programs along with Centre For
          Higher Leadership And Re – Search (CHLR) in Mechanical and Electrical Engineering Only. It houses more than 1560 plus students. The students of high caliber are the backbones of the Institute. The Institute
          strives to impart quality technical education to the students who have always proved their excellence in University and competitive level. Although academics is the top priority, the students are motivated to participate in co – curricular and extra curricular activities. </p>

         <p style={{  textAlign: 'left' }} >The institute is attracting a large number of coveted companies on campus and provides one of the most promising placements and internships. The Institute is having one of the best Placement Records. The placement record is excellent. We are one of the Premier Institute of Central India. Our students have got placed in many reputed multinational companies across India and abroad. </p>

         <p  style={{  textAlign: 'left' }}>The faculties are also research oriented and believed in strong Academic – Industry Collaboration. They are engaged in Workshops/Seminars and Consultancy Projects. The Institute has established an Institute Innovation Cell (IIC) to foster the culture of innovation and start up eco system in the Institute. </p>
         <p  style={{  textAlign: 'left' }}>The Institute has already signed a number of Memorandum of Understanding with various Organizations/Institutions and Industries for enhancing technical know how for the betterment of the students.
           </p>
         <p  style={{  textAlign: 'left' }}>I genuinely feel that the overall experience of the students, faculties and staff at GCOEC shall be fulfilling journey and the Institute shall scale newer heights in the coming years.


        </p>
        <h5 style= { {color: "white "}}>
          Thank You....</h5>
      </div>
    </div>

    
  );
}

export default ContentComponent1;
