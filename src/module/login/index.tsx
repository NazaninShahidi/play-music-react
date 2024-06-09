import React, { useState, useContext } from "react";
import { userContext } from "../../context/userContext";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(userContext);

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(userName, password);
    if (login) {
      login({ userName, password });
    }
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <div>
          <label htmlFor="userName">User Name</label>
          <input
            type="text"
            name="userName"
            id="userName"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
