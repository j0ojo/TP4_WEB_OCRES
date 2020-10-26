import React from "react";
import ReactDOM from 'react-dom'


function App3 () {


  function Jean() {

  
    const p3 = {
      nom:"POLA",
        prenom:"Jean",
        date_n:"11/04/1979",
        img:"jean",
        dernier_tweet:"Hier il m'est arrivé un truc de dingue",}
  
  
    return ( 
      

      ReactDOM.render(
        
        <h>
      {p3.image}
      <p>nom: {p3.nom}</p>
      <p> prenom:{p3.prenom}</p>
       <p>Date de naissance :{p3.date_n}</p>
      <p> Actu: 'Je m'ennuie' </p> 

        </h>,
            document.getElementById('root')
      )
      );
      
         
            }
  return (
    <button onClick={Jean}>
      Jean
    </button>
  );
  
}
export default App3;
