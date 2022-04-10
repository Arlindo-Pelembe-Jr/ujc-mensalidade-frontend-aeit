import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Login} from './screens/login';
import { Home } from '../src/screens/home';
import { Payments } from '../src/screens/payments';
import { ListPayments } from '../src/screens/list_payments';

import './App.css';
import './styles.css';
import ErrorPage from './screens/error_page';

function App(){
  return ( <Router>
    <Routes> 
    <Route exact path="/" element={<Login/>}/>
    <Route exact path="/home/:userName" element={<Home/>}/>
    <Route path="/payments" element={<Payments/>}/>
    <Route path="/list_payments" element={<ListPayments/>}/>

    <Route path="*" element={<ErrorPage/>}/>

    </Routes>
  </Router>);
}

export default App;