import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function VinayakTabs() {
  const [activeTab, setActiveTab] = useState('tab-1');
  const [activeSubTab, setActiveSubTab] = useState('subtab-1'); // Add state for sub-tabs


  const handleTabClick = (event, tabId) => {
    event.preventDefault();
    setActiveTab(tabId);
  };

  // Function to handle sub-tab click
  const handleSubTabClick = (event, subTabId) => {
    event.preventDefault();
    setActiveSubTab(subTabId);
  };


  return (
    <div className="site-wrapper" style={{backgroundColor : '#DDDDDD'}}>

      <section className="article-wrapper">
        <div className="article-container">
          <div className="article-block">
            <div
              className="entry-content"

            >
              <h1 style={{ paddingTop: '0px', color: 'black', fontFamily: "'Parisienne', cursive" }}>ADMINISTRATION</h1>
              <h5 style={{ color: 'black', fontFamily: "'Parisienne', cursive" }}>
                An Ultimate Guide to our College Administrators
              </h5>
              <br />
              <br />
            </div>

          </div>
        </div>
      </section>
      <section className="tabs-wrapper">
        <div className="tabs-container" style={{padding : '00px', marginRight : '100px',backgroundColor : '#DDDDDD'}}>
          <div className="tabs-block">
            <div id="tabs-section" className="tabs">
              <ul className="tab-head" style={{backgroundColor : '#A1A1A1 '}} >
                <li>
                  <a
                    href="#tab-1"
                    style={{
                      backgroundColor: activeTab === 'tab-1' ? '#666666 ' : 'inherit', // This changes the text color to grey if it's the active tab
                      // Add other styles as needed
                    }}
                    className={`tab-link ${activeTab === 'tab-1' ? 'active' : ''}`}
                    onClick={(event) => handleTabClick(event, 'tab-1')}
                  >
                    <span className="material-icons tab-icon">face</span>
                    <span className="tab-label">PRINCIPAL & HoD's</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#tab-2"
                    style={{
                      backgroundColor: activeTab === 'tab-2' ? '#666666 ' : 'inherit', // This changes the text color to grey if it's the active tab
                      // Add other styles as needed
                    }}
                    className={`tab-link ${activeTab === 'tab-2' ? 'active' : ''}`}
                    onClick={(event) => handleTabClick(event, 'tab-2')}
                  >
                    <span className="material-icons tab-icon">visibility</span>
                    <span className="tab-label">STUDENT SECTION</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#tab-3"
                    style={{
                      backgroundColor: activeTab === 'tab-3' ? '#666666 ' : 'inherit', // This changes the text color to grey if it's the active tab
                      // Add other styles as needed
                    }}
                    className={`tab-link ${activeTab === 'tab-3' ? 'active' : ''}`}
                    onClick={(event) => handleTabClick(event, 'tab-3')}
                  >
                    <span className="material-icons tab-icon">settings_input_hdmi</span>
                    <span className="tab-label">OFFICE</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#tab-4"
                    style={{
                      backgroundColor: activeTab === 'tab-4' ? '#666666 ' : 'inherit', // This changes the text color to grey if it's the active tab
                      // Add other styles as needed
                    }}
                    className={`tab-link ${activeTab === 'tab-4' ? 'active' : ''}`}
                    onClick={(event) => handleTabClick(event, 'tab-4')}
                  >
                    <span className="material-icons tab-icon">build</span>
                    <span className="tab-label">STAFF</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#tab-5"
                    style={{
                      backgroundColor: activeTab === 'tab-5' ? '#666666 ' : 'inherit', // This changes the text color to grey if it's the active tab
                      // Add other styles as needed
                    }}
                    className={`tab-link ${activeTab === 'tab-5' ? 'active' : ''}`}
                    onClick={(event) => handleTabClick(event, 'tab-5')}
                  >
                    <span className="material-icons tab-icon">toll</span>
                    <span className="tab-label">COMMITTEES & FORMS</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#tab-6"
                    style={{
                      backgroundColor: activeTab === 'tab-6' ? '#666666 ' : 'inherit', // This changes the text color to grey if it's the active tab
                      // Add other styles as needed
                    }}
                    className={`tab-link ${activeTab === 'tab-6' ? 'active' : ''}`}
                    onClick={(event) => handleTabClick(event, 'tab-6')}
                  >
                    <span className="material-icons tab-icon">work</span>
                    <span className="tab-label">TENDERS</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#tab-7"
                    style={{
                      backgroundColor: activeTab === 'tab-7' ? '#666666 ' : 'inherit', // This changes the text color to grey if it's the active tab
                      // Add other styles as needed
                    }}
                    className={`tab-link ${activeTab === 'tab-7' ? 'active' : ''}`}
                    onClick={(event) => handleTabClick(event, 'tab-7')}
                  >
                    <span className="material-icons tab-icon">payment</span>
                    <span className="tab-label">PAYMENTS</span>
                  </a>
                </li>
              </ul>

              <section
                id="tab-1"
                className={`tab-body entry-content ${activeTab === 'tab-1' ? 'active active-content' : ''}`}
              >
                <h2>PRINCIPAL</h2>
                <div className="principal-info">
                  <div className="column">
                    {/* Principal's photo */}
                    <img
                      src="principal23.jpg"
                      alt="Principal's Photo"

                    />
                  </div>
                  <div className="column">
                    {/* Principal's name */}
                    <p className="principal-name">Dr. Prashant V. Washimkar.</p>

                    {/* Contact, Email, and Education */}
                    <p>Contact: 9421495596</p>
                    <p>Email: lalitdhole@gcoec.ac.in</p>
                    <p>Education:  B.E., M. Tech., Ph.D.</p>
                  </div>

                </div>
                <h2>CHIEF CO-ORDINATOR , GONDWANA UNIVERSITY</h2>
                <div className="principal-info">
                  <div className="column">
                    {/* Principal's photo */}
                    <img
                      src="dhole.png"
                      alt="dhole sir's Photo"
                      style={{
                        borderRadius: '5%',
                        display: 'block',
                        margin: 'auto',
                      }}
                    />
                  </div>
                  <div className="column">
                    {/* Principal's name */}
                    <p className="principal-name">Dr. Lalit Dhole</p>

                    {/* Contact, Email, and Education */}
                    <p>Contact: 9421495596</p>
                    <p>Email: lalitdhole@gcoec.ac.in</p>
                    <p>Education: B.E., M. Tech., Ph.D.</p>
                  </div>
                </div>
                <h2>HEADS OF DEPARTMENT</h2>
                <ul className="sub-tab-head" >
                  <li>
                    <a
                      href="#subtab-1"
                      
                      className={`sub-tab-link ${activeSubTab === 'subtab-1' ? 'active' : ''}`}
                      onClick={(event) => handleSubTabClick(event, 'subtab-1')}
                      style={{ color: "white" }}
                    >
                      COMP. SCI. ENGINEERING
                    </a>
                  </li>
                  <li>
                    <a
                      href="#subtab-2"
                      className={`sub-tab-link ${activeSubTab === 'subtab-2' ? 'active' : ''}`}
                      onClick={(event) => handleSubTabClick(event, 'subtab-2')}
                      style={{ color: "white" }}
                    >
                      MECHANICAL ENGINEERING
                    </a>
                  </li>
                  <li>
                    <a
                      href="#subtab-3"
                      className={`sub-tab-link ${activeSubTab === 'subtab-3' ? 'active' : ''}`}
                      onClick={(event) => handleSubTabClick(event, 'subtab-3')}
                      style={{ color: "white" }}
                    >
                      CIVIL ENGINEERING
                    </a>
                  </li>
                  <li>
                    <a
                      href="#subtab-4"
                      className={`sub-tab-link ${activeSubTab === 'subtab-4' ? 'active' : ''}`}
                      onClick={(event) => handleSubTabClick(event, 'subtab-4')}
                      style={{ color: "white" }}
                    >
                      ELECTRICAL ENGINEERING
                    </a>
                  </li>
                  <li>
                    <a
                      href="#subtab-5"
                      className={`sub-tab-link ${activeSubTab === 'subtab-5' ? 'active' : ''}`}
                      onClick={(event) => handleSubTabClick(event, 'subtab-5')}
                      style={{ color: "white" }}
                    >
                      E&Tc ENGINEERING
                    </a>
                  </li>
                  <li>
                    <a
                      href="#subtab-6"
                      className={`sub-tab-link ${activeSubTab === 'subtab-6' ? 'active' : ''}`}
                      onClick={(event) => handleSubTabClick(event, 'subtab-6')}
                      style={{ color: "white" }}
                    >
                      INSTRUMENTATION ENGINEERING
                    </a>
                  </li>
                </ul>



                {/* Sub-tab content */}
                <section
                  id="subtab-1"
                  className={`sub-tab-body ${activeSubTab === 'subtab-1' ? 'active active-content' : ''}`}
                >

                  <h3>DEPARTMENT OF COMPUTER SCIENCE ENGINEERING</h3>


                  <div className="principal-inf">

                    <div className="column">
                      {/* Principal's photo */}
                      <img src="SUChauhvan.jpg" alt="Principal's Photo" />
                    </div>

                    <div className="column">
                      {/* Principal's name */}
                      <p className="principal-name">Prof. C. U. Chauhan</p>
                      {/* Contact, Email, and Education */}
                      <p>Contact: 8308069816</p>
                      <p>Email: -chandrapalchauhan@gcoec.ac.in</p>
                      <p>Education: M. Tech. (CSE)</p>
                    </div>

                  </div>.


                </section>
                <section
                  id="subtab-2"
                  className={`sub-tab-body ${activeSubTab === 'subtab-2' ? 'active active-content' : ''}`}
                >
                  <h3>DEPARTMENT OF MECHANICAL ENGINEERING</h3>
                  <p>

                    <div className="principal-inf">

                      <div className="column">
                        {/* Principal's photo */}
                        <img src="mech hod (1).jpg" alt="mech hod's Photo" />
                      </div>

                      <div className="column">
                        {/* Principal's name */}
                        <p className="principal-name">	Dr. RAJURKAR WASUDEORAO SANJAY</p>
                        {/* Contact, Email, and Education */}
                        <p>Contact: 8308069816</p>
                        <p>Email: -sanjayrajurkar@gcoec.ac.in</p>
                        <p>Education:B.E., M. E., Ph. D.</p>
                      </div>

                    </div>.
                  </p>
                </section>
                <section
                  id="subtab-3"
                  className={`sub-tab-body ${activeSubTab === 'subtab-3' ? 'active active-content' : ''}`}
                >
                  <h3>DEPARTMENT OF CIVIL ENGINEERING</h3>
                  <div className="principal-inf">

                    <div className="column">
                      {/* Principal's photo */}
                      <img src="peche (1).png" alt="Peche sir's Photo" />
                    </div>

                    <div className="column">
                      {/* Principal's name */}
                      <p className="principal-name">	Prof. R. T. Peche</p>
                      {/* Contact, Email, and Education */}
                      <p>Contact: 8308069816</p>
                      <p>Email: -peche.rajesh@gmail.com</p>
                      <p>Education: M. Tech [Environmental Engineering]</p>
                    </div>

                  </div>.
                </section>
                <section
                  id="subtab-4"
                  className={`sub-tab-body ${activeSubTab === 'subtab-4' ? 'active active-content' : ''}`}
                >
                  <h3>DEPARTMENT OF ELECTRICAL ENGINEERING</h3>
                  <div className="principal-inf">

                    <div className="column">
                      {/* Principal's photo */}
                      <img src="more maam (1).jpg" alt="more maam's Photo" />
                    </div>

                    <div className="column">
                      {/* Principal's name */}
                      <p className="principal-name">	Prof. Trupti F. More</p>
                      {/* Contact, Email, and Education */}
                      <p>Contact: 8308069816</p>
                      <p>Email: -truptimore_81@rediffmail.com</p>
                      <p>Education: M. E. (Electrical Power System)</p>
                    </div>

                  </div>.
                </section>
                <section
                  id="subtab-5"
                  className={`sub-tab-body ${activeSubTab === 'subtab-5' ? 'active active-content' : ''}`}
                >
                  <h3>DEPARTMENT OF E&Tc ENGINEERING</h3>
                  <div className="principal-inf">
                    <div className="column">
                      {/* Principal's photo */}
                      <img src="raza (1).jpg" alt="raza sir's Photo" />
                    </div>
                    <div className="column">
                      {/* Principal's name */}
                      <p className="principal-name">Prof.
                        Hasan Mohsin Raza</p>

                      {/* Contact, Email, and Education */}
                      <p>Contact: 123-456-7890</p>
                      <p>Email: 	hmraza@gmail.com</p>
                      <p>Education: M.Tech., Ph.D.(Pursuing)</p>
                    </div>
                  </div>
                </section>
                <section
                  id="subtab-6"
                  className={`sub-tab-body ${activeSubTab === 'subtab-6' ? 'active active-content' : ''}`}
                >
                  <h3>DEPARTMENT OF INSTRUMENTATION ENGINEERING</h3>
                  <div className="principal-inf">

                    <div className="column">
                      {/* Principal's photo */}
                      <img src="instru hod (1).jpg" alt="yewale sir's Photo" />
                    </div>

                    <div className="column">
                      {/* Principal's name */}
                      <p className="principal-name">	Prof. Nishant M. Yewale</p>
                      {/* Contact, Email, and Education */}
                      <p>Contact: 8308069816</p>
                      <p>Email: nishantyewale78@gmail.com

                      </p>
                      <p>Education:
                        B. E. Instrumentation Engg. M. Tech.</p>
                    </div>

                  </div>.
                </section>

              </section>


              <section
                id="tab-2"
                className={`tab-body entry-content ${activeTab === 'tab-2' ? 'active active-content' : ''}`}
              >
                <ul className="sub-tab-head">
                  <li>
                    <a
                      href="#subtab-7"
                      className={`sub-tab-link ${activeSubTab === 'subtab-7' ? 'active' : ''}`}
                      onClick={(event) => handleSubTabClick(event, 'subtab-7')}
                      style={{ color: "white" }}
                    >
                      LIBRARY
                    </a>

                  </li>

                  <li>
                    <a
                      href="#subtab-8"
                      className={`sub-tab-link ${activeSubTab === 'subtab-8' ? 'active' : ''}`}
                      onClick={(event) => handleSubTabClick(event, 'subtab-8')}
                      style={{ color: "white" }}
                    >
                      GYMKHANA
                    </a>
                  </li>
                  <li>
                    <a
                      href="#subtab-9"
                      className={`sub-tab-link ${activeSubTab === 'subtab-9' ? 'active' : ''}`}
                      onClick={(event) => handleSubTabClick(event, 'subtab-9')}
                      style={{ color: "white" }}
                    >
                      TRAINING & PLACEMENT
                    </a>
                  </li>
                  <li>
                    <a
                      href="#subtab-10"
                      className={`sub-tab-link ${activeSubTab === 'subtab-10' ? 'active' : ''}`}
                      onClick={(event) => handleSubTabClick(event, 'subtab-10')}
                      style={{ color: "white" }}
                      
                    >
                      NSS
                    </a>
                  </li>
                </ul>

                {/* Sub-tab content */}
                <section
                  id="subtab-7"
                  className={`sub-tab-body ${activeSubTab === 'subtab-7' ? 'active active-content' : ''}`}
                >
                  <h3>LIBRARY AUTHORITY</h3>

                  <div className="principal-inf">
                    <div className="column">
                      {/* Principal's photo */}
                      <img src=".jpg" alt="librarian's Photo" />
                    </div>
                    <div className="column">
                      {/* Principal's name */}
                      <p className="principal-name">MS. Sheetal Zodpe</p>

                      {/* Contact, Email, and Education */}

                      <p>Email: library.gcoechandrapur@dtemaharashtra.gov.in</p>
                      <p>Education:B.Lib,M. Lib.,B.A.,M.Com.</p>
                      <p>Designation :- Head Librarian </p>
                    </div>
                  </div>
                </section>
                <section
                  id="subtab-8"
                  className={`sub-tab-body ${activeSubTab === 'subtab-8' ? 'active active-content' : ''}`}
                >
                  <h3>HEAD OF GYMKHANA</h3>
                  <div className="principal-inf">
                    <div className="column">
                      {/* Principal's photo */}
                      <img src="principal23.jpg" alt="gymkhana head's Photo" />
                    </div>
                    <br />
                    <br />
                    <div className="column">
                      {/* Principal's name */}
                      <p className="principal-name">
                        Dr. P. Washimkar</p>

                      {/* Contact, Email, and Education */}

                      <p>Email: principal.gcoechandrapur@dtemaharashtra.gov.in</p>
                      <p>Education:
                        B.E, M.Tech. Industrial Engg.</p>
                      <p>Designation :- Head of Gymkhana </p>
                    </div>
                  </div>

                </section>
                <section
                  id="subtab-9"
                  className={`sub-tab-body ${activeSubTab === 'subtab-9' ? 'active active-content' : ''}`}
                >
                  <h3>TRAINING & PLACEMENT</h3>
                  <div className="principal-inf">
                    <div className="column">
                      {/* Principal's photo */}
                      <img src="londhe sir (1).jpg" alt="Principal's Photo" />
                    </div>
                    <div className="column">
                      {/* Principal's name */}
                      <p className="principal-name">Dr. Pandurang Shahaji Londhe</p>

                      {/* Contact, Email, and Education */}
                      <p>Contact: 9028521683	</p>
                      <p>Email: panduranglondhe@gcoec.ac.in
                      </p>
                      <p>Education:
                        B.E., M. Tech., Ph. D. Instrumentation</p>
                      <p>Designation :- Training and placement officer </p>
                    </div>
                  </div>

                </section>
                <section
                  id="subtab-10"
                  className={`sub-tab-body ${activeSubTab === 'subtab-10' ? 'active active-content' : ''}`}
                >
                  <h3>NSS HEAD</h3>
                  <div className="principal-inf">
                    <div className="column">
                      {/* Principal's photo */}
                      <img src=".jpg" alt="NSS head's Photo" />
                    </div>
                    <div className="column">
                      {/* Principal's name */}
                      <p className="principal-name">Mrs. Sakhare</p>

                      {/* Contact, Email, and Education */}
                      <p>Contact: 9028521683	</p>
                      <p>Email: Sakhare@gcoec.ac.in
                      </p>
                      <p>Education:
                        B.E., M. Tech., Ph. D. </p>
                      <p>Designation :- NSS HEAD </p>
                    </div>
                  </div>

                </section>
              </section>


              <section
                id="tab-3"
                className={`tab-body entry-content ${activeTab === 'tab-3' ? 'active active-content' : ''}`}
              >
                <h2>OFFICE STAFF</h2>
                <p>
                  Details of the Heads of Clerical Staff working in main buiuding.
                </p>
                <ul className="sub-tab-head">
                  
                  <li>
                    <a
                      href="#subtab-11"
                      className={`sub-tab-link ${activeSubTab === 'subtab-11' ? 'active' : ''}`}
                      onClick={(event) => handleSubTabClick(event, 'subtab-11')}
                      style={{ color: "white" }}
                    >
                      OFFICE SUPERITENDENT
                    </a>
                  </li>
                  <li>
                    <a
                      href="#subtab-12"
                      className={`sub-tab-link ${activeSubTab === 'subtab-12' ? 'active' : ''}`}
                      onClick={(event) => handleSubTabClick(event, 'subtab-12')}
                      style={{ color: "white" }}
                    >
                      ESTABLISHMENT SECTION
                    </a>
                  </li>
                  <li>
                    <a
                      href="#subtab-13"
                      className={`sub-tab-link ${activeSubTab === 'subtab-13' ? 'active' : ''}`}
                      onClick={(event) => handleSubTabClick(event, 'subtab-13')}
                      style={{ color: "white" }}

                    >
                      SCHOLARSHIP SECTION
                    </a>
                  </li>
                  <li>
                    <a
                      href="#subtab-14"
                      className={`sub-tab-link ${activeSubTab === 'subtab-14' ? 'active' : ''}`}
                      onClick={(event) => handleSubTabClick(event, 'subtab-14')}
                      style={{ color: "white" }}
                    >
                      STUDENT SECTION
                    </a>
                  </li>
                  <li>
                    <a
                      href="#subtab-15"
                      className={`sub-tab-link ${activeSubTab === 'subtab-15' ? 'active' : ''}`}
                      onClick={(event) => handleSubTabClick(event, 'subtab-15')}
                      style={{ color: "white" }}
                    >
                      EXAM SECTION
                    </a>
                  </li>

                </ul>



                {/* Sub-tab content */}
                <section
                  id="subtab-11"
                  className={`sub-tab-body ${activeSubTab === 'subtab-11' ? 'active active-content' : ''}`}
                >
                  <h3>HEAD OF OFFICE</h3>
                  <div className="principal-inf">
                    <div className="column">
                      {/* Principal's photo */}
                      <img src="office sup.jpeg" alt="office superit's Photo" style={{ width: "150px" }}/>
                    </div>
                    <div className="column">
                      {/* Principal's name */}
                      <p className="principal-name">Shri M G Dakhane</p>

                      {/* Contact, Email, and Education */}
                      <p>Contact: 8208461907	</p>
                      <p>Email: osofficialdakhane@gcoec.ac.in
                      </p>
                      <p>Designation :- OFFICE SUPERITENDENT </p>
                    </div>
                  </div>
                </section>
                <section
                  id="subtab-12"
                  className={`sub-tab-body ${activeSubTab === 'subtab-12' ? 'active active-content' : ''}`}
                >
                  <h3>ESTABLISHMENT OFFICER</h3>
                  <div className="principal-inf">
                    <div className="column">
                      {/* Principal's photo */}
                      <img src=".jpg" alt="estab's Photo" />
                    </div>
                    <div className="column">
                      {/* Principal's name */}
                      <p className="principal-name">Shri. K. P. Maitam</p>

                      {/* Contact, Email, and Education */}

                      <p>Email: KMaitam@gcoec.ac.in
                      </p>
                      <p>Designation :- Sr. Clerk (estab.) </p>
                    </div>
                  </div>
                </section>
                <section
                  id="subtab-13"
                  className={`sub-tab-body ${activeSubTab === 'subtab-13' ? 'active active-content' : ''}`}
                >
                  <h3>HEAD OF SCHOLARSHIP SECTION</h3>
                  <div className="principal-inf">
                    <div className="column">
                      {/* Principal's photo */}
                      <img src="admal.jpeg" alt="person's logo" style={{ width: "150px" }} />
                    </div>
                    <div className="column">
                      {/* Principal's name */}
                      <p className="principal-name">Shri A. A. Martalemul</p>

                      {/* Contact, Email, and Education */}
                      <p>Contact: 7507446774</p>
                      <p>Email: scholarshipsectionoffical@gcoec.ac.in
                      </p>
                      <p>Designation :- SCHOLARSHIP SECTION INCHARGE </p>
                    </div>
                  </div>
                </section>
                <section
                  id="subtab-14"
                  className={`sub-tab-body ${activeSubTab === 'subtab-14' ? 'active active-content' : ''}`}
                >
                  <h3>STUDENT SECTION HEAD</h3>
                  <div className="principal-inf">
                    <div className="column">
                      {/* Principal's photo */}
                      <img src="admal.jpeg" alt="wakde sir's photo" style={{ width: "150px" }} />
                    </div>
                    <div className="column">
                      {/* Principal's name */}
                      <p className="principal-name">Shri A. A. Martalemul</p>

                      {/* Contact, Email, and Education */}
                      <p>ontact: 7507446774	</p>
                      <p>Email: scholarshipsectionoffical@gcoec.ac.in
                      </p>
                      <p>Designation :- STUDENT SECTION HEAD </p>
                    </div>
                  </div>
                </section>
                <section
                  id="subtab-15"
                  className={`sub-tab-body ${activeSubTab === 'subtab-15' ? 'active active-content' : ''}`}
                >
                  <h3></h3>
                  <div className="principal-inf">
                    <div className="column">
                      {/* Principal's photo */}
                      <img src="khobra.jpeg" alt="rathod sir's photo" style={{ width: "150px" }} />
                    </div>
                    <div className="column">
                      {/* Principal's name */}
                      <p className="principal-name">Ms. P. B. Khobragade</p>

                      {/* Contact, Email, and Education */}
                      <p>Contact: 8208461907	</p>
                      <p>Email: khobragade347@gmail.com
                      </p>
                      <p>Designation :- Exam Section clerk </p>
                    </div>
                  </div>
                </section>


              </section>

              <section
                id="tab-4"
                className={`tab-body entry-content ${activeTab === 'tab-4' ? 'active active-content' : ''}`}
              >
                <h2>OTHER CLERICAL & ADMINISTRATIVE STAFF</h2>
                <table className="table table-bordered table-striped" style={{ width: '800px' }}  >
                  <thead>
                    <tr>
                      <th>Sr.No.</th>
                      <th>Name of Staff</th>
                      <th>Designation</th>
                      <th>Mobile Number</th>
                      <th>Desk</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Shri. M.G. Dakhane</td>
                      <td>Office Superintendent</td>
                      <td>8888072293</td>
                      <td>Student Sec.</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Shri. A. W. Parate</td>
                      <td>Data Entry Operator</td>
                      <td>9850776283</td>
                      <td>Student Sec.</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Shri. R. B. Amwar</td>
                      <td>Sr. Clerk</td>
                      <td>9881277093</td>
                      <td>Cashier

                      </td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Shri. H. A. Warhade</td>
                      <td>Sr. Clerk</td>
                      <td>8956022197</td>
                      <td>Account Sec.</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>Smt. A. D. Gajbhiye</td>
                      <td>Jr. Clerk</td>
                      <td>9763315744</td>
                      <td>Account Sec.</td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>Shri. K.M. Maitam</td>
                      <td>Sr. Clerk</td>
                      <td>9421939356</td>
                      <td>Establishment Sec.</td>
                    </tr>


                    {/* Add similar rows for other departments */}
                  </tbody>
                </table>
              </section>
              <section
                id="tab-5"
                className={`tab-body entry-content ${activeTab === 'tab-5' ? 'active active-content' : ''}`}
              >
                <h2>COMMITTEES @GCOEC</h2>
                <table className="table table-bordered table-striped" style={{ width: '800px' }} >
                  <thead>
                    <tr>
                      <th>Sr.No.</th>
                      <th>Name of Committee</th>
                      <th>Dated</th>
                      <th>Official Circular/ Form</th>
                      <th>Incharge</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Anti ragging Committees</td>
                      <td>16/03/2023</td>
                      <td><a href="Anti-Ragging-Committee.pdf">Circular</a></td>
                      <td>Dr P. Washimkar</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Grievance Redressal Committee</td>
                      <td>16/03/2023</td>
                      <td><a href="Grievance-Redressal-Committee.pdf">circular</a></td>
                      <td>Kranti Bokhre</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Internal Complaint committee</td>
                      <td>16/03/2023</td>
                      <td><a href="Internal-Complaint-Committee.pdf">circular</a></td>
                      <td> Mrs. Bokhare </td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>SC/ST,WOMEN/GIRLS complaint committee</td>
                      <td>16/03/2023</td>
                      <td><a href="SC-ST-Committee.pdf">Circular</a></td>
                      <td>Amit R Sakhare</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>Online Grievance Form</td>
                      <td>16/03/2023</td>
                      <td><a href="https://docs.google.com/forms/d/e/1FAIpQLSdTruwF9dT3TYJtCOA-37YboTtPFkgzcpRDnCJEYiqkIIuJ7g/viewform">Form</a></td>
                      <td>Student Section</td>
                    </tr>



                    {/* Add similar rows for other departments */}
                  </tbody>
                </table>
              </section>

              <section
                id="tab-6"
                className={`tab-body entry-content ${activeTab === 'tab-6' ? 'active active-content' : ''}`}
              >
                <h2>TENDERS  @GCOEC</h2>
                <p>Given are Circulars of the tenders published</p>
                <table className="table table-bordered table-striped" style={{ width: '800px' }} >
                  <thead>
                    <tr>
                      <th>Dated</th>
                      <th>CIRCULARS</th>

                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>28/08/2023</td>
                      <td><a href="wsnIot-lab-09-Jul-2021-13-48-09.pdf">Quatation Calling Letter</a></td>


                    </tr>
                    <tr>
                      <td>28/08/2023</td>
                      <td><a href="4TB%20surveillance%20Hard%20Disk.pdf">4 TB surveillance Letter</a></td>


                    </tr>
                    <tr>
                      <td>28/08/2023</td>
                      <td><a href="66U%20Cabal%2019%20Rack.pdf">66U Cable 19 Rack</a></td>


                    </tr>
                    <tr>
                      <td>28/08/2023</td>
                      <td><a href="CCTV%2020%20CH%20NVR.pdf">CCTV 20 CH NVR</a></td>

                    </tr>
                    <tr>
                      <td>28/08/2023</td>
                      <td><a href="CCTV%20PoE%20Switch.pdf">CCTV PoE Switch</a></td>

                    </tr>
                    <tr>
                      <td>28/08/2023</td>
                      <td><a href="Display%20Unit.pdf">Display Unit</a></td>
                    </tr>


                    {/* Add similar rows for other departments */}
                  </tbody>
                </table>
              </section>
              <section
                id="tab-7"
                className={`tab-body entry-content ${activeTab === 'tab-7' ? 'active active-content' : ''}`}
              >
                <h2>PAYMENTS</h2>
                <ul className="sub-tab-head" >
                  <li>
                    <a
                      href="#subtab-1"
                      
                      className={`sub-tab-link ${activeSubTab === 'subtab-1' ? 'active' : ''}`}
                      onClick={(event) => handleSubTabClick(event, 'subtab-1')}
                    >
                      Fees Payments
                    </a>
                  </li>
                  <li>
                    <a
                      href="#subtab-2"
                      className={`sub-tab-link ${activeSubTab === 'subtab-2' ? 'active' : ''}`}
                      onClick={(event) => handleSubTabClick(event, 'subtab-2')}
                    >
                      Ex- Students
                    </a>
                  </li>
                  <li>
                    <a
                      href="#subtab-3"
                      className={`sub-tab-link ${activeSubTab === 'subtab-3' ? 'active' : ''}`}
                      onClick={(event) => handleSubTabClick(event, 'subtab-3')}
                    >
                      Testing & Consulting
                    </a>
                  </li>
                  <li>
                    <a
                      href="#subtab-4"
                      className={`sub-tab-link ${activeSubTab === 'subtab-4' ? 'active' : ''}`}
                      onClick={(event) => handleSubTabClick(event, 'subtab-4')}
                    >
                      Security deposit
                    </a>
                  </li>
                  <li>
                    <a
                      href="#subtab-5"
                      className={`sub-tab-link ${activeSubTab === 'subtab-5' ? 'active' : ''}`}
                      onClick={(event) => handleSubTabClick(event, 'subtab-5')}
                    >
                      Academic Verification
                    </a>
                  </li>

                </ul>
                <table className="table table-bordered table-striped" style={{ width: '900px' }} >
                  <thead>
                    <tr>
                      <th>Sr.No.</th>
                      <th>Payment Option</th>
                      <th>Payment Link</th>
                      <th>Contact help</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>EazyPay</td>
                      <td><a href="https://eazypay.icicibank.com/eazypayLink?P1=mBO7cjSAmo9OXu/JIqWW9w=">Click Here</a></td>
                      <td>Shri. R. B. Amwar</td>

                    </tr>
                    <tr>
                      <td>2</td>
                      <td>SBI Collect</td>
                      <td><a href="https://www.onlinesbi.sbi/sbicollect/icollecthome.htm?corpID=2976360">Click Here</a></td>
                      <td>Shri. R. B. Amwar</td>

                    </tr>



                    {/* Add similar rows for other departments */}
                  </tbody>
                </table>

              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default VinayakTabs;
