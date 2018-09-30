import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();

this.state = {
    
   issue : [

      {
        title : 'title1',
        comments : '4' ,
        date : new Date().getDate(),
        isOpen : true ,
        isFavourite : false 
      },

      {
        title : 'title2',
        comments : '2' ,
        date : new Date().getDate(),
        isOpen : false ,
        isFavourite : false 
      },

       {
        title : 'title3',
        comments : '1' ,
        date : new Date().getDate(),
        isOpen : false ,
        isFavourite : false 
      },

       {
        title : 'title4',
        comments : '5' ,
        date : new Date().getDate(),
        isOpen : true ,
        isFavourite : false 
      }
    ]
 
  }
    this.view = this.view.bind(this);
  }

fav(i){
  const {issue}=this.state;

  if(issue[i].isFavourite==true){
    issue[i].isFavourite=false;
  }else{
    issue[i].isFavourite=true;
  }
  this.setState({});
}


  view(){
    const {issue}=this.state;
    return (
      issue.map((val , ind)=> {
      return(<div> <h2> Title :  {val.title}      </h2>
                   <p>  Comments : {val.comments} </p> 
                   <p>  date : {val.date} </p>
                   <p> Favourite : {(val.isOpen==true && "unsolve") || (val.isOpen==false && "solve")} </p>
                   <p> Favourite : {val.isFavourite==true && "add"}</p> 
                   <button onClick={()=>{this.fav(ind)}} > Favourite  </button> 
                   <hr/>
             </div>);

    })
    );
  }
    
  render() {
    return (
      <div className="App">
         {this.view()}
      </div>
    );
  }
}

export default App;
