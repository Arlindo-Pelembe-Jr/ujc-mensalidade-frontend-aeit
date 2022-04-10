import axios from 'axios';
import Logo from '../image/UJCLogo2.png';
import '../styles.css';
import {useNavigate,useParams } from "react-router-dom";

export const Login = props=> {
  let navigate=useNavigate();
  const onLogingSubmit =()=>{
console.log("tapped");

axios
.get("http://localhost:8080/ujc-mensalidade/api/v1/utilizadores/apj/admin"
)
.then(response => {
  console.log("response data",response.data);
  console.log("response data",response.data['userName']);

  // if (response.data.roles[0].role.match(role)) {
  //   http.get('/sellers/users/' + response.data.username).then(response => {
      navigate('/home/'+response.data['userName']);
  //   });

  // } else {

  //   props.history.push('/landing');
  // }

})
.catch(error => {
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
            <input className="input" type="email" />
            <span className="focus-input" data-placeholder="Email"></span>
          </div>

          <div className="wrap-input">
            <input className="input" type="password" />
            <span className="focus-input" data-placeholder="Password "></span>
          </div>

          <div className="container-login-form-btn">
          {/* <button className="login-form-btn">Login</button> */}
          <input type='button' value='Submit' onClick={onLogingSubmit}></input>
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
