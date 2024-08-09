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
        <h1 style={{ fontSize: '36px', marginBottom: '30px', color: 'red', fontWeight: 'bold', textTransform: 'uppercase', textAlign: 'center' }}>Visiting Faculty</h1>

        {/* Teacher Table */}
        <table style={teacherTableStyle}>
          <thead>
            <tr>
              <th style={{ ...teacherCellStyle, ...redText }}>Name</th>
              <th style={{ ...teacherCellStyle, ...redText }}>Designation</th>
              <th style={{ ...teacherCellStyle, ...redText }}>Photo</th>
            </tr>
          </thead>
          <tbody>
            {/* Teacher 1 */}
            <tr>
              <td style={{ ...teacherCellStyle, ...grayText }}>Prof.Suraj Bankar</td>
              <td style={{ ...teacherCellStyle, ...grayText }}>Visiting Faculty</td>
              <td style={teacherCellStyle}>
                <img src="suraj.jpeg" alt="Teacher 1" style={passportSizePhotoStyle} />
              </td>
              <td style={{ ...teacherCellStyle, ...grayText }}>
                {/* Add more details if needed */}
              </td>
            </tr>

            {/* Teacher 2 */}
            <tr>
              <td style={{ ...teacherCellStyle, ...grayText }}>Prof.Jayanti.Chaubey</td>
              <td style={{ ...teacherCellStyle, ...grayText }}>Visiting Faculty</td>
              <td style={teacherCellStyle}>
                <img src="[PhotoURL]" alt="Teacher 2" style={passportSizePhotoStyle} />
              </td>
              <td style={{ ...teacherCellStyle, ...grayText }}>
                {/* Add details for Teacher 2 here */}
              </td>
            </tr>

            {/* Teacher 3 */}
            <tr>
              <td style={{ ...teacherCellStyle, ...grayText }}>Prof.Priya Malkhede</td>
              <td style={{ ...teacherCellStyle, ...grayText }}>Visiting Faculty</td>
              <td style={teacherCellStyle}>
                <img src="[PhotoURL]" alt="Teacher 3" style={passportSizePhotoStyle} />
              </td>
              <td style={{ ...teacherCellStyle, ...grayText }}>
                {/* Add details for Teacher 3 here */}
              </td>
            </tr>

            <tr>
              <td style={{ ...teacherCellStyle, ...grayText }}>Prof.Monica Khatri</td>
              <td style={{ ...teacherCellStyle, ...grayText }}>Visiting Faculty</td>
              <td style={teacherCellStyle}>
                <img src="monica.jpeg" alt="Teacher 4" style={passportSizePhotoStyle} />
              </td>
              <td style={{ ...teacherCellStyle, ...grayText }}>
                {/* Add details for Teacher 4 here */}
              </td>
            </tr>

            <tr>
              <td style={{ ...teacherCellStyle, ...grayText }}>Prof.Kalyani Kadukar</td>
              <td style={{ ...teacherCellStyle, ...grayText }}>Visiting Faculty</td>
              <td style={teacherCellStyle}>
                <img src="[PhotoURL]" alt="Teacher 4" style={passportSizePhotoStyle} />
              </td>
              <td style={{ ...teacherCellStyle, ...grayText }}>
                {/* Add details for Teacher 4 here */}
              </td>
            </tr>


            <tr>
              <td style={{ ...teacherCellStyle, ...grayText }}>Prof.Tejaswini Akkulwar</td>
              <td style={{ ...teacherCellStyle, ...grayText }}>Visiting Faculty</td>
              <td style={teacherCellStyle}>
                <img src="[PhotoURL]" alt="Teacher 4" style={passportSizePhotoStyle} />
              </td>
              <td style={{ ...teacherCellStyle, ...grayText }}>
                {/* Add details for Teacher 4 here */}
              </td>
            </tr>

            {/* Teacher 4 */}
            <tr>
              <td style={{ ...teacherCellStyle, ...grayText }}>Prof.Saket Kotpalliwar</td>
              <td style={{ ...teacherCellStyle, ...grayText }}>Visiting Faculty</td>
              <td style={teacherCellStyle}>
                <img src="[PhotoURL]" alt="Teacher 4" style={passportSizePhotoStyle} />
              </td>
              <td style={{ ...teacherCellStyle, ...grayText }}>
                {/* Add details for Teacher 4 here */}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default PandeAboutSection;