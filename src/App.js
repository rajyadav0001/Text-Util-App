// import logo from './logo.svg';
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { useState } from 'react'
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route,} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{
        setAlert({
          msg : message,
          type : type
        })
        setTimeout(() => {
          setAlert(null);
        }, 2000);
  }
  const RemoveBodyClasses=()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
  }
  const toggleMode = (cls) =>{
    RemoveBodyClasses();
    console.log(cls)
    document.body.classList.add('bg-'+cls);
    if(mode==='light'){
       setMode('dark');
       document.body.style.backgroundColor = 'gray'
       showAlert("Dark mode has been endbled","success");
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been endbled","success");
    }
  }
  return (
    <>
      <Router> 
          <Navbar  title="Rajnesh"  mode={mode} toggleMode = {toggleMode} />
          <Alert alert={alert}/>
          <div className="container my-4">
            <Routes>
              <Route exact path="/about" element={ <About mode={mode} />}>  </Route>
              <Route exact path="/" element={ <TextForm showAlert={showAlert} heading="Enter the text to analyze  below" mode={mode}/>}>  </Route>
            </Routes>
          </div>
     </Router>
    </>
  );
}

export default App;


 
 