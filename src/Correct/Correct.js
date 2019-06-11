import React, { Component } from 'react';
import classes from './Correct.module.css'
class Correct extends Component {
    render() {
        console.log(this.props.description)
        return (
            <div className={classes.container}>
                <div className={classes.main}>
                Correct!
                {this.props.description}
                <button onClick = {this.props.nextQuestion}>Next Question</button>
                </div>
               
            </div>
        );
    }
}

export default Correct;