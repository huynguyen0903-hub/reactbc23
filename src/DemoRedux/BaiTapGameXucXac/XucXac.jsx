import React, { Component } from 'react'
import { connect } from 'react-redux'

export class XucXac extends Component {
    renderKetQua = () => {
        //input: this.props.mangXucXac
        //output <p>'Tai' - điểm</p>
        let tongDiem = 0;
        let ketQua = '';
        for (let xucXac of this.props.mangXucXac){
            tongDiem += xucXac.diem;
        }
        ketQua = tongDiem > 11 ? 'Tài' : 'Xỉu';
        return tongDiem + ' - ' + ketQua;
    }

  render() {
      /*Có 2 cách để đưa action lên reducer chỉ được chọn 1 trong 2
        + Sử dụng this.props.dispatch (lưu ý component connect với redux mới có props này)
        + Định nghĩa hàm mapDispatchToProps
        */
    return (
      <div className='container mt-5'>
          <div className='row text-center'>
              <div className='col-4'>
                  <button className='btn btn-success' >
                      <div className='display-4 p-5 text-white bg-success'
                       onClick={()=> {
                          //Tạo ra action
                          const action = {
                              type:'DAT_CUOC',
                              banChon:true
                          };
                          //Sử dụng this.props.dispatch để gửi action lên reducer
                          this.props.dispatch(action);
                      }}>TÀI</div>
                  </button>
              </div>
              <div className='col-4'>
                  {this.props.mangXucXac.map((xucXac,index)=>{
                      return <img key={index} src={xucXac.hinhAnh} alt='...' width={50} height={50}/>
                  })}
                  <br/>
                  <div className='display-4 text-danger mt-3'>{this.renderKetQua()}</div>  
              </div>
              <div className='col-4'>
              <button className='btn btn-success' >
                      <div className='display-4 p-5 text-white bg-success'
                      onClick={()=> {
                        //Tạo ra action
                        const action = {
                            type:'DAT_CUOC',
                            banChon:false
                        };
                        //Sử dụng this.props.dispatch để gửi action lên reducer
                        this.props.dispatch(action);
                    }}>XỈU</div>
                  </button>
              </div>
          </div>
      </div>
    )
  }
}

const mapStateToProps = (rootReducer) => ({
    mangXucXac:  rootReducer.gameXucXacReducer.mangXucXac
})

const mapDispatchToProps = {}

export default connect(mapStateToProps)(XucXac)

