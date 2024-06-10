import React, { useState, useContext } from "react";
import { userContext } from "../../context/userContext";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(userContext);

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (login) {
      login({ userName, password });
    }
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="mb-4">
        <label htmlFor="userName" className="block text-gray-400 mb-2">
          User Name
        </label>
        <input
          type="text"
          id="userName"
          name="userName"
          className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block text-gray-400 mb-2">
          password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button
        type="submit"
        className="w-full p-3 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 disabled:bg-gray-600"
        disabled={password === "" || userName === ""}
      >
        login
      </button>
    </form>
  );
}

export default Login;
