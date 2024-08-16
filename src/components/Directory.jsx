import PropTypes from "prop-types";

function Directory({ filteredData }) {
  const rowHeight = 60; // Approximate height of each row in pixels
  const maxVisibleRows = 9; // Number of rows to display before scrolling
  const maxHeight = rowHeight * maxVisibleRows; // Calculate max height for 9 rows

  return (
    <div
      className="w-full max-w-[1200px] p-[20px] md:p-[40px] md:px-[39px] pt-[20px] pb-[20px] bg-white rounded-[10px] shadow-inner flex"
      style={{
        height: filteredData.length > 0 ? `${maxHeight}px` : "auto",
        paddingLeft: "22px", // Increased left padding
        paddingRight: "22px",
      }}
    >
      <div
        className="flex flex-col gap-[15px] h-full overflow-y-auto custom-scrollbar w-full pt-[10px] pb-[10px] pr-[15px] pl-[15px]" // Added left padding here
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
              className="block px-[20px] py-[10px] bg-white rounded-[10px] shadow-custom-light text-[#1f1f1f] text-sm font-semibold font-['Inter'] text-left hover:underline md:px-[35px] md:py-[15px] md:text-lg lg:px-[71px] lg:py-[23px] lg:text-xl" // Increased left padding for text boxes
            >
              {item.title}
            </a>
          ))
        ) : (
          <div className="block px-[20px] py-[10px] bg-white rounded-[10px] shadow-custom-light text-[#1f1f1f] text-sm font-semibold font-['Inter'] text-left md:px-[35px] md:py-[15px] md:text-lg lg:px-[71px] lg:py-[23px] lg:text-xl">
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
