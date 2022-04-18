
import axios from 'axios';
import {useNavigate,useParams,Link,useLocation } from "react-router-dom";
import '../estilo.css';
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Home = props=> {
  const [listStudents, setlistStudents] = useState([]);
  let {userName} =useParams();
  const { state} = useLocation();
  useEffect(() => {
    retrieveStudents();
  },[]);
  const retrieveStudents = async ()=>{
    console.log("sync");
    
    const response= await axios
    .get("http://localhost:8080/ujc-mensalidade/api/v1/estudantes"
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
      
  return (


    <div >
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Sistema De Pagamento de Mensalidade</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <Link to="#" className="nav-link active" aria-current="page">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="#">Pagamentos</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link active" to="/studentRegister">Inscricao</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link active" to="#">Notas</Link>
        </li>
        
      </ul>
      <span className="navbar-text">
      Utilizador: {userName} 
      </span>
    </div>
  </div>
</nav>
 
<table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Nome</th>
      <th scope="col">Cod Estudante</th>
      <th scope="col">Curso</th>
    </tr>
  </thead>
  {
      listStudents
      .map(e=>

        <tbody key={e.id}>
    
    <tr key={e.id}>
      <th scope="row">{e.id}</th>
      <td>{e.nome}</td>
      <td>{e.cod_estudante}</td>
      <td>{e.curso}</td>
    </tr>

  </tbody>
        
        )
    }

</table>
    {/* {
      listStudents
      .map(e=>
      <div key={e.id} >
        <h2 onClick={console.log("id:",e.id)}>{e.nome}</h2>
   
        </div>)
    } */}
    </div>
  );
}

export default Home;
