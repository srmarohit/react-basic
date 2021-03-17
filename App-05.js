import { useState } from "react";
import Life_Cycle from './App-04';
import Life_Cycle_Fun from './Life_Cycle_Fun'
const Effect_Example = () => {

    const [display, setDisplay] = useState(true);

    return (
        <div>
            <button onClick={e => setDisplay(!display)}>Toggle Component</button>
            { display && <Life_Cycle_Fun />}
        </div>
        );
}

export default Effect_Example;