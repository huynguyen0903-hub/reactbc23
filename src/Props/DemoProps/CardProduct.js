import React, { Component } from 'react'

export default class CardProduct extends Component {
  render() {
    return (
      <div className='card'>
          <img src={this.props.img} alt='...' />
          <div className='card-body'>
              <p>{this.props.name}</p>
              <p>{this.props.price}</p>
              <button className='btn btn-success'>Đặt mua</button>
          </div>
      </div>
    )
  }
}
