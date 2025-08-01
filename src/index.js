import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { Greeting } from './task1/Greeting';
import { Message } from './task2/Message';
import {Button} from './task3/Button';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Greeting name="Alex" />
    <Message text="Hello World!"/>
    <Button onClick={() => console.log('Button Clicked!')} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
