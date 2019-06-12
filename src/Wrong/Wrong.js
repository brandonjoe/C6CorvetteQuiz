import React, { Component } from 'react';
import classes from './Wrong.module.css'
class Wrong extends Component {
    render() {
        return (
            <div className={classes.container}>
                <div className={classes.main}> 
                <div className={classes.answer}>Incorrect</div>
                <div className={classes.icon}> <i class="fas fa-times fa-3x"></i></div>
               

            <div className={classes.description}>{this.props.description}</div>
            
            <button className={classes.next} onClick = {this.props.nextQuestion}>Next Question</button></div>
           
        </div>
        );
    }
}

export default Wrong;