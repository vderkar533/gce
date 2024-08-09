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

  const passportSizePhotoStyle = {
    width: '100px', // Adjusted for a larger size
    height: '100px', // Adjusted for a larger size
    objectFit: 'cover',
    borderRadius: '10px', // Added a border radius for a subtle roundness
  };

  return (
    <section id="about" style={{ backgroundColor: '#f0f0f0', padding: '30px', borderRadius: '15px', margin: '20px 0', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)' }} className="fade-in">
      <div style={{ margin: '60px' }}>
        <h1 style={{ fontSize: '36px', marginBottom: '30px', color: 'red', fontWeight: 'bold', textTransform: 'uppercase', textAlign: 'center' }}>Non-Teaching Staff</h1>

        {/* Teacher Table */}
        <table style={teacherTableStyle}>
          <thead>
            <tr>
              <th style={{ ...teacherCellStyle, ...redText }}>Name</th>
              <th style={{ ...teacherCellStyle, ...redText }}>Designation</th>
              <th style={{ ...teacherCellStyle, ...redText }}>Photo</th>
              <th style={{ ...teacherCellStyle, ...redText }}>Information</th>
            </tr>
          </thead>
          <tbody>
            {/* Teacher 1 */}
            <tr>
              <td style={{ ...teacherCellStyle, ...grayText }}>Mr.Pravin.V.Bhakre</td>
              <td style={{ ...teacherCellStyle, ...grayText }}>Data Entry Operator</td>
              <td style={teacherCellStyle}>
                <img src="bhake.jpg" alt="Teacher 1" style={passportSizePhotoStyle} />
              </td>
              <td style={{ ...teacherCellStyle, ...grayText }}>
                <p>
                  Qualification: B.com, CCCO, CCCP
                </p>
                <p>Experience: 25 Years</p>
                <p>Email Id: bhake_praveen@rediffmail.com</p>
                {/* Add more details if needed */}
              </td>
            </tr>

            {/* Teacher 2 */}
            <tr>
              <td style={{ ...teacherCellStyle, ...grayText }}> Mr. Ramesh S. Banait</td>
              <td style={{ ...teacherCellStyle, ...grayText }}>Chargeman</td>
              <td style={teacherCellStyle}>
                <img src="banait.jpg" alt="Teacher 2" style={passportSizePhotoStyle} />
              </td>
              <td style={{ ...teacherCellStyle, ...grayText }}>
                <p>
                  Qualification: H,Sc. ITI
                </p>
                <p>Experience: 30 Years</p>
                <p>Email Id: rsbanait68@gmail.com</p>
                {/* Add more details if needed */}
              </td>
            </tr>

            {/* Teacher 3 */}
            <tr>
              <td style={{ ...teacherCellStyle, ...grayText }}>Mr. Vijay Deorao Randale</td>
              <td style={{ ...teacherCellStyle, ...grayText }}>Jr. Cleark</td>
              <td style={teacherCellStyle}>
                <img src="randale.jpg" alt="Teacher 3" style={passportSizePhotoStyle} />
              </td>
              <td style={{ ...teacherCellStyle, ...grayText }}>
                <p>
                  Qualification: H,Sc.
                </p>
                <p>Experience: 28 Years</p>
                <p>Email Id: vijayrandale2@gmail.com</p>
                {/* Add more details if needed */}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default PandeAboutSection;
