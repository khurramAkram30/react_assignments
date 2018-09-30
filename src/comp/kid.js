import React from 'react';


export default class Kid extends React.Component {

 constructor(props) {
   super(props);
   this.state = { emotion: 'nervous', danceSteps: [], currentStepIndex: 0, startedPerforming: false } ;
  //  console.log("sadas",props.furtherSteps);
 }
 static getDerivedStateFromProps(props,state){
  //  console.log(newSteps);
  console.log("asddas kid", props.furthersteps)
  // console.log("dasda",state.danceSteps);
  return {
    danceSteps:[...state.danceSteps,...props.furthersteps],
  startedPerforming:props.furthersteps.length? true : false,
  // emotion:props.status || 'nervous'
}
}


 componentDidMount(){
  //  const {danceSteps} =this.state;
   this.setState({
    danceSteps:['step1','step2']
    
  })
  console.log(this.state.danceSteps);
}
 qualified() {
   this.setState({startedPerforming: false})
  }
  
  render() {
    const {dressColor} = this.props;
    const {danceSteps, emotion, startedPerforming, currentStepIndex} = this.state;
    console.log(danceSteps);
    // console.log(danceSteps);
 
    return (
    <div>
      <div>dressColor: { dressColor }</div>
       <div style={{backgroundColor: dressColor, width: 50, height: 50}}></div>
     <div>Emotion: { emotion }</div>
     {startedPerforming &&
     <div>

       <div>performance started</div>


       <div>Current Step: {danceSteps[currentStepIndex]}</div>
       <button onClick={() => this.setState({currentStepIndex: currentStepIndex + 1})}>Perform Next Step</button>
     </div>}
 </div>
    );
  }
 }
 Kid.defaultProps = { dressColor: 'red', applaud: false, furtherSteps: [] };

 //  
// danceSteps[...state.danceSteps, ...props.dancesteps ];
// ye aik line m likhna ka syntax hai
 // 


 
