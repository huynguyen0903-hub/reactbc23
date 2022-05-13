import React, { Component } from 'react'
import axios from 'axios';
export default class ApiRcc extends Component {

  state = {
    arrTask : []
  }

  getAllTaskApi = async() => {
      // let promise = axios({
      //   url:'http://svcy.myclass.vn/api/ToDoList/GetAllTask',
      //   method:'GET'
      // })
      // //Xử lý thành công
      // promise.then(result => {
      //   console.log('result', result)
      //   console.table(result.data)
      //   //lấy dữ liệu về ván gán vào state
      //   this.setState({
      //     arrTask: result.data 
      //   })
      // })
      // //Xử lý thất bại
      // promise.catch(err =>{
      //   console.log({err})  
      // })

      //Cách 2: sử dụng async await
       try {let result = await axios({  
        url:'http://svcy.myclass.vn/api/ToDoList/GetAllTask',
        method:'GET'
      })
      console.log('result',result.data)
      console.log(123)
      this.setState({
          arrTask: result.data 
        })
      } catch(err){
        console.log({err})
      }
  }

  componentDidMount(){
    //Chạy sau render và chạy 1 lần duy nhất
    this.getAllTaskApi();
  }

  render() {
    return (
      <div className='container'>
        <button className='btn btn-success' onClick={()=>{
          this.getAllTaskApi()
        }}>Get all tasks</button>
        <h3 className='text-center display-4'>To do list</h3>
        <div className='d-flex justify-content-center'>
        
            <table className='table w-50 text-center'>
              <tbody>
                {this.state.arrTask.filter(task => task.status === false).map((task,index)=>{
                  return   <tr key={index}>
                    <td>{task.taskName}</td>
                    <td>
                      <span className='badge badge-danger'>incomplete</span>
                      <span className='fa fa-check ml-2 text-success' style={{fontSize : 25}}></span>
                    </td>
                  </tr>
                })}
              {/* <tr>
              <td>Tập thể dục</td>
                <td>
                  <span className='badge badge-danger'>incomplete</span>
                  <span className='fa fa-check ml-2 text-success' style={{fontSize : 25}}></span>
                </td>
              </tr>
              <tr>
              <td>Làm bài tập</td>
                <td>
                  <span className='badge badge-danger'>incomplete</span>
                  <span className='fa fa-check ml-2 text-success' style={{fontSize : 25}}></span>
                </td>
              </tr> */}
              </tbody>
              <tfoot>
              {this.state.arrTask.filter(task => task.status === true).map((task,index)=>{
                  return   <tr key={index}>
                    <td>{task.taskName}</td>
                    <td>
                      <span className='badge badge-success'>complete</span>
                    </td>
                  </tr>
                })}
              {/* <tr>
              <td>Tập thể dục</td>
                <td>
                  <span className='badge badge-success'>complete</span>
                </td>
              </tr>
              <tr>
              <td>Làm bài tập</td>
                <td>
                  <span className='badge badge-success'>complete</span>
                </td>
              </tr> */}
              </tfoot>
            </table>
         
        </div>
      </div>
    )
  }
}
