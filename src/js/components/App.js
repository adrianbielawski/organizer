import React from 'react';
import './App.css';
import {Nav} from './nav/nav';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      screenHeight: window.innerHeight
    };
    this.changeInnerHeight = window.addEventListener('resize', this.setInnerHeight);
  }

  setInnerHeight = () => {
    const newHeight = window.innerHeight;
    this.setState({screenHeight: newHeight});
  }

  render() {
    return (
      <div className="App" style={{height: this.state.screenHeight}}>
        <Nav activateTab={this.activateTab}/>
      </div>
    );
  }
}