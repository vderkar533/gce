import React from 'react';

function VivYourComponent() {
  const containerStyle = {
    width: '100%',
    padding: '0px',
  };

  const sectionStyle = {
    padding: '50px',
    border: '1px solid #ddd',
    margin: '10px',
    backgroundColor: 'red',
  };

  const section1Style = {
    backgroundColor: '#828282',
    display: 'flex', // Make the section a flex container
    flexDirection: 'column', // Arrange items in a column
    alignItems: 'center', // Center items horizontally
  };

  const cardStyle = {
    flex: '1', // Each card takes half the width
    padding: '50px',
    border: '1px solid #ddd',
    backgroundColor: '#BFBFBF',
    margin: '10px',
    width: '1000px',
    height: '100px',
  };

  const paragraphStyle = {
    lineHeight: '1.5', // Adjust the line height here
  };

  return (
    <div style={containerStyle}>
      <div style={{ ...sectionStyle, ...section1Style }}>
        <h2>ADMISSION PROCESS</h2>
        <br />
        <br />
        <div style={cardStyle}>
          <h2>First Year Engineering</h2>
          <p style={paragraphStyle}>Admissions to First Year Engineering are done by Director of Technical Education (DTE) Maharashtra State. These admissions are given on the basis of Common Engineering Entrance Test every year. Rules and regulations for these admissions are decided by DTE and Notifications and schedule for various online rounds/counseling round declared by DTE time to time. Details are available on DTE website <a href="http://www.dtemaharashtra.gov.in/">http://www.dtemaharashtra.gov.in/</a></p>
        </div>
        <div style={cardStyle}>
          <h2>Direct Second Year Engineering</h2>
          <p style={paragraphStyle}>Admissions to direct second year engineering after post SSC/HSC Diploma in Engineering for those students who have secured a minimum of 60% marks in the final year Diploma examination conducted by MSBTE are made by DTE on the basis of their final year diploma merit. Details for these admissions are available on DTE website <a href="http://www.dtemaharashtra.gov.in/">http://www.dtemaharashtra.gov.in/</a></p>
        </div>
      </div>
     
    </div>
  );
}

export default VivYourComponent;
