import './App.css';
import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import About from './About/About';
import  Skills  from './Skills/Skills';
import Statistics from './Statistics/Statistics';
import Calender from './GitHubCalender/Calender';
import Project from './Projects/Project';
import Contact from './Contact/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <br />
      <Statistics />
      <br />
      <Calender />
      <br />
      <Project />
      <br />
      <Contact />
      
    </div>
  );
}

export default App;
