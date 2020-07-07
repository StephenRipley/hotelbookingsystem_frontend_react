import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
    <nav>
        <ul>
            <li>
                <Link to="/">Login</Link>
            </li>
            <li>
                <Link to="/hotels">Hotels</Link>
            </li>
        </ul>
    </nav>
);

export default NavBar;