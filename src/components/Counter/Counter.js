import React from 'react';
import css from './counter.module.css';
import IncrementButton from './IncrementButton';
import DecrementButton from './DecrementButton';
import Steps from './Steps';


export default function Counter(props) {
    const handleButtonClick = (clickType) => {
            props.onCount(clickType);
    };
        let { currentCounter, steps } = props;
        return (
            <div className={css.container}>
                <DecrementButton onDecrement = {handleButtonClick}/>
                <span className={css.span}> {currentCounter} </span>
                <IncrementButton onIncrement = {handleButtonClick}/>
                <Steps currentStep = {steps}/>
            </div>

        );
}

