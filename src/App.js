import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Footer from './components/Footer/Footer'
import Login from './views/Login';
import Logo from "../src/img/Logo.png"
import LogoHello from "../src/img/Logo-Hello.png"
import Navbar from './components/Navbar/Navbar'
import Profile from './views/Profile';
import React from 'react';
import Translate from './views/Translate';

function App() {
/*	Functions to change image on hover (very necessary component)
	INPUT: An img element
	OUTPUT: A cute image
*/
  const changeHello = (element) => {
    element.target.src = LogoHello
    element.target.id = "img-logoHello"
  }
  const changeNormal = (element) => {
    element.target.src = Logo
    element.target.id = "img-logoNorm"
  }
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <h1 id="title">Lost in Translation</h1>
        <img src={Logo} alt="Logo for Lost in Translation" id="img-logoNorm" onMouseEnter={changeHello} onMouseLeave={changeNormal} />
        <Routes>
          <Route path="/" element={< Login />} />
          <Route path="/translate" element={< Translate />} />
          <Route path="/profile" element={< Profile />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
