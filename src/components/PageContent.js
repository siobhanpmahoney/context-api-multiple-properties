import React from 'react'
import {DEFAULT_SETTINGS, DisplayContext} from '../context/DisplayContext'


// export function PageContent() {
//   // render() {
//   return (
//     <DisplayContext.Consumer>
//       {({fontFamilySetting, toggleSetting}) => (
//         <div style={{fontFamily: fontFamilySetting.fontFamily}}>
//           <h1>Learning Context Api </h1>
//           <h2> Part 1: The Basics </h2>
//         </div>
//       )}
//     </DisplayContext.Consumer>
//   )
//   // }
// }

export const PageContent = () => {
  // render() {
  return (
    <DisplayContext.Consumer>
      {({settings}) => (
        <div style={{fontFamily: settings.fontFamilySetting.fontFamily, color: settings.textColorSetting.color}}>
          <h1>Learning Context Api </h1>
          <h2> Part 1: The Basics </h2>
        </div>
      )}
    </DisplayContext.Consumer>
  )
  // }
}


// class PageContent extends React.Component {
//   render() {
//   return (
//     <DisplayContext.Consumer>
//       {({fontFamilySetting, toggleSetting}) => (
//         <div style={{fontFamily: fontFamilySetting.fontFamily}}>
//           <h1>Learning Context Api </h1>
//           <h2> Part 1: The Basics </h2>
//         </div>
//       )}
//     </DisplayContext.Consumer>
//   )
//   }
// }
//
//
// export default PageContent
