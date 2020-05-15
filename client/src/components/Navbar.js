import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className = "nav-wrapper">
            <div className="container">
                <Link to='/' className="brand-logo center">CodeRace.io</Link>
            </div>
        </nav>

    )
}

export default NavBar;