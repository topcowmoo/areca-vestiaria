import { useState } from "react";
import PropTypes from "prop-types";
import { IoMdSearch } from "react-icons/io";


const SearchBarWithCommit = ({ onSearchChange }) => {
  const [query, setQuery] = useState("");
 
  

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    //  Tell parent to update Directory
    onSearchChange(value);

   
  };

  return (
    <div className="relative flex flex-col items-center justify-center p-4">
      <div
        className="
        w-[247px] h-[33px] pl-3.5 pr-[9.43px] py-[2.57px] 
        bg-white rounded-[13.71px] shadow-[0_0_15px_5px_rgba(255,255,255,0.2)] flex items-center 
        border border-gray-200 focus-within:shadow-[0_0_15px_5px_rgba(255,255,255,0.7)] transition-shadow duration-300 ease-in-out 
        sm:w-[247px] sm:h-[33px] sm:pl-3.5 sm:pr-[9.43px] sm:py-[2.57px] 
        md:w-[482px] md:h-[35px] md:pl-[22px] md:pr-[22px] md:py-1.5 md:rounded-[32px] 
        lg:w-[482px] lg:h-[35px] lg:pl-[22px] lg:pr-[22px] lg:py-1.5 lg:rounded-[32px]
      "
      >
        <input
          type="text"
          className={`flex-grow bg-transparent focus:outline-none ${
            query
              ? 'text-[#373636] text-[12px] sm:text-[12px] md:text-base lg:text-base font-semibold font-["Inter"]'
              : "text-[#9b9b9b] text-[12px] sm:text-[12px] md:text-base lg:text-base font-semibold font-['Inter']"
          }`}
          placeholder="Search Topic..."
          value={query}
          onChange={handleInputChange}
          
        
        />
        <IoMdSearch className="w-[9.86px] h-[9.86px] sm:w-[9.86px] sm:h-[9.86px] md:w-[23px] md:h-[23px] lg:w-[23px] lg:h-[23px] ml-2 text-[#9b9b9b]" />
      </div>

      {/* 🔍 Dropdown Preview */}
      
      
    </div>
  );
};

SearchBarWithCommit.propTypes = {
  category: PropTypes.string.isRequired,
  onSearchChange: PropTypes.func.isRequired,
};

export default SearchBarWithCommit;
