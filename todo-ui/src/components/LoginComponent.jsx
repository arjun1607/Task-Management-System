import React, { useState } from "react";
import { logjnAPICall } from "../services/AuthService";
import { useNavigate } from "react-router-dom";

const LoginComponent = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigator = useNavigate();

  function handleLoginForm(e) {
    e.preventDefault();
    const loginObj = { username, password };
    console.log(loginObj);
    logjnAPICall(username, password)
      .then((response) => {
        console.log(response);
        navigator("/todos");
      })
      .then((error) => console.log(error));
  }

  return (
    <div className="container">
      <br />
      <br />
      <div className="row">
        <div className="card col-md-6 offset-md-3">
          <div className="card-header">
            <h2 className="text-center">Login Form</h2>
          </div>
          <div className="card-body">
            <form>
              <div className="row mb-3">
                <label className="col-md-3 control-label">
                  Username or Email
                </label>
                <div className="col-md-9">
                  <input
                    type="text"
                    name="username"
                    className="col-md-9"
                    placeholder="Enter Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  ></input>
                </div>
              </div>
              <div className="row mb-3">
                <label className="col-md-3 control-label">Password</label>
                <div className="col-md-9">
                  <input
                    type="text"
                    name="password"
                    className="col-md-9"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  ></input>
                </div>
              </div>
              <div className="form-group mb-3">
                <button
                  className="btn btn-primary"
                  onClick={(e) => handleLoginForm(e)}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
