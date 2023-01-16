// import logo from './logo.svg';
// import './App.css';

import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";
function App() {
  return (
    <>
      <Navbar title="Mywebsite" abouttext="About US" />
      <div className="container my-3">
      <Textform heading="Enter text : "/>
      </div>
    </>
  );
}

export default App;
