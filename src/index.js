import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

const numbers = [5, 3, 1];

const sort = (arr) => {
  for (let i = arr.length - 1; i >= 0; i--) {
    for (let inner = 0; inner < i; inner++) {
      if (arr[inner] > arr[inner + 1]) {
        let temp = arr[inner + 1];
        arr[inner + 1] = arr[inner];
        arr[inner] = temp;
      }
    }
  }

  return arr;
};

console.log(sort(numbers));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
