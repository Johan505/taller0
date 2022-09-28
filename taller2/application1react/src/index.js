import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Home from "./pages/Home.js";
import Login from "./pages/Login.js";


import Descripcion from './components/descripcion/Descripcion';
import Banner from './components/banner/Banner';
import Feature from './components/feature/Feature';
import Ubicacion from './components/ubicacion/Ubicacion';
import Habitaciones from './pages/Habitaciones';
import Habitacion from './pages/Habitacion';
import Error404 from './pages/Error404';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/habitaciones' element={<Habitaciones/>}/>
      <Route path='/habitacion/:id' element={<Habitacion/>}/>
      <Route path='*' element={<Error404/>}/>
      <Route path='/home' element={<Navigate replace to="/"/>}/>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


