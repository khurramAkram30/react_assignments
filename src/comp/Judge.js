import React, { Component } from 'react';

export default class Judge extends React.Component {
    constructor() {
        super();
     this.state = {stars: 0, available: false}
    }
   
    applaud() {
      //Send this applaud status to Kid.js
    }
   
    provideStars() {
      const {stars} = this.state;
   
      this.setState({stars: stars+1})
    }
   shouldComponentUpdate(nextProps,neextState){
    neextState.stars <=5
}
    render() {
      const {stars, available} = this.state;
   
      return (
        <div>
          <button type="button" onClick={this.applaud.bind(this)}>
           Appreciate performance
          </button>
          <button type="button" onChange={this.provideStars.bind(this)}>
           Provide stars
          </button>
   
          Kid is available: {available}
   
          Stars gained: {stars}
        </div>
      );
    }
   }
//    