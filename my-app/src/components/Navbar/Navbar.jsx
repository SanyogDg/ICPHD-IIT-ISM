import React, { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { TbMenu, TbX } from "react-icons/tb";
import logo from "../../images/ism_logo.png";

const Navbar = ({ contactRef }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const scrollToContact = () => {
    if (location.pathname !== "/") {
      navigate("/", { replace: true });
      setTimeout(() => {
        contactRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100); // Adjust timeout if necessary to ensure smooth scrolling
    } else {
      contactRef.current?.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`${
        location.pathname === "/registration" ? "bg-[#091330]" : "bg-[#173a6b]"
      }  md:px-12`}
    >
      <div className="flex flex-col items-center">
        {/* Logo Container */}
        <div className="flex items-center justify-center gap-0 md:gap-20 md:mb-4 xl:mb-0">
          <img src={logo} alt="Logo" className="w-[60px] md:w-[80px]" />
          <img src="./celebrationsu.png" alt="Celebration" className="w-[60px] md:w-[80px]" />
          <img src="./Spebluewhite.png" alt="Spe" className="mt-5 w-[100px] md:mt-9 md:w-[140px]" />
          <img src="./whitefipi.png" alt="FIPI" className="w-[80px] md:w-[90px]" />
          <img src="./iadcwhite.png" className="w-[150px] md:w-[240px] bg-white" alt="IADC" />
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="lg:hidden mb-4">
          <button onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <TbX size={40} className="text-white text-xl" /> : <TbMenu size={40} className="text-white" />}
          </button>
        </div>

        {/* Navigation Links */}
        <ul
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } lg:flex lg:space-x-6 lg:items-center sm:gap-2  lg:gap-3 md:gap-3 text-center justify-center xl:mb-5 md:mb-6`}
        >
          {[
            { name: "Home", to: "/" },
            { name: "Registration", to: "/registration" },
            { name: "Themes", to: "/themes" },
            { name: "Committee", to: "/committee" },
            { name: "Speakers", to: "/speakers" },
            { name: "Sponsors", to: "/oursponsors" },
            { name: "Explore Dhanbad", to: "/hotelsandnearbyattractions" },
          ].map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.to}
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `py-2 block text-center lg:inline text-[20px] no-underline ${
                    isActive 
                      ? "text-blue-400"
                      : "text-white"
                  } hover:underline hover:underline-offset-4 hover:decoration-gray-400`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
          <li>
            <button
              onClick={scrollToContact}
              className="text-white py-2 lg:inline text-[20px] hover:underline hover:underline-offset-4 hover:decoration-gray-400"
            >
              Contact Us
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
