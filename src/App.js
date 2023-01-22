// import logo from './logo.svg';
// import './App.css';
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";
import About from "./Components/about";
import React, {useState} from 'react';

function App() {
  const [mode, setmode] = useState('light');

  const togglemode=()=>
  {
      if(mode==='light')setmode('dark');
      else setmode('light');
  };

  return (
    <>
      <Navbar title="Mywebsite" abouttext="About US" mode={mode} togglemode={togglemode}/>
      <div className="container my-3">
      <Textform heading="Enter text : "/>
      <About/>
      </div>
    </>
  );
}

export default App;
