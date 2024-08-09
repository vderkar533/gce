import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Innovation() {
  return (
    <div className="container mt-5"> 
      <h5>Header H5 Tag</h5>
      <button className="btn btn-primary">View More</button>
      <h7>Header H7 Tag</h7>

      <div className="row mt-3">
        <div className="col-sm">
          <div className="card">
            <img src="911.jpg" className="card-img-top" alt="Card 1" />
            <div className="card-body">
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <button className="btn btn-info">Read More</button>
            </div>
          </div>
        </div>
        <div className="col-sm">
          <div className="card">
            <img src="912.jpg" className="card-img-top" alt="Card 2" />
            <div className="card-body">
              <p className="card-text">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <button className="btn btn-info">Read More</button>
            </div>
          </div>
        </div>
        <div className="col-sm">
          <div className="card">
            <img src="913.jpg" className="card-img-top" alt="Card 3" />
            <div className="card-body">
              <p className="card-text">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <button className="btn btn-info">Read More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Innovation;
