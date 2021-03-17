import logo from './logo.svg';
import React, { Component } from 'react';
import { useState, useEffect } from 'react';
import useCustomHooks from './customHooks';
import User from './User.js';
import style from './App.module.css';



function App(props) {
    const [tasks, setTask] = useState(['task1', 'task2']);
    const [input, setInput] = useState('');

    console.log(tasks)

    const deleteHandler = (e) => {
        const index = e.target.index;
        const task = [...tasks];
        task.splice(index, 1);
        setTask([...task]);    /* cant input="" becoz useState() property */
    }

    const addTask = (e) => {
        setTask([...tasks, input]);
        setInput("")
    }

    useEffect(() => {
       
    },[])

    return (
        <React.Fragment>
            <ul>
                {
                    tasks.map((task, i) =>  /*Dont use {} here...*/
                        <li key={i}>
                            {task}
                            <button data-index={i} onClick={deleteHandler}> Delete</button>
                        </li>
                    )
                }
            </ul>
            <input onChange={(e) => setInput(e.target.value)} value={input} />
            <button onClick={addTask}>Add</button>
            <br />
            <p>Total Task : { tasks.length }</p>
        </React.Fragment>
        );
}

export default App;
