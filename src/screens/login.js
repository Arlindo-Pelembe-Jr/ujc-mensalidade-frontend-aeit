import axios from 'axios';
import Logo from '../image/UJCLogo2.png';
import '../styles.css';
import {useNavigate,useParams } from "react-router-dom";
import { useState, useEffect } from 'react';

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
  const onLogingSubmit =()=>{
console.log("tapped");

axios
.get("http://localhost:8080/ujc-mensalidade/api/v1/utilizadores/"+userData.username+"/"+userData.senha
)
.then(response => {
  localStorage.setItem('username', response.data.userName);

  console.log("response data",response.data);
  console.log("response data['username']",response.data['userName']);
  console.log("response data.username",response.data.userName);
  console.log("userData.username",userData.username);

      navigate('/home/'+response.data['userName']);
})
.catch(error => {
  console.log(error);
});
  }
  return (
    <div className="container">
    <div className="container-login">
      <div className="wrap-login">
        <form className="login-form">
          <span className=" login-form-title">Bem vindo!</span>

          <span className="login-from-title">
            <img src={Logo} alt="Universidade Joaquiam Chissano" />
          </span>

          <div className="wrap-input">
            <input className="input" type="text" onChange={setValues} name="username"/>
            <span className="focus-input" data-placeholder="User Name"></span>
          </div>

          <div className="wrap-input">
            <input className="input" type="password" onChange={setValues} name="senha"/>
            <span className="focus-input" data-placeholder="Password "></span>
          </div>

          <div className="container-login-form-btn">
          {/* <button className="login-form-btn">Login</button> */}
          <input type='button' value='Entrar' className="login-form-btn" onClick={onLogingSubmit}></input>
          </div>
<div className="text-center">
<span className="txt1">Nao possui conta?</span>
<a className="txt2" href="#">Criar conta.</a>
</div>
        </form>
      </div>
    </div>
  </div>
  );
}

export default Login;
