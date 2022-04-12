import React, { Component } from 'react'
import { connect } from 'react-redux';
 class TangGiamSoLuong extends Component {
  render() {
      console.log(this.props);
    return (
      <div className='container'>
          <p>{this.props.number}</p>
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
        tangGiamSoLuong: () => {
            
        }
    }
}

export default connect(mapStateToProps)(TangGiamSoLuong);


