import React, { Component, PureComponent } from 'react'
/*
  PureComponent giống hệt Component tuy nhiên không có lifecycle shouldComponentUpdate(vì react sẽ tự xử lý nhận biết props thay đổi hay không giúp mình)
  Lưu ý: sự nhận biết các props của PureComponent chỉ ở mức shallow compare(nhận biết props trước khi thay đổi và sau khi thay đổi có giống nhau không ở kiểu dữ liệu primitive value(number
    ,string,boolean,null,undefine))
*/

export default class Child extends PureComponent {
  constructor(props){
    super(props)
    this.state = {
      

    }
    console.log('constructor child')
  }
 

  static getDedrivedStateFromProps(newProps,currentState){
    console.log('getDedrivedStateFromProps child')
    return currentState;
  }
  shouldComponentUpdate(newProps,newState){
    //this.props là props hiện tại của component
    //newProps là props mới nhận của component trước khi render
    console.log('this.props.number', this.props.number)
    console.log('newProps', newProps.number)
    console.log('shouldComponentUpdate child')
    if(this.props.number !== newProps.number){
      return true 
    }
    return false;
  }
   

  render() {
    console.log('render child')
    return (
        <div>
        
        <h3>Child component</h3>
        <h3>Number props: {this.props.object.number}</h3>
        </div>
    )
  }
  timeout = {};
  componentDidMount(){
    this.timeout = setInterval(()=>{
      console.log('hello cybersoft')
    },3000);
    console.log('componentDidMount chill')

  }
  componentDidUpdate(){
    console.log('componentDidUpdate child')

  }

  componentWillMount(){
    //Hàm gọi trước khi component mất khỏi giao diện
    //Life cycle dùng để clear  các service chạy ngầm khỏi component
    clearInterval(this.timeout);
  }
}
