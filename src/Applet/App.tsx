import React from 'react';
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import { Layout } from '../Components/Layout';
import HomePage from '../Pages/HomePage/HomePage';
import QrCodePage from '../Pages/HomePage/QrCodePage';
import './App.css';

function App() {
  return (
    <div className="App">
      
     <Router>
       
       <Routes>
          
         <Route path="/" element={<HomePage/>} />
         <Route path="/investments" element={<div >Paeg 2</div>} />
         <Route path="/payments" element={<div >Paeg 3</div>} />
         <Route path="/deposit-withdraw" element={<div >Paeg 4</div>} />
         <Route path="/offers" element={<div >Paeg 4</div>} />
         <Route path="/qr" element={<QrCodePage/>} />
   

       </Routes>
       
   </Router>
    </div>
  );
}

export default App;
