import React from 'react';
import css from './counter.module.css';

export default function DecrementButton(props) {
    const handleButtonClick = () => {
        props.onDecrement('-');
    };
    return (
        <button className={`${css.button} ${css.red}`} onClick={handleButtonClick}> - </button>
    );
}

