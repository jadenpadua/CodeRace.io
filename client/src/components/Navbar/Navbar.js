import React from 'react'
import home from '../.././assets/home.png'; 
import hamburger from '../.././assets/hamburger.png'
import './styles.css'

const NavBar = () => {
    return (
        <nav className = "nav-wrapper container-fluid">
            <div class="row h-100">
                <div class="col-2 home h-100"> <img class = "img-fluid w-99 px-0" src = {home} alt = "home"></img> </div>
                <div class="col-8 logo mt-4 text-responsive"><h1>CodeRace.io</h1></div>
                <div class="col-2 hamburger"><img class = "img-fluid w-99 px-0" src = {hamburger} alt = "home" ></img></div>
            </div>
        </nav>
    )
}

export default NavBar;