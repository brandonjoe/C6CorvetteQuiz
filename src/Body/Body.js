import React from 'react';
import classes from './Body.module.css'
import QuestionPage from '../QuestionPage/QuestionPage';
import Phase1 from '../Phase1/Phase1'
const Body = () => {
    return (
        <div className={classes.container}>
            <div className={classes.main}>
            <QuestionPage />
            </div>
            
        </div>
    );
};

export default Body;