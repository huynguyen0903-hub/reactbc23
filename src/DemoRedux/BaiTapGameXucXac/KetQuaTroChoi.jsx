import React, { Component } from 'react'
import { connect } from 'react-redux'

export class KetQuaTroChoi extends Component {
  render() {
    //   console.log('props',this.props);
      let {banChon,soBanThang,tongSoBanChoi} = this.props;
    return (    
      <div className='container text-center' >
          <div>
              <p className='display-4'>
                  BẠN CHỌN: <span className='text-warning'>{banChon ? 'Tài' : 'Xỉu'}</span>
              </p>
          </div>
          <div>
              <p className='display-4'>
                  TỔNG SỐ BÀN THẮNG: <span className='text-success'>{soBanThang} </span>
              </p>
          </div>
          <div>
              <p className='display-4'>
                  TỔNG SỐ BÀN CHƠI: <span className='text-warning'>{tongSoBanChoi}</span>
              </p>
          </div>
          <div>
              <button className='btn btn-success'>
                  <div className='p-3 display-4 bg-success text-white' 
                  onClick={()=>{
                      const action = {
                          type:'PLAY_GAME',
                          
                      }
                      this.props.dispatch(action)
                  }}>Play game</div> 
              </button>
          </div>
      </div>
    )
  }
}

const mapStateToProps = (rootReducer) => ({
    banChon: rootReducer.gameXucXacReducer.banChon,
    soBanThang: rootReducer.gameXucXacReducer.soBanThang,
    tongSoBanChoi: rootReducer.gameXucXacReducer.tongSoBanChoi  
})
   
const mapDispatchToProps = {}

export default connect(mapStateToProps)(KetQuaTroChoi)