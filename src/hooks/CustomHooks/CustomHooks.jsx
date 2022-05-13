import React, { useState, useEffect } from "react";
import useForm from './useForm';
import useCounter from './useCounter'
import useAxios from './useAxios'
export default function CustomHooks() {
//   const [values, setValues] = useState({ 
//     username: "",
//     email: "",
//     password: "",
//   });

//   const handleChange = (evt) => {
//       const { name, value} = evt.target;
//       console.log(name, value)

//       setValues({
//           ...values,
//           [name]: value, 
//       })
//   }
    const {values, handleChange} = useForm({
            username: "",
            email: "",
            password: "",
    });

    const {count ,increase, decrease} = useCounter(0)

    const {data} = useAxios({
        url: "http://svcy.myclass.vn/api/ToDoList/GetAllTask",
        method: "GET",
    })
    console.log('GetAllTask', data)

  return (
    <div className="container">
        <div>
            <button onClick={decrease}>-</button>
            <span className="mx-2">Count:{count}</span>
            <button onClick={increase}>+</button>
        </div>
      {/* Username */}
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          className="form-control"
          id="username"
          name="username"
          value={values.username}
          onChange={handleChange}
        />
      </div>
      {/* Email */}
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          value={values.email}
          onChange={handleChange}
        />
      </div>
      {/* Password */}
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="form-control"
          id="password"
          name="password"
          value={values.password}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
