import axios from 'axios';
// import './components/';
export const Home = props=> {
  const onLogingSubmit =()=>{
console.log("tapped");
axios
.get("http://localhost:8080/ujc-mensalidade/api/v1/students"
)
.then(response => {
  console.log("response data",response.data);
  // if (response.data.roles[0].role.match(role)) {
  //   http.get('/sellers/users/' + response.data.username).then(response => {
  //     props.history.push('/sellers/' + response.data.id + '/products');
  //   });

  // } else {

  //   props.history.push('/landing');
  // }

})
.catch(error => {
});
  }
  return (


    <div >
      <h2>Login</h2>
   <form> 


     <p>    
        <label>Numero Identificacao</label>
        <br></br>

     <input type='text'></input></p>

     <p>
<label>Senha</label>
<br></br>
     <input type='password'></input>

     </p>
     <input type='button' value='Submit' onClick={onLogingSubmit}></input>
   </form>
    </div>
  );
}

export default Home;
