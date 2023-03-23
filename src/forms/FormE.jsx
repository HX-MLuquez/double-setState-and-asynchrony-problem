import React, { useState } from "react";

export default function Form() {
  const [state, setState] = useState({
    username: "",
    password: "",
    error: "",
  });

  function validateUser(user) {
    console.log("in");
    let error = "";
    if (user.name === "username") {
      if (user.value !== "Jimy") {
        console.log("in");
        error = "el usuario tiene que ser distinto a Jimy";
      } else {
        error = "";
      }
    }
    return error;
  }

  function handleInput(event) {
    // Este ejemplo es el que mejor pero igual rompe ya que en
    // Functinal Component el setState no soporta dos cb por params
    setState((s) => {
      return { ...state, [event.target?.name]: event.target?.value };
    });
    // Pero este modelo no tiene razón alguna ya que en el primer setState directamente se le puede
    // guardar el valor del error de la función validadora
    setState((s) => {
      return { ...state, [event.target?.name]: event.target?.value, error: validateUser(event.target) };
    });

    /*
    setState((s) => {
      return { ...state, error: validateUser(event.target) };
    });

    El estado de los input no se está actualizando correctamente porque la función handleInput 
    está llamando dos veces a setState, lo que provoca que la segunda llamada sobrescriba los 
    cambios realizados por la primera. En la segunda llamada a setState, se actualiza solo el 
    valor del campo error, pero no se mantiene el valor de los otros campos del estado.

    */
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
    console.log("state ", state),
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
