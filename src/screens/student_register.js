import axios from 'axios';
import '../styles.css';
import {useNavigate,useParams,useLocation } from "react-router-dom";
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export const StudentRegister = props=> {
  const [userData, setUserData] = useState({
    // username: '',
    cod_estudante: '',
    name:'',
    curso_id:''
    // email:'',
  });
  const [listCurses, setlistCurses] = useState([]);
  const { state} = useLocation();
  useEffect(() => {
    retrieveCurses();
  },[]);

  const retrieveCurses = async ()=>{
    console.log("sync");
    
    const response= await axios
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
  const [error, setError] = useState(null);
  const setValues = e => {
    e.persist();
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  let navigate=useNavigate();
  const onSiginSubmit =()=>{
console.log("tapped");
console.log("value:",value)

axios
.post("http://localhost:8080/ujc-mensalidade/api/v1/estudantes",{
    "nome":userData.name,
    "cod_estudante":userData.cod_estudante,
    "curso":{
        "cursoCodigo":value
    }
}
)
.then(response => {
  console.log("response data",response);
  if(response.data != ""){
   const saveValue= localStorage.getItem("username");
    console.log("response data",response.data);
    console.log("response data['username']",response.data['userName']);
    console.log("response data.username",response.data.userName);
    console.log("userData.username",userData.username);
  
        navigate('/home/'+saveValue,{state:{data:["info","info"]}});

    
  }else{
    alert("User Name ou Senha Invalidos");
  }
  
})
.catch(error => {
  console.log(error);
});
  }

  const getInitialState = () => {
    const value = 0;
    return value;
  };

  const [value, setValue] = useState(getInitialState);

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <div className="container">
    
    <br/>
    <h5 className="" style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>Registro de Estudante</h5>
 
    <form className="d-grid gap-2 col-6 mx-auto" onSubmit={onSiginSubmit}>

    <div>
      <select value={value} onChange={handleChange} name="curso_id">
          {
              listCurses.map(e=>
                <option value={e.curso_codigo}>{e.nome_curso}</option>

              )
          }
     
      </select>
      {/* <p>{`You selected ${value}`}</p> */}
    </div>



    <div className="mb-3">
    <label  className="form-label">Nome</label>
    <input className="form-control" type="text"  aria-describedby="userNameHelp" onChange={setValues} name="name"/>

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
    <label for="exampleInputPassword1" className="form-label">Codigo Estudante</label>
    <input className="form-control" type="number" id="exampleInputPassword1" onChange={setValues} name="cod_estudante"/>

  </div> 
</form>
<div className="d-grid gap-2 col-6 mx-auto">

<button type="submit" className="btn btn-outline-info" onClick={onSiginSubmit}>Registrar</button>

</div>
   
  

  </div>
  );
}

export default StudentRegister;
