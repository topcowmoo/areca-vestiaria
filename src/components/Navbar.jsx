import { useState, useEffect, useCallback } from "react"; // Import React hooks
import { Link, useNavigate } from "react-router-dom"; // Import Link and useNavigate from react-router-dom
import { HashLink } from "react-router-hash-link"; // Import HashLink from react-router-hash-link for smooth scrolling
import { IoTriangleSharp } from "react-icons/io5"; // Import triangle icon from react-icons
import { CgMenuRound } from "react-icons/cg"; // Import menu icon from react-icons
import PropTypes from 'prop-types'; // Import PropTypes for props validation

function Navbar() {
  // State for managing resources dropdown visibility
  const [isResourcesOpen, setIsResourcesOpen] = useState(false); 
  // State for managing mobile menu visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); 
  // Hook for navigation
  const navigate = useNavigate(); 

  // Function to toggle resources dropdown visibility
  const toggleResources = useCallback(() => {
    setIsResourcesOpen((prev) => !prev);
  }, []);

  // Function to toggle mobile menu visibility
  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);

  // Function to handle clicks outside of the dropdown/menu to close them
  const handleClickOutside = useCallback((event) => {
    if (
      !event.target.closest(".dropdown-menu") && // Check if the click is outside the dropdown menu
      !event.target.closest(".resources-toggle") && // Check if the click is outside the resources toggle
      !event.target.closest(".mobile-menu-icon") // Check if the click is outside the mobile menu icon
    ) {
      setIsResourcesOpen(false); // Close resources dropdown if clicked outside
    }
  }, []);

  // Effect to add event listener for handling clicks outside of dropdown/menu
  useEffect(() => {
    if (isResourcesOpen || isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside); // Add event listener
    } else {
      document.removeEventListener("mousedown", handleClickOutside); // Remove event listener
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside); // Clean up event listener
    };
  }, [isResourcesOpen, isMobileMenuOpen, handleClickOutside]);

  // Function to handle navigation and close mobile menu
  const handleNavigation = useCallback(
    (path) => {
      navigate(path); // Navigate to the specified path
      setIsMobileMenuOpen(false); // Close mobile menu
    },
    [navigate]
  );

  // Function to close the resources dropdown menu and navigate
  const closeResources = useCallback(
    (path) => {
      setIsResourcesOpen(false); // Close resources dropdown
      handleNavigation(path); // Navigate to the specified path
    },
    [handleNavigation]
  );

  return (
    <nav className="absolute top-0 left-0 w-full z-10 flex justify-center"> {/* Navbar container */}
      {/* Mobile menu toggle button */}
      <div className="w-full flex justify-between items-center px-4 py-3 md:hidden"> {/* Mobile menu container */}
        <CgMenuRound
          className={`text-white transition-transform duration-300 mobile-menu-icon ${isMobileMenuOpen ? "rotate-90" : ""}`}
          size={30}
          onClick={toggleMobileMenu} // Toggle mobile menu on click
        />
      </div>
      <ul
        className={`flex-col md:flex md:flex-row md:justify-start items-start gap-12 pt-11 ${
          isMobileMenuOpen
            ? "fixed top-0 left-0 w-[327px] h-[100vh] px-[21px] py-[29px] bg-black/75 backdrop-blur-[17.70px] flex flex-col justify-start items-start gap-7 overflow-y-auto"
            : "hidden"
        } md:flex`}
      >
        {isMobileMenuOpen && (
          <>
            <div className="fixed top-4 left-4 z-20 mobile-menu-icon">
              <CgMenuRound
                className={`text-white transition-transform duration-300 ${isMobileMenuOpen ? "rotate-90" : ""}`}
                size={30}
                onClick={toggleMobileMenu} // Toggle mobile menu on click
              />
            </div>
            <div className="self-stretch flex-col justify-start items-start inline-flex lg:hidden">
              <div className="text-left text-white text-[52.88px] font-extrabold font-['Playfair']">WLNS</div> {/* Mobile menu header */}
              <div className="text-left text-white text-base font-extralight font-['Inter'] tracking-wide">The Wellness Hub</div> {/* Mobile menu subheader */}
            </div>
            <div className="self-stretch h-[1px] bg-white mt-4 mb-4 lg:hidden"></div> {/* Divider line */}
          </>
        )}
        <NavItem to="/" onClick={() => handleNavigation('/')}>Home</NavItem> {/* Home link */}
        <NavItem to="/#second-page" onClick={() => handleNavigation('/#second-page')}>About Me</NavItem> {/* About Me link */}
        <li className="self-stretch relative flex flex-col gap-2 items-start resources-toggle cursor-pointer">
          <div className="flex items-center">
            <Link
              to="/all-resources"
              className="text-left text-white text-[21px] font-light font-['Inter'] tracking-wide cursor-pointer mr-[11px]"
              onClick={() => closeResources('/all-resources')}
            >
              Resources
            </Link>
            <IoTriangleSharp
              className={`transform ${isResourcesOpen ? "rotate-0" : "rotate-180"}`}
              size={11}
              color="white"
              style={{ marginBottom: "-2px" }}
              onClick={toggleResources} // Toggle resources dropdown on click
            />
          </div>
          {isResourcesOpen && (
            <div className="dropdown-menu mt-2 w-full py-5 bg-black/25 backdrop-blur-md flex flex-col justify-start items-start gap-4 text-white rounded shadow-lg px-5">
              {[
                { to: "/adhd-resources", label: "ADHD Resources" },
                { to: "/parenting-resources", label: "Parenting Resources" },
                { to: "/couples-resources", label: "Couples Resources" },
                { to: "/attachments-and-emotions", label: "Attachment & Emotions" },
                { to: "/anger-and-shame", label: "Anger & Shame" },
                { to: "/therapy", label: "Therapy Resources" },
                { to: "/physician-patient-resources", label: "Physician Patient Resources" },
                { to: "/general-resources", label: "General Resources" },
              ].map((item) => (
                <HashLink
                  key={item.to}
                  smooth
                  to={item.to}
                  className="text-[17px] font-light font-['Inter'] tracking-wide hover:text-gray-400"
                  onClick={() => closeResources(item.to)} // Close resources dropdown and navigate on click
                >
                  {item.label}
                </HashLink>
              ))}
            </div>
          )}
        </li>
        <NavItem to="/#contact-page" onClick={() => handleNavigation('/#contact-page')}>Contact Us</NavItem> {/* Contact Us link */}
      </ul>
    </nav>
  );
}

// NavItem component for navigation items
const NavItem = ({ to, children, onClick }) => (
  <li className="self-stretch text-left text-white text-[21px] font-light font-['Inter'] tracking-wide">
    <HashLink smooth to={to} className="font-['Inter']" onClick={onClick}>
      {children}
    </HashLink>
  </li>
);

// PropTypes validation for NavItem component
NavItem.propTypes = {
  to: PropTypes.string.isRequired, // 'to' prop is required and must be a string
  children: PropTypes.node.isRequired, // 'children' prop is required and must be a React node
  onClick: PropTypes.func.isRequired, // 'onClick' prop is required and must be a function
};

export default Navbar;
