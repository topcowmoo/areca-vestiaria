import PropTypes from "prop-types";
import { useState, useEffect } from "react";

function Directory({ filteredData, maxRows }) {
  const rowHeight = 70; // Approximate height of each row in pixels
  const maxVisibleRowsDefault = maxRows || 9; // Use maxRows if provided, else default to 9
  const maxVisibleRowsMobile = 4.5; // Number of rows on small/mobile screens
  const [maxVisibleRows, setMaxVisibleRows] = useState(maxVisibleRowsDefault);

  // Debounced resize handler to adjust row visibility based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 640) {
        setMaxVisibleRows(maxVisibleRowsMobile); // Mobile size
      } else {
        setMaxVisibleRows(maxVisibleRowsDefault); // Default size
      }
    };

    // Run on initial render
    handleResize();

    // Debounce to optimize resize handling
    let resizeTimeout;
    const debouncedResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(handleResize, 100);
    };

    window.addEventListener("resize", debouncedResize);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("resize", debouncedResize);
      clearTimeout(resizeTimeout);
    };
  }, [maxVisibleRowsDefault]);

  const maxHeight = rowHeight * maxVisibleRows; // Calculate max height based on visible rows

  return (
    <div
      className="w-full sm:w-[90%] md:w-[90%] lg:w-[90%] xl:w-[90%] p-[20px] sm:p-[20px] md:p-[25px] lg:p-[35px] xl:p-[35px] bg-white rounded-[10px] shadow-custom-inner flex mx-auto"
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
              className="block px-[20px] py-[10px] bg-white rounded-[10px] shadow-custom-light text-[#1f1f1f] text-[12px] sm:text-base md:text-lg lg:text-lg font-semibold font-['Inter'] text-left hover:underline sm:px-[22px] sm:py-[11px] md:px-[25px] md:py-[12px] lg:px-[30px] lg:py-[15px] xl:px-[35px] xl:py-[18px]"
            >
              {item.title}
            </a>
          ))
        ) : (
          <div className="block px-[20px] py-[10px] bg-white rounded-[10px] shadow-custom-light text-[#1f1f1f] text-[12px] sm:text-base md:text-lg lg:text-lg font-semibold font-['Inter'] text-left">
            No results found
          </div>
        )}
      </div>
    </div>
  );
}

Directory.propTypes = {
  filteredData: PropTypes.array.isRequired,
  maxRows: PropTypes.number, // New prop for max visible rows
};

export default Directory;
