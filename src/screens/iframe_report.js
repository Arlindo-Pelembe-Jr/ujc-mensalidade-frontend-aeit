
import axios from 'axios';
import {useNavigate,useParams,Link,useLocation } from "react-router-dom";
import '../estilo.css';
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export const IframeReport = props=> {
   
        console.log("sync PDF");
        const request = new Request(`http://localhost:8080/ujc-mensalidade/api/v1/pagamentos/report/`+localStorage.getItem('utilizadorId'),
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem('validToken')}`,
          },
          mode: "cors",
          cache: "default",
        }
      );

      fetch(request)
        .then((response) =>
            response.blob())
        .then((blob) => {  
            console.log(blob);            
          const file = window.URL.createObjectURL(blob);
          const iframe = document.querySelector("iframe");
          if (iframe?.src) iframe.src = file;
        })
        .catch((err) => {
          // process error
          console.log(err);
        });       

  
          
  
  return (


    <div >
<div className="d-grid gap-2 col-6 mx-auto">
<iframe src="" width="200%" height="500%"></iframe>


</div>


    </div>
  );
}

export default IframeReport;
