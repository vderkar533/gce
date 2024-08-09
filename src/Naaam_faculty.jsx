import React from 'react';
import PandeAboutSection from './PandeAboutSection';
import PandeAboutSection2 from './PandeAboutSection2';
import PandeAboutSection3 from './PandeAboutSection3';
// import PandeNavTwo from './PandeNavTwo';
import AlumniSection from './AlumniSection';
import PandeAlumniSection2 from './PandeAlumniSection2';
import ParthFooterend from './parth-Footerend';
import PandeAlumniSection3 from './PandeAlumniSection3';
import PandeNavTwo from './MeghnathNavTwo'




const Namfaculty = () => {
  return (
    
      <div>
      <header>
        <PandeNavTwo />
        
      </header>
  
      <PandeAboutSection />
      <PandeAboutSection2/>
            <PandeAboutSection3/>
      
     
       <PandeAlumniSection2 />
       <PandeAlumniSection3 />
       <AlumniSection />
        <ParthFooterend/>

     

      {/* <footer>
        <p> 2023 College Faculty and Staff Association</p>
      </footer> */}
    </div>
  );
};

export default Namfaculty;
