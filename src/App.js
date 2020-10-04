import React, { Component, Fragment } from 'react';
import Counter from './components/Counter/Counter';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      currentCounter: 3,
      steps: 0,
    }
  }

  handleCounter = (clickType) => {
    const { currentCounter, steps } = this.state;
    if (clickType === '-') {
      if (currentCounter > 0) {
        this.setState({
          currentCounter:  currentCounter - 1,
          steps: steps + 1,
        });
      }
    }
    else if (clickType === '+'){
      this.setState({
        currentCounter:  currentCounter + 1,
        steps: steps + 1,
      });
    }

  };


  render() {
    const { currentCounter, steps } = this.state;
    return (
      <Fragment>
        <h3> Counter 1 </h3>
        <Counter onCount={this.handleCounter} steps={steps} currentCounter={currentCounter} />
      </Fragment>
    );
  }

}
