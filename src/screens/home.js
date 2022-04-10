
import axios from 'axios';
import {useNavigate,useParams,Link } from "react-router-dom";

export const Home = props=> {
  let {userName} =useParams();
  const retrieveStudents = async ()=>{
    console.log("tapped");
    
    const response=axios
    .get("http://localhost:8080/ujc-mensalidade/api/v1/estudantes"
    );

    return (await response).data
      };
  
  return (


    <div >

      <div>
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
      </div>
      <h2> Hello, Welcome {userName}</h2>
     
    </div>
  );
}

export default Home;
