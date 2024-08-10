import PropTypes from "prop-types";
import { useMemo } from "react";

function Directory({ filteredData }) {
  console.log("Directory component received filteredData:", filteredData);

  // Calculate the dynamic height
  const itemHeight = 120; // Approximate height of each item in pixels
  const padding = 40; // Top and bottom padding of the container
  const maxItems = 8; // Maximum number of items before the height stops increasing
  const dynamicHeight = useMemo(() => {
    const numItems = Math.min(filteredData.length, maxItems);
    return numItems * itemHeight + padding;
  }, [filteredData]);

  return (
    <div
      className="w-[1200px] px-[39px] pt-[20px] pb-[20px] bg-white rounded-[10px] shadow-inner mt-[120px] flex"
      style={{
        height: `${dynamicHeight}px`,
        minHeight: "400px", // Minimum height to maintain design
      }}
    >
      <div className="flex flex-col gap-[27px] h-full overflow-y-auto pr-[33px] pl-[10px] custom-scrollbar w-full pt-[20px] pb-[20px]">
        {filteredData.length > 0 ? (
          filteredData.map((item) => (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block px-[66px] py-[23px] bg-white rounded-[10px] shadow-custom-light text-[#1f1f1f] text-xl font-semibold font-['Inter'] text-left hover:underline"
            >
              {item.title}
            </a>
          ))
        ) : (
          <div className="block px-[66px] py-[23px] bg-white rounded-[10px] shadow-custom-light text-[#1f1f1f] text-xl font-semibold font-['Inter'] text-left">
            No results found
          </div>
        )}
      </div>
    </div>
  );
}

Directory.propTypes = {
  filteredData: PropTypes.array.isRequired,
};

export default Directory;
