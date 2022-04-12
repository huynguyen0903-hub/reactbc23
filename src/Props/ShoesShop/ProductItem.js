import React, { Component } from 'react'

export default class ProductItem extends Component {
  render() {
      let {prod} = this.props;
    return (
      <div className='card'>
           <div className='d-flex justify-content-center'>
          <img src={prod.image} alt='...' width={200 }/>
          </div>
          <div className='card-body'>
              <p>{prod.name}</p>
              <p>{prod.price} $</p>
              <button className='bg-dark text-white btn'>+ Add to carts</button>
          </div>
      </div>
    )
  }
}
