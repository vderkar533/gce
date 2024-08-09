import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function ContactInformation() {
  return (
    <div className="container mt-4">
      <h4 style={{ paddingBottom: '50px' }}>HOD's AND OTHER INFORMATION</h4>

      <table className="table table-bordered table-striped"  >
        <thead>
          <tr>
            <th>Sr.No.</th>
            <th>Name of Department</th>
            <th>Name of Head of Dept.</th>
            <th>Mobile Number</th>
            <th>E-mail</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mechanical Engineering</td>
            <td>Dr. Sanjay Wasudeorao Rajurkar</td>
            <td>8888072293</td>
            <td>sanjayrajurkar@gcoec.ac.in</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Electrical Engineering</td>
            <td>Dr. Anant Prataprao Deshpande</td>
            <td>9850776283</td>
            <td>anantdeshpande@gcoec.ac.in</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Instrumentation  Engineering</td>
            <td>Dr. Dilip Kisan Maghade</td>
            <td>9881277093</td>
            <td>dilipmaghade@gcoec.ac.in

</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Computer Science & Engineering</td>
            <td>Prof. Chandrapal Chauhan</td>
            <td>8956022197</td>
            <td>cchauhan@gcoec.ac.in</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Civil Engineering</td>
            <td>Prof. Rajesh Tukaram Peche</td>
            <td>9763315744</td>
            <td>rajeshpeche@gcoec.ac.in</td>
          </tr>
          <tr>
            <td>6</td>
            <td>Electronics & Telecommunication Engineering</td>
            <td>Prof. Hasan Mohsin Raza</td>
            <td>9421939356</td>
            <td>hasanraza@gcoec.ac.in</td>
          </tr>


          {/* Add similar rows for other departments */}
        </tbody>
      </table>

      <h4 style={{ paddingBottom: '30px' }}>TRAINING AND PLACEMENT</h4>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Training & Placement Officer</th>
            <th>Dr. Pandurang Shahaji Londhe</th>
            <th>9028521683</th>
            <th>panduranglondhe@gcoec.ac.in</th>
          </tr>
        </thead>
      </table>

      <h4 style={{ paddingBottom: '30px' }}>GONDWANA UNIVERSITY, GADCHIROLI</h4>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Chief Co-ordinator</th>
            <th>Dr. Lalit Pandurang Dhole</th>
            <th>9421495596</th>
            <th>lalitdhole@gcoec.ac.in</th>
          </tr>
        </thead>
      </table>
    </div>
  );
}

export default ContactInformation;
