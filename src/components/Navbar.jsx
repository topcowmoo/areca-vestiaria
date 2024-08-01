import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { IoTriangleSharp } from "react-icons/io5";
// import { CgMenuRound } from "react-icons/cg";

function Navbar() {
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);

  const toggleResources = () => {
    setIsResourcesOpen(!isResourcesOpen);
  };

  const handleClickOutside = (event) => {
    if (!event.target.closest('.dropdown-menu') && !event.target.closest('.resources-toggle')) {
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
    <nav className="absolute top-0 left-0 w-full z-10 flex justify-center">
      <ul className="h-[25px] flex justify-start items-center gap-[49px] pt-11">
        <li className="text-center text-white text-[21px] font-light tracking-wide">
          <Link to="/" className="font-['Inter']">Home</Link>
        </li>
        <li className="text-center text-white text-[21px] font-light tracking-wide">
          <HashLink smooth to="/#second-page" className="font-['Inter']">About Me</HashLink>
        </li>
        <li className="relative flex items-center gap-[11px] resources-toggle cursor-pointer">
          <div className="text-center text-white text-[21px] font-light tracking-wide">
            <Link to="/all-resources" className="font-['Inter']">Resources</Link>
          </div>
          <IoTriangleSharp
            className={`ml-1 transform ${isResourcesOpen ? '' : 'rotate-180'}`}
            size={11}
            color="white"
            style={{ marginBottom: '-2px' }}
            onClick={toggleResources}
          />
          {isResourcesOpen && (
            <div className="dropdown-menu absolute top-full left-0 mt-2 w-64 py-[20px] bg-black/25 backdrop-blur-[17.0px] flex-col justify-start items-start gap-[17px] text-white rounded shadow-lg pl-5">
              <div className="flex flex-col gap-2">
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
        <li className="text-center text-white text-[21px] font-light tracking-wide">
          <HashLink smooth to="/#contact-page" className="font-['Inter']">Contact Us</HashLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
