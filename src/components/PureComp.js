// Helps to avoid unnecessary re-rendering and boosts code performsncre
// works on only class components
import React, { PureComponent } from 'react'

export default class PureComp extends PureComponent {
  render() {
    return (
      <div>PureComp</div>
    )
  }
}
