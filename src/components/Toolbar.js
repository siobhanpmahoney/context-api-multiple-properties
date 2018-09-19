import React from 'react'
import {fontOptions, colorOptions, DEFAULT_SETTINGS, DisplayContext} from '../context/DisplayContext'

export function Toolbar () {
  //
  // render()
    const fontFamilySettingKeys = Object.keys(fontOptions)

    return (
      <DisplayContext.Consumer>
      {({fontFamilySetting, toggleSetting}) => (
        <form>
        <div><label>Choose font</label></div>
        <select className="fontOptions" onChange={toggleSetting} name="fontFamilySetting">
            return <option name="fontFamilySetting" value="">Select..</option>
          {fontFamilySettingKeys.map((k) => {
            return <option className="fontOptions" name="fontFamilySetting" value={k}>{k}</option>
          })}
        </select>
        </form>
      )}
      </DisplayContext.Consumer>
    )

}

// export default Toolbar
