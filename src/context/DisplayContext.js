import React from 'react'

const fontOptions = {
  sans: {
    fontFamily: "Helvetica"
  },
  serif: {
    fontFamily: "Times New Roman"
  },
  mono: {
    fontFamily: "Andale Mono"
  }
}

const colorOptions = {
  coral: {color: "#FF5370"},
  blue: {color: "#3D4DF2"},
  aquamarine: {color: "#54d1ff"}
}

export const allSettings = {
  fontOptions,
  colorOptions
}

export const DEFAULT_SETTINGS = {
  fontFamilySetting: fontOptions["sans"],
  textColorSetting: colorOptions["blue"]
}

export const DisplayContext = React.createContext({
  settings: DEFAULT_SETTINGS,
  toggleSetting: () => {}
})
