import React, { Component } from "react";
import css from './Statistics.module.css';
class Statistics extends Component{
    constructor() {
     super()
     this.state = {
       good: 0,
       neutral: 0,
       bad: 0
     }
     render(){
        return
        (<h2>Statistics</h2>
        {this.countTotalFeedback() > 0 ?
        <p>Good: {this.state.good}</p>
        <p>Neutral: {this.state.neutral}</p><p>Bad: {this.state.bad}</p>
        <p>Total: {this.countTotalFeedback()}</p>
        <p>Positive feedback: {Math.round(this.state.good / (this.state.bad + this.state.neutral + this.state.good) * 100)} %</p>
         : <p>No feedback given</p>
        })}
    }}

    export default Statistics