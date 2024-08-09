import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const FullscreenCarousel = () => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 3000, // Change this value for the desired autoplay speed in milliseconds
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const images = [
    'ra.jpeg', // Replace with your image URLs
    'ctt.jpeg', // Replace with your image URLs
  ];

  return (
    <div style={{ width: '100%', height: '100vh', background : 'black', }}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={`Image ${index + 1}`}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default FullscreenCarousel;
