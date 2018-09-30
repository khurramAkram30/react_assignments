import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Kids from './comp/kid';
import Teacher from './comp/teacher';
import Judge from './comp/Judge';


class App extends Component {
constructor(){
  super();
  this.state={
    volume:0,
    furthersteps:[],
    status:""

  }
  this.updateSteps=this.updateSteps.bind(this);
  // console.log(this.state.volume);
}
updateKidStatus(){
this.setState({status:"happy"})
}
updateSteps(furthersteps){
  console.log("further steps from teacher=>",furthersteps);
  this.setState({furthersteps})
}
static getDerivedStateFromProps(){
  return {volume:5}
}

  render() {
    const {volume,furthersteps} =this.state;
    return (
      <div className="App">
      <Kids dressColor="blue" furthersteps={furthersteps}/>
      {/* {volume} */}
      <br/>
      <br/>
      
      <Teacher  updateSteps={this.updateSteps} />
      <br/>
      <br/>
      
  <Judge/>
      </div>
    );
  }
}

export default App;
