import Background from '../image/UJCLogo2.png';
const ErrorPage = () => {
  var styles = {
  width: "100%",
  height: "500px",
  backgroundImage: "url(" + Background + ")",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center"
}
var estilo = {
  color: "black",
  textAlign: "center",
  transform: "translateY(550px)",
  fontSize: "70px",
  fontFamily:"Arial Black"

}
    return  <section style={ styles }>
     <div>
       <h1 style={estilo}>OPS! Página Não Encontrada</h1></div>
    </section> ;
    
  };
  
  export default ErrorPage;