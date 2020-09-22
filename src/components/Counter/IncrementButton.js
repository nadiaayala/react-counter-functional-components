import React, { Component } from 'react';
import css from './counter.module.css';

export default class IncrementButton extends Component {
    handleButtonClick = () => {
        this.props.onIncrement('+');
    };
    
    render() {
        return (
            <button className={`${css.button} ${css.green}`} onClick={this.handleButtonClick}> +  </button>
        );
    }
}

