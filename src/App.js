import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {allSettings, DEFAULT_SETTINGS, DisplayContext} from './context/DisplayContext'
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
    let stateCopy = Object.assign({}, this.state.settings)
    let name = event.target.name
    let selection = event.target.value
    let type = event.target.className
    stateCopy[name] = allSettings[type][selection]

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
