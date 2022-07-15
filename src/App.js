import './App.css';

import{BrowserRouter, Route, Routes} from 'react-router-dom';

import Login from './views/Login';
import Logo from "../src/img/Logo.png"
import Navbar from './components/Navbar/Navbar'
import Profile from './views/Profile';
import React from 'react';
import Translate from './views/Translate';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <h1 id="title">Lost in Translation</h1>
        <img src={Logo} width="10%" alt="Logo for Lost in Translation"/>
        <Routes>
          <Route path="/" element={< Login/>} />
          <Route path="/translate" element={< Translate />} />
          <Route path="/profile" element={< Profile />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
