
import axios from 'axios';
import {useNavigate,useParams,Link,useLocation } from "react-router-dom";
import '../estilo.css';
import React, { useState, useEffect } from 'react';
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

      {/* <div>
        <ul>
          <li>
            <Link to="/">Login</Link>
          </li>
          <li>
            <Link to="/list_payments">List Payments</Link>
          </li>
          <li>
            <Link to="/payments">Payments</Link>
          </li>
        </ul>
      </div> */}
        {/* <div class="cabecalho" id="inicio"> 
        
       

    </div> */}
    <div class="cabecalho" id="inicio"> 
    <h2 >Sistema De Pagamento de Mensalidade</h2>
    <h2> 
      Utilizador: {userName} </h2>
    </div>
      <div class="menuSis" id="Sismenu"> 
        <h3>Menu Sistema</h3>
     <ul class="active"> 
         <li>
             {/* <button class="menubtn"><a href="../pages/home_page.php">Mensalidades Pagas</a></button> */}
             <Link to="/">Login</Link>
            
            </li>
            <li>
             {/* <button class="menubtn"><a href="../pages/home_page.php">Mensalidades Pagas</a></button> */}
             <Link to="/">Mensalidades Pagas</Link>
            
            </li>
         <li> 
         <div class="menu">
  {/* <button class="menubtn"> <a  href="">Pagamento Mensalidade</a> </button> */}
  <Link to="/payments">Payments</Link>
  <div class="menu-content">
  <Link to="*">M-Pesa</Link>
  <Link to="*">Banco</Link>
    {/* <a href="../pages/pagamentos_mpesa.php">M-Pesa</a>
    <a href="../pages/pagamentos_banco.php">Banco</a> */}
  </div>
</div>
        
            </li>
         <li> 
           {/* <button class="menubtn"><a  href="">Relatorio</a></button>  */}
           <Link to="*">Relatorio</Link>
           </li>
         <li>
            {/* <button class="menubtn"><a href="../pages/logout.php">Sair do Sistema</a></button> */}
            <Link to="*">Sair do Sistema</Link>
             </li>

     </ul>
    </div>
    {
      listStudents
      .map(e=><div key={e.id} >
        <h2 onClick={console.log("id:",e.id)}>{e.nome}</h2>
   
        </div>)
    }
    </div>
  );
}

export default Home;
