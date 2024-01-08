import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Nevbar from './components/Nevbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is eneble or not
  const [alert,setAlert] = useState(null);

  const showAlert = (message,type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled","Success");
      document.title = 'TextUtils - Dark Mode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","Success");
      document.title = 'TextUtils - Light Mode';
    }
  }
// aboutText="About TextUtils"
  return (
    <>
    <Nevbar title="TextUtils" mode={mode} toggleMode={toggleMode} />   
    {/* <Nevbar/> */}
    <Alert alert={alert}/>
      <div className='container my-3'>
      {/* <About/> */}
      {/* <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
      </Switch> */}
        <TextForm showAlert={showAlert} heading="Enter the Text to Analizes" mode={mode}/>
      </div>
    </>
  );
}

export default App;
