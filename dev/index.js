import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Form from './components/Form.jsx';

const App = () => (
  <div>
    <h1>Hello World!</h1>
    <Form />
  </div>
);

ReactDOM.render(<App />, document.querySelector('.container'));