import React, { Component } from 'react'
import { connect } from 'react-redux';
 class TangGiamSoLuong extends Component {
  render() {
      console.log(this.props);
    return (
      <div className='container'>
          <p>{this.props.number}</p>
          <button onClick={()=>{
              this.props.tangGiamSoLuong(1)
          }}>+</button>
          <button onClick={()=>{
              this.props.tangGiamSoLuong(- 1)
          }}>-</button>
      </div>
    )
  }
}

const mapStateToProps = (rootReducer) => {
    return {
        number: rootReducer.stateNumber
    }
}

const mapDispatchtoProps = (dispatch) => {
    return{
        tangGiamSoLuong: (soLuong) => {
            // console.log(soLuong);
            const action = {
                type:'TANG_GIAM_SO_LUONG',//redux bắt buộc phải có
                soLuong: soLuong
            }
            //đưa dữ liệu lên redux
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps,mapDispatchtoProps)(TangGiamSoLuong);


