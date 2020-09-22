import React, { Component } from 'react';
import css from './counter.module.css';
import IncrementButton from './IncrementButton';
import DecrementButton from './DecrementButton';
import Steps from './Steps';


export default class Counter extends Component {
    constructor() {
        super();
        this.state = {
            currentCounter: 2,
            steps: 0
        };
    }
    handleButtonClick = (clickType) => {
        const { currentCounter, steps } = this.state;
            this.setState({
                currentCounter: clickType === '+' ? currentCounter + 1 :  currentCounter - 1,
                steps: steps + 1,
            });
    };

    render() {
        const { currentCounter, steps } = this.state;
        return (
            <div className={css.container}>
                <DecrementButton onDecrement = {this.handleButtonClick}/>
                <span className={css.span}> {currentCounter} </span>
                <IncrementButton onIncrement = {this.handleButtonClick}/>
                <Steps currentStep = {steps}/>
            </div>

        );
    }
}

