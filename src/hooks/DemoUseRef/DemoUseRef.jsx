import React, { useRef, useState } from "react";

export default function DemoUseRef(props) {
  //   const [state, setState] = useState({ username: "", password: "" });
  const [number, setNumber] = useState(1);
  //   console.log("state", state);
  //Useref: có thể cache lại giá trị sau mỗi lần render nhưng không render lại giao diện
  let userLoginRef = useRef({ username: "", password: "" });
  
  
  
  const handleChange = (event) => {
    const { value, name } = event.target;

    userLoginRef.current[name] = value;
  };

  const handleSubmit = (event) => {
    event.preventDefault(); //Chặn sự kiện reload của browser
    // let username = document.getElementsByName('username')[0].value;
    // let password = document.getElementsByName('password')[0].value;
    console.log("userLogin", userLoginRef.current);
  };

  return (
    <form className="container" onSubmit={handleSubmit}>
      <h3>Number:{number}</h3>
      <button
        type="button"
        className="btn btn-success"
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        +
      </button>
      <h3>Login</h3>
      <div className="form-group">
        <p>username</p>
        <input
          className="form-control"
          name="username"
          alt="..."
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <p>password</p>
        <input
          className="form-control"
          name="password"
          alt="..."
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <button className="btn btn-success" type="submit">
          Login
        </button>
      </div>
    </form>
  );
}
