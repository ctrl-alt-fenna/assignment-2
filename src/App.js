import './App.css';

import{BrowserRouter, Route, Routes} from 'react-router-dom';

import Login from './views/Login';
import Profile from './views/Profile';
import React from 'react';
import Translate from './views/Translate';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <h1>hello here is will a navbar</h1>
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
