import React from 'react';
import css from './counter.module.css';

export default function IncrementButton(props){
    const handleButtonClick = () => {
        props.onIncrement('+');
    };
        return (
            <button className={`${css.button} ${css.green}`} onClick={handleButtonClick}> +  </button>
        );
    }


