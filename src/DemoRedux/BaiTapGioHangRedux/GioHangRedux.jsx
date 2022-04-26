import React, { Component } from 'react'
//Kết nối redux
import {connect} from 'react-redux';
 class GioHangRedux extends Component {

  tinhTongSoLuong = () => {
    let tongSL = 0;
    for (let spGH of this.props.stateGioHang){
      tongSL += spGH.soLuong;
    }
    return tongSL;
  }

  render() {
    return (
      <div>
          <div className='text-right'>
              <span className='text-danger font-weight-bold'>Giỏ hàng ({this.tinhTongSoLuong()})</span>
          </div>
          <table className='table'>
          <thead>
              <tr>
              <th>Mã sản phẩm</th>
              <th>Tên sẩn phẩm</th>
              <th>Hình ảnh</th>
              <th>Giá bán</th>
              <th>Số lượng</th>
              <th>Thành tiền</th>
              </tr>
          </thead>
          <tbody>
              {this.props.stateGioHang.map((spGH,index)=> {
                return <tr key={index}>
                <td>{spGH.maSP}</td>
                <td>{spGH.tenSP}</td>
                <td><img src={spGH.hinhAnh} width={50} height={50} alt="..." /> </td>
                <td>{spGH.giaBan.toLocaleString()}</td>
                <td>
                  <button onClick={()=> {
                    this.props.tangGiamSoLuong(spGH.maSP,1)
                  }} className='btn btn-primary mr-2'>+</button>
                  {spGH.soLuong}
                  <button onClick={()=> {
                    this.props.tangGiamSoLuong(spGH.maSP,-1)
                  }} className='btn btn-primary ml-2'>-</button>
                  </td>
                <td>{(spGH.giaBan * spGH.soLuong).toLocaleString()}</td>
                <td>
                  <button onClick={()=>{
                    this.props.xoaGioHang(spGH.maSP)
                  }} className='btn btn-danger'>Xóa</button>
                </td>
            </tr>
              })}
          </tbody>
      </table>
      </div>
    )
  }
}

//Định nghĩa hàm mapStateToProps lấy dữ liệu redux vê
const mapStateToProps = (rootReducer) => {
  return {
    stateGioHang : rootReducer.gioHangReducer
  }
}

//Định nghĩa sự kiện xóa giỏ hàng
const mapDispatchToProps = (dispatch) => {
  return {
    xoaGioHang: (maSPClick) => {
      const action = {
        type:'XOA_GIO_HANG',
        maSPClick
      }
      dispatch(action);
    },
    tangGiamSoLuong: (maSPClick,soLuong) => {
      //xử lý
      console.log(maSPClick);
      //Tạo ra 1 action
      const action = {
        type:'TANG_GIAM_SO_LUONG',
        maSPClick,
        soLuong
      }
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(GioHangRedux);