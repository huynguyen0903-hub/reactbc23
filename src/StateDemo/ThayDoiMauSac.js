import React, { Component } from 'react'

export default class ThayDoiMauSac extends Component {

    state = {
        colorHome: 'green'
    }

    handleChangeColor = (newColor) => {
        this.setState({
            colorHome:newColor
        })
    }

  render() {
    return (
      <div className='container'>
          <h3>Bài Tập : Thay đổi màu sắc ngôi nhà</h3>
          <i className='fa fa-home' style={{fontSize:150,color:this.state.colorHome}}></i>

          <button className='btn btn-success' onClick={() =>{
              this.handleChangeColor('green');
          }}>Green</button>
          <button className='btn btn-primary ml-2' onClick={() =>{
              this.handleChangeColor('blue');
          }}>Blue</button>
          <button className='btn btn-danger ml-2' onClick={() =>{
              this.handleChangeColor('red');
          }}>Red</button>

      </div>
    )
  }
}
