import React, { Component } from 'react'
import dataGlasses from "../Data/dataGlasses.json"

export default class KinhComponent extends Component {
  render() {
    let {glassesItem} = this.props
    return (
      <img onClick={() => {this.props.changeGlasses(glassesItem)}}
          className="ml-2 p-2 border border-width-1"
          style={{ width: "110px", cursor: "pointer" }}
          
          src={glassesItem.url}
        />
    )
  }
}
