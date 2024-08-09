import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Appy from './homepage';
// import Appz from './AppAbout';
import ContentComponent1 from './about_Principal'
import ContentComponent from './about_institute'
import VisionMissionComponent from './vision_mission'
// import Ziwa from './vivadm'
import VivYourComponent from './Vivbody'
import Appwa from './tablesz'
import Apppa from './fees'
import Bb from './Vinayak'
import Par from './parth'
import Nag from './Nagpur'
import Namfaculty from './Naaam_faculty'
import Realme from './Parthevent'
import Appjj from './ParthAlu'
import AcademicCalendar from './AcademicCalendar'
import Appxxx from './Tom-App'
import Appccc from './Chuck-App'
import Lnews_uevents from './Lnews_uevents'
import PhotoAndTableComponentccx from './teri'
import TpoPage from './tpo'
import Appsa from './NonTeachApp'
import Appda from './InfraApp'
import Appgh from './GallaryApp';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Appy />} />
        {/* <Route path="/aboutuspage" element={<Appz />} /> */}
        <Route path="/aboutus" element={<ContentComponent />} />
        <Route path="/about_principle" element={<ContentComponent1 />} />
        <Route path="/VisionMissionComponent" element={<VisionMissionComponent />} />
        {/* <Route path="/adm" element={<Ziwa />} /> */}
        <Route path="/admission" element={<VivYourComponent />} />
        <Route path="/course" element={<Appwa />} />
        <Route path="/fees" element={<Apppa />} />
        <Route path="/administration" element={<Bb />} />
        <Route path="/cse-dept" element={<Par />} />
        <Route path="/mission_cse" element={<Nag />} />
        <Route path="/faculty" element={<Namfaculty />} />
        <Route path="/event" element={<Realme />} />
        <Route path="/alumini" element={<Appjj />} />
        <Route path="/acad" element={<AcademicCalendar />} />
        <Route path="/Alumini" element={<Appxxx />} />
        <Route path="/hostel" element={<Appccc />} />
        <Route path="/news & events" element={<Lnews_uevents />} />
        <Route path="/techno-utsav" element={<PhotoAndTableComponentccx />} />
        <Route path="/TPO" element={<TpoPage />} />
        <Route path="/non-teaching staff" element={<Appsa />} />
        <Route path="/Infrastructure" element={<Appda />} />
        <Route path="/gallery" element={<Appgh />} />
        



        
      </Routes>
    </Router>
  );
};

export default App;
