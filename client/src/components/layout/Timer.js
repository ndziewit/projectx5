import React from 'react';
   
   class Timer extends React.Component{
constructor(props){
    super(props)
    this.state = {
        count : 0
    }
    this.startTimer = this.stateTimer.bind(this)
    this.stopTimer = this.stopTimer.bind(this)
    this.resetTimer = this.resetTimer.bind(this)
  
}

startTimer(){
    this.timer = setInterval(() =>
    this.setState({
        count : this.state.count + 1
    }), 1000
    )
}

stopTimer (){
    clearInterval(this.timer)
}

resetTimer(){
    this.setState({count:0})
}
       render() {
           return(
               <div className = "container">
                   <h1>Timer : {this.state.count}</h1>
                   <button onClick={this.startTimer}>Start</button>
                   <button>onClick={this.StopTimer}Stop</button>
                   <button>onClick={this.resetTimer}Reset</button>
               </div>
           );
       }
   }

   export default Timer; 