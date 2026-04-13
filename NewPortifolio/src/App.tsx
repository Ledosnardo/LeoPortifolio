import './App.css'
import Contact from './componets/Contact';
import Expertise from './componets/Expertise';
import Header from './componets/Header';
import Home from './componets/Home';
import Projects from './componets/Projects';
import Work from './componets/Work';


export default function App() {
  return (
    <div className="app">
      <Header />  
        <Home /> 
        <Expertise /> 
        <Work />
        <Projects />
        <Contact />
    </div>
  )
}