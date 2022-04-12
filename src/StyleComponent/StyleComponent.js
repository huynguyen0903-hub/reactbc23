import React, { Component } from 'react'
import style from './Style.module.css';
// import './Style.css'

export default class StyleComponent extends Component {
  render() {
    return (
      <div>
          
          <h3>Style Component</h3>
          <p className='text-red'>Hello Cybersoft</p>
          {/* <p className={`p-5 ${style[classStyle]} bg-dark`}>Hello Cybersoft</p> */}

          
      </div>
    )
  }
}
