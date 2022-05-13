import React, { useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

export default function ApiReduxHooks() {
  const { data, isLoading, error } = useSelector((rootState) => rootState.tasksReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    const getTasks = async () => {
      try {
        //Trước khi gọi API dispatch action để set isLoading thành true
        dispatch({type: "GET_TASKS_PENDING" })
        //Call API
        const result = await axios({
          url: "http://svcy.myclass.vn/api/ToDoList/GetAllTask",
          method: "GET",
        });
        //Call API thành công => dispatch action để set data
        dispatch({
          type: "GET_TASKS_FULFILLED",
          data: result.data,
        });
      } catch (error) {
        //Call API thất bại => dispatch action để set error
        dispatch({
          type: "GET_TASKS_REJECTED",
          error: error.response.data, //format error của axios
        });
        console.log(error)
      }
    };
    getTasks();
  }, []);

  if(isLoading){
    return <p>Loading...</p>
  }
  
  if(error){
    return <p>{error}</p>
  }


  return <div>
    {(data || []).map((item,index)=> {
      return <p key={index}>{item.taskName}</p>;
    })}
  </div>;
}
