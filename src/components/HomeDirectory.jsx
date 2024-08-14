import PropTypes from "prop-types";

function HomeDirectory({ filteredData }) {
  const maxItems = 8;

  const needsScrolling = filteredData.length > maxItems;

  return (
    <div
      className="px-4 py-4 bg-white rounded-[10px] shadow-inner flex w-full overflow-x-hidden box-border"
      style={{
        height: "540px",
        minHeight: "150px",
      }}
    >
      <div
        className={`flex flex-col gap-4 h-full w-full ${
          needsScrolling ? "overflow-y-auto custom-scrollbar" : ""
        }`}
      >
        {filteredData.length > 0 ? (
          filteredData.map((item) => (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block px-[66px] py-[23px] bg-white rounded-[10px] shadow-custom-light text-[#1f1f1f] text-xl font-semibold font-['Inter'] text-center hover:underline"
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

HomeDirectory.propTypes = {
  filteredData: PropTypes.array.isRequired,
};

export default HomeDirectory;
