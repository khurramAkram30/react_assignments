import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

class child extends Component {
constructor(props){
  super(props);
//   this.state={
//     text:"hello"
//   }
// console.log(props.text);
// console.log(props);
}
//  
static getDerivedStateFromProps(props,state){
    return {text:props.text}
}

  render() {
      console.log("props",this.props.text);
      console.log("state",this.state.text);
       
    return (
      <div className="App">
        {this.state.text}
        {this.props.text}

      
      </div>
    );
  }
}

export default child;
