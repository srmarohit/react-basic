import React, { useState } from "react";
import useInput from "./useInput";

const FormExample = () => {

    const [user, bindUser, resetUser] = useInput('');
    const [pass, bindPass, resetPass] = useInput('');


    const submitForm = (e) => {
        e.preventDefault();
        alert(`${user} and ${pass}`);
        resetUser();
        resetPass();
    }

    return (
        <div>
            <form onSubmit={ submitForm }>
                <input type="text" {...bindUser} />
                <input type="password" {...bindPass} />
                <button type="submit">LogIn</button>
            </form>
        </div>
        );
}

export default FormExample;