import React from 'react'
import {colorOptions, fontOptions, DEFAULT_SETTINGS, DisplayContext} from '../context/DisplayContext'

export function TextColorToolbar () {
  //
  // render()
  const options = Object.keys(colorOptions)

  return (
    <DisplayContext.Consumer>
      {({textColorSetting, toggleSetting}) => (
        <form>
          <div><label>Choose Color</label></div>
          <select name="textColorSetting" className="colorOptions" onChange={toggleSetting}>
            return <option name="textColorSetting" value="">Select..</option>
            {options.map((k) => {
              return <option className="colorOptions" name="textColorSetting" value={k}>{k}</option>
            })}
          </select>
        </form>
      )}
    </DisplayContext.Consumer>
  )

}
