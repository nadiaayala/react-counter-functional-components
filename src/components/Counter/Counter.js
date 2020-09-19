import React, { Component } from 'react';
import css from './counter.module.css';

export default class Counter extends Component {
    constructor() {
        super();
        this.state = {
            currentCounter: 2,
            steps: 0
        };
    }

    handleButtonDownClick = () => {
        const { currentCounter, steps } = this.state;
        if (currentCounter >= 1) {
            this.setState({
                currentCounter: currentCounter - 1,
                steps: steps + 1,
            });
            console.log(this.state);
        }
    };

    handleButtonUpClick = () => {
        const { currentCounter, steps } = this.state;
            this.setState({
                currentCounter: currentCounter + 1,
                steps: steps + 1,
            });
            console.log(this.state);
        
    };

    render() {
        const { currentCounter, steps } = this.state;
        return (
            <div className={css.container}>
                <button className={`${css.button} ${css.red}`} onClick={this.handleButtonDownClick}> - </button>
                <span className={css.span}> {currentCounter} </span>
                <button className={`${css.button} ${css.green}`} onClick={this.handleButtonUpClick}> +  </button>
                <span className={css.span}> ({steps}) </span>
            </div>

        );
    }
}

