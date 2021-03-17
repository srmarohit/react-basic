import React, { } from 'react';
import useCustomHooks from './customHooks';

  const App01 = (props) => {

    const [data, incData] = useCustomHooks(5);

    return (
        <React.Fragment>
            <h1 onClick={() =>  incData() }>{data}</h1>
        </React.Fragment>
        );
}

export default App01;
