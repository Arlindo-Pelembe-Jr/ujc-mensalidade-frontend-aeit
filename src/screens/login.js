import axios from 'axios';
import Logo from '../image/UJCLogo2.png';
import '../styles.css';
import {useNavigate,useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
export const Login = props=> {
  const [userData, setUserData] = useState({
    username: '',
    senha: '',
  });
  const [error, setError] = useState(null);
  const setValues = e => {
    e.persist();
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  let navigate=useNavigate();
  const onSiginClick =()=>{navigate('/register');};
  const onLogingSubmit =()=>{
console.log("tapped");

axios
.get("http://localhost:8080/ujc-mensalidade/api/v1/utilizadores/"+userData.username+"/"+userData.senha
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
    
    <form onSubmit={onLogingSubmit}>

      {/* <h2>Bem Vindo!</h2>
    <img src={Logo} width={200} alt="Universidade Joaquiam Chissano"  /> */}


    
<div class="card" >
  <div class="card-body" >
    <h5 class="card-title">Bem Vindo !</h5>
    {/* <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
  </div >
  <img src={Logo} height={200} width={200} className="card-img-bottom" alt="Universidade Joaquiam Chissano"  />

</div>
  <div className="mb-3">
    <label  className="form-label">User Name</label>
    <input className="form-control" type="text" aria-describedby="userNameHelp" onChange={setValues} name="username"/>

    {/* <div id="userNameHelp" class="form-text">We'll never share your email with anyone else.</div> */}
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input className="form-control" type="password" id="exampleInputPassword1" onChange={setValues} name="senha"/>

  </div>
  {/* <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div> */}
 
</form>
<div className="d-grid gap-2 col-6 mx-auto">

<button type="submit" className="btn btn-outline-primary" onClick={onLogingSubmit}>Entrar</button>
<button type="submit" className="btn btn-outline-info" onClick={onSiginClick}>Registrar</button>

</div>
   
  

  </div>
  );
}

export default Login;
