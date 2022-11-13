import React, { useContext } from 'react';
import { LoginContext } from "../Context";
import Login from './Login';

export const Home = () => {
    const { isLoggedIn} = useContext(LoginContext);
    return (
        <div>
            { !isLoggedIn && <Login/> }
            <div className={`${isLoggedIn ? "block" : "hidden"} bg-red-500 w-20 h-20`}>

            </div>
        </div>
    )
}

