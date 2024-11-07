import React, { useEffect, useRef, useState } from "react";
import "./Navbar.css";
import logo from "../../images/ism_logo.png";
import { Link, NavLink, useLocation } from "react-router-dom";
import { TbDirectionSignFilled } from "react-icons/tb";
import { FaCaretDown } from "react-icons/fa";

const Navbar = ({ contactRef }) => {
  const [Colornav, setColornav] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef(null);


  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        isOpen &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
      if (isMobileMenuOpen && !event.target.closest(".navbar")) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isOpen, isMobileMenuOpen]);

  const homeScroll = () => {
    window.scroll({
      left: 0,
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    setIsMobileMenuOpen(false);
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
  };

  const handleOptionClick = () => {
    setIsOpen(false);
  };

  let navbarStyle;
  if (!Colornav) {
    switch (location.pathname) {
      case "/speakers":
      case "/committee":
      case "/themes":
      case "/schedule":
      case "/oursponsors":
      case "/abstract":
        navbarStyle = { backgroundColor: "#18254e" };
        break;
        case "/":
          navbarStyle = { backgroundColor: "#163a6a" };
          break;
          case "/registration":
            navbarStyle={backgroundColor:'rgb(6 17 46)'};
            break;
      default:
        navbarStyle = { backgroundColor: "transparent" };
        break;
    }
  }

  return (
    <nav
      style={navbarStyle}
      className={`navbar containers ${Colornav ? "navcoloractive" : ""}`}
    >
      <div className="logocontainer">
        <img src={logo} alt="Logo" className="logo" />
        <img src="./celebrationsu.png" alt="Logo" className="iclogoceleb " />
        {!Colornav && (
          <img src="./Spebluewhite.png" alt="spe" className="spelogo " />
        )}
       
        {!Colornav && <img src="./whitefipi.png" alt="spe" className="chcss" />}
     
        {!Colornav && <img src="./iadcwhite.png" className="iadclogowt" />}
    
      </div>

      <div className="navbtn">
        <div
          className={`menu-icon ${Colornav ? "menu-icon" : "white-icon"}`}
          onClick={toggleMobileMenu}
        >
          <i className={isMobileMenuOpen ? "fas fa-times ham" : "fas fa-bars ham"}></i>
        </div>

        <ul className={`heading ${isMobileMenuOpen ? "mobile-menu-open" : ""}`}>
          <div className="flex items-center justify-center respnav">
            <NavLink to="/" onClick={homeScroll} className="no-underline">
              <li>Home</li>
            </NavLink>
            <NavLink
              className={(e) =>
                e.isActive ? "red no-underline" : "no-underline"
              }
              to={"/registration"}
            >
              <li>Registration</li>
            </NavLink>
            <NavLink
              className={(e) =>
                e.isActive ? "red no-underline" : "no-underline"
              }
              to="/themes"
            >
              <li>Themes</li>
            </NavLink>
            <NavLink
              onClick={toggleMobileMenu}
              className={(e) =>
                e.isActive ? "red no-underline" : "no-underline"
              }
              to="/committee"
            >
              <li>Committee</li>
            </NavLink>

            <NavLink
              className={(e) =>
                e.isActive ? "red no-underline" : "no-underline"
              }
              to="/speakers"
            >
              <li>Speakers</li>
            </NavLink>
            <NavLink
              className={(e) =>
                e.isActive ? "red no-underline" : "no-underline"
              }
              to="/schedule"
            >
              <li>Conference Schedule</li>
            </NavLink>
            <NavLink
              className={(e) =>
                e.isActive ? "red no-underline" : "no-underline"
              }
              to="/oursponsors"
            >
              <li>Our Sponsors</li>
            </NavLink>
            <NavLink
              className={(e) =>
                e.isActive ? "red no-underline" : "no-underline"
              }
              to="/abstract"
            >
              <li>Abstract Submission</li>
            </NavLink>

            <NavLink
              className={`${
                Colornav ? "btnactivecolnav no-underline" : "btn no-underline"
              }`}
              onClick={scrollToContact}
            >
              <button>Contact Us</button>
            </NavLink>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
