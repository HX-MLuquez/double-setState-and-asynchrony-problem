import React, { useState } from "react";

export default function Form() {
  const [state, setState] = useState({
    username: "",
    password: "",
    error: "",
  });

  function validateUser(user) {
    console.log("in");
    if (user.name === "username") {
      if (user.value !== "Jimy") {
        console.log("in");
        setState({
          ...state,
          error: "el usuario tiene que ser distinto a Jimy",
        });
      } else {
        setState({
          ...state,
          error: "",
        });
      }
    }
  }
  /*
Aquí al trabajar solo con un state para manejar los inputs como tb el error, esta solución es buscar la
manera de que se ejecuten pasando no el objeto al state sino una función para no tener problemas con 
su asincronía pero NO FUNCIONA de NINGUNA de estas 5 maneras
*/
  //   function handleInput(event) {
  //     setState((s) => {
  //       return { ...state, [event.target?.name]: event.target?.value };
  //     });
  //     validateUser(event.target);
  //   }

  // function handleInput(event) {
  //   setState((s) => {
  //     validateUser(event.target);
  //     return { ...s, [event.target?.name]: event.target?.value };
  //   });
  // }

  // En algunos de estos casos donde al setState se le pasa un cb en vez del objeto state directo
  // al trabajar con el event.target, en determinados momentos ese target es null y crea una prop
  // de key undefined y value undefined (jujuuuu)

  // function handleInput(event) {
  //     validateUser(event.target);
  //     setState((s) => {
  //       return { ...state, [event.target?.name]: event.target?.value };
  //     }, );
  //   }

  function handleInput(event) {
    // Este ejemplo es el que mejor pero igual rompe ya que en
    // Functinal Component el setState no soporta dos cb por params
    setState(
      (s) => {
        return { ...state, [event.target?.name]: event.target?.value };
      },
      () => validateUser(event.target)
    );
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
