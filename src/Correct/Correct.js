import React, { Component } from 'react';
import classes from './Correct.module.css'
class Correct extends Component {
    render() {
        console.log(this.props.description)
        return (
            <div className={classes.container}>
                Correct!
                {this.props.description}
                <button onClick = {this.props.reset}>Next Question</button>
            </div>
        );
    }
}

export default Correct;