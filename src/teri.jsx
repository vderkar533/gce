import React from 'react';

function PhotoAndTableComponentccx() {
  const people = [
    // { name: 'John Doe', age: 30, link: 'https://example.com/johndoe' },
    // { name: 'Jane Doe', age: 28, link: 'https://example.com/janedoe' },
    // Add more people as needed
  ];

  return (
    <div>
      <img src="techno_poster.jpeg" alt="Description of Image" style={{ width: '100%', display: 'block', marginBottom: '20px' }} />
      {/* <table style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ borderBottom: '1px solid #ddd', padding: '8px' }}>Name</th>
            <th style={{ borderBottom: '1px solid #ddd', padding: '8px' }}>Age</th>
            <th style={{ borderBottom: '1px solid #ddd', padding: '8px' }}>Link</th>
          </tr>
        </thead>
        <tbody>
          {people.map((person, index) => (
            <tr key={index}>
              <td style={{ borderBottom: '1px solid #ddd', padding: '8px' }}>{person.name}</td>
              <td style={{ borderBottom: '1px solid #ddd', padding: '8px' }}>{person.age}</td>
              <td style={{ borderBottom: '1px solid #ddd', padding: '8px' }}>
                <a href={person.link} target="_blank" rel="noopener noreferrer">Profile</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table> */}
    </div>
  );
}

export default PhotoAndTableComponentccx;
