import React from 'react';

const PandeAboutSection = () => {
  const teacherTableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    margin: '20px 0',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
  };

  const teacherCellStyle = {
    border: '1px solid #ddd',
    padding: '8px',
    textAlign: 'left',
  };

  const redText = {
    color: 'red',
  };

  const grayText = {
    color: 'gray',
  };

  return (
    <section
      id="about"
      style={{
        backgroundColor: '#f0f0f0',
        padding: '30px',
        borderRadius: '15px',
        margin: '20px 0',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
      }}
      className="fade-in"
    >
      <div style={{ margin: '60px' }}>
        <h1
          style={{
            fontSize: '36px',
            marginBottom: '30px',
            color: 'red',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            textAlign: 'center',
          }}
        >
          Descriptive Overview
        </h1>

        {/* Teacher Table */}
        <table style={teacherTableStyle}>
          <thead>
            <tr>
              <th style={{ ...teacherCellStyle, ...redText }}>Sr.No</th>
              <th style={{ ...teacherCellStyle, ...redText }}>Description</th>
              <th style={{ ...teacherCellStyle, ...redText }}>Total</th>
              {/* Remove the last column header */}
            </tr>
          </thead>
          <tbody>
            {/* Teacher 1 */}
            <tr>
              <td style={{ ...teacherCellStyle, ...grayText }}>1</td>
              <td style={{ ...teacherCellStyle, ...grayText }}>No. of Class Rooms</td>
              {/* Remove the last column with the image */}
              <td style={{ ...teacherCellStyle, ...grayText }}>
                <p>02</p>
                {/* Add more details if needed */}
              </td>
            </tr>

            {/* Teacher 2 */}
            <tr>
              <td style={{ ...teacherCellStyle, ...grayText }}> 2</td>
              <td style={{ ...teacherCellStyle, ...grayText }}>No. of Laboratories</td>
              {/* Remove the last column with the image */}
              <td style={{ ...teacherCellStyle, ...grayText }}>
                
                <p>04</p>
              
                {/* Add more details if needed */}
              </td>
            </tr>

            {/* Teacher 3 */}
            <tr>
              <td style={{ ...teacherCellStyle, ...grayText }}>3</td>
              <td style={{ ...teacherCellStyle, ...grayText }}>Faculty Cabins</td>
              {/* Remove the last column with the image */}
              <td style={{ ...teacherCellStyle, ...grayText }}>
            
                <p>03</p>
                {/* Add more details if needed */}
              </td>
            </tr>


            <tr>
              <td style={{ ...teacherCellStyle, ...grayText }}>4</td>
              <td style={{ ...teacherCellStyle, ...grayText }}>No. of Computers</td>
              {/* Remove the last column with the image */}
              <td style={{ ...teacherCellStyle, ...grayText }}>
            
                <p>100</p>
                {/* Add more details if needed */}
              </td>
            </tr>

            <tr>
              <td style={{ ...teacherCellStyle, ...grayText }}>5</td>
              <td style={{ ...teacherCellStyle, ...grayText }}>Smart Boards</td>
              {/* Remove the last column with the image */}
              <td style={{ ...teacherCellStyle, ...grayText }}>
            
                <p>02</p>
                {/* Add more details if needed */}
              </td>
            </tr>


          </tbody>
        </table>

        {/* Add text area in the third column */}
        
      </div>
    </section>
  );
};

export default PandeAboutSection;
