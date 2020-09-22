import React, { Component } from 'react';
import css from './counter.module.css';

export default class DecrementButton extends Component {
    handleButtonClick = () => {
        this.props.onDecrement('-');
    };

    render() { 
        return (  
            <button className={`${css.button} ${css.red}`} onClick={this.handleButtonClick}> - </button>
        );
    }
}
 
 