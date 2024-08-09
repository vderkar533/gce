import React, { useState, useEffect } from 'react';

function ContentComponent() {
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
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'justify',
    margin: '10px',
    padding: '150px',
    border: '1px solid #ccc',
    transition: 'transform 0.5s ease-in-out', // Add a transition for smooth animation
    transform: loaded ? 'translateX(0)' : 'translateX(-100%)', // Initial position off-screen
    backgroundColor: 'grey',
  };

  const imageStyle = {
    // maxWidth: '200%',
    // marginBottom: '20px',
  };

  return (
    <div style={containerStyle}>
      <h1>About Institute</h1>
      <hr style={{ border: '1px dotted #000', width: '70%' }} />
      <br />
      <br />
      <img src="78.jpg" alt="Your Image" style={imageStyle} />
      <br />
      <br />
      <p style= { {color: "#EAE5ED "}}>
        Government College of Engineering Chandrapur is established in 1996. This is the only Government Institute under Gondwana University, Gadchiroli. This Government institute is completely funded by the Government of Maharashtra. The Institute is under Director of Technical Education, M.S., Mumbai and is administered through its Regional office at Nagpur. Nowadays, due to globalization, there is stiff competition at the national & international level as well as phenomenal growth in technology. For this, competent technocrats & engineers are in great demand, and to serve this requirement, Government College of Engineering, Chandrapur, is taking efforts to produce high-quality technocrats.
      </p>
    </div>
  );
}

export default ContentComponent;
