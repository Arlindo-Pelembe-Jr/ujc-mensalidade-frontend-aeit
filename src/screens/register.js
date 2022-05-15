import axios from 'axios';
import Logo from '../image/UJCLogo2.png';
import '../styles.css';
import {useNavigate,useParams,useLocation } from "react-router-dom";
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import http from '../http_common';
export const Register = props=> {
  const [userData, setUserData] = useState({
    username: '',
    senha: '',
    name:'',
    email:'',


  });
  const [error, setError] = useState(null);
  const setValues = e => {
    e.persist();
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  const [listCurses, setlistCurses] = useState([]);
  const { state} = useLocation();
  useEffect(() => {
    retrieveCurses();
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
  let navigate=useNavigate();
  const onSiginSubmit =()=>{
console.log("tapped");

http
.post("/utilizadores/role",
{
"utilizador":{
  "nome":userData.name,
  "senha":userData.senha,
  "userName":userData.username,
      "username":userData.username,

  "email":userData.email,
  "perfilUtilizador":{
      "perfil":valueRole
  }
},
"estudante":{
      "nome":userData.name,
  "curso":{
      "cursoCodigo":value
  }
},
"funcionario":{},
"perfilUtilizador":{
  "perfil":valueRole
}
}
)
.then(response => {
  console.log("response data",response);
  if(response.data != ""){
    // localStorage.setItem('username', response.data.utilizador.username);
    // localStorage.setItem('roleUser',response.data.perfilUtilizadors.perfil);
    // localStorage.setItem('userId',response.data.utilizador.id);
    // localStorage.setItem('estudanteId',response.data.estudante.id);
    // console.log("set of values","uNa"+response.data.utilizador.userName + " uPr"+response.data.perfilUtilizador.perfil+" uId"+response.data.utilizador.id + "estID"+response.data.estudante.id);
    console.log("response data",response.data);
    // console.log("response data['username']",response.data['utilizador']['userName']);
    navigate('/home/'+localStorage.getItem("username"),{state:{data:["info","info"]}});


        // navigate('/home/'+response.data['utilizador']['userName'],{state:{data:["info","info"]}});


  }else{
    alert("User Name ou Senha Invalidos");
  }
  
})
.catch(error => {
  console.log(error);
});
  };
  const getInitialState = () => {
    const value = 0;
    return value;
  };

  const [value, setValue] = useState(getInitialState);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const getInitialRoleState = () => {
    const valueRole = "";
    return valueRole;
  };

  const [valueRole, setValueRole] = useState(getInitialRoleState);

  const handleChangeRole = (e) => {
    setValueRole(e.target.value);
  };
  return (
    <div className="container">
    
    <br/>
    <h5 className="" style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>Bem Vindo AO REGISTRO!</h5>
  <div   style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>
    
  <img src={Logo} height={200} width={200} className="esc-logo slide-top center-block" alt="Universidade Joaquiam Chissano"  />

</div>
    <form className="d-grid gap-2 col-6 mx-auto" onSubmit={onSiginSubmit}>
    <div className="mb-3">
    <label  className="form-label">Name</label>
    <input className="form-control" type="text"  aria-describedby="userNameHelp" onChange={setValues} name="name"/>

  </div>

  <div className="mb-3">
    <label  className="form-label">User Name</label>
    <input className="form-control" type="text"  aria-describedby="userNameHelp" onChange={setValues} name="username"/>

  </div>
  <div className="mb-3">
    <label  className="form-label">Email</label>
    <input className="form-control" type="email"  aria-describedby="userNameHelp" onChange={setValues} name="email"/>

  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input className="form-control" type="password" id="exampleInputPassword1" onChange={setValues} name="senha"/>

  </div> 
  <div>
  <label for="exampleInputPassword1" class="form-label">Curso</label>
        <br/>
      <select value={value} onChange={handleChange} name="curso_id">
     
              

                {
              listCurses.map(e=>
                <option value={e.curso_codigo}>{e.nome_curso}</option>

              )
          }
     
      </select>
    </div>

    <div>
    <label for="exampleInputPassword1" class="form-label">Perfil</label>
    <br/>

      <select value={valueRole} onChange={handleChangeRole} name="perfil">
      <option value="ADMIN">Administrador</option>
                <option value="ESTUDANTE">Estudante</option>
                <option value="FUNCIONARIO">Funcionario</option>
     
      </select>
      {/* <p>{`You selected ${value}`}</p> */}
    </div>
</form>
<br/>
<div className="d-grid gap-2 col-6 mx-auto">

<button type="submit" className="btn btn-outline-info" onClick={onSiginSubmit}>Criar Conta</button>

</div>
   
  

  </div>
  );
}

export default Register;
