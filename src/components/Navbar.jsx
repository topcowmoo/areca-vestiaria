import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { IoTriangleSharp } from "react-icons/io5";
import { CgMenuRound } from "react-icons/cg";
import { scrollWithOffset } from "../utils/scrollHelper";
import PropTypes from "prop-types";

function Navbar() {
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hasResourcesInteracted, setHasResourcesInteracted] = useState(false);
  const [isResourcesVisible, setIsResourcesVisible] = useState(false);
  const navigate = useNavigate();

  // Toggling Resources dropdown
  const toggleResources = useCallback(() => {
    setIsResourcesOpen((prev) => !prev);
    if (!hasResourcesInteracted) {
      setHasResourcesInteracted(true);
    }
    setIsResourcesVisible((prev) => !prev);
  }, [hasResourcesInteracted]);

  // Toggling mobile menu (hamburger)
  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);

  // Close dropdown and mobile menu when clicking outside
  const handleClickOutside = useCallback((event) => {
    if (
      !event.target.closest(".dropdown-menu") &&
      !event.target.closest(".resources-toggle") &&
      !event.target.closest(".mobile-menu")
    ) {
      setIsResourcesOpen(false);
      setIsMobileMenuOpen(false);
      setIsResourcesVisible(false);
    }
  }, []);

  useEffect(() => {
    if (isResourcesOpen || isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isResourcesOpen, isMobileMenuOpen, handleClickOutside]);

  const handleNavigation = useCallback(
    (path) => {
      navigate(path);
      setIsMobileMenuOpen(false);
      setIsResourcesOpen(false);
      setIsResourcesVisible(false);
    },
    [navigate]
  );

  return (
    <nav
    className="fixed top-0 left-0 w-full z-30 flex justify-center bg-black/75 backdrop-blur-md text-white pb-6 transition-colors duration-300"
  >
      {/* Hamburger Menu: visible on devices 1024px and below */}
      <div className="w-full flex justify-between items-center pl-[21px] pt-[29px] lg:hidden">
        <CgMenuRound
          className={`text-white transition-transform duration-300 mobile-menu-icon ${
            isMobileMenuOpen ? "rotate-90" : ""
          }`}
          size={40}
          onClick={toggleMobileMenu}
        />
      </div>

      {/* Mobile Menu (for 1024px and below) */}
      {isMobileMenuOpen && (
        <ul className="mobile-menu fixed top-0 left-0 w-[327px] h-[100vh] px-[21px] py-[29px] bg-black/75 backdrop-blur-[17.70px] flex flex-col justify-start items-start gap-7 pointer-events-auto opacity-100 visibility-visible overflow-y-auto lg:hidden">
          <div className="fixed z-20" style={{ top: "29px", left: "21px" }}>
            <CgMenuRound
              className={`text-white transition-transform duration-300 ${
                isMobileMenuOpen ? "rotate-90" : ""
              }`}
              size={40}
              onClick={toggleMobileMenu}
            />
          </div>
          <div className="flex flex-col items-center lg:hidden" style={{ marginTop: "29px" }}>
            <div className="text-left text-white text-[52.88px] font-extrabold font-['Playfair']">
              WLNS
            </div>
            <div className="text-left text-white text-base font-extralight font-['Inter'] tracking-wide">
              The Wellness Hub
            </div>
          </div>
          <div className="self-stretch h-[1px] bg-white mt-4 mb-4 lg:hidden"></div>
          <NavItem to="/" onClick={() => handleNavigation("/")}>
            Home
          </NavItem>
          <NavItem to="/#about-us" onClick={() => handleNavigation("/#second-page")}>
            About Us
          </NavItem>
          {/* Resources Dropdown */}
<li className="self-stretch resources-toggle">
  <div className="flex items-center" onClick={toggleResources}>
    <span className="text-left text-white text-[21px] ultra-wide:text-[29px] font-light font-['Inter'] tracking-wide cursor-pointer mr-[11px] hover:text-white hover:underline">
      Resources
    </span>
    <IoTriangleSharp
      className={`transform transition-transform duration-300 ${
        isResourcesOpen ? "rotate-0" : "rotate-180"
      }`}
      size={11}
      color="white"
      style={{ marginBottom: "-2px" }}
    />
  </div>

  {isResourcesOpen && (
    <ul className="mt-7 ml-3 flex flex-col gap-4">
      {[
        { to: "/adhd-resources", label: "ADHD Resources" },
        { to: "/parenting-resources", label: "Parenting Resources" },
        { to: "/couples-resources", label: "Couples Resources" },
        { to: "/attachments-and-emotions", label: "Attachment & Emotions" },
        { to: "/anger-and-shame", label: "Anger & Shame" },
        { to: "/therapy", label: "Therapy" },
        {
          to: "/physician-patient-resources",
          label: "Physician Patient Resources",
          className: "tracking-tight",
        },
        { to: "/additional-resources", label: "Additional Resources" },
      ].map((item) => (
        <HashLink
          key={item.to}
          smooth
          to={item.to}
          className={`text-[17px] ultra-wide:text-[20px] font-light font-['Inter'] rounded-md px-3 py-2 hover:text-white hover:font-semibold ${
            item.className || ""
          }`}
          onClick={() => {
            setIsResourcesOpen(false);
            setIsMobileMenuOpen(false);
            setIsResourcesVisible(false);
          }}
        >
          {item.label}
        </HashLink>
      ))}
    </ul>
  )}
</li>

          <NavItem to="/#contact-page" onClick={() => handleNavigation("/#contact-page")}>
            Contact Us
          </NavItem>
        </ul>
      )}

      {/* Full Navbar for devices larger than 1024px */}
      <ul className="hidden lg:flex lg:flex-row lg:justify-start items-center gap-12 pt-11">
        <NavItem to="/" onClick={() => handleNavigation("/")}>
          Home
        </NavItem>
        <NavItem
          to="/#about-us"
          onClick={() => handleNavigation("/#second-page")}
        >
          About Us
        </NavItem>

        {/* Resources Dropdown */}
        <li className="self-stretch relative resources-toggle cursor-pointer">
          <div className="flex items-center" onClick={toggleResources}>
            <span className="text-left text-white text-[21px] ultra-wide:text-[29px] font-light font-['Inter'] tracking-wide cursor-pointer mr-[11px] hover:text-white hover:underline">
              Resources
            </span>
            <IoTriangleSharp
              className={`transform ${
                isResourcesOpen ? "rotate-0" : "rotate-180"
              }`}
              size={11}
              color="white"
              style={{ marginBottom: "-2px" }}
            />
          </div>

          {/* Only render dropdown if it's visible */}
          {isResourcesVisible && (
            <div
              className={`dropdown-menu absolute mt-7 ml-12 py-5 bg-zinc-950 flex flex-col justify-start items-start gap-4 text-white rounded shadow-lg px-5 z-20 w-[285px] ultra-wide:w-[325px] transition-all transform origin-top ${
                hasResourcesInteracted
                  ? isResourcesOpen
                    ? "animate-dropdownSlideDown pointer-events-auto visibility-visible"
                    : "animate-dropdownSlideUp pointer-events-none visibility-hidden"
                  : "opacity-0 pointer-events-none visibility-hidden"
              }`}
              style={{ left: "-50px" }}
            >
              {/* Dropdown Links */}
              {[
                { to: "/adhd-resources", label: "ADHD Resources" },
                { to: "/parenting-resources", label: "Parenting Resources" },
                { to: "/couples-resources", label: "Couples Resources" },
                {
                  to: "/attachments-and-emotions",
                  label: "Attachment & Emotions",
                },
                { to: "/anger-and-shame", label: "Anger & Shame" },
                { to: "/therapy", label: "Therapy" },
                {
                  to: "/physician-patient-resources",
                  label: "Physician Patient Resources",
                  className: "tracking-tight",
                },
                { to: "/additional-resources", label: "Additional Resources" },
              ].map((item) => (
                <HashLink
                  key={item.to}
                  smooth
                  to={item.to}
                  className={`text-[17px] ultra-wide:text-[20px] font-light font-['Inter'] rounded-md px-3 py-2 hover:text-white hover:font-semibold ${
                    item.className || ""
                  }`}
                  onClick={() => {
                    setIsResourcesOpen(false);
                    setIsMobileMenuOpen(false);
                    setIsResourcesVisible(false);
                  }}
                >
                  {item.label}
                </HashLink>
              ))}
            </div>
          )}
        </li>

        <NavItem
          to="/#contact-page"
          onClick={() => handleNavigation("/#contact-page")}
        >
          Contact Us
        </NavItem>
      </ul>
    </nav>
  );
}

const NavItem = ({ to, children, onClick }) => (
  <li className="self-stretch text-left text-white text-[21px] ultra-wide:text-[29px] font-light font-['Inter'] tracking-wide">
    <HashLink
      smooth
      to={to}
      scroll={scrollWithOffset}
      className="font-['Inter'] hover:text-white hover:underline"
      onClick={onClick}
    >
      {children}
    </HashLink>
  </li>
);

NavItem.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Navbar;
