import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './Profile.js';
import './personnes.js';

class Profile extends React.Component {
  
  
  
  handleClick() {
    console.log('Clicked');
  } 

  
    render() {
    return(

    <div className ="container">
      
          <button id="charlotte " onClick={ () => this.handleClick} value="charlotte">charlotte</button>
          <button id="jacques" onClick={ () => this.handleClick} value="jacques">jacques</button>
          <button id="jean" onClick={() => this.handleClick} value="jean">jean</button>
      
      </div>
    )
  }
}
ReactDOM.render(
  <Profile />,
  document.getElementById('root')
);
