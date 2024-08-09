import React, { useState } from 'react';

const CollegePhotoGallery = () => {
  const photoData = [
    {
      src: 's1.jpg',
      description: 'Notice board',
    },
    {
      src: 's2.jpg',
      description: 'CIIIT',
    },
    {
      src: 's3.jpg',
      description: 'Garden',
    },
    {
      src: 's4.jpg',
      description: 'Sitting area',
    },
    {
      src: 's5.jpg',
      description: 'Corridors',
    },
    {
      src: 's6.jpg',
      description: 'Staff Cabins',
    },
    {
      src: 's7.jpg',
      description: 'Labs',
    },
    {
      src: 's8.jpg',
      description: 'SC & ST development lab',
    },
    {
      src: 's9.jpg',
      description: 'AICTE',
    },
  ];

  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const openModal = (photo) => {
    setSelectedPhoto(photo);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
  };

  const photoStyle = {
    cursor: 'pointer',
    transition: 'transform 0.3s, filter 0.3s',
    filter: 'grayscale(0%)', // Initial grayscale value
  };

  const hoverEffect = {
    transform: 'scale(1.1)',
    filter: 'grayscale(50%)', // Adjust grayscale value on hover
  };

  const gridContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '1px', // Adjusted horizontal gap
    justifyContent: 'center', // Center-align the grid
  };

  const titleStyle = {
    color: 'red',
    textAlign: 'center',
  };

  const modalStyle = {
    display: 'block',
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(169, 169, 169, 0.8)', // Gray background color
  };

  const modalContentStyle = {
    margin: '10% auto',
    width: '80%',
    maxWidth: '800px',
    textAlign: 'center',
  };

  const enlargedPhotoStyle = {
    width: '80%',
    maxHeight: '60vh', // Adjust the maximum height as needed
  };

  return (
    <div className="container mt-5">
      <h2 style={titleStyle} className="text-center mb-4">Department Photo Gallery</h2>

      <div style={gridContainerStyle}>
        {photoData.map((photo, index) => (
          <div key={index} style={photoStyle}>
            <div
              className="card"
              onClick={() => openModal(photo)}
              onMouseOver={(e) => (e.currentTarget.style = { ...photoStyle, ...hoverEffect })}
              onMouseOut={(e) => (e.currentTarget.style = photoStyle)}
            >
              <img
                src={photo.src}
                className="card-img-top"
                alt={`College Photo ${index + 1}`}
              />
              <div className="card-body">
                <p className="card-text text-white">{photo.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for Large Photo */}
      {selectedPhoto && (
        <div style={modalStyle} onClick={closeModal}>
          <div
            style={modalContentStyle}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedPhoto.src}
              className="img-fluid"
              alt={selectedPhoto.description}
              style={enlargedPhotoStyle}
            />
            <div className="mt-3">
              <p className="text-white">{selectedPhoto.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CollegePhotoGallery;
