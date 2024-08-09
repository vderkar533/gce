import React from 'react';

function Appwa() {
  // Define the CSS styles as JavaScript objects
  const appStyles = {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '0px', // Add top margin
    marginBottom: '00px', // Add bottom margin
    backgroundColor: '#7A7A7A',
  };

  const tableStyles = {
    border: '2px solid black',
    width: '800px',
    height: '200px',
  };

  const thStyles = {
    borderBottom: '1px solid black',
  };

  const tdStyles = {
    textAlign: 'center',
  };

  const spaceStyles = {
    margin: '0px 0', // Add space above and below
  };

  return (
    <div style={appStyles} className="App">
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <br />
        <br />
        <h2 style= { {color: "white "}}>COURSES OFFERED</h2>
        <hr style={{ border: '1px dotted white', width: '100%' }} />
        <br />
        <br />
        <div style={spaceStyles}></div> 
        {/* First Table */}
        <h4 style= { {color: "white "}}>UG ( B.Tech ) Programmes Offered </h4>
        <h6 style= { {color: "white "}}>( B.Tech degree will be awarded instead of B.E. from A.Y. 2022-23 by Gondwana University)</h6>
        <br />
        <table style={tableStyles}>
          <thead>
            <tr>
              <th style={thStyles}>Name of Programme</th>
              <th style={thStyles}>Year of Establishment</th>
              <th style={thStyles}>Intake Capacity</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyles}>Mechanical Engg. [NBA ]</td>
              <td style={tdStyles}>1996</td>
              <td style={tdStyles}>60</td>
            </tr>
            <tr>
              <td style={tdStyles}>Electrical Engg. [NBA ]</td>
              <td style={tdStyles}>1996</td>
              <td style={tdStyles}>60</td>
            </tr>
            <tr>
              <td style={tdStyles}>Instrumentation Engg. [NBA ]</td>
              <td style={tdStyles}>1996</td>
              <td style={tdStyles}>60</td>
            </tr>
            <tr>
              <td style={tdStyles}>Computer Sci. & Engg.</td>
              <td style={tdStyles}>2007</td>
              <td style={tdStyles}>60</td>
            </tr>
            <tr>
              <td style={tdStyles}> Electronics & Tele. Engg.</td>
              <td style={tdStyles}>2010</td>
              <td style={tdStyles}>60</td>
            </tr>
            <tr>
              <td style={tdStyles}>  Civil Engg.</td>
              <td style={tdStyles}>2010</td>
              <td style={tdStyles}>60</td>
            </tr>
          </tbody>
        </table>
<br />
<br />
       {/* First Table */}
         <div style={spaceStyles}></div> 
        <h4 style= { {color: "white "}}>PG ( M.Tech ) Programmes Offered</h4>
        <br />

        <table style={tableStyles}>
          <thead>
            <tr>
              <th style={thStyles}>Name of Programme</th>
              <th style={thStyles}>Year of Establishment</th>
              <th style={thStyles}>Intake Capacity</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyles}>Electrical Power System</td>
              <td style={tdStyles}>2019</td>
              <td style={tdStyles}>18</td>
            </tr>
            <tr>
              <td style={tdStyles}>Mechanical Engineering Design</td>
              <td style={tdStyles}>2019</td>
              <td style={tdStyles}>18</td>
            </tr>
            
          </tbody>
        </table>
<br />
<br />
       {/* First Table */}
         <div style={spaceStyles}></div> 
        <h4 style= { {color: "white "}}>Ph.D Programmes Offered</h4>
        <br />
        <table style={tableStyles}>
          <thead>
            <tr>
              <th style={thStyles}> Name of Programme</th>
              <th style={thStyles}>Year of Establishment</th>
              <th style={thStyles}>Intake Capacity</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyles}>Electrical Power System</td>
              <td style={tdStyles}>2014</td>
              <td style={tdStyles}>10</td>
            </tr>
            <tr>
              <td style={tdStyles}>Mechanical Engineering Design</td>
              <td style={tdStyles}>2019</td>
              <td style={tdStyles}>10</td>
            </tr>
            
          </tbody>
        </table>
        <br />
        <br />
        <br /><br />
        
      </div>
    </div>
  );
}

export default Appwa;
