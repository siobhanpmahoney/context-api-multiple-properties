import React from 'react'
import {PageContent} from './PageContent'
import {Toolbar} from './Toolbar'
import {TextColorToolbar} from './TextColorToolbar'
import {fontOptions, colorOptions, DEFAULT_SETTINGS, DisplayContext} from '../context/DisplayContext'

class PageContainer extends React.Component {
  render() {
    return (
      <div>

        <div style={{top: "0", display: "fixed", backgroundColor:"#FECC00", color:"white", fontFamily: "Open Sans"}}>
          <Toolbar />
          <TextColorToolbar />
        </div>
        <PageContent />
      </div>
    )
  }
}

export default PageContainer
