import React, { Component } from "react";

export default class GioHang extends Component {

    renderGioHang = () => {
      let {gioHang} = this.props;
        
        return gioHang.map((item, index) => {
            return (
              <tr key={index}>
                  <td>{item.maSP}</td>
                  <td>{item.tenSP}</td>
                  <td>
                      <img src={item.hinhAnh} width={50} height={50}/>
                  </td>
                  <td>{(item.giaBan).toLocaleString()}</td>
                  <td>
                      <button onClick={()=>{
                          this.props.tangGiamSoLuong(item.maSP,1)
                      }}
                       className="btn btn-primary mr-2">+</button>
                      {item.soLuong}
                      <button onClick={()=>{
                          this.props.tangGiamSoLuong(item.maSP,-1)
                      }}
                       className="btn btn-primary ml-2">-</button>
                  </td>
                    <td>
                        {(item.giaBan * item.soLuong).toLocaleString()}
                    </td>
                    <td>
                    <button onClick={()=>{
                        this.props.xoaGioHang(item.maSP);
                    }} className="btn btn-primary ml-2">Xóa</button>
                    </td>
              </tr>
            );
          });
    }

  render() {
    return (
      <div>
        <div className="text-right">
          <span style={{ cursor: "pointer" }}>
            <i class="fa fa-shopping-cart mr-2"> Giỏ hàng</i>
          </span>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>Mã sản phẩm</th>
              <th>Tên sản phẩm</th>
              <th>Hình ảnh</th>
              <th>Giá bán</th>
              <th>Số lượng</th>
              <th>Thành tiền</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
           {this.renderGioHang()}
          </tbody>
        </table>
      </div>
    );
  }
}
