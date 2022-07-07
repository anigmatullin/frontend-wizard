import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router';
import { NavLink } from 'react-router-dom';

import Layout from './components/Layout';
import Login from './forms/Login';
import Home from './components/Home';
import NotFound from './components/NotFound';

import Step1 from './components/wizard/Step1';
import Step2 from './components/wizard/Step2';
import Step3 from './components/wizard/Step3';

import './App.css';

function App() {
  return (

    <BrowserRouter>


    <Routes>

        <Route path='/' element={<Layout />}>

        <Route index             element={<Home />} />
        <Route path="login"     element={<Login />} />

        <Route path="/wizard/step1"     element={<Step1 />} />
        <Route path="/wizard/step2"     element={<Step2 />} />
        <Route path="/wizard/step3"     element={<Step3 />} />

        {/* <Route path="logout"     element={<Logout />} /> */}
        <Route path="*"          element={<NotFound />} />

        </Route>

    </Routes>

    </BrowserRouter>

  );
}

export default App;
