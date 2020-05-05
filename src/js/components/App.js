import React from 'react';
import './App.css';
import { Nav } from './nav/nav';
import { MainContent } from './main content/main-content';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0,
      screenHeight: window.innerHeight,
      tabs: [
          {
              tabTitle: 'Lists',
          },
          {
              tabTitle: 'Rotas',
          },
          {
              tabTitle: 'Calendar',
          }
      ]
    };
    this.changeInnerHeight = window.addEventListener('resize', this.setInnerHeight);
  }

  setInnerHeight = () => {
    const screenHeight = window.innerHeight;
    this.setState({screenHeight});
  }
    
  activateTab = (index) => {
      this.setState({
          activeTab: index
      })
  }

  render() {
    return (
      <div className="App" style={{height: this.state.screenHeight}}>
        <Nav activateTab={this.activateTab} activeTab={this.state.activeTab} tabs={this.state.tabs}/>
        <MainContent tabs={this.state.tabs} activeTab={this.state.activeTab}/>
      </div>
    );
  }
}