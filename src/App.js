
import './App.css';
import { Routes, Route} from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './components/Home';
import About from './components/about';
import Resume from './components/resume/resume';
import Myeducation from './components/Myeducation';
import Myexperience from './components/Myexperience';
import Contact from './components/Contact';

function App() {
  return (
   <>
    <Navbar/>

    <Routes>
      <Route path='/' element={ <Home/>}>
        <Route index element={ <Myexperience/> }/>
        <Route path="/Myexperience" element={ <Myexperience/> }/>
        <Route path="/Myeducation" element={ <Myeducation/> }/>   
      </Route>
      <Route path='about' element={ <About/>}></Route>
      <Route path='Resume' element={ <Resume/>}></Route>
    </Routes>

    <Contact/>

   </>
  );
}

export default App;
