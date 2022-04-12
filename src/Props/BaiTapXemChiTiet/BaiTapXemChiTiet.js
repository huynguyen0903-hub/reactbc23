import React, { Component } from "react";
import GioHang from "./GioHang";
import SanPham from "./SanPham";

export default class BaiTapXemChiTiet extends Component {
  arrPhone = [
    {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: "AMOLED, 6.2, Full HD+",
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "./img/products/vsphone.jpg",
    },
    {
      maSP: 2,
      tenSP: "Meizu 16Xs",
      manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
      heDieuHanh: "Android 9.0 (Pie); Flyme",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 7600000,
      hinhAnh: "./img/products/meizuphone.jpg",
    },
    {
      maSP: 3,
      tenSP: "Iphone XS Max",
      manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
      heDieuHanh: "iOS 12",
      cameraSau: "Chính 12 MP & Phụ 12 MP",
      cameraTruoc: "7 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 27000000,
      hinhAnh: "./img/products/applephone.jpg",
    },
  ];
  state = {
    spChiTiet: {
      maSP: 2,
      tenSP: "Meizu 16Xs",
      manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
      heDieuHanh: "Android 9.0 (Pie); Flyme",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 7600000,
      hinhAnh: "./img/products/meizuphone.jpg",
    },

    gioHang: [
      
    ],
  };

  tangGiamSoLuong = (maSPClick,soLuong) => {
      console.log(maSPClick,soLuong);
      let {gioHang} = this.state;
      let spGH = gioHang.find(sp=>sp.maSP === maSPClick);
      if(spGH){
          spGH.soLuong += soLuong;
          if(spGH.soLuong < 1){
              if(window.confirm('Bạn có muốn xóa sẩn phẩm này không?')){
                  gioHang = gioHang.filter(sp=>sp.maSP !== maSPClick);
              }
              spGH.soLuong -= soLuong;
          }
      }
      this.setState({
          gioHang:gioHang
      })
  }


  xoaGioHang = (maSanPhamClick) => {
    console.log('masanPhamClick',maSanPhamClick);
    let gioHang = this.state.gioHang;
    //tìm ra sp chứa mã Click nút xóa
    let index = gioHang.findIndex(sp => sp.maSP ===maSanPhamClick);
    if(index !== -1){
        if(window.confirm('Bạn có muốn xóa sản phẩm đang chọn?')){
            gioHang.splice(index,1);    
        }
        
    }
    this.setState({
        gioHang:gioHang
    })
  }

  themGioHang = (sanPhamClick) => {

    let sp = {...sanPhamClick,soLuong:1}

    console.log('spClick',sanPhamClick);
    let gioHang = this.state.gioHang;
      //setState => thay đổi giỏ hàng

    let spGH = gioHang.find(sp=>sp.maSP === sanPhamClick.maSP);
    if(spGH){
        spGH.soLuong += 1;
    }else{
        gioHang.push(sp);
    }

      this.setState({
          gioHang: gioHang
      })
  }

  renderProduct = () => {
    return this.arrPhone.map((phone, index) => {
      return (
        <div className="col-4" key={index}>
          <SanPham phone={phone} xemChiTiet={this.xemChiTiet}
          themGioHang={this.themGioHang} />
        </div>
      );
    });
  };
  xemChiTiet = (sanPhamClick) => {
    console.log("sanPhamClick", sanPhamClick);
    this.setState({
      spChiTiet: sanPhamClick,
    });
  };
  render() {
    let {
      maSP,
      tenSP,
      giaBan,
      hinhAnh,
      heDieuHanh,
      manHinh,
      ram,
      rom,
      cameraSau,
      cameraTruoc,
    } = this.state.spChiTiet;
    return (
      <div className="container">
        <h3 className="mr-5">Giỏ hàng</h3>
        <GioHang tangGiamSoLuong={this.tangGiamSoLuong} xoaGioHang={this.xoaGioHang} gioHang={this.state.gioHang} />

        <h3 className="text-center">Danh sách sản phẩm</h3>
        <div className="row">
          {this.renderProduct()}
          {/* <div className='col-4'>
                  <div className='card'>
                      <img src="./img/products/applephone.jpg" alt='...' className='w-full' height={300} />
                   <div className='card-body'>
                   <p>Iphone xs max</p>
                      <p>27,000,000</p>
                      <button className='btn btn-success'>Xem chi tiết</button>
                   </div>
                  </div>
              </div>
              <div className='col-4'>
                  <div className='card'>
                      <img src="./img/products/applephone.jpg" alt='...' className='w-full' height={300} />
                   <div className='card-body'>
                   <p>Iphone xs max</p>
                      <p>27,000,000</p>
                      <button className='btn btn-success'>Xem chi tiết</button>
                   </div>
                  </div>
              </div>
              <div className='col-4'>
                  <div className='card'>
                      <img src="./img/products/applephone.jpg" alt='...' className='w-full' height={300} />
                   <div className='card-body'>
                   <p>Iphone xs max</p>
                      <p>27,000,000</p>
                      <button className='btn btn-success'>Xem chi tiết</button>
                   </div>
                  </div>
              </div> */}
        </div>
        <div className="row mt-5">
          <div className="col-4">
            <h3 className="text-center">{tenSP}</h3>
            <img src={hinhAnh} alt="..." height={300} className="w-100" />
          </div>
          <div className="col-8">
            <h3>Thông số kỹ thuật</h3>
            <table className="table">
              <tbody>
                <tr>
                  <th>Màn hình</th>
                  <th>{manHinh}</th>
                </tr>
                <tr>
                  <th>Hệ điều hành</th>
                  <th>{heDieuHanh}</th>
                </tr>
                <tr>
                  <th>Camera trước</th>
                  <th>{cameraTruoc}</th>
                </tr>
                <tr>
                  <th>Camera sau</th>
                  <th>{cameraSau}</th>
                </tr>
                <tr>
                  <th>RAM</th>
                  <th>{ram}</th>
                </tr>
                <tr>
                  <th>ROM</th>
                  <th>{rom}</th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
