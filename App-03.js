import React, { useState, useEffect } from "react";

const App3 = () => {
  const [count, setCount] = useState(0);
  const [salary, setSalary] = useState(1000);

  const countHandler = () => {
    console.log("count changed..");
    setCount(count + 5);
  };

  const salHandler = () => {
    console.log("salary changed..");
    setSalary(salary + 500);
  };

  const mulCounter = () => {
    console.log("mulCounter called..");
    setCount(count * 10);
  };

  useEffect(() => {
    console.log("useEffect");
  },[count]);

  return (
    <div>
      <h1>Count : {count}</h1>
      <h1>Salary : {salary} </h1>

      <button onClick={countHandler}>Count</button>
      <button onClick={salHandler}>SalHandler</button>
    </div>
  );
};

export default App3;
