import React, { Component } from 'react';
import classes from './Correct.module.css'
class Correct extends Component {
    render() {
        console.log(this.props.description)
        return (
            <div className={classes.container}>
            <div className={classes.main}> 
            <div className={classes.answer}>Correct</div>
            <div className={classes.icon}> <i class="fas fa-check fa-3x"></i></div>
           

        <div className={classes.description}>{this.props.description}</div>
        
        <button className={classes.next} onClick = {this.props.nextQuestion}>Next Question</button></div>
       
    </div>
        );
    }
}

export default Correct;