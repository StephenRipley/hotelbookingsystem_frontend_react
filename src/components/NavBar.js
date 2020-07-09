import React from 'react';
import { Link } from 'react-router-dom';


const NavBar = () => (
    <nav>
        <ul>
            <li>
          
            </li>
            <li>
                {(localStorage.getItem('loggedIn') === 'false') ? (<Link to="/">Login</Link>) : (<Link to="/">Account</Link>) }
            </li>
            <li>
                <Link to="/hotels">Hotels</Link>
            </li>
        </ul>
    </nav>
);

export default NavBar;