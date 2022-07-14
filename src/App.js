import './App.css';
import React from 'react';
import{BrowserRouter, Route, Routes} from 'react-router-dom';
import Logo from "../src/img/Logo.png"
import Login from './views/Login';
import Profile from './views/Profile';
import Translate from './views/Translate';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <h1 id="title">Lost in Translation</h1>
        <img src={Logo} width="10%"></img>
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
