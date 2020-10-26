import React, {Component} from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./Navigation";
import ReactDOM from 'react-dom'
import App2 from "./App2";
import App3 from "./App3";


export class ToogleButtons extends Component
{
  constructor(props)
  {
    super(props)
    
    
    this.state={
    tabType : 'charlotte',
    tabType : 'jacques',
    tabType : 'jean'
  
  }
    
  }
    toggleMe=(value)=>{
      this.setState({
      tabType:value
      })}
    

  render(){
    return(
    <div>

    <div className="mt-3">
      <button className = "btn btn-primary m-2" onClick={()=>this.toggleMe('charlotte')}> Charlotte </button>
      <button className = "btn btn-secondary m-2" onClick={()=>this.toggleMe('jean')}> Jean </button>
      <button className = "btn btn-third m-2" onClick={()=>this.toggleMe('jacques')}> Jacques </button>
    </div>

  <div className="infos">
    {this.state.tabType==='charlotte'&& <div>
      <p> Nom: DANIER </p>
      <p> Prenom: Charlotte</p>
       <p>Date de naissance : 11/04/1979 </p>
      <p> Actu: 'Je m'ennuie' </p>  </div>
    }

    {this.state.tabType==='jean'&& <div>
    <p>Nom:"POLA",</p>
    <p>Prenom:"Jean",</p>
    <p> Date de naissance:"11/04/1979",</p>
    <p> img:"jean",</p>
    <p>Actu:"Hier il m'est arrivé un truc de dingue",</p></div>
  }
    {this.state.tabType==='jacques'&& <div>

    <p> Nom: "LUT",</p>
    <p> prenom:"Jacques",</p>
    <p> date_n:"02/09/1989",</p>
    <p>  img:"jacques",</p>
      <p> dernier_tweet:"J'ai faim",</p>
       </div>
  }


</div>
</div>

    );

  }


}


export default ToogleButtons;
