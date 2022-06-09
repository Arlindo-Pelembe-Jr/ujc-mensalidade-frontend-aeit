import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Login} from './screens/login';
import { Home } from '../src/screens/home';
import { Payments } from '../src/screens/payments';
import { ListPayments } from '../src/screens/list_payments';
import {StudentRegister } from '../src/screens/student_register';
import {ReportPayment } from '../src/screens/payments_report';
import {IframeReport } from '../src/screens/iframe_report';
import {NotasScreen } from '../src/screens/notas';

import './App.css';
import './styles.css';
import ErrorPage from './screens/error_page';
import { Register } from '../src/screens/register';

function App(){
  return ( <Router>
    <Routes> 
    <Route exact path="/" element={<Login/>}/>
    <Route exact path="/home/:userName" element={<Home/>}/>
    <Route path="/payments" element={<Payments/>}/>
    <Route path="/list_payments" element={<ListPayments/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/studentRegister" element={<StudentRegister/>}/>
    <Route path="/reportPayment" element={<ReportPayment/>}/>
    <Route path="/iframeReport" element={<IframeReport/>}/>
    <Route path="/notas" element={<NotasScreen/>}/>

    {/* IframeReport */}
    {/* NotasScreen */}
    <Route path="*" element={<ErrorPage/>}/>

    </Routes>
  </Router>);
}

export default App;