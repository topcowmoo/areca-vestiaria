import { useState } from "react";
import PropTypes from "prop-types";
import { IoMdSearch } from "react-icons/io";
import { collectionData } from "../data/collectionData";

const SearchBarWithCommit = ({ setFilteredData, category }) => {
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
      setSearchResults(results.slice(0, 5)); // Limit the results to 5 items
    }
  };

  const highlightQuery = (text) => {
    const parts = text.split(new RegExp(`(${query})`, "gi"));
    return parts.map((part, index) =>
      part.toLowerCase() === query.toLowerCase() ? (
        <span
          key={index}
          className="text-[#373636] text-base font-semibold font-['Inter']"
        >
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  const handleSearchCommit = () => {
    const results = collectionData.filter(
      (item) =>
        item.category === category && // Filter by the current page's category
        item.title &&
        item.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredData(results);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearchCommit();
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-center p-4">
      <div className="w-[482px] h-[35px] px-[22px] py-1.5 bg-white rounded-[32px] shadow flex items-center border border-gray-200 focus-within:shadow-lg">
        <input
          type="text"
          className={`flex-grow bg-transparent focus:outline-none ${
            query
              ? 'text-[#373636] text-base font-semibold font-["Inter"]'
              : "text-[#9b9b9b] text-base font-semibold font-['Inter']"
          }`}
          placeholder="Search Topic..."
          value={query}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setTimeout(() => setIsFocused(false), 150)}
        />
        <IoMdSearch className="w-[23px] h-[23px] ml-2 text-[#9b9b9b]" />
      </div>
      <div
        className={`absolute top-[60px] w-[482px] bg-white rounded-[10px] mt-4 p-4 shadow-lg z-10 border border-gray-200 transition-all ease-in-out transform ${
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
                <div className="w-full">
                  <span className="text-[#1f1f1f] text-base font-normal font-['Inter'] truncate block">
                    {highlightQuery(item.title)}
                  </span>
                  {item !== searchResults[searchResults.length - 1] && (
                    <div
                      className="w-[456.5px] border-t mt-2 mb-2"
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
            <p className="text-[#373636] text-base font-semibold font-['Inter']">
              No results found
            </p>
          )
        )}
      </div>
    </div>
  );
};

SearchBarWithCommit.propTypes = {
  setFilteredData: PropTypes.func.isRequired,
  category: PropTypes.string.isRequired, // Ensure the category is passed as a prop
};

export default SearchBarWithCommit;
