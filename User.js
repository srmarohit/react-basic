import React, { useState } from 'react';
import './User.css';

const User = (props) => {
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');

    const printValue = (e) => {
        e.preventDefault()
        console.log(user, pass)
        setUser('')
        setPass('')
    }

    return (
        <React.Fragment>
            <form onSubmit={printValue}>
                <img src={`${process.env.PUBLIC_URL}/logo192.png`} width="100px" />
                <input type="text" name="user" value={user} onChange={(e) => { setUser(e.target.value.toUpperCase().substr(0,5)) }} />
                <input type="password" name="pass" value={pass} onChange={(e) => { setPass(e.target.value) }} />
                <button type="submit">Login</button>
            </form>
        </React.Fragment>
        )
}

export default User;