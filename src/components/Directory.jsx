import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { collectionData } from "../data/collectionData";

function Directory({ searchQuery, category }) {
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    let data = collectionData;

    if (category) {
      data = data.filter((item) => item.category === category);
    }

    if (searchQuery) {
      data = data.filter((item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredData(data);
    console.log("Filtered Data: ", data);
  }, [searchQuery, category]);

  return (
    <div className="w-[1200px] h-[846px] px-[39px] pt-[20px] pb-[20px] bg-white rounded-[10px] shadow-inner mt-[120px] flex">
      <div className="flex flex-col gap-[27px] h-full overflow-y-auto pr-[33px] pl-[10px] custom-scrollbar w-full pt-[20px] pb-[20px]">
        {filteredData.map((item) => (
          <a
            key={item.id}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block px-[66px] py-[23px] bg-white rounded-[10px] shadow-custom-light text-[#1f1f1f] text-xl font-semibold font-['Inter'] text-left hover:underline"
          >
            {item.title}
          </a>
        ))}
      </div>
    </div>
  );
}

Directory.propTypes = {
  searchQuery: PropTypes.string,
  category: PropTypes.string,
};

export default Directory;
