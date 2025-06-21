import React, { useState } from 'react';

function Welcome({ name }) {
  const [message, setMessage] = useState("Welcome to React!");

  return (
    <div>
      <h1>{message}</h1>
      <p>Hello, {name}!</p>
      <button onClick={() => setMessage("Thanks for clicking!")}>
        Click Me
      </button>
    </div>
  );
}

export default Welcome;
