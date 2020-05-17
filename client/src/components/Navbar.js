import React from 'react'
import { Link } from 'react-router-dom'
import home from './home.png'; // Tell webpack this JS file uses this image
import hamburger from './hamburger.png'; // Tell webpack this JS file uses this image


const NavBar = () => {
    return (
        <nav className = "nav-wrapper container-fluid">
            <div class="row h-100">
                <div class="col-2 home h-100">
                    <img class = "img-fluid w-99 px-0" src = {home} alt = "home"></img>
                </div>
                <div class="col-8 logo mt-4 text-responsive">
               <h1>CodeRace.io</h1>
                </div>
                <div class="col-2 hamburger">
                <img class = "img-fluid w-99 px-0" src = {hamburger} alt = "home" ></img>
                </div>
  </div>
        </nav>

    

    )
}

export default NavBar;