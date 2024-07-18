import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../images/ism_logo.png';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';


const Navbar = () => {
  const [Colornav, setColornav] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 40 ? setColornav(true) : setColornav(false);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isMobileMenuOpen && !event.target.closest('.navbar')) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    setIsMobileMenuOpen(false); // Close the mobile menu on route change
  }, [location.pathname]);

  const scrollToContact = () => {
    window.scroll({
      left: 0,
      top: 3665,
      behavior: 'smooth',
    });
  };

  const scrollDown = () => {
    window.scroll({
      left: 0,
      top: 1050,
      behavior: 'smooth',
    });
  };

  const homeScroll = () => {
    window.scroll({
      left: 0,
      top: 0,
      behavior: 'smooth',
    });
  };

  let navbarStyle;
  if (!Colornav) {
    switch (location.pathname) {
      case '/speakers':
      case '/committee':
      case '/themes':
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
    <nav style={navbarStyle} className={`navbar container ${Colornav ? 'navcoloractive' : ''}`}>
      
        <img src={logo} alt="Logo" className="logo" />
        <img src='./icphdlogo.png' alt="Logo" className="iclogo" />


      <div className={`menu-icon ${Colornav ? 'menu-icon' : 'white-icon'}`} onClick={toggleMobileMenu}>
        <i className={isMobileMenuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
      </div>

      <ul className={`heading ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
        <NavLink to="/" onClick={homeScroll}><li>Home</li></NavLink>
        <NavLink className={(e) => (e.isActive ? "red" : "")} to="/registration"><li>Registration</li></NavLink>
        <NavLink className={(e) => (e.isActive ? "red" : "")} to="/themes"><li>Themes</li></NavLink>
        <NavLink className={(e) => (e.isActive ? "red" : "")} to="/speakers"><li>Speakers</li></NavLink>
        <NavLink onClick={toggleMobileMenu} className={(e) => (e.isActive ? "red" : "")} to="/committee"><li>Committee</li></NavLink>
        <NavLink className={`${Colornav ? 'btnactivecolnav' : 'btn'}`} onClick={scrollToContact}><button>Contact Us</button></NavLink>
      </ul>

    </nav>
  );
};

export default Navbar;
