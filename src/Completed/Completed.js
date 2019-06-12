import React, { Component } from "react";
import classes from "./Completed.module.css";
import { MyConsumer } from "../context.js";
class Completed extends Component {
  render() {
    return (
      <MyConsumer>
        {value => {
          return (
            <div className={classes.container}>
              <div className={classes.main}>
              <div className={classes.title}>Finished!</div>
                <div className={classes.icon}> <i class="fas fa-flag-checkered fa-3x" /> </div>
                <div className={classes.results}>
                  <div> Questions right: <br /> {value.questionsRight}</div>
                  <div> Questions wrong: <br /> {value.questionsWrong}</div>
                </div>
                <button className={classes.again} onClick={this.props.restartPage}>
                  Retake quiz
                </button>
                
              </div>
            </div>
          );
        }}
      </MyConsumer>
    );
  }
}

export default Completed;
