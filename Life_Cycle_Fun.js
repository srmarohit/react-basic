import { useState, useEffect } from "react";

const Life_Cycle_Fun = () => {
    const [count, setCount] = useState(0);

    const tick = () => {
        console.log("Tick Effect..");
        setCount(prevState => prevState + 1)
    }

    useEffect(() => {
        console.log("Effect called And component mount");
        const interval = setInterval(tick, 5000);
        return (() => {
            clearInterval(interval)
            console.log("Component unmount..")
        })
    }, [])    // use dependency [tick] then every time rendering and call useeffect.

  return (
      <div>
          <hr/>
      <h1>{count}</h1>
    </div>
  );
};

export default Life_Cycle_Fun;
