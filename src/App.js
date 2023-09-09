import React, { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";
import Alert from "./Components/Alert";
import About from "./Components/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      showAlert("Dark mode has been enabled", "success");
      document.body.style.backgroundColor = "darkgray";
    } else {
      setMode("light");
      showAlert("Light mode has been enabled", "success");
      document.body.style.backgroundColor = "white";
    }
  };

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };
  return (
    <Router>
      <>
        <Navbar title="TextUtils" toggleMode={toggleMode} mode={mode} />
        <Alert className="sticky-top" alert={alert} />
        <Routes>
          <Route
            path="/"
            element={
              <Textform
                showAlert={showAlert}
                heading={"Enter your text to analyze"}
                mode={mode}
              />
            }
          ></Route>
          <Route path="/about" element={<About />}></Route>
          <Route
            path="/home"
            element={
              <Textform
                showAlert={showAlert}
                heading={"Enter your text to analyze"}
                mode={mode}
              />
            }
          ></Route>
        </Routes>
      </>
    </Router>
  );
}

export default App;
