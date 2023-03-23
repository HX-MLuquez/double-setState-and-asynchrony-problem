import React, { useState } from "react";

export default function FormB() {
  const [state, setState] = useState({
    username: "",
    password: "",
    error: "",
  });

  function validateUser(user) {
    let error = "";
    if(user.name === "username"){
       if (user.value !== "Jimy") {
      console.log("in");
      error = "el usuario tiene que ser Jimy";
    } else {
      error = "";
    }  
    }
    return error;
  }
/*
Aquí al trabajar solo con un state para manejar los inputs como tb el error, la solución es buscar la
manera de que se ejecute una sola vez el setState para no tener problemas con su asincronía
*/
  function handleInput(event) {
    setState({
      ...state,
      [event.target.name]: event.target.value,
      error: validateUser(event.target),
    });
  }
  function handleSumbit(e) {
    e.preventDefault();
    if (state.username) {
    }
    setState({
      username: "",
      password: "",
      error: "",
    });
  }

  return (
    console.log("state B --> ", state),
    (
      <form onSubmit={handleSumbit}>
        <input
          name="username"
          value={state.username}
          placeholder="username"
          onChange={handleInput}
        />

        <input
          name="password"
          value={state.password}
          placeholder="password"
          type="password"
          onChange={handleInput}
        />
        {state.error.length > 0 ? null : (
          <button type="submit" onClick={handleSumbit}>
            Submit
          </button>
        )}
      </form>
    )
  );
}