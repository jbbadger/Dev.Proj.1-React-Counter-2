import React, { Component } from 'react';
import './App.css';
import Counter from './components/Counter.js';

class App extends Component {
  constructor(props){
    super(props);
      this.state = {
        value: 1
      };

  this.handleUpClick = this.handleUpClick.bind(this);
  this.handleDownClick = this.handleDownClick.bind(this);
  this.handleReset = this.handleReset.bind(this);

    }

  handleUpClick(){
    let upClick = this.state.value + 3;
    this.setState({value: upClick });
  }

  handleDownClick(){
    let downClick = Math.max(-10, this.state.value - 1);
    this.setState({value: downClick});
  }

  handleReset(){
    this.setState({value: 0});
  }


  render() {
    return (
      <div className="App">
        <Counter
          initValue={this.state.value}
          upClick={this.handleUpClick}
          downClick={this.handleDownClick}
          resetClick={this.handleReset} />
      </div>
    );
  }
}

export default App;
