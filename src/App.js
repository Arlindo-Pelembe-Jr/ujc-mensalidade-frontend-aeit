import React, { Component } from 'react';
// import TutorialHeader from './components/TutorialHeader';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Login} from './screens/login';
// import { Home} from './components/home';
import logo from './logo.svg';
import './App.css';
import './styles.css';
function App() {
  return (
    <div className="App">
  
      <Login/>
               {/* <Router> */}
       {/* <Layout> */}
         {/* <Routes>
           <Route exact path="/" element={Login}/>
          <Login/> */}
           {/* <Route exact path="/login" element={<Login/>}/>
           <Route exact path="/recovery-password" element={<RecoveryPassword/>}/>
           <Route path="*" element={<NotFound/>}/> */}
         {/* </Routes> */}
       {/* </Layout> */}
   {/* </Router> */}
    </div>
  );
}
// import 'bootstrap/dist/css/bootstrap.min.css'
// class App extends Component {
//   render() {
//     return (
//       <div >
//           {/* <Switch> */}
//           {/* <Route exact path="/" element={Login} /> */}
//           {/* <TutorialHeader /> */}
          
//          {/* </Switch>  */}

//          <Router>
//       {/* <Layout> */}
//         <Routes>
//           <Route exact path="/" element={<Login/>}/>
//           <Login/>
//           {/* <Route exact path="/login" element={<Login/>}/>
//           <Route exact path="/recovery-password" element={<RecoveryPassword/>}/>
//           <Route path="*" element={<NotFound/>}/> */}
//         </Routes>
//       {/* </Layout> */}
//     </Router>

    
//       </div> 
//     );
//   }
// }

export default App;

// class App extends Component {
//   render() {
//     return (
//       <div >
//            <Routes>
//         <Route exact path="/" component={Login} />
//         <Route path="/home" component={Home} />

//       </Routes>
// {/*       
//        <Router> 
//          <Switch>
//          <Route exact path="/" component={Login} >
//                       <Login/>
//                   </Route> */}
//           {/* <Route exact path="/" component={Login} /> */}
//           {/* <TutorialHeader /> */}
          
//          {/* </Switch> 
//        </Router> */}
         
//       </div>
//     );
//   }
// }

// export default App;






// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
