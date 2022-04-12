import React, { Component } from 'react'
import CardProduct from './CardProduct'

export default class DemoProps extends Component {
  render() {
    return (
      <div className='container'>
          <div className='d-flex'>
          <div className='w-25'>
              <CardProduct name="Iphone" price="1000" img="https://picsum.photos/id/15/200"/>
          </div>
          <div className='w-25 ml-5'>
              <CardProduct name="Samsung" price="5000" img="https://picsum.photos/id/10/200"/>
          </div>
          </div>
      </div>
    )
  }
}

