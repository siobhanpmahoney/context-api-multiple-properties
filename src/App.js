import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {settings, DisplayContext} from './context/DisplayContext'
import PageContainer from './components/PageContainer'
import { Toolbar } from './components/Toolbar'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      setting: settings["serif"],
      toggleSetting: this.toggleSetting
    }

  }

  toggleSetting = (event) => {

      let s = settings
      let selection = event.target.value
      this.setState({
        setting: s[selection]
      })
    }



  render() {
    return (
      <div className="App">
        <DisplayContext.Provider value={this.state}>
          <PageContainer />
        </DisplayContext.Provider>
      </div>
    );
  }
}

export default App;
