import React, { Component } from 'react';
import css from './counter.module.css';

export default class  Steps extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <span className={css.span}> ({this.props.currentStep}) </span>
         );
    }
}
 
 