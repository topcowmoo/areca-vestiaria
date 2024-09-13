import PropTypes from "prop-types";

function HomeDirectory({ filteredData }) {
  return (
    <div
      className="
  p-3
  bg-white 
  shadow-custom-inner 
  flex 
  h-[300px] md:h-[300px] lg:h-[425px] xl:h-[500px] 2xl:h-[550px]
  w-full md:w-[375px] lg:w-[475px] xl:w-[575px] 2xl:w-[675px] 
  rounded-md sm:rounded-[10px] md:rounded-[10px] lg:rounded-[10px] xl:rounded-[10px]"
    >
      <div className="flex flex-col gap-[15px] h-full overflow-y-auto custom-scrollbar w-full pt-[10px] pb-[10px] pr-[15px] pl-[15px]">
        {filteredData.length > 0 ? (
          filteredData.map((item) => (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block px-[20px] py-[10px] bg-white rounded-[10px] shadow-custom-light text-black text-[11px] sm:text-base md:text-lg lg:text-lg font-semibold font-['Inter'] text-left hover:underline sm:px-[22px] sm:py-[11px] md:px-[25px] md:py-[12px] lg:px-[30px] lg:py-[15px] xl:px-[35px] xl:py-[18px]"
            >
              {item.title}
            </a>
          ))
        ) : (
          <div className="block px-[20px] py-[10px] bg-white rounded-[10px] shadow-custom-light text-black text-[12px] sm:text-base md:text-lg lg:text-lg font-semibold font-['Inter'] text-left">
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
