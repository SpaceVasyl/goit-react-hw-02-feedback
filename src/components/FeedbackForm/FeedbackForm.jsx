import React, { Component } from "react";
import css from './FeedbackForm.module.css'
class Feedback extends Component {
 constructor() {
  super()
  this.state = {
    good: 0,
    neutral: 0,
    bad: 0
  }
 }
newFunc = (ewent)=>{
  const targetClick = ewent.target.innerText.toLowerCase();
  this.setState(prevState=>{return {[targetClick]:prevState[targetClick]+1}});
}

// neutralStat = () => {
//   this.setState(prevState=>{ console.log(prevState.neutral); return {neutral: prevState.neutral + 1}});
// }

countTotalFeedback = ()=>{
  const summOFState = this.state.bad + this.state.neutral + this.state.good;
  return  summOFState;
}
  render() {
    return (<div>
      <h2>Please leave feedback</h2>
        <button type="button" className={css.buttonstat} onClick={this.newFunc}>Good</button>
        <button type="button" className={css.buttonstat} onClick={this.newFunc}>Neutral</button>
        <button type="button" className={css.buttonstat} onClick={this.newFunc}>Bad</button>
      </div>)
  }
}

export default Feedback