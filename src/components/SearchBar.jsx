import { useState } from "react";
import { collectionData } from "../data/collectionData";
import { IoMdSearch } from "react-icons/io";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [isFocused, setIsFocused] = useState(false);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.trim() === "" || value.length < 3) {
      setFilteredData([]);
    } else {
      const results = collectionData.filter(
        (item) =>
          item.title && item.title.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredData(results.slice(0, 3)); // Limit the results to 3 items
    }
  };

  const highlightQuery = (text) => {
    const parts = text.split(new RegExp(`(${query})`, "gi"));
    return parts.map((part, index) =>
      part.toLowerCase() === query.toLowerCase() ? (
        <span
          key={index}
          className="text-[#373636] font-semibold font-['Inter']"
        >
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  const handleKeyUp = (e) => {
    if (e.key === "Enter" && filteredData.length > 0) {
      window.open(filteredData[0].link, "_blank");
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-center p-4">
      <div
        className="
        w-[186px] h-[22px] pl-3.5 pr-[9.43px] py-[2.57px] 
        bg-white rounded-[13.71px] shadow-[0_0_15px_5px_rgba(255,255,255,0.5)] flex items-center 
        border border-gray-200 focus-within:shadow-[0_0_15px_5px_rgba(255,255,255,0.4)]
        sm:w-[247px] sm:h-[33px] sm:pl-3.5 sm:pr-[9.43px] sm:py-[2.57px] 
        md:w-[482px] md:h-[35px] md:pl-[22px] md:pr-[22px] md:py-1.5 md:rounded-[32px] 
        lg:w-[482px] lg:h-[35px] lg:pl-[22px] lg:pr-[22px] lg:py-1.5 lg:rounded-[32px]
      "
      >
        <input
          type="text"
          className={`flex-grow bg-transparent focus:outline-none text-[#373636] font-semibold font-['Inter'] ${
            query
              ? "text-[9px] sm:text-[12px] md:text-base lg:text-base"
              : "text-[9px] sm:text-[12px] md:text-base lg:text-base"
          }`}
          placeholder="Search Topic..."
          value={query}
          onChange={handleInputChange}
          onKeyUp={handleKeyUp}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setTimeout(() => setIsFocused(false), 150)}
        />
        <IoMdSearch className="w-[9.86px] h-[9.86px] lg:w-[23px] lg:h-[23px] ml-2 text-[#9b9b9b]" />
      </div>

      {/* Search Result container */}
      {isFocused && query.length >= 3 && (
        <div
          className={`absolute top-[45px] w-[186px] sm:w-[247px] md:w-[482px] lg:w-[482px] bg-white rounded-[10px] p-1 shadow-lg z-10 border border-gray-200 transition-opacity duration-300 ease-in-out opacity-100`}
        >
          {filteredData.length > 0 ? (
            <div className="flex flex-col justify-start items-start gap-2.5">
              {filteredData.map((item) => (
                <a
                  key={item.id}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full no-underline hover:underline"
                >
                  <div className="w-full truncate">
                    <span className="text-[#1f1f1f] text-[8px] sm:text-[12px] md:text-base lg:text-base font-normal font-['Inter'] truncate">
                      {highlightQuery(item.title)}
                    </span>
                    {item !== filteredData[filteredData.length - 1] && (
                      <div
                        className="w-full border-t mt-1 mb-1"
                        style={{ borderColor: "#0000007D" }}
                      ></div>
                    )}
                  </div>
                </a>
              ))}
            </div>
          ) : (
            <p className="text-[#bababa] text-[8px] sm:text-[12px] md:text-base lg:text-base font-semibold font-['Inter']">
              No results found
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
