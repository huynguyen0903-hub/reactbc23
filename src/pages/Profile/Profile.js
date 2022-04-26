import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

export default class Profile extends Component {
  render() {

    if(localStorage.getItem('username')){
      alert('Bạn chưa đăng nhập nên không thẻ vào trang')
      return <Redirect to="/login" />
    }

    return (
      <div>Profile</div>
    )
  }
}
