import React, { Component } from "react";
import classes from "./Completed.module.css";
import { MyConsumer } from "../context.js";
class Completed extends Component {
  render() {
    return (
      <MyConsumer>
          {value => {
              return(
                <div className={classes.container}>
                    <div className={classes.main}>
                    Completed
                <button onClick={this.props.restartPage}>Try the quiz again!</button>
                <div> Questions right {value.questionsRight}</div>
                <div> Questions right {value.questionsWrong}</div>
                    </div>
               
              </div>
              )
  
          }}
      
      </MyConsumer>
    );
  }
}

export default Completed;
