import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../images/ism_logo.png';
import { NavLink, useLocation } from 'react-router-dom';


const Navbar = () => {
  // Navbar color changes when the page is scrolled.
  const [Colornav, setColornav] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 40 ? setColornav(true) : setColornav(false);
    });
  }, []);

  function scrolltocontact() {
    window.scroll({
      left: 0,
      top: 3665,
      behavior: 'smooth',
    });
  }

  function scrollDown() {
    window.scroll({
      left: 0,
      top: 1050,
      behavior: 'smooth',
    });
  }

  function homeScroll() {
    window.scroll({
      left: 0,
      top: 0,
      behavior: 'smooth',
    });
  }



  const location = useLocation();

  let navbarStyle;
  if (!Colornav) {
    switch (location.pathname) {
      case '/speakers':
        navbarStyle = { backgroundColor: '#18254e' };
        break;
      case '/committee':
        navbarStyle = { backgroundColor: '#18254e' };
        break;
      default:
        navbarStyle = { backgroundColor: 'transparent' };
        break;
    }
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

 


  return (
    <nav style={navbarStyle} className={`container ${Colornav ? 'navcoloractive' : ''}`}>
      <img src={logo} alt="Logo" className="logo" />
      <div className="menu-icon" onClick={toggleMobileMenu}>
        <i className={isMobileMenuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
      </div>
      <ul className={`heading ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
        <NavLink onClick={homeScroll}><li>Home</li></NavLink>
        <NavLink className={(e) => (e.isActive ? "red" : "")} to="/registration"><li>Registration</li></NavLink>
        <NavLink className={(e) => (e.isActive ? "red" : "")} to="/themes"><li>Themes</li></NavLink>
        <NavLink className={(e) => (e.isActive ? "red" : "")} to="/speakers"><li>Speakers</li></NavLink>
        <NavLink className={(e) => (e.isActive ? "red" : "")} to="/committee"><li>Committee</li></NavLink>
        {/* <NavLink to='#' onClick={(e) => { e.preventDefault(); openPDF(); }}><li>Brochure</li></NavLink> */}
        <NavLink className={`${Colornav ? 'btnactivecolnav' : 'btn'}`} onClick={scrolltocontact}><button>Contact Us</button></NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
