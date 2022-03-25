import React, { Component } from 'react'

export default class HandleEvent extends Component {

        showMess = ()=>{
            alert('Hello hello')
        }
        sayHello = (name) =>{
            alert('hello!!!' + name)
        }
  render() {
    return (
      <div className='container'>
          <button onClick={this.showMess}>Click me!</button>
          <hr/>
          <button onClick={this.sayHello.bind(this,'Tùng')}>Say hello</button>
          <button onClick={}></button>
      </div>
    )
  }
}
