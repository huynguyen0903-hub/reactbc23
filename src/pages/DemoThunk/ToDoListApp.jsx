import axios from "axios";
import React, { useEffect, useState } from "react";
import {useDispatch} from 'react-redux'
import { getTaskApiAction } from "../../redux/actions/toDoListActions";
export default function ToDoListApp(props) {
  const [task, setTasks] = useState([]);
  const dispatch = useDispatch();
  useEffect(async () => {
    //Cách 2: sử dụng async await
  
    /*
      redux cho phép dispatch 2 dạng action
      action1: {type:'',data}
      action2: (dispatch) => {xử lý có giá trị => dispatch 2 dispatch}
    */
    const action2 = getTaskApiAction;
    
    dispatch(action2)

  }, []);

  return (
    <div className="container">
      <h3 className="text-center display-4">To do list</h3>

      {/* Search */}
      {/* <div className="d-flex justify-content-center mb-4">
      <div className="form-inline w-50">
        <label htmlFor="">Search</label>
        <input
         type="text" className="form-control"
          id="search" value={search} onChange={evt => setSearch(evt.target.value)}
        />
        <button className="btn btn-success" onClick={handleSearch}>Search</button>
      </div>
      </div> */}

      <div className="d-flex justify-content-center">
        <table className="table w-50 text-center">
          <tbody>
            {task.map((task, index) => {
              return (
                <tr key={index}>
                  <td>{task.taskName}</td>
                  <td>
                    <span className="badge badge-danger">{task.status}</span>
                    <span
                      className="fa fa-check ml-2 text-success"
                      style={{ fontSize: 25 }}
                    ></span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
