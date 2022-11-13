import React, { useState }from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
    const [active, setActive] = useState("offline");
    return (
        <div className='px-10 py-5'>
            <ul className='flex list-none justify-between'>
                <Link to="/">
                    <li className='text-lg text-black font-semibold'>Go online</li>
                </Link>
                
                <Link to="/offline-todo">
                    <li className='text-lg text-black font-semibold'>Go offline</li>
                </Link> 
            </ul>
        </div>
    )
}

export default Navbar;