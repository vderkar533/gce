import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavTwo from './aboutus_nav'
import ContentComponent from './about_institute'
import ContentComponent1 from './about_Principal'
import VisionMissionComponent from './vision_mission'
// import ContactInformation from './who'
import Footerend from './footerq'

export default function App() {
  return (
    <main>
     <NavTwo/>
      <ContentComponent/>
      <ContentComponent1/>
      <VisionMissionComponent/>
      {/* <ContactInformation/> */}
      <Footerend/>
    </main>
  )
}
