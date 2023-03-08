import { useState, useContext } from "react";
import AuthContext from "../store/authContext";
import axios from "axios";

const Auth = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [register, setRegister] = useState(true);

  const authCtx = useContext(AuthContext);
  const url = "https://socialmtn.devmountain.com";

  //^ Change Handlers
  const submitHandler = (e) => {
    e.preventDefault();

    const body = {
      username,
      password,
    };

    axios
      .post(register ? `${url}/register` : `${url}/login`, body)
      .then(({ data }) => {
        console.log(data);
        authCtx.login(data.token, data.exp, data.userId);
      })
      .catch((err) => {
        setPassword("");
        setUsername("");
      });

    console.log("submitHandler called");
  };

  const userChangeHandler = (e) => {
    setUsername(e.target.value);
    console.log(username);
  };

  const pwChangeHandler = (e) => {
    setPassword(e.target.value);
    console.log(password);
  };

  const loginClickHandler = (e) => {
    if (register) {
      setRegister(false);
    } else {
      setRegister(true);
    }
  };
  //^ End Change Handlers

  return (
    <main>
      <h1>Welcome!</h1>
      <form className="form auth-form" onSubmit={submitHandler}>
        <input
          className="form-input"
          type="text"
          value={username}
          placeholder="Username"
          onChange={userChangeHandler}
        />
        <input
          className="form-input"
          type="password"
          value={password}
          placeholder="Password"
          onChange={pwChangeHandler}
        />
        <button className="form-btn">{register ? "Sign Up" : "Login"}</button>
      </form>
      <button className="form-btn" onClick={loginClickHandler}>
        Need to {register ? "Login" : "Sign Up"}?
      </button>
    </main>
  );
};

export default Auth;
