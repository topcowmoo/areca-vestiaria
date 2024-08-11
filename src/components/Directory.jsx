import PropTypes from "prop-types";
import { useMemo } from "react";

function Directory({ filteredData }) {
  console.log("Directory component received filteredData:", filteredData);

  const itemHeight = 120;
  const padding = 40;
  const maxItems = 8;

  const dynamicHeight = useMemo(() => {
    const numItems = Math.min(filteredData.length, maxItems);
    return numItems * itemHeight + padding;
  }, [filteredData]);

  return (
    <div
      className="w-[1200px] px-[39px] py-[40] pt-[20px] pb-[20px] bg-white rounded-[10px] shadow-inner flex"
      style={{
        height: filteredData.length > 0 ? `${dynamicHeight}px` : "auto",
        minHeight: "150px",
      }}
    >
      <div className="flex flex-col gap-[27px] h-full overflow-y-auto pr-[33px] pl-[10px] custom-scrollbar w-full pt-[10px] pb-[10px]">
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
