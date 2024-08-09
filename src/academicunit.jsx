import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useInView } from 'react-intersection-observer';


const ServicesSection = () => {
  const btnSecondaryStyle = {
    backgroundColor: 'red',
    borderColor: 'transparent',
    color: 'white',
    borderBottom: 'none',
  };

  const gridItemStyle = {
    backgroundColor: '#f8f9fa',
    padding: '10px',
    marginBottom: '20px',
    textAlign: 'center',
    border: '2px solid transparent',
  };

  const iconSize = '3rem';

  const academicUnitTextStyle = {
    fontWeight: 'bold',
    fontSize: '1.8rem',
    marginBottom: '20px',
  };

  const gridContainerStyle = {
    marginTop: '70px',
    marginBottom: '70px',
  };

  const innovationsTextStyle = {
    fontSize: '1.8rem',
    textAlign: 'left',
  };

  return (
    <section id="services" className="container">
      <h5 className="display-4 text-center mt-5 mb-3" style={academicUnitTextStyle}>
        Academic Units
      </h5>

      {/* Horizontal Grid of Four Items */}
      <div className="row" style={gridContainerStyle}>
        <GridItem title="Departments" icon="bi bi-rocket" style={{ ...gridItemStyle, fontSize: iconSize }} />
        <GridItem title="Centres" icon="bi bi-buildings" style={{ ...gridItemStyle, fontSize: iconSize }} />
        <GridItem title="Schools" icon="bi bi-building" style={{ ...gridItemStyle, fontSize: iconSize }} />
        <GridItem title="Centre of Excellence" icon="bi bi-lightning" style={{ ...gridItemStyle, fontSize: iconSize }} />
      </div>

      <h5 className="display-4 text-left mt-5 mb-3" style={innovationsTextStyle}>
        Innovations @GCOEC
      </h5>

      <div className="row text-center">
        {/* Service Cards */}
        <ServiceCard
          
          imgSrc="911.jpg"
          title={"Conveyor Belt"}
          description="Conveyor systems are mechanical structures that transport material from one location to another. It consists of drive mechanisms such as motors to move a transport material, commonly a belt. The material is carried by the belt and follows the belt movement to move to the target location. Additional components can include chains, rollers, pulleys, and wheels."
          // buttonText="Read More"
          // btnStyle={btnSecondaryStyle}
        />
        <ServiceCard
        
          imgSrc="912.jpg"
          title={"Robotics"}
          description="Robotics is a branch of engineering and science that includes electronics engineering, mechanical engineering and computer science and so on. This branch deals with the design, construction, use to control robots, sensory feedback and information processing. These are some technologies which will replace humans and human activities in coming future."
          // buttonText="Read More"
          // btnStyle={btnSecondaryStyle}
        />
        <ServiceCard
       
          imgSrc="913.jpg"
          title={"Industrial Equipments"}
          description="Instrumentation and control engineering (ICE) is a branch of engineering that studies the measurement and control of process variables, and the design and implementation of systems that incorporate them. Process variables include pressure, temperature, humidity, flow, pH, force and speed.

          ICE combines two branches of engineering. "
          // buttonText="Read More"
          // btnStyle={btnSecondaryStyle}
        />
      </div>
    </section>
  );
};

const ServiceCard = ({ imgSrc, description,title, buttonText, btnStyle }) => {
  const cardWrapperStyle = {
    border: '2px solid rgba(255, 255, 255, 0.5)',
    borderRadius: '10px',
    borderBottom: 'none',
    textAlign: 'justify', // Align text to the left
    
  };

  const cardFooterStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderTop: 'none',
  };

  return (
    <div className="col-md-4 mb-4" style={cardWrapperStyle}>
      <div className="card h-100">
        
        <img className="card-img-top" src={imgSrc} alt="Service" />
        <br />
        <div className='card-title'style={{ textAlign: 'center', fontWeight: 'bold' }}>
        <p className="card-title">{title}</p>
        </div>
        <div className="card-body">
          <p className="card-text">{description}</p>
        </div>
        <div className="card-footer py-4" style={cardFooterStyle}>
          {/* <a href="#" className="btn btn-secondary" style={btnStyle}>
            {buttonText}
          </a> */}
        </div>
      </div>
    </div>
  );
};

const GridItem = ({ title, icon, style }) => {
  const cardWrapperStyle = {
    border: '2px solid rgba(255, 255, 255, 0.5)',
    borderRadius: '10px',
    borderBottom: 'none',
  };

  return (
    <div className="col-md-3 mb-4" style={cardWrapperStyle}>
      <div className="card h-100" style={style}>
        <div className="card-body">
          <i className={icon} style={{ fontSize: style.fontSize }}></i>
          <h4 className="card-title">{title}</h4>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
