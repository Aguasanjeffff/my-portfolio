import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <Link id='lname' to="/Home">Aguasan</Link>
            <Link to="/Home">Home</Link>
            <Link to="/About">About</Link>
            <Link to="/Project">Project</Link>
            <Link to="/Contact">Contact</Link>
        </nav>
    )
}

export default Navbar