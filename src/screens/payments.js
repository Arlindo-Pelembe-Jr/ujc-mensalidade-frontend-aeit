import axios from 'axios';
import '../styles.css';
import React,{useNavigate,useParams,useLocation } from "react-router-dom";
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../image/UJCLogo2.png';
import '../estilo.css';
import http from '../http_common';
export const Payments = () => {
  const [userData, setUserData] = useState({
  
    number:'',
    amount:''
  });
  const { state} = useLocation();

  const [listCurses, setlistCurses] = useState([]);
  useEffect(() => {
    retrieveCurses();
    // alert("state mode and data"+state.mode+" *"+state.data.estudante.nome);
  },[]);

  const retrieveCurses = async ()=>{
    console.log("sync");
    
    const response= await http
    .get("http://localhost:8080/ujc-mensalidade/api/v1/cursos"
    );
      // console.log("response students",(await response).data);
      // console.log("state 1",state);
      console.log("Curso Response:",response.data);
      console.log("Curso Response curso codigo:",response.data[0]['curso_codigo']);
      console.log("Curso Response curso nome:",response.data[0]['nome_curso']);


      setlistCurses( await response.data);
    return  response.data;
      };
      const setValues = e => {
        e.persist();
        setUserData({ ...userData, [e.target.name]: e.target.value });
      };

      const onClickPayments =()=>{
        console.log("tapped");
        console.log("value:",value)
        
        // axios
        // .post("https://rumuka.studio/api/make-test-payment",{
        //     "phone":userData.number,
        //     "amount":userData.amount,
        //     "reference": "1214235",
        //     "application": "app"
        // },
        // {
        //   headers: {
        //     "Access-Control-Allow-Origin": "*",
        // 'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        // 'Access-Control-Allow-Headers': "append,delete,entries,foreach,get,has,keys,set,values,Authorization",
      
        //   }
        // }
        // )
        // .then(response => {
        //   console.log("response data",response);
        //   if(response.status == 200){
            // console.log("status",response);
            console.log("send insert/post to core for insert payment");
            const currDate = new Date().toLocaleDateString();
            if(state.mode != null && state.mode=="edit"){
              
            }
            switch (state.mode) {
              case "edit":
                http
            .post("http://localhost:8080/ujc-mensalidade/api/v1/pagamentos/mensalidade/"+userData.amount,
            {
              "dataPagamento":currDate,
        "status": 0,
        "id":state.data.id,
        "estudante": {
          "id":state.data.estudante.id,
          "utilizador":{"id": state.data.estudante.utilizador.id},        
        },
            },{
              headers: {
                "Access-Control-Allow-Origin": "*",
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            'Access-Control-Allow-Headers': "append,delete,entries,foreach,get,has,keys,set,values,Authorization",
          
              }
            })
            .then(responsePayment =>{
              navigate('/home/'+localStorage.getItem('username'));

              console.log(responsePayment);
            })
            .catch(errorPayment=>{
              console.log(errorPayment);
            });
                break;
            
              case "pay":
                http
            .post("http://localhost:8080/ujc-mensalidade/api/v1/pagamentos/mensalidade/"+userData.amount,
            {
              "dataPagamento":currDate,
        "status": 0,
        "estudante": {
          "utilizador":{"id": localStorage.getItem('utilizadorId')},},
            },{
              headers: {
                "Access-Control-Allow-Origin": "*",
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            'Access-Control-Allow-Headers': "append,delete,entries,foreach,get,has,keys,set,values,Authorization",
          
              }
            })
            .then(responsePayment =>{
              navigate('/home/'+localStorage.getItem('username'));

              console.log(responsePayment);
            })
            .catch(errorPayment=>{
              console.log(errorPayment);
            });
                break;
                default:
                  break;
            }
        //     http
        //     .post("http://localhost:8080/ujc-mensalidade/api/v1/pagamentos/mensalidade/"+userData.amount,
        //     {
        //       "dataPagamento":currDate,
        // "status": 0,
        // "estudante": {
        //   "id": localStorage.getItem('utilizadorId'),},
        //     },{
        //       headers: {
        //         "Access-Control-Allow-Origin": "*",
        //     'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        //     'Access-Control-Allow-Headers': "append,delete,entries,foreach,get,has,keys,set,values,Authorization",
          
        //       }
        //     })
        //     .then(responsePayment =>{
        //       navigate('/home/'+localStorage.getItem('username'));

        //       console.log(responsePayment);
        //     })
        //     .catch(errorPayment=>{
        //       console.log(errorPayment);
        //     });
// =====================================================================
          //  const saveValue= localStorage.getItem("username");
          //   console.log("response data",response.data);
          //   console.log("response data['username']",response.data['userName']);
          //   console.log("response data.username",response.data.userName);
          //   console.log("userData.username",userData.username);
          
                // navigate('/home/'+saveValue,{state:{data:["info","info"]}});
        
            
        //   }else{
        //     alert("User Name ou Senha Invalidos");
        //   }
          
        // })
        // .catch(error => {
        //   console.log(error);
        //   console.log("error message occur here");
        // });
          };
          
  const getInitialState = () => {
    const value = 0;
    return value;
  };
  let navigate=useNavigate();

  const [value, setValue] = useState(getInitialState);

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
<div className="container">
    
<img id='logoujc' src={Logo} height={200} width={200} className="esc-logo slide-top center-block" alt="Universidade Joaquim Chissano"  />
    <br/>
    <h5 className="" style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>Pagamento</h5>
 
    <form className="d-grid gap-2 col-6 mx-auto" onSubmit={onClickPayments}>

    {/* <div>
      <select value={value} onChange={handleChange} name="curso_id">
          {
              listCurses.map(e=>
                <option value={e.curso_codigo}>{e.nome_curso}</option>

              )
          }
     
      </select>
    </div> */}



    <div className="mb-3">
    <label  className="form-label">Numero a ser Debitado</label>
    <input className="form-control" type="number"  aria-describedby="userNameHelp" onChange={setValues} name="number"/>

  </div>

  {/* <div className="mb-3">
    <label  className="form-label">User Name</label>
    <input className="form-control" type="text"  aria-describedby="userNameHelp" onChange={setValues} name="username"/>

  </div>
  <div className="mb-3">
    <label  className="form-label">Email</label>
    <input className="form-control" type="email"  aria-describedby="userNameHelp" onChange={setValues} name="email"/>

  </div> */}
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Valor a Pagar</label>
    <input className="form-control" type="number"  onChange={setValues} name="amount"/>

  </div> 
</form>
<div className="d-grid gap-2 col-6 mx-auto">

<button type="submit" className="btn btn-outline-info" onClick={onClickPayments}>Pagar</button>

</div>
   
  

  </div>  
  
  );
};

export default Payments;