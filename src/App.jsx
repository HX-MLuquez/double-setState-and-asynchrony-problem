import "./App.css";
import FormA from "./forms/FormA";
import FormB from "./forms/FormB";
import FormC from "./forms/FormC";
import FormD from "./forms/FormD";
import FormE from "./forms/FormE";

function App() {

  return (
    <div className="App">
      <h1>double setState and asynchrony problem</h1>
      <h2>FormA</h2>
      <p>Functional Component | Double setState</p>
      <FormA></FormA>
      <h2>FormB</h2>
      <p>Functional Component | one setState</p>
      <FormB></FormB>
      <div className="danger">
        <h2>FormC</h2>
        <p>Functional Component | one setState | 5 maneras donde NO FUNCIONA</p>
        <FormC></FormC>
      </div>
      <h2>FormD</h2>
      <p>Class Component | one state</p>
      <FormD></FormD>
      <div className="danger">
        <h2>FormE</h2>
        <p>Functional Component | double setState | double cb in c/state</p>
        <FormE></FormE>
      </div>

      <p className="read-the-docs">
        Handling two concurrent setStates taking the name and value of the
        event.target and handling errors
      </p>
      <div className="danger">
      <p>Remember that:</p>
      <p>react_devtools_backend.js:2655 Warning:</p>
      <p>
        State updates from the useState() and useReducer() Hooks don't support
        the second callback argument.
      </p>
      <p>
        To execute a side effect after rendering, declare it in the component
        body with useEffect().
      </p>
      </div>
      <h2>Manejo asíncrono de ejecutar dos veces continuas setState tomando</h2>
      <h2>
        el name y el value del event.target de los inputs y validando errores
      </h2>
    </div>
  );
}

export default App;
