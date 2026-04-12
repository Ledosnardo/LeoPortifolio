import './App.css'
import Expertise from './componets/Expertise';
import Header from './componets/Header';
import Home from './componets/Home';
import Work from './componets/Work';


export default function App() {
  return (
    <div className="app">
      <Header />  
        <Home /> 
        <Expertise /> 
        <Work />
    </div>
  )
}