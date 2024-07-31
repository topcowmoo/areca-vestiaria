import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { IoTriangleSharp } from "react-icons/io5";

function Navbar() {
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleResources = () => {
    setIsResourcesOpen(!isResourcesOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsResourcesOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav>
      <ul className="h-[25px] justify-start items-center gap-[49px] inline-flex pt-11">
        <li className="text-center text-white text-[21px] font-light font-['Inter'] tracking-wide">
          <Link to="/">Home</Link>
        </li>
        <li className="text-center text-white text-[21px] font-light font-['Inter'] tracking-wide">
          <HashLink smooth to="/#second-page">About Me</HashLink>
        </li>
        <li className="justify-start items-center gap-[5px] flex relative" ref={dropdownRef}>
          <Link to="/all-resources" className="text-center text-white text-[21px] font-light font-['Inter'] tracking-wide">
            Resources
          </Link>
          <IoTriangleSharp
            className={`ml-1 inline-block cursor-pointer transform ${isResourcesOpen ? '' : 'rotate-180'}`}
            onClick={toggleResources}
            size={11} 
            color="white"
            style={{ marginBottom: '-2px' }} 
          />
          {isResourcesOpen && (
            <div className="absolute top-full left-0 mt-2 w-64 py-[20px] bg-black/25 backdrop-blur-[17.0px] flex-col justify-start items-start gap-[29px] inline-flex text-white rounded shadow-lg pl-5">
              <div className="w-full flex flex-col justify-start items-start gap-[17px]">
                <Link to="/adhd-resources" className="text-[17px] font-light font-['Inter'] tracking-wide hover:text-gray-400">ADHD Resources</Link>
                <Link to="/parenting-resources" className="text-[17px] font-light font-['Inter'] tracking-wide hover:text-gray-400">Parenting Resources</Link>
                <Link to="/couples-resources" className="text-[17px] font-light font-['Inter'] tracking-wide hover:text-gray-400">Couples Resources</Link>
                <Link to="/attachments-emotions" className="text-[17px] font-light font-['Inter'] tracking-wide hover:text-gray-400">Attachment & Emotions</Link>
                <Link to="/anger-and-shame" className="text-[17px] font-light font-['Inter'] tracking-wide hover:text-gray-400">Anger & Shame</Link>
                <Link to="/therapy" className="text-[17px] font-light font-['Inter'] tracking-wide hover:text-gray-400">Therapy Resources</Link>
                <Link to="/physician-patient-resources" className="text-[17px] font-light font-['Inter'] tracking-wide hover:text-gray-400">Physician Patient Resources</Link>
                <Link to="/general-resources" className="text-[17px] font-light font-['Inter'] tracking-wide hover:text-gray-400">General Resources</Link>
              </div>
            </div>
          )}
        </li>
        <li className="justify-start items-center gap-[11px] flex">
          <HashLink smooth to="/#contact-page" className="text-center text-white text-[21px] font-light font-['Inter'] tracking-wide">
            Contact Us
          </HashLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
