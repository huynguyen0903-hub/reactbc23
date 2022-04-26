import React, { Component } from 'react'

//kết nối redux
import {connect} from 'react-redux'
 class BaiTapChonXeRedux extends Component {
  render() {
    return (
      <div className='container'>
          <h3>Bài tập chọn xe</h3>
          <div className='row'>
              <div className='col-6'>
                  <img src={this.props.imgCar} alt='...' className='w-100'/>
              </div>
              <div className='col-6'>
                  <div className='row'>
                      <div className='col-3'>
                          <button onClick={()=>{
                              this.props.changeColor('red')
                          }} className='btn text-white ' style={{backgroundColor:'red',color:'fff'}}>Red</button>
                      </div>
                      <div className='col-3'>
                          <button onClick={()=>{
                              this.props.changeColor('black')
                          }} className='btn text-white ' style={{backgroundColor:'black',color:'fff'}}>black</button>
                      </div>
                      <div className='col-3'>
                          <button onClick={()=>{
                              this.props.changeColor('silver')
                          }} className='btn text-white ' style={{backgroundColor:'silver',color:'fff'}}>silver</button>
                      </div>
                      <div className='col-3'>
                          <button onClick={()=>{
                              this.props.changeColor('steel')
                          }} className='btn text-white' style={{backgroundColor:'#EEE',color:'fff'}}>Steel</button>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    ) 
  }
}

//Định nghĩa hàm lấy dữ liệu từ redux  về 
const mapStateToProps = (rootReducer) => {
    return {
        imgCar: rootReducer.stateImgCar
    }
}

//định nghĩa hàm gửi dữ liệu lên redux
const mapDispatchToProps = (dispatch) => {
     return {
         changeColor : (newColor) => {
            //  console.log('newColor',newColor);
            const action = {
                type:'CHANGE_COLOR',
                newColor
            }
            //đưa dữ liệu lên store
            dispatch(action);
         }
     }
}



export default connect(mapStateToProps,mapDispatchToProps)(BaiTapChonXeRedux)

