import React from 'react'
import { NavLink } from 'react-router-dom'


const Hamburger = () => {
    return (
        <ul className="navbar-nav mr-auto">
            <li><NavLink to='/'>New Project</NavLink></li>
            <li><NavLink to='/'>Log Out</NavLink></li>
        </ul>

    

    )
}

export default Hamburger;