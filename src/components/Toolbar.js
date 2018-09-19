import React from 'react'
import {fontOptions, colorOptions, allSettings, DEFAULT_SETTINGS, DisplayContext} from '../context/DisplayContext'

export function Toolbar () {
  //
  // render()
    const fontFamilySettingKeys = Object.keys(allSettings.fontOptions)

    return (
      <DisplayContext.Consumer>
      {({fontFamilySetting, toggleSetting}) => (
        <form>
        <div><label>Choose Font</label></div>
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
