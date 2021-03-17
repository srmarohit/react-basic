import { useState } from 'react';

const useCustomHooks = (initState) => {
    const [count, setCount] = useState(initState);

    const handleClick = () => {
        setCount(count + 1)
    }

    return [count, handleClick];
}

export default useCustomHooks;