
import axios from 'axios';
import {useNavigate,useParams,Link,useLocation } from "react-router-dom";
import '../estilo.css';
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../image/UJCLogo2.png';
import http from '../http_common';
export const Home = props=> {
  const [listStudents, setlistStudents] = useState([]);
  let {userName} =useParams();
  const { state} = useLocation();
  useEffect(() => {

    retrieveStudents();
  },[]);
  let navigate=useNavigate();
  const onClickButton = () => {
    // alert("the payment object line"+payment.id +"--"+payment.status);
    navigate("/payments",{state:{mode:"pay"}});
    // switch(state) {

    //   case 0:   return             ""          ;
    //   case 1:   return  <Link className="nav-link active" to="#">Pagar</Link> ;
    //   case 2: return  <Link className="nav-link active" to="#">Pagar</Link> ;

    //   default:      return <td></td> 
    // }
  };
  const retrieveStudents = async ()=>{
    console.log("sync");
    const response= await http
    .get("http://localhost:8080/ujc-mensalidade/api/v1/estudantes/byCoures"
    );
      // console.log("response students",(await response).data);
      // console.log("state 1",state);
      setlistStudents( await response.data);

    return  response.data;
      };
      // console.log("state",state);
      // console.log("state",state.data);
      // console.log("result",state.result);
      // const listStudents=state.result;
      const feather = require('feather-icons');
      var cast = feather.icons.cast;
  return (


    <div >
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"> <img src={Logo} height={55} width={55} class="rounded" alt="UJC"></img></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <Link to="#" className="nav-link active" aria-current="page" >Home</Link>
        </li>
        {localStorage.getItem('perfilUtilizador') ==="FUNCIONARIO" ? "":<li className="nav-item">

<a type="button" className="nav-link active" onClick={()=>onClickButton()} >Pagamentos</a>
    {/* <Link className="nav-link active" onClick={onClickButton()}>Pagamentos</Link> */}
  </li>}
        
        {localStorage.getItem('perfilUtilizador') ==="ESTUDANTE" ?   "" :   <li className="nav-item">
        <Link className="nav-link active" to="/register">Cadastro</Link>
        </li>} 
        <li className="nav-item">
        <Link className="nav-link active" to="/notas">Notas</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link active" to="/reportPayment">Relatorios</Link>
        </li>
      
      </ul>
      
      <span className="navbar-text">
      Utilizador: {localStorage.getItem("username").toUpperCase()}
      <br></br>Perfil: {localStorage.getItem('perfilUtilizador')} 
      
      </span>
    </div>
  </div>
</nav>

<div class="tamTab">
<br></br>
<h1 align="center">Bem Vindo!</h1>
<p  align="center">Esta e a plataforma de pagamento de mensalidade da UJC.</p>
 <br></br>


</div>

    </div>
  );
}

export default Home;
