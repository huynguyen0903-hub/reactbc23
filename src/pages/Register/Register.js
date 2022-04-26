import React, { Component } from 'react'
import { Prompt } from 'react-router-dom';

export default class Register extends Component {


  state = {
    status : true
  }

  handleSubmit = () => {
    this.setState({status : false});
  }

  render() {
    return (
      <div className='container'>
        <h3>Đăng kí</h3>
        <div className='form-group'>
          <p>Tài Khoản</p>
          <input className='font-control' id='taiKhoan'/> 
        </div>
        <div className='form-group'>
          <p>Mật khẩu</p>
          <input className='font-control' id='matKhau'/> 
        </div>
        <div className='form-group'>
        <button className='btn btn-success' onClick={()=> {this.handleSubmit()}}>Đăng ký</button>
        </div>
        <Prompt when={this.state.status} message={location => ('bạn có muốn rời khỏi trang ?')}/>
      </div>
    )
  }
}
