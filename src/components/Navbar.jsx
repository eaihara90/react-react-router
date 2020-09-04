import React from 'react'
import { NavLink, withRouter } from 'react-router-dom';

const Navbar = (props) =>
{
    return(
        <nav className="navbar">
            
            <h1 className="navbar__logo">React Router</h1>

            <ul className="navbar__list">
                <li className="navbar__item">
                    <NavLink exact to="/" className="navbar__link">Home</NavLink>
                </li>

                <li className="navbar__item">
                    <NavLink to="/about" className="navbar__link">About</NavLink>
                </li>

                <li className="navbar__item">
                    <NavLink to="/contact" className="navbar__link">Contact</NavLink>
                </li>
            </ul>

        </nav>
    )
}

export default withRouter(Navbar)