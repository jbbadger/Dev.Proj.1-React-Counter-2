import React, { Component } from 'react';

class Counter extends Component {
  constructor(props){
    super(props);


    }

  render(){
    return(
      <div>
        <h1>Value: {this.props.value}</h1>
        <button onClick={this.props.handleUpClick}>Up</button>
        <button onClick={this.props.handleDownClick}>Down</button>
        <button onClick={this.props.handleReset}>Reset</button>
      </div>
    );
  }
}

export default Counter;
