import React, { useState } from 'react';
import './App.css';
import logo from './logo.png';
import logoWhite from './LogoWhite.png';
import Navbar from './Component/Navbar';
import TextArea from './Component/TextArea';
function App() {

  const [isChecked, setIsChecked] = useState(false);
  const [mode,setMode]=useState("Light");
  const [isStyle,setStyle]=useState({backgroundColor: '#ddebff', color:'black'});
  const [isLogo,setLogo]=useState(logo);
  const themeChange = ()=>{
       if(isChecked==true){
           setIsChecked(false);
           setMode("Light");
           setLogo(logo);
           setStyle({backgroundColor:'#ddebff', color:'black'});
  
       }
       else {
          setIsChecked(true);
          setMode("Dark");
          setLogo(logoWhite);
          setStyle({backgroundColor:'rgb(1, 13, 61, 91%)',color:'white'});
       }
  }
  return (
   <>
    <Navbar title="Text Manipulator" style={isStyle} logo={isLogo} isChecked={isChecked} mode={mode} themeChange={themeChange} />
    <TextArea title="Enter Text" style={isStyle}/>
   </>
  );
}

export default App;
