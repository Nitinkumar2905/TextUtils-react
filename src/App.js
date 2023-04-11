import React, {useState} from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import Alert from './Components/Alert';
// import About from './Components/About';

function App() {
  const[mode, setMode]=useState('light');
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      showAlert('Dark mode has been enabled', 'success')
      document.body.style.backgroundColor='darkgray';
    }
    else{
      setMode('light');
      showAlert('Light mode has been enabled', 'success')
      document.body.style.backgroundColor='white';
    }
  }
  const[alert, setAlert]=useState(null)
  const showAlert=(message, type)=>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null)
    },1000);
  }
  return (
    <>
      <Navbar title='TextUtils' toggleMode={toggleMode} mode={mode}/>
      {/* <About/> */}
      <Alert className='sticky-top' alert={alert}/>
      <Textform showAlert={showAlert} heading='Enter your text to analyze' mode={mode}/>
    </>
  );
}

export default App;
