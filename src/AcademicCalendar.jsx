import React from 'react';

const AcademicCalendar = () => {
  const academicEvents = [
    { month: 'December', events: ['Code Unnati coding program resumes , selection of TechnoUtsav committee'] },
    { month: 'January', events: ['  TechnoUtsav,Sports day preparations , CodeVita tests'] },
    { month: 'February', events: ['Abhiranga Planning and distribution of work , entries for the post of coordinators'] },
    { month: 'March', events: ['Abhiranga'] },
  ];

  return (
    <div className="container-fluid bg-light">
      <div
        id="eventCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
        style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', marginBottom: '30px' }}
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="pexels-teddy-yang-2263436.jpg"
              className="d-block w-100"
              style={{ height: '500px' }}
              alt="Carousel Slide"
            />
          </div>
        </div>
      </div>

      <div className="container my-5">
        <div className="row">
          <div className="col-md-6">
            <img src="fc.png" alt="Sample Photo" className="img-fluid" />
          </div>
          <div className="col-md-6">
            <p>
              Abhiranga is the main event of the Institute every year. It is held in the month of February or March in order to maintain the institute's cultural legacy. Every student is given a fair chance in this event to showcase their talent and skills in various dance forms, arts, etc.
            </p>
            <div className="d-flex justify-content-center">
              <button type="button" className="btn btn-outline-danger">
                Explore
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <div className="row">
          <div className="col-md-6">
            <img src="tfc.jpeg" alt="Sample Photo" className="img-fluid" />
          </div>
          <div className="col-md-6">
            <p>
              TechnoUtsav is also one of the main events of the Institute every year. It is held in the month of January in order to maintain the institute's technical legacy. Every student is given a fair chance in this event to showcase their technical skills in various technological forms and competitions, etc.
            </p>
            <div className="d-flex justify-content-center">
              <button type="button" className="btn btn-outline-danger">
                Explore
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Academic Events */}
      <div className="container mt-5 p-4 rounded" style={{ backgroundColor: '#343a40', color: '#dc3545', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <h2 className="mb-4 text-center">Upcoming Events</h2>
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {academicEvents.map((monthData, index) => (
            <div key={index} className="col">
              <div className="card h-100 shadow" style={{ backgroundColor: '#dc3545', color: 'white', borderRadius: '20px', overflow: 'hidden' }}>
                <div className="card-header">
                  <h3 className="mb-0">{monthData.month}</h3>
                </div>
                <ul className="list-group list-group-flush">
                  {monthData.events.map((event, eventIndex) => (
                    <li key={eventIndex} className="list-group-item d-flex justify-content-between align-items-center">
                      {event}
                      <span className="badge bg-warning text-dark">New</span>
                      <button className="btn btn-light btn-sm">Learn More</button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AcademicCalendar;
