import PropTypes from "prop-types";

function Directory({ filteredData }) {
  const rowHeight = 60; // Approximate height of each row in pixels
  const maxVisibleRows = 9; // Number of rows to display before scrolling
  const maxHeight = rowHeight * maxVisibleRows; // Calculate max height for 9 rows

  return (
    <div
      className="w-full sm:w-[90%] md:w-[90%] lg:w-[90%] xl:w-[90%] p-[20px] sm:p-[20px] md:p-[25px] lg:p-[35px] xl:p-[35px] bg-white rounded-[10px] shadow-inner flex mx-auto ml-5 mr-5"
      style={{
        height: filteredData.length > 0 ? `${maxHeight}px` : "auto",
      }}
    >
      <div
        className="flex flex-col gap-[15px] h-full overflow-y-auto custom-scrollbar w-full pt-[10px] pb-[10px] pr-[15px] pl-[15px]"
        style={{
          maxHeight: `${maxHeight}px`,
        }}
      >
        {filteredData.length > 0 ? (
          filteredData.map((item) => (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block px-[20px] py-[10px] bg-white rounded-[10px] shadow-custom-light text-[#1f1f1f] text-[10px] sm:text-[10px] md:text-lg lg:text-xl font-semibold font-['Inter'] text-left hover:underline sm:px-[22px] sm:py-[11px] md:px-[25px] md:py-[12px] lg:px-[30px] lg:py-[15px] xl:px-[35px] xl:py-[18px]"
            >
              {item.title}
            </a>
          ))
        ) : (
          <div className="block px-[20px] py-[10px] bg-white rounded-[10px] shadow-custom-light text-[#1f1f1f] text-[10px] sm:text-[10px] md:text-lg lg:text-xl font-semibold font-['Inter'] text-left sm:px-[22px] sm:py-[11px] md:px-[25px] md:py-[12px] lg:px-[30px] lg:py-[15px] xl:px-[35px] xl:py-[18px]">
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
