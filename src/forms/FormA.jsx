import React, { useState } from 'react';

export default function Form() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  function validateUser(value) {
    // En este modelo de llamar dos setState continuos siendo que estos son de caracter sincrónico
    // puede funcionar debido a que los setState trabajan por states diferentes (separados), 
    // siendo posible al trabajar con Functional Component, donde por un lado están los states 
    // de los inputs y por otro el state del error
    if(value !== "Jimy") {
      setError('el usuario tiene que ser Jimy');
    } else {
      setError('');
    }
    setUsername(value);
  }
  return console.log("state A --> ", error), (
      <form>
        <input className={error && 'danger'}
          name="username" value={username} placeholder="username" onChange={(e) => validateUser(e.target.value)}/>
        {!error ? null : <span>{error}</span>}
        <input name="password" value={password} placeholder="password" type="password" onChange={(e) => setPassword(e.target.value)}/>
        <input type="submit" />
      </form>
    );
}


