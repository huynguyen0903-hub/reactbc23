import React, { Component } from "react";
import {connect} from 'react-redux'
 class FormDangKy extends Component {

    state = {
      value: {
        taiKhoan:'',
        matKhau:'',
        hoTen:'',
        email:'',
        soDienThoai:'',
        loaiNguoiDung:'NguoiDung'
      },
      error:{
        taiKhoan:'',
        matKhau:'',
        hoTen:'',
        email:'',
        soDienThoai:''
      }
    }

        handleChange = (event)=>{
            let {className,id,name,value} = event.target
            //data-type <input data-type /> => dù nằm trên thẻ input nhưng không phải là property => không dùng event.target ['data-type']
            let dataType = event.target.getAttribute('data-type')    

            //Lấy lại state của value
            let newValue = {...this.state.value};
            //Xử lý
            newValue[id] = value;
            //Lấy lại state của error
            let newError = {...this.state.error};
            //Xử lý
            let messError = '';
            if(value === ''){
                messError = id + ' không được bỏ trống !'
            }
            if(dataType === 'email'){
                let regexEmail =  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
                if(!regexEmail.test(value)){
                    messError = 'email không đúng định dạng';
                }
            }
            
            newError[id] = messError;

            //set lại state cho value và error
            this.setState({
                value:newValue,
                error:newError
            },()=>{{
                console.log(this.state);
            }})
        }

        handleSubmit = (event) => {
            event.preventDefault(); //Hàm chặn sự kiện reload của browser
            //kiểm tra dữ liệu nhập trước khi submit
            let {value,error} = this.state;
            //kiểm tra form lỗi state.error
            for(let key in error){
                if(error[key] !== ''){
                    alert(key + ' chưa hợp lệ');
                    return; //Dừng hàm
                }
            }
            //Kiểm tra form nhập dầy đủ chứa state.value
            for(let key in value){
                if(value[key] === ''){
                    alert(key + 'chưa hợp lệ')
                    return;
                }
            } 

            console.log(this.state.value);

            const action = {
                type:'DANG_KY',
                nguoiDung: this.state.value
            }
            this.props.dispatch(action)
        }   
        //Hướng giải quyết: thay vì dữ liệu follow từ props => chuyển dữ liệu sang state.value

        static getDerivedStateFromProps(newProps,currentState){
          //lấy props từ redux về gán cho state trước khi render
          currentState.value = {...newProps.nguoiDungSua}

          return currentState;  
        }

  render() {
      console.log('state',this.state.value)
      let {taiKhoan,matKhau,email,hoTen,soDienThoai,loaiNguoiDung} = this.state.value;
    return (
      <form onSubmit={this.handleSubmit} >
        <div className="card">
          <div className="card-header bg-dark text-white">
            <h3>Thông tin người dùng</h3>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-6">
                <div className="form-group">
                  <p>Tài khoản</p>
                  <input
                    className="form-control"
                    id="taiKhoan"
                    name="taiKhoan"
                    onChange={this.handleChange} value={taiKhoan}/>
                    
                    <p className="text text-danger">{this.state.error.taiKhoan}</p>
                </div>
                <div className="form-group">
                  <p>Họ tên</p>
                  <input className="form-control" id="hoTen" name="hoTen" onChange={this.handleChange} value={hoTen}/>
                  <p className="text text-danger">{this.state.error.hoTen}</p>
                </div>
                <div className="form-group">
                  <p>Email</p>
                  <input data-type="email" className="form-control" id="email" name="taiKhoan" onChange={this.handleChange} value={email}/>
                  <p className="text text-danger">{this.state.error.email}</p>
                </div>
              </div>
              <div className="col-6">
                <div className="form-group">
                  <p>Mật khẩu</p>
                  <input
                    className="form-control"
                    id="matKhau"
                    type={'password'}
                    name="matKhau"
                    onChange={this.handleChange} value={matKhau}
                    
                  />
                  <p className="text text-danger">{this.state.error.matKhau}</p>
                  
                </div>
                <div className="form-group">
                  <p>Số điện thoại</p>
                  <input data-type="phone" className="form-control" id="soDienThoai" name="soDienThoai" onChange={this.handleChange} value={soDienThoai}/>
                  <p className="text text-danger">{this.state.error.soDienThoai}</p>
                  
                </div>
                <div className="form-group">
                  <p>Loại người dùng</p>
                  <select className="form-control" id="loaiNguoiDung" name="loaiNguoiDung" onChange={this.handleChange} value={loaiNguoiDung}>
                      <option value={'NguoiDung'}>NguoiDung</option>
                      <option value={'QuanTri'}>QuanTri</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer">
              <button type="submit" className="btn btn-success">Đăng ký</button>
          </div>
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        nguoiDungSua:state.quanLyNguoiDungReducer.nguoiDungSua
    }
}

export default connect(mapStateToProps)(FormDangKy)