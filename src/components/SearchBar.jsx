import { useState } from "react";
import { collectionData } from "../data/collectionData";
import searchbar from "../assets/searchbar.png";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);

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
      setFilteredData(results);
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

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div className="w-[482px] h-[35px] px-[22px] py-1.5 bg-white rounded-[32px] shadow flex items-center">
        <input
          type="text"
          className={`flex-grow bg-transparent focus:outline-none ${
            query
              ? 'text-[#373636] text-base font-semibold font-["Inter"]'
              : "text-[#9b9b9b] text-base font-semibold font-inter"
          }`}
          placeholder="Search Topic..."
          value={query}
          onChange={handleInputChange}
        />
        <img
          className="w-[23px] h-[23px] ml-2"
          src={searchbar}
          alt="Search Icon"
        />
      </div>
      {query.length >= 3 && (
        <div className="w-[482px] bg-white rounded-[10px] mt-4 p-4">
          {filteredData.length > 0 ? (
            <div className="flex flex-col justify-start items-start gap-2.5">
              {filteredData.map((item, index) => (
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
                    {index < filteredData.length - 1 && (
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
            <p className="text-[#373636] text-base font-semibold font-[Inter]">
              No results found
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
