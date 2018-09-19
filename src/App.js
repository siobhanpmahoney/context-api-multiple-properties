import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {fontOptions, colorOptions, allSettings, DEFAULT_SETTINGS, DisplayContext} from './context/DisplayContext'
import PageContainer from './components/PageContainer'
import { Toolbar } from './components/Toolbar'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = Object.assign({}, {
      settings: DEFAULT_SETTINGS,
      toggleSetting: this.toggleSetting
    })

  }

  toggleSetting = (event) => {
    debugger
    let stateCopy = Object.assign({}, this.state.settings)
    let name = event.target.name
    let selection = event.target.value
    let type = event.target.className
    let ff = fontOptions
    let tc = colorOptions
    let as = allSettings
    stateCopy[name] = as[type][selection]

      this.setState({
        settings: stateCopy
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
