import React from 'react';
import ReactDOM from 'react-dom/client';
import { render } from "react-dom";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import App from './App';
import Club from './components/Club';
import About from './components/About';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/club" element={<Club />}></Route>
      <Route path="/about" element={<About/>}></Route>
      </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
