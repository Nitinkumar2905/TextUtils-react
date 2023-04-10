import './App.css';
import Navbar from './Components/Navbar';
// import Textform from './Components/Textform';
import About from './Components/About';

function App() {
  return (
    <>
    <Navbar title='TextUtils'/>
    <About/>
    {/* <Textform heading='Enter your text to analyze'/> */}
    </>
  );
}

export default App;
