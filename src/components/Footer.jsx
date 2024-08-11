import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="w-full px-[52px] pt-20 pb-[106px] bg-black text-white ">
      <div className="max-w-[1440px] mx-auto flex justify-between">
        <div className="flex flex-col justify-start">
          <div className="text-white text-[69.39px] font-extrabold" style={{ fontFamily: 'Playfair Display, sans-serif', lineHeight: '59.33px' }}>WLNS</div>
          <p className="text-gray-200 mt-4 font-extralight font-['Inter']">The Wellness Hub</p>
          <p className="text-gray-200 mt-2 font-extralight font-['Inter']">
            Website Designed by <span className="font-bold">X BN</span>
          </p>
        </div>
        <div>
          <h2 className="text-lg font-bold mb-4 font-['Inter']">Company</h2>
          <ul>
            <li className="mb-1">
              <Link to="/about-me" className="text-white text-[15px] font-light font-['Inter'] hover:text-gray-400">
                About Me
              </Link>
            </li>
            <li className="mb-1">
              <Link to="/disclaimer" className="text-white text-[15px] font-light font-['Inter'] hover:text-gray-400">
                Disclaimer
              </Link>
            </li>
            <li className="mb-1">
              <Link to="/faq" className="text-white text-[15px] font-light font-['Inter'] hover:text-gray-400">
                FAQ
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-bold mb-4 font-['Inter']">Resources</h2>
          <ul>
            <li className="mb-1">
              <Link to="/adhd-resources" className="text-white text-[15px] font-light font-['Inter'] hover:text-gray-400">
                ADHD Resources
              </Link>
            </li>
            <li className="mb-1">
              <Link to="/parenting-resources" className="text-white text-[15px] font-light font-['Inter'] hover:text-gray-400">
                Parenting Resources
              </Link>
            </li>
            <li className="mb-1">
              <Link to="/attachments-and-emotions" className="text-white text-[15px] font-light font-['Inter'] hover:text-gray-400">
                Attachment & Emotions
              </Link>
            </li>
            <li className="mb-1">
              <Link to="/couples-resources" className="text-white text-[15px] font-light font-['Inter'] hover:text-gray-400">
                Couple Resources
              </Link>
            </li>
            <li className="mb-1">
              <Link to="/anger-and-shame" className="text-white text-[15px] font-light font-['Inter'] hover:text-gray-400">
                Anger and Shame
              </Link>
            </li>
            <li className="mb-1">
              <Link to="/therapy" className="text-white text-[15px] font-light font-['Inter'] hover:text-gray-400">
                Therapy Resources
              </Link>
            </li>
            <li className="mb-1">
              <Link to="/physician-patient-resources" className="text-white text-[15px] font-light font-['Inter'] hover:text-gray-400">
                Physician Patient Resources
              </Link>
            </li>
            <li className="mb-1">
              <Link to="/general-resources" className="text-white text-[15px] font-light font-['Inter'] hover:text-gray-400">
                General Resources
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-bold mb-4 font-['Inter']">Address</h2>
          <p className="text-white text-[15px] font-light font-['Inter']">Toronto</p>
          <p className="text-white text-[15px] font-light font-['Inter']">10 Four Seasons Pl</p>
          <p className="text-white text-[15px] font-light font-['Inter']">Suite 1000, Etobicoke,</p>
          <p className="text-white text-[15px] font-light font-['Inter']">ON M9B 6H7</p>
          <p className="text-white text-[15px] font-light font-['Inter'] mt-4">Phone: (519) 936-3392</p>
          <p className="text-white text-[15px] font-light font-['Inter']">Fax: (519) 936-3395</p>
          <p className="text-white text-[15px] font-light font-['Inter'] mt-4">Calgary</p>
          <p className="text-white text-[15px] font-light font-['Inter']">1919 Sirocco Dr SW</p>
          <p className="text-white text-[15px] font-light font-['Inter']">Unit 304</p>
          <p className="text-white text-[15px] font-light font-['Inter']">AB T3H 2Y3 </p>
          <p className="text-white text-[15px] font-light font-['Inter'] mt-4">Phone: (403) 456-7000</p>
          <p className="text-white text-[15px] font-light font-['Inter']">Fax: (403) 456-7007</p>
        </div>
        <div>
          <h2 className="text-lg font-bold mb-4 font-['Inter']">Hours</h2>
          <p className="text-white text-[15px] font-light font-['Inter']">Monday - Thursday: 9:00 AM - 3:30 PM (MT)</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
