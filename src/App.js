// import logo from './logo.svg';
// import './App.css';
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";
import About from "./Components/about";
import Alert from "./Components/alert";
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null);

  const showalert = (message, type) => {
    setalert(
      {
        msg: message,
        type: type
      }
    )
    setTimeout(() => {
      setalert(null);
    }, 1500)
  };
  const togglemode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = "#032e6e";
      document.body.style.color = "white";
      showalert("Dark mode has been enabled ", "success");
    }
    else {
      setmode('light');
      document.body.style.backgroundColor = "#F8F9FA";
      document.body.style.color = "black";
      showalert("Light mode has been enabled ", "success")
    }
  };

  return (
    <>
      <Router>
        <Navbar title="TextUtils" abouttext="About US" mode={mode} togglemode={togglemode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About mode={mode}/>} />
            <Route exact path="/" element={<Textform heading="Try TextUtils - Word counter , Character counter , Remove extra space etc..." mode={mode} showAlert={showalert} />} />
          </Routes>
          {/* <Textform heading="Enter text : " mode={mode} showAlert={showalert}/> */}
        </div>
      </Router>
    </>
  );
}

export default App;
