import React from 'react';
import ReactDOM from 'react-dom';
//import './tailwind.css';
import Post from './Post';
import FormExample from './App-02';
import App3 from './App-03';
import reportWebVitals from './reportWebVitals';
import Life_Cycle from './App-04';
import Life_Cycle_Fun from './Life_Cycle_Fun';
import Effect_Example from './App-05';
import Home from './App-06';
import Router_Example from './App-06';
/*
ReactDOM.render(
  <React.StrictMode>
        <Post maxLength={ 150 }>
            If you want to start measuring performance in your app, pass a function
            to log results (for example: reportWebVitals(console.log))
            or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
        </Post>
    </React.StrictMode>
  ,document.getElementById('root')
);*/

ReactDOM.render(
    <React.StrictMode>
        <Router_Example />
    </React.StrictMode>
    , document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
