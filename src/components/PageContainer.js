import React from 'react'
import {PageContent} from './PageContent'
import {Toolbar} from './Toolbar'
import {settings, DisplayContext} from '../context/DisplayContext'

class PageContainer extends React.Component {
  render() {
    return (
      <div>

      <div style={{top: "0", display: "fixed", backgroundColor:"#FECC00", color:"white", fontFamily: "Andale Mono"}}>
      <Toolbar />
      </div>
    <PageContent />
      </div>
    )
  }
}

export default PageContainer
