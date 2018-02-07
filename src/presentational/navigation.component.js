import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = props => (
        <nav className="mainNav">
            <ul className="navList">
                <li><Link className="navLink" to="/">Countries.JS</Link></li>
                <li><Link className="navLink" to="/countries">Countries</Link></li>
                <li><Link className="navLink" to="/regions">Regions</Link></li>
                <li><Link className="navLink" to="/contact">Contact</Link></li>
            </ul>
        </nav>

);

export default Navigation;