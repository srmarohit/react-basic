import { useState } from "react";

const useInput = (initValue) => {
    const [value, setValue] = useState(initValue);

    const bind = {
        value: value,
        onChange : (e) => {
            setValue(e.target.value);
        }
    }

    const reset = () => {
        setValue(initValue);
    }

    return [value, bind, reset];
}

export default useInput;