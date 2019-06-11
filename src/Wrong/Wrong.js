import React, { Component } from 'react';
import classes from './Wrong.module.css'
class Wrong extends Component {
    render() {
        return (
            <div className={classes.container}>
                <div className={classes.main}> Wrong!
            {this.props.description}
            <button onClick = {this.props.nextQuestion}>Next Question</button></div>
           
        </div>
        );
    }
}

export default Wrong;