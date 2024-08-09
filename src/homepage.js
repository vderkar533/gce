// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import './App.css'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavOne from './NavOne';
import NavTwo from './NavTwo';
import Carousel from './CarouselNav'
import Appw from './BoxContain'
import AboutAndDirector from './AboutAndDirector'
import ServicesSection from './academicunit'
import LatestResearch from './LatestResearch.jsx'
import Lnews_uevents from './Lnews_uevents'
import CentresClg from './CentresCollege'
import CounterUpAnimation from './CounterUpAnimation'
import BackToTopButton from './BackToTopButton'
import FaqAndPhoto from './FaqAndPhotos'
import FullscreenCarousel from './special'
import Footerend from './Footerend'

 function Appy() {
  return (
    <main>
      
      <NavOne />
      <NavTwo />
      <Carousel/>
      <BackToTopButton/>
      <Appw/>
      <AboutAndDirector/>
      <ServicesSection/>
      <Lnews_uevents/>
      <CounterUpAnimation/>
      <LatestResearch/>
      <CentresClg/>
      <FaqAndPhoto/>
      <FullscreenCarousel />
      <Footerend/>
      
    </main>
  );
}
export default Appy;