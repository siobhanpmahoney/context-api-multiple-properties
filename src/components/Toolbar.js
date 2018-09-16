import React from 'react'
import {settings, DisplayContext} from '../context/DisplayContext'

export function Toolbar () {
  //
  // render()
    const settingKeys = Object.keys(settings)

    return (
      <DisplayContext.Consumer>
      {({setting, toggleSetting}) => (
        <form>
        <label>Choose font</label>
        <select onChange={toggleSetting}>
            return <option value="">Select..</option>
          {settingKeys.map((k) => {
            return <option value={k}>{k}</option>
          })}
        </select>
        </form>
      )}
      </DisplayContext.Consumer>
    )

}

// export default Toolbar
