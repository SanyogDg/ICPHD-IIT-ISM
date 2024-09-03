import React, { useEffect, useRef, useState } from 'react';
import './Navbar.css';
import logo from '../../images/ism_logo.png';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { TbDirectionSignFilled } from "react-icons/tb";
import { FaCaretDown } from "react-icons/fa";

const Navbar = ({ contactRef }) => {
  const [Colornav, setColornav] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 47 ? setColornav(true) : setColornav(false);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isOpen && dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
      if (isMobileMenuOpen && !event.target.closest('.navbar')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isOpen, isMobileMenuOpen]);

  const homeScroll = () => {
    window.scroll({
      left: 0,
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    setIsMobileMenuOpen(false); // Close the mobile menu on route change
  }, [location.pathname]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const scrollToContact = () => {
  
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }

  const handleOptionClick = () => {
    setIsOpen(false); // Close the dropdown menu
  };

  let navbarStyle;
  if (!Colornav) {
    switch (location.pathname) {
      case '/speakers':
      case '/committee':
      case '/themes':
      case '/schedule':
      case '/oursponsors':
        navbarStyle = { backgroundColor: '#18254e' };
        break;
      default:
        navbarStyle = { backgroundColor: 'transparent' };
        break;
    }
  }

  return (
    <nav style={navbarStyle} className={`navbar absolute containers ${Colornav ? 'navcoloractive' : ''}`}>
      <div className='flex items-center'>
        <img src={logo} alt="Logo" className="logo" />
        <img src='./icphdlogo.png' alt="Logo" className="iclogo" />
        {!Colornav && (
          <img src='./Spebluewhite.png' alt='spe' className='chcsss' />
        )}
        {Colornav && (
          <img src='./Spewhiteblue.png' alt='spe' className='chcsss' />
        )}
        {!Colornav && (
          <img src='./whitefipi.png' alt='spe' className='chcsss' />
        )}
        {Colornav && (
          <img src='./logofipi.png' alt='fipi' className='chcss' />
        )}
        
      </div>

      <div className={`menu-icon ${Colornav ? 'menu-icon' : 'white-icon'}`} onClick={toggleMobileMenu}>
        <i className={isMobileMenuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
      </div>

      <ul className={`heading ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
        <div className='flex items-center justify-center respnav'>
          <NavLink to="/" onClick={homeScroll} className="no-underline"><li>Home</li></NavLink>
          <NavLink className={(e) => (e.isActive ? "red no-underline" : "no-underline")} to="/registration"><li>Registration</li></NavLink>
          <NavLink className={(e) => (e.isActive ? "red no-underline" : "no-underline")} to="/themes"><li>Themes</li></NavLink>
          <NavLink onClick={toggleMobileMenu} className={(e) => (e.isActive ? "red no-underline" : "no-underline")} to="/committee"><li>Committee</li></NavLink>
          {!isMobileMenuOpen && (
            <li className="relative" ref={dropdownRef}>
              <button
                onClick={toggleOpen}
                className={`flex items-center downcss ${isMobileMenuOpen ? 'hidden' : ''}`}
              >
                More <FaCaretDown />
              </button>

              {isOpen && (
                <div className='dropdown-menu'>
                  <Link to="/speakers" className='dropdown-item' onClick={handleOptionClick}>
                    <TbDirectionSignFilled className='mr-2 color-bluee-200' />Speakers
                  </Link>
                  <Link to="/schedule" className='dropdown-item' onClick={handleOptionClick}>
                    <TbDirectionSignFilled className='mr-2' />Conference Schedule
                  </Link>
                  <Link to="/oursponsors" className='dropdown-item' onClick={handleOptionClick}>
                    <TbDirectionSignFilled className='mr-2' />Our Sponsors
                  </Link>
                </div>
              )}
            </li>
          )}

          {isMobileMenuOpen && (
            <div className='flex items-center justify-center respnav'>
              <NavLink className={(e) => (e.isActive ? "red no-underline" : "no-underline")} to="/speakers"><li>Speakers</li></NavLink>
              <NavLink className={(e) => (e.isActive ? "red no-underline" : "no-underline")} to="/schedule"><li>Conference Schedule</li></NavLink>
              <NavLink className={(e) => (e.isActive ? "red no-underline" : "no-underline")} to="/oursponsors"><li>Our Sponsors</li></NavLink>
            </div>
          )}
          <NavLink className={`${Colornav ? 'btnactivecolnav no-underline' : 'btn no-underline'}`} onClick={scrollToContact}><button>Contact Us</button></NavLink>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
