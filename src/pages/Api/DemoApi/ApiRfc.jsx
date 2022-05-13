import React , {useState, useEffect} from "react";
import axios from 'axios'

export default function ApiRfc(props) {
  const [task, setTasks] = useState([]);
  const [search, setSearch] = useState("");

  const handleSearch =   async () => {
    // Gọi API
    try {
      const {data} = await axios({
        url: `http://svcy.myclass.vn/api/ToDoList/GetTask?taskName=${search}`,
      })
      setTasks([data])
    } catch (error) {
      console.log(error)
    }
  }


  useEffect(()=> {
    // Tạo async function
    async function getTask(){
      try {
        const { data } = await axios({
          url: "http://svcy.myclass.vn/api/ToDoList/GetAllTask",
          method: 'GET',
        });
        //setState
        setTasks(data)
      } catch (error) {
        console.log(error);
      }
    }
    //Call function
    getTask(); 
  }, []);

  return (
    <div className="container">
      <h3 className="text-center display-4">To do list</h3>

      {/* Search */}
      <div className="d-flex justify-content-center mb-4">
      <div className="form-inline w-50">
        <label htmlFor="">Search</label>
        <input
         type="text" className="form-control"
          id="search" value={search} onChange={evt => setSearch(evt.target.value)}
        />
        <button className="btn btn-success" onClick={handleSearch}>Search</button>
      </div>
      </div>
      


      <div className="d-flex justify-content-center">
        <table className="table w-50 text-center">
          <tbody>
            {task.map((task ,index) => {
              return  (
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
              )
            })}
          
        
          </tbody>
     
        </table>
      </div>
    </div>
  );
}
