import { useState } from "react";
import PropTypes from "prop-types";
import { IoMdSearch } from "react-icons/io";
import { collectionData } from "../data/collectionData";

const SearchBarWithCommit = ({ category }) => {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isFocused, setIsFocused] = useState(false);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.trim() === "" || value.length < 3) {
      setSearchResults([]);
    } else {
      const results = collectionData.filter(
        (item) =>
          item.category === category && // Ensure the results are filtered by the current page's category
          item.title &&
          item.title.toLowerCase().includes(value.toLowerCase())
      );
      setSearchResults(results.slice(0, 5));
    }
  };

  const highlightQuery = (text) => {
    const parts = text.split(new RegExp(`(${query})`, "gi"));
    return parts.map((part, index) =>
      part.toLowerCase() === query.toLowerCase() ? (
        <span
          key={index}
          className="text-[#373636] text-[12px] sm:text-[12px] md:text-base lg:text-base font-semibold font-['Inter']"
        >
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  const handleKeyUp = (e) => {
    if (e.key === "Enter" && searchResults.length > 0) {
      window.open(searchResults[0].link, "_blank"); // Open the first result in a new tab
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-center p-4">
      <div
        className="
        w-[247px] h-[33px] pl-3.5 pr-[9.43px] py-[2.57px] 
        bg-white rounded-[13.71px] shadow flex items-center 
        border border-gray-200 focus-within:shadow-lg 
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
          onKeyUp={handleKeyUp}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setTimeout(() => setIsFocused(false), 150)}
        />
        <IoMdSearch className="w-[9.86px] h-[9.86px] sm:w-[9.86px] sm:h-[9.86px] md:w-[23px] md:h-[23px] lg:w-[23px] lg:h-[23px] ml-2 text-[#9b9b9b]" />
      </div>
      <div
        className={`absolute top-[60px] w-[247px] sm:w-[247px] md:w-[482px] lg:w-[482px] bg-white rounded-[10px] p-2 shadow-lg z-10 border border-gray-200 transition-all ease-in-out transform ${
          isFocused && query.length >= 3
            ? "duration-300 opacity-100 translate-y-0"
            : "duration-500 opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        {query.length >= 3 && searchResults.length > 0 ? (
          <div className="flex flex-col justify-start items-start gap-2.5">
            {searchResults.map((item) => (
              <a
                key={item.id}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full no-underline hover:underline"
              >
                <div className="w-full truncate">
                  <span className="text-[#1f1f1f] text-[12px] sm:text-[12px] md:text-base lg:text-base font-normal font-['Inter'] truncate">
                    {highlightQuery(item.title)}
                  </span>
                  {item !== searchResults[searchResults.length - 1] && (
                    <div
                      className="w-full border-t mt-2 mb-2"
                      style={{ borderColor: "#0000007D" }}
                    ></div>
                  )}
                </div>
              </a>
            ))}
          </div>
        ) : (
          query.length >= 3 &&
          searchResults.length === 0 && (
            <p className="text-[#373636] text-[12px] sm:text-[12px] md:text-base lg:text-base font-semibold font-['Inter']">
              No results found
            </p>
          )
        )}
      </div>
    </div>
  );
};

SearchBarWithCommit.propTypes = {
  category: PropTypes.string.isRequired, // Ensure the category is passed as a prop
};

export default SearchBarWithCommit;
