import Hello from './hello';
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <Hello onClick={() => console.log('clicked')}/>,
  document.getElementById("content")
);

