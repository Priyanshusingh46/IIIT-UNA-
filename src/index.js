import React from 'react';
import ReactDOM from 'react-dom/client';
import { render } from "react-dom";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import App from './App';
import Club from './components/Club';
import Register from './components/Register';
import About from './components/About';
import Signup from './components/Signup';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Register />}></Route>
      <Route path="/home" element={<App />}></Route>
      <Route path="/club" element={<Club />}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/Signup" element={<Signup/>}></Route>
      </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
