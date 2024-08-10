import PropTypes from "prop-types";
// Import PropTypes for type-checking the props passed to the component.

import { useMemo } from "react";
// Import useMemo from React to optimize performance by memoizing expensive calculations.

function Directory({ filteredData }) {
  console.log("Directory component received filteredData:", filteredData);
  // Log the received filteredData to the console for debugging purposes.

  // Calculate the dynamic height
  const itemHeight = 120; // Approximate height of each item in pixels.
  const padding = 40; // Total padding for the container (top + bottom).
  const maxItems = 8; // Maximum number of items to display before the height stops increasing.

  const dynamicHeight = useMemo(() => {
    const numItems = Math.min(filteredData.length, maxItems);
    // Calculate the number of items to display, limited by maxItems.

    return numItems * itemHeight + padding;
    // Calculate the dynamic height based on the number of items and padding.
  }, [filteredData]);
  // Memoize the calculation of dynamicHeight to avoid recomputing unless filteredData changes.

  return (
    <div
      className="w-[1200px] px-[39px] py-[40] pt-[20px] pb-[20px] bg-white rounded-[10px] shadow-inner flex"
      style={{
        height: `${dynamicHeight}px`,
        minHeight: filteredData.length > 0 ? `${dynamicHeight}px` : "auto", 
        // Adjust the minHeight to "auto" if no items are present to prevent excess space.
      }}
    >
      <div className="flex flex-col gap-[27px] h-full overflow-y-auto pr-[33px] pl-[10px] custom-scrollbar w-full pt-[20px] pb-[20px]">
        {/* Container for the list of filtered items, with styling for scrolling and spacing. */}
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
              {/* Display each item's title as a clickable link. */}
            </a>
          ))
        ) : (
          <div className="block px-[66px] py-[23px] bg-white rounded-[10px] shadow-custom-light text-[#1f1f1f] text-xl font-semibold font-['Inter'] text-left">
            No results found
            {/* Display a message if no filtered data is available. */}
          </div>
        )}
      </div>
    </div>
  );
}

Directory.propTypes = {
  filteredData: PropTypes.array.isRequired,
  // Define the expected type for the filteredData prop and mark it as required.
};

export default Directory;
// Export the Directory component as the default export.
