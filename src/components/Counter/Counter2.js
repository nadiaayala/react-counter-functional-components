import React, { Component } from 'react';
import css from './counter.module.css';
import IncrementButton from './IncrementButton';
import DecrementButton from './DecrementButton';
import Steps from './Steps';


export default class Counter2 extends Component {
    constructor(props) {
        super(props);
      }

    handleButtonClick = (clickType) => {
        console.log(clickType);
        this.props.onCount(clickType);
    };

    render() {
        const { countValue, currentStep } = this.props;
        return (
            <div className={css.container}>
                <DecrementButton onDecrement = {this.handleButtonClick}/>
                <span className={css.span}> {countValue} </span>
                <IncrementButton onIncrement = {this.handleButtonClick}/>
                <Steps currentStep = {currentStep}/>
            </div>

        );
    }
}

