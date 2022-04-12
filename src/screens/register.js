import axios from 'axios';
import Logo from '../image/UJCLogo2.png';
import '../styles.css';
import {useNavigate,useParams } from "react-router-dom";
import { useState, useEffect } from 'react';

export const Register = props=> {
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
  const onSiginSubmit =()=>{
console.log("tapped");

axios
.post("http://localhost:8080/ujc-mensalidade/api/v1/utilizadores/" /*+userData.username+"/"+userData.senha*/,{
    "nome":userData.name,
    "senha":userData.senha,
    "userName":userData.username
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
    <div className="container-login">
      <div className="wrap-login">
        <form className="login-form">
          <span className=" login-form-title">Registrar !</span>

          <span className="login-from-title">
            <img src={Logo} alt="Universidade Joaquiam Chissano" />
          </span>
          <div className="wrap-input">
            <input className="input" type="text" onChange={setValues} name="name"/>
            <span className="focus-input" data-placeholder="Name"></span>
          </div>
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
          <input type='button' value='Criar conta' className="login-form-btn" onClick={onSiginSubmit}></input>
          </div>
{/* <div className="text-center">
<span className="txt1">Nao possui conta?</span>
<a className="txt2" href="#">Criar conta.</a>
</div> */}
        </form>
      </div>
    </div>
  </div>
  );
}

export default Register;
