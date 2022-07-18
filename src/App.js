import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer'
import Login from './views/Login';
import Navbar from './components/Navbar/Navbar'
import Profile from './views/Profile';
import React from 'react';
import Translate from './views/Translate';
import Header from './components/Header/Header';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Header/>
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
