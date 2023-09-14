import React from 'react';
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

function App() {
  const [mode, setMode]  = useState('light');
  const[alert, setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
  })
    setTimeout(()=>{
      setAlert(null);
    },1500);
  }
  const toggleMode=()=>{
    if (mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='rgb(2,0,36)';
      showAlert("Dark Mode Activated","success")
      document.title="TextUtility - DarkHome"
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light Mode Activated","success")
      document.title="TextUtility - LightHome"

    }
  }

  return (
    <>
    <Router>
    <Navbar title="KISHAN" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    <Routes>
      <Route path='/' element={<TextForm showAlert={showAlert} heading="Enter your Text to analyze" mode={mode}/>}></Route>
      <Route path='/ABOUT' element={<About />}></Route>
    </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
