import React, { Component } from 'react';
import classes from './Lightbox.module.css'
class Lightbox extends Component {
    state= {
        ishidden: false
    }
    
    clicked = () => {
        this.setState({
            ishidden: true
        })
    }
    render() {
        const hide = this.state.ishidden;
        let whole;
        if(hide === false){
           
        } else {
            whole= <div></div>
        }
      
        return (
            <div className={classes.container}>
           
            <img className={classes.img} src={this.props.image}></img>
        </div>
        );
    }
}

export default Lightbox;