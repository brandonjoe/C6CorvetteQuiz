import React, { Component } from 'react';
import classes from './Intro.module.css';

class Intro extends Component {
    render() {
        return (
            <div className={classes.container}>
                <div className={classes.main}>
                    <div className={classes.title}>america's sports car</div>
                    <div className={classes.info}>
                        Z06 <br />
                        7.0L LS7 V8<br />
                        505hp <br />
                        470lbs torque <br />
                    </div>
                    
                </div>
                <div className={classes.car}>
                        c6 corvette
                    </div>
            </div>
        );
    }
}

export default Intro;