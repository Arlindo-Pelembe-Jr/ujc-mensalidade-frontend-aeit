import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { Component } from 'react';
import { Login} from '../screens/login';
import { Home } from '../screens/home';
export const NavBar = () => {
  return (
    <>
      {/* <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/list_payments">List Payments</Link>
          </li>
          <li>
            <Link to="/Payments">Payments</Link>
          </li>
        </ul>
      </nav>

      <Outlet /> */}

<Routes>
        <Route exact path="/" component={Login} />
        <Route exact path="/home" component={Home} />

      </Routes>
      <Home/>
    </>
  )
};

export default NavBar;