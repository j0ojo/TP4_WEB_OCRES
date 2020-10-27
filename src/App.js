import React, {Component} from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./Navigation";
import ReactDOM from 'react-dom';
import Changer_Style from "./Changer_Style";



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
      <div className='style' > <button className="align-text-bottom" onClick={()=>Changer_Style()}>Changer de Style</button> </div>
     </div>

  <div className="infos">
    {this.state.tabType==='charlotte'&& <div>
      <img id="charlotte" src="../images/charlotte.jpg" alt="ch"></img>
      <p> Nom: DANIER  &nbsp;  Charlotte</p>
       <p>Date de naissance : 11/04/1979 </p>
      <p> Actu: J'ai trop faim :(  </p>  </div>
    }

    {this.state.tabType==='jean'&& <div>
    <img id="jean" src="../images/jean.jpg" alt="je"></img>
    <p>Nom: POLA &nbsp; Jean </p>
    <p>Date de naissance: 11/04/1979</p>
    <p>Actu: Hier il m'est arrivé un truc de dingue ! </p></div>
  }
    {this.state.tabType==='jacques'&& <div>
    <img id="jacques"src="../images/jacques.jpg" alt="ja"></img>
    <p> Nom: LUT &nbsp; Jacques</p>
    <p> Date de naissance: 02/09/1989 </p>
    <p> Actu: Il faut que j'aille à la salle de sport </p>
       </div>

  }


</div>
</div>

    );

  }


}


export default ToogleButtons;
