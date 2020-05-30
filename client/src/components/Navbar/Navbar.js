import React from 'react';
import home from '../../assets/home.png';
import hamburger from '../../assets/hamburger.png';
import './styles.css';

const NavBar = () => (
  <nav className="nav-wrapper container-fluid">
    <div className="row h-100">
      <div className="col-2 home h-100">
        {' '}
        <img className="img-fluid w-99 px-0" src={home} alt="home" />
        {' '}
      </div>
      <div className="col-8 logo mt-4 text-responsive"><h1>CodeRace.io</h1></div>
      <div className="col-2 hamburger"><img className="img-fluid w-99 px-0" src={hamburger} alt="home" /></div>
    </div>
  </nav>
);

export default NavBar;
