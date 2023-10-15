import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import ParticlesConfig from './components/ParticlesConfig';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Achivements } from './components/Achivements';



function App() {

  return (
    <div className="App">
      {/* <ParticlesConfig/> */}
      <NavBar/>
      <Banner/>
      <Experience/>
      <Skills/>
      <Projects/>
      <Education/>
      <Achivements/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
