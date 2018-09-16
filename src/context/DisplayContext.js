import React from 'react'

export const settings = {
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

export const DisplayContext = React.createContext({
  setting: settings.serif,
  toggleSetting: () => {}
})
