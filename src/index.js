import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
// import Login from './components/form';
// import ReactDOM from "react-dom";
import { HashRouter as Router } from 'react-router-dom';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screens/home";
import ListPayments from "./screens/list_payments";
import NavBar from "./screens/nav_bar";
import Payments from "./screens/payments";
import Login from './screens/login';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<NavBar />}>
//           <Route index element={<Login />} />
//           <Route path="/home" element={<Home />} />

//           <Route path="list_payments" element={<ListPayments />} />
//           <Route path="payments" element={<Payments />} />
//           {/* <Route path="*" element={<NoPage />} /> */}
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// ReactDOM.render(<App />, document.getElementById("root"));
// ReactDOM.render(
//   <React.StrictMode>
//     {/* <App /> */}
//     <Login/>
    
//   </React.StrictMode>,
//   document.getElementById('root')
// );
// ReactDOM.render(
//   <Router>
//     <App />
//   </Router>,
//   document.getElementById('root')
// );
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
