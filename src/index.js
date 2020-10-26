import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './Profile.js';
import './personnes.js';

class Profile extends React.Component {
  
  onSubmit(value) {
    console.log(value);
  }
    render() {
    return(

      <div>
        <button id="charlotte" value="charlotte " onSubmit={this.onSubmit}> Charlotte</button>
        <button id="jacques" value="jacques " onSubmit={this.onSubmit}>Jacques</button>
        <button id="jean" value="jean " onSubmit={this.onSubmit}>Jean</button>
      </div>
    )
    }
  }


  class Button extends React.Component {
    onClick(event) {
      const value = event.target.value;
      this.props.onSubmit(value);
    }
  
    render() {
      return (
        <button value={this.props.value} onClick={e => this.onClick(e)}>
          {this.props.value}
        </button>
      );
    }
  }

ReactDOM.render(
  <Profile />,
  document.getElementById('root')
);


//EXEMPLE
/*const name = 'Clarisse Agbegnenou';
const element = <h1>Bonjour, {name}</h1>;

ReactDOM.render(
  element,
  document.getElementById('root')
);*/