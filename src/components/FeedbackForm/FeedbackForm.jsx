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
  
goodStat = () => {
  this.setState({good: +1});
}
  render() {
    return (<div>
      <h2>Please leave feedback</h2>
        <button type="button" className={css.buttonstat} onClick={this.goodStat}>Good</button>
        <button type="button" className={css.buttonstat}>Neutral</button>
        <button type="button" className={css.buttonstat}>Bad</button>
        <p>{this.state.good}</p>
    </div>)
  }
}

export default Feedback