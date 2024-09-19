import logo from './logo.svg';
import './App.css';
import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom"

//Components
import Home from './Components/Home';
import Login from './Components/Login';
import Listings from './Components/Listings';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/listings' element={<Listings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
