
import axios from 'axios';
import {useNavigate,useParams,Link,useLocation } from "react-router-dom";
import '../estilo.css';
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../image/UJCLogo2.png';
import http from '../http_common';
export const NotasScreen = props=> {
  let navigate=useNavigate();

    // const btnReport =  ()=>{
    //     console.log("sync PDF");
    //     const request = new Request(`http://localhost:8080/ujc-mensalidade/api/v1/pagamentos/report`,
    //     {
    //       method: "GET",
    //       headers: {
    //         Authorization: `Bearer ${localStorage.getItem('validToken')}`,
    //       },
    //       mode: "cors",
    //       cache: "default",
    //     }
    //   );

    //   fetch(request)
    //     .then((response) => response.blob())
    //     .then((blob) => {              
    //       const file = window.URL.createObjectURL(blob);
    //       const iframe = document.querySelector("iframe");
    //       if (iframe?.src) iframe.src = file;
    //     })
    //     .catch((err) => {
    //       // process error
    //     });        //  http
    //     // .get("http://localhost:8080/ujc-mensalidade/api/v1/pagamentos/report"
    //     // ).then((result)=>{
    //     //     console.log(result);
    //     // }).catch((error)=>{console.log(error)});
  
    //       };
    const statePayment = (state) => {
        switch(state) {
  
          case 0:   return             <td>Pago</td>          ;
          case 1:   return  <td>Nao Paga</td> ;
          case 2: return  <td>Incompleta</td> ;
  
          default:      return <td></td> 
        }
      };
      const statePaymentButton = (state) => {
        switch(state) {
  
          case 0:   return             ""          ;
          case 1:   return  <Link className="nav-link active" to="#">Detalhes</Link> ;
          case 2: return  <Link className="nav-link active" to="#">Detalhes</Link> ;
  
          default:      return <td></td> 
        }
      };

      const onClickButton = (payment) => {
        // alert("the payment object line"+payment.id +"--"+payment.status);
        navigate("/payments",{state:{mode:"edit",data:payment}});
        // switch(state) {
  
        //   case 0:   return             ""          ;
        //   case 1:   return  <Link className="nav-link active" to="#">Pagar</Link> ;
        //   case 2: return  <Link className="nav-link active" to="#">Pagar</Link> ;
  
        //   default:      return <td></td> 
        // }
      };
  const [listNotas, setlistNotas] = useState([]);
//   let {userName} =useParams();
//   const { state} = useLocation();
  useEffect(() => {

    retrieveNotas();
  },[]);
  const retrieveNotas = async ()=>{
    console.log("sync"); var response;
    switch (localStorage.getItem('perfilUtilizador')) {
      case "FUNCIONARIO":
        response= await http
        .get("http://localhost:8080/ujc-mensalidade/api/v1/incricoes"
        );
        break;
        case "ESTUDANTE":
           response= await http
          .get("http://localhost:8080/ujc-mensalidade/api/v1/incricoes"
          );
          break;
          case "ADMIN":
            response= await http
            .get("http://localhost:8080/ujc-mensalidade/api/v1/incricoes"
            );
        break;
      default:
        break;
    }
    //  response= await http
    // .get("http://localhost:8080/ujc-mensalidade/api/v1/pagamentos/mouthlyPayment/report/"+localStorage.getItem('utilizadorId')
    // );
      // console.log("response students",(await response).data);
      // console.log("state 1",state);
      setlistNotas( await response.data);

    return  response.data;
      };
      // console.log("state",state);
      // console.log("state",state.data);
      // console.log("result",state.result);
      // const listPayments=state.result;
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
<h1>Notas</h1>
 <br></br>
<table className="table">
<thead class="table-dark">
    <tr>
    <th>#</th>
                <th>Data Inscricao</th>
                <th>Teste 1</th>
                <th>Teste 2</th>
                <th>Faltas</th>
                {/* <th>aproveitamento</th> */}
      {/* <th scope="col"></th> */}

    </tr>
  </thead>
  {
      listNotas
      .map((e,index)=>

        <tbody key={e.codInscricao}>
    
    <tr key={e.codInscricao}>
      <th scope="row">{e.codInscricao}</th>
      {/* <td>{e.codInscricao}</td> */}
      <td>{e.inscData}</td>
      <td>{e.nota1}</td>
      <td>{e.nota2}</td>
      <td>{e.faltas}</td>

   

          
            {/* <td>{ statePayment(e.status)}</td> */}

                {/* <td>{e.estudante.nome}</td> */}
                {/* <td>{ statePaymentButton(e.status)}</td> */}
                {/* <td><Link className="nav-link active" onClick={()=>onClickButton(e)} to="/register">Detalhes</Link></td> */}
                {/* <td>{e.status ==1 ? <button type="button" className="nav-link active" onClick={()=>onClickButton(e)} >Pagar</button>:<button type="button" className="nav-link active" onClick={()=>onClickButton(e)} >Detalhes</button>}</td> */}

    </tr>

  </tbody>
        
        )
    }

</table></div>
    {/* {
      listPayments
      .map(e=>
      <div key={e.id} >
        <h2 onClick={console.log("id:",e.id)}>{e.nome}</h2>
   
        </div>)
    } */}

{/* <div className="d-grid gap-2 col-6 mx-auto"> */}

{/* <button type="submit" onClick={btnReport()} className="btn btn-outline-primary" >Imprimir</button> */}
{/* <Link className="btn btn-outline-primary" to="/iframeReport" target="_blank">Imprimir</Link> */}
{/* <iframe src="" width="200%" height="200%"></iframe> */}
{/* <button type="submit" className="btn btn-outline-info" onClick={onSiginClick}>Registrar</button> */}

{/* </div> */}
    </div>
  );
}

export default NotasScreen;
