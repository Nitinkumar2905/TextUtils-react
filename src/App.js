import React, {useState} from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
// import About from './Components/About';

function App() {
  const[mode, setMode]=useState('light');
  const[buttonMode, setButtonMode]=useState('dark')
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      setButtonMode('light')
      document.body.style.backgroundColor='darkgray';
    }
    else{
      setMode('light');
      setButtonMode('dark')
      document.body.style.backgroundColor='white';
    }
  }
  return (
    <>
    <Navbar title='TextUtils' toggleMode={toggleMode} mode={mode} buttonMode={buttonMode} />
    {/* <About/> */}
    <Textform heading='Enter your text to analyze' mode={mode}/>
    </>
  );
}

export default App;
