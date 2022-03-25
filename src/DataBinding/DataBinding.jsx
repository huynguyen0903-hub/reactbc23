import React, { Component } from 'react'

export default class DataBinding extends Component {
  product = {
    id:1,
    name: 'iphone',
    price:1000,
    img: 'https://i.pravatar.cc?u=77'
  }
  renderMessage = ()=>{
    return 'Hello cybersoft';
  }
  renderCard = ()=>{
    return (
    <div className='card w-25'>
    <img src={this.product.img} alt="..." />
    <div className='card-body'>
      <p>{this.product.name}</p>
      <p>{this.product.price}</p>
      <button className='btn btn-success'>Add to cart</button>
    </div>
  </div>

  )
  }

  render() {
    let title = 'cybersoft'
    return (
      <div>
        <p id='title'>Tên trung tâm: {title}</p>
        <hr/>
        {this.renderCard()}
        <hr/>
        <p>Lời chào: {this.renderMessage()}</p>
        </div>
    )
  }
}
