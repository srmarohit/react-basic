import { useState, useEffect } from "react"

const Use_Effect = () => {

    const [count, setCount] = useState(0);
    const [salary, setSalary] = useState(5000);

    const incHandler = () => {
        console.log("incHandler called");
        setCount(count + 10);
    }

    const decHandler = () => {
        console.log("decHandler called");
        setSalary(salary - 100);
    }

    useEffect(() => {
        console.log("Effect Called")
    }, [salary])

    return ( 
        <div>
            <h1>{count}</h1>
            <button onClick={incHandler}>Count</button>

            <h1>{salary}</h1>
            <button onClick={decHandler}>Salary</button>
        </div>
        )
}

export default Use_Effect;