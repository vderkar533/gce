import React from 'react';
import NavbarWithDropdown from './GoNavbar';
import Footerend from './GoFooterend';
import AcademicCalendar from './AcademicCalendar'; // Adjust the import path based on your project structure

const Realme = () => {
  return (
    <div>
      <header>
        <h1></h1>
      </header>
      <main>
        <NavbarWithDropdown/>
       
        
        <AcademicCalendar />
        <Footerend/>
        
        {/* Add more components as needed */}
      </main>
       
      <footer>
        <p> 2023 CSE Department Upcoming Events</p>
       
      </footer>
    </div>
  );
};

export default Realme;
