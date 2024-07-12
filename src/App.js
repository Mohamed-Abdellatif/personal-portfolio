
import './App.css';
import Banner from './components/Banner/banner';
import NavBar from "./components/NavBar/nav";
import 'bootstrap/dist/css/bootstrap.min.css';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
