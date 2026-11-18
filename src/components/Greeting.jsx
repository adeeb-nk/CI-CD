import React from 'react';

function Greeting({ name }) {
  return <p>Hello World, {name || 'Guest'}!</p>;
}

export default Greeting;