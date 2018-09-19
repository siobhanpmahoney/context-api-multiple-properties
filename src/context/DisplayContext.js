import React from 'react'


// available font options
const fontOptions = {
  sans: {fontFamily: "Helvetica"},
  serif: {fontFamily: "Times New Roman"},
  mono: {fontFamily: "Andale Mono"}
}


// available color options
const colorOptions = {
  coral: {color: "#FF5370"},
  blue: {color: "#3D4DF2"},
  aquamarine: {color: "#54d1ff"}
}

// all options
export const allSettings = {
  fontOptions,
  colorOptions
}

// defining default settings
export const DEFAULT_SETTINGS = {
  fontFamilySetting: fontOptions["sans"],
  textColorSetting: colorOptions["blue"]
}


// defining Context
export const DisplayContext = React.createContext({
  settings: DEFAULT_SETTINGS,
  toggleSetting: () => {}
})
