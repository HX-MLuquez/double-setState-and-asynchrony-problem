# double setState and asynchrony problem

- Para este problema hay un modelo de solución en Functional Component y otro en Class Component

Y hay la manera de evitar hacer doble setState desde el manejo del error y eso también es una solución

```
En resumen si tenemos un estado único digamos: 
```
```js
const [ count, setCount ] = useState(0)
setState(() => count= count + 1 );
setState(() => count= count + 1 );
```
```
En este caso estamos trabajando en un valor en particular y si podemos usar dos setState continuos pero deben pasarse por argumento la función callback para su correcto proceso asincrónico. 

Pero si tenemos dos estados es decir dos valores a trabajar diferentes: 
```
```js
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
```
```
Como puede ser los inputs por un lado y los errores por otro en ese caso esta metodología de pasar función callback a cada uno de los set states no va a tener efecto. 

Así que la solución para cuando tenemos digamos dos states valores diferentes la solución: 
```
- En los componentes funcionales es usar un setState para cada state 
```js
function validateUser(value) {
    if(value !== "Jimy") {
      setError('el usuario tiene que ser Jimy');
    } else {
      setError('');
    }
    setUsername(value);
  }
```
- Mientras que para el componente de clases como solamente tenemos un state la solución es pasarle al setState dos callback función en el mismo parámetro
```js
export default class FormD extends Component {
  constructor(props) {
    super();
    this.state = {
      username: "",
      password: "",
      error: "",
    };
  }

  validateUser = (user) => {
    console.log("in");
    if (user.name === "username") {
      if (user.value !== "Jimy") {
        console.log("in");
        this.setState({
          ...this.state,
          error: "el usuario tiene que ser distinto a Jimy",
        });
      } else {
        this.setState({
          ...this.state,
          error: "",
        });
      }
    }
  };

  handleInput = (event) => {
    this.setState(
      (s) => {
        return { ...this.state, [event.target?.name]: event.target?.value };
      },
      () => this.validateUser(event.target)
    );
  };
// etc ...
```

enjoy!!!


