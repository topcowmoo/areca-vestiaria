import PropTypes from "prop-types";

function HomeDirectory({ filteredData }) {
  const maxItems = 8;

  const needsScrolling = filteredData.length > maxItems;

  return (
    <div
      className="px-4 py-4 bg-white rounded-[10px] shadow-inner flex w-full overflow-x-hidden box-border"
      style={{
        minHeight: "150px",
      }}
    >
      <div
        className={`flex flex-col gap-4 w-full ${
          needsScrolling ? "overflow-y-auto custom-scrollbar" : ""
        } h-[300px] sm:h-[400px] md:h-[450px] lg:h-[510px]`}
      >
        {filteredData.length > 0 ? (
          filteredData.map((item) => (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 lg:px-[66px] lg:py-[23px] bg-white rounded-[10px] shadow-custom-light text-[#1f1f1f] text-sm sm:text-md md:text-lg lg:text-xl font-semibold font-['Inter'] text-center hover:underline transition-all duration-200 ease-in-out"
            >
              {item.title}
            </a>
          ))
        ) : (
          <div className="block px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 lg:px-[66px] lg:py-[23px] bg-white rounded-[10px] shadow-custom-light text-[#1f1f1f] text-sm sm:text-md md:text-lg lg:text-xl font-semibold font-['Inter'] text-left">
            No results found
          </div>
        )}
      </div>
    </div>
  );
}

HomeDirectory.propTypes = {
  filteredData: PropTypes.array.isRequired,
};

export default HomeDirectory;
