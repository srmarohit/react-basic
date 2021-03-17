import { useState } from 'react';

const useCustomHooks = () => {
   const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1)
    }

    return [count, handleClick];
}

export default useCustomHooks;