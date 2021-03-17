import { useState, useEffect } from "react";

const Life_Cycle_Fun = () => {
    const [count, setCount] = useState(0);

    const tick = () => {
        setCount(prevState => prevState + 1)
    }

    useEffect(()=>{
        const interval = setInterval(tick, 1000);
        return (() => {
            clearInterval(interval)
        })
    }, [tick])

  return (
      <div>
          <hr/>
      <h1>{count}</h1>
    </div>
  );
};

export default Life_Cycle_Fun;
