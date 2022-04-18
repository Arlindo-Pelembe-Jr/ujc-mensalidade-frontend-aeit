import axios from 'axios';
import Logo from '../image/UJCLogo2.png';
import '../styles.css';
import {useNavigate,useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

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
  let navigate=useNavigate();
  const onSiginSubmit =()=>{
console.log("tapped");

axios
.post("http://localhost:8080/ujc-mensalidade/api/v1/utilizadores/" /*+userData.username+"/"+userData.senha*/,{
    "nome":userData.name,
    "senha":userData.senha,
    "userName":userData.username,
    "email":userData.email
}
)
.then(response => {
  console.log("response data",response);
  if(response.data != ""){
    localStorage.setItem('username', response.data.userName);

    console.log("response data",response.data);
    console.log("response data['username']",response.data['userName']);
    console.log("response data.username",response.data.userName);
    console.log("userData.username",userData.username);
      // axios.get("http://localhost:8080/ujc-mensalidade/api/v1/estudantes").then(result=>{ 
        // console.log("result data",result.data);
        navigate('/home/'+response.data['userName'],{state:{data:["info","info"]}});

        // navigate('/home/'+response.data['userName'],{state:{data:["info","info"],result:result.data}});

      // });
  }else{
    alert("User Name ou Senha Invalidos");
  }
  
})
.catch(error => {
  console.log(error);
});
  }
  return (
    <div className="container">
    
    <br/>
    <h5 className="" style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>Bem Vindo !</h5>
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
</form>
<div className="d-grid gap-2 col-6 mx-auto">

<button type="submit" className="btn btn-outline-info" onClick={onSiginSubmit}>Criar Conta</button>

</div>
   
  

  </div>
  );
}

export default Register;
