import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useModal } from '../context/useModal';


const Footer = () => {
  const { openModal } = useModal();
  
  
  
  const location = useLocation();
  const navigate = useNavigate();

  const handleLinkClick = (e) => {
    if (location.pathname === "/") {
      e.preventDefault();
      const element = document.getElementById("second-page");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/#second-page");
    }
  };

  useEffect(() => {
    if (location.hash === "#second-page") {
      const element = document.getElementById("second-page");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <footer className="w-full px-4 sm:px-6 md:px-8 lg:px-[52px] pt-10 pb-10 sm:pb-16 lg:pt-20 lg:pb-[106px] bg-black text-white">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
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
            href ="https://www.brandonuxui.com/contactme-1"
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
                to="/#second-page"
                onClick={handleLinkClick}
                className="text-white text-[15px] font-light font-['Inter'] hover:text-gray-400"
              >
                About Me
              </Link>
            </li>
            <li className="mb-1">
              {/* disclosure link to open the modal */}
              <Link
                to="#"
                onClick={(e) => {
                  e.preventDefault(); // Prevent the default link behavior
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
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        {/* Resources Links */}
        <div>
          <h2 className="text-lg font-bold mb-4 font-['Inter']">Resources</h2>
          <ul>
            <li className="mb-1">
              <Link
                to="/adhd-resources"
                className="text-white text-[15px] font-light font-['Inter'] hover:text-gray-400"
              >
                ADHD Resources
              </Link>
            </li>
            <li className="mb-1">
              <Link
                to="/parenting-resources"
                className="text-white text-[15px] font-light font-['Inter'] hover:text-gray-400"
              >
                Parenting Resources
              </Link>
            </li>
            <li className="mb-1">
              <Link
                to="/attachments-and-emotions"
                className="text-white text-[15px] font-light font-['Inter'] hover:text-gray-400"
              >
                Attachment & Emotions
              </Link>
            </li>
            <li className="mb-1">
              <Link
                to="/couples-resources"
                className="text-white text-[15px] font-light font-['Inter'] hover:text-gray-400"
              >
                Couple Resources
              </Link>
            </li>
            <li className="mb-1">
              <Link
                to="/anger-and-shame"
                className="text-white text-[15px] font-light font-['Inter'] hover:text-gray-400"
              >
                Anger and Shame
              </Link>
            </li>
            <li className="mb-1">
              <Link
                to="/therapy"
                className="text-white text-[15px] font-light font-['Inter'] hover:text-gray-400"
              >
                Therapy Resources
              </Link>
            </li>
            <li className="mb-1">
              <Link
                to="/physician-patient-resources"
                className="text-white text-[15px] font-light font-['Inter'] hover:text-gray-400"
              >
                Physician Patient Resources
              </Link>
            </li>
            <li className="mb-1">
              <Link
                to="/additional-resources"
                className="text-white text-[15px] font-light font-['Inter'] hover:text-gray-400"
              >
                Additional Resources
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
