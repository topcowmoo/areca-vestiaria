import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useModal } from "../context/useModal";
import { scrollWithOffset } from "../utils/scrollHelper"; // Import the helper function

const Footer = () => {
  const { openModal } = useModal();
  const location = useLocation();
  const navigate = useNavigate();

  // Handle link click with offset scrolling
  const handleLinkClick = (e) => {
    e.preventDefault(); // Prevent default link behavior

    if (location.pathname === "/") {
      const element = document.getElementById("about-us");
      if (element) {
        scrollWithOffset(element); // Use the helper function
      }
    } else {
      // Navigate to the home page and scroll to the section after rendering
      navigate("/#about-us");
    }
  };

  useEffect(() => {
    if (location.hash === "#about-us") {
      const element = document.getElementById("about-us");
      if (element) {
        scrollWithOffset(element); // Ensure offset when the hash is detected
      }
    }
  }, [location]);

  // Scroll to top when location changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <footer className="w-full px-4 md:px-8 lg:px-10 pb-8 pt-8 bg-[#151515] text-white">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.75fr_1.5fr_1.5fr_1.5fr] gap-10">
        {/* Logo and Description */}
        <div className="flex flex-col justify-start">
          <div
            className="text-white text-[32px] sm:text-[50px] lg:text-[69.39px] font-extrabold"
            style={{
              fontFamily: "Playfair Display, sans-serif",
              lineHeight: "1",
            }}
          >
            WLNS
          </div>
          <p className="text-gray-200 mt-4 font-extralight font-['Inter']">
            The Wellness Hub
          </p>
          <p className="text-gray-200 mt-2 font-extralight font-['Inter']">
            Website Designed by
            <a
              href="https://www.brandonuxui.com/contactme-1"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold hover:underline ml-1"
            >
              X BN
            </a>
          </p>
        </div>

        {/* Company Links */}
        <div>
          <h2 className="text-lg font-bold mb-4 font-['Inter']">Company</h2>
          <ul>
            <li className="mb-1">
              <Link
                to="/#about-us"
                onClick={handleLinkClick} // Use the handler with offset scrolling
                className="text-white text-[15px] font-light font-['Inter'] hover:text-gray-400"
              >
                About Us
              </Link>
            </li>
            <li className="mb-1">
              <Link
                to="#"
                onClick={(e) => {
                  e.preventDefault();
                  openModal(); // Open the modal
                }}
                className="text-white text-[15px] font-light font-['Inter'] hover:text-gray-400"
              >
                Legal Disclosure
              </Link>
            </li>
            <li className="mb-1">
              <Link
                to="/faq"
                className="text-white text-[15px] font-light font-['Inter'] hover:text-gray-400"
              >
                Frequently Asked Questions
              </Link>
            </li>
          </ul>
        </div>

        {/* Address Information */}
        <div>
          <h2 className="text-lg font-bold mb-4 font-['Inter']">Address</h2>
          <p className="text-white text-[15px] font-light font-['Inter']">
            10 Four Seasons Place
          </p>
          <p className="text-white text-[15px] font-light font-['Inter']">
            Suite 1000
          </p>
          <p className="text-white text-[15px] font-light font-['Inter']">
            Toronto ON
          </p>
          <p className="text-white text-[15px] font-light font-['Inter']">
            ON M9B 6H7
          </p>
          <p className="text-white text-[15px] font-light font-['Inter'] mt-4">
            Phone: (519) 936-3392
          </p>
          <p className="text-white text-[15px] font-light font-['Inter']">
            Fax: (519) 936-3395
          </p>
          <p className="text-white text-[15px] font-light font-['Inter'] mt-4">
            1919 Sirocco Dr SW
          </p>
          <p className="text-white text-[15px] font-light font-['Inter']">
            #304
          </p>
          <p className="text-white text-[15px] font-light font-['Inter']">
            Calgary AB
          </p>
          <p className="text-white text-[15px] font-light font-['Inter']">
            AB T3H 2Y3
          </p>
          <p className="text-white text-[15px] font-light font-['Inter'] mt-4">
            Phone: (403) 456-7000
          </p>
          <p className="text-white text-[15px] font-light font-['Inter']">
            Fax: (403) 456-7007
          </p>
        </div>

        {/* Hours of Operation */}
        <div>
          <h2 className="text-lg font-bold mb-4 font-['Inter']">Hours</h2>
          <p className="text-white text-[15px] font-light font-['Inter']">
            Monday - Thursday: 9:00 AM - 3:30 PM (MT)
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
