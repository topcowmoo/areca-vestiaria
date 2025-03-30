import { useState } from "react";
import PropTypes from "prop-types";
import { RiEqualizerFill } from "react-icons/ri";
import { IoCheckmarkSharp } from "react-icons/io5";

const GeneralFilter = ({
 
  onFilterChange,
  setIsFilterBoxOpen,
  isFilterBoxOpen,
}) => {
  const [checkedKinds, setCheckedKinds] = useState({
    Article: false,
    Video: false,
    Book: false,
  });

  const toggleFilterBox = () => {
    setIsFilterBoxOpen(!isFilterBoxOpen);
  };

  const handleKindCheckboxChange = (e) => {
    const { value, checked } = e.target;
    const updated = { ...checkedKinds, [value]: checked };
    setCheckedKinds(updated);

    //  Send selected tags to parent (e.g., ["Article", "Book"])
    const activeFilters = Object.keys(updated).filter((key) => updated[key]);
    onFilterChange(activeFilters);
  };

  return (
    <div className="w-full sm:w-[90%] md:w-[90%] lg:w-[90%] mx-auto relative">
      <div
        className={`h-[33.95px] px-[9.59px] py-[4.47px] rounded-md border justify-start items-center gap-[7.67px] inline-flex cursor-pointer ${
          isFilterBoxOpen
            ? "bg-white text-black border-white"
            : "bg-black text-white border-white"
        }`}
        onClick={toggleFilterBox}
      >
        <RiEqualizerFill
          className="w-[24.29px] h-[24.29px]"
          style={{ color: isFilterBoxOpen ? "black" : "white" }}
        />
        <div className="text-xl font-medium font-['Inter']">Filter</div>
      </div>

      <div
        className={`w-full mt-[19px] absolute top-full left-0 transition-all duration-500 ease-in-out transform ${
          isFilterBoxOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-8 opacity-0"
        }`}
        style={{ visibility: isFilterBoxOpen ? "visible" : "hidden" }}
      >
        <div
          className={`w-full pt-7 pb-[70px] px-4 sm:w-[282px] rounded-[10px] border border-white flex-col justify-start items-start gap-[15px] inline-flex backdrop-blur-[24.90px] ${
            isFilterBoxOpen ? "bg-[#f0f0f0] text-black" : "bg-[#f0f0f0]"
          } sm:bg-[#e8e8e8]/20 sm:text-white md:bg-[#e8e8e8]/20 md:text-white`}
        >
          <div className="text-[32px] font-semibold font-['Inter']">Filter</div>
          <hr className="w-full h-[2px] bg-black sm:bg-white border-0" />
          <div className="text-[19px] font-semibold font-['Inter'] leading-7 tracking-tight">
            Resource Format
          </div>

          <div className="flex-col justify-start items-start gap-[12px] flex">
            {Object.keys(checkedKinds).map((kind) => (
              <div
                className="justify-start items-center gap-8 inline-flex"
                key={kind}
              >
                <label className="relative flex items-center">
                  <input
                    type="checkbox"
                    value={kind}
                    checked={checkedKinds[kind]}
                    onChange={handleKindCheckboxChange}
                    className="appearance-none w-6 h-6 bg-white border border-gray-300 rounded-md cursor-pointer checked:bg-black sm:checked:bg-white checked:border-black sm:checked:border-white"
                  />
                  {checkedKinds[kind] && (
                    <IoCheckmarkSharp className="absolute w-6 h-6 sm:text-black text-white left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                  )}
                </label>
                <div className="sm:text-white text-base font-medium font-['Urbanist'] leading-normal tracking-tight">
                  {kind}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

GeneralFilter.propTypes = {
  
  onFilterChange: PropTypes.func.isRequired,
  setIsFilterBoxOpen: PropTypes.func.isRequired,
  isFilterBoxOpen: PropTypes.bool.isRequired,
};

export default GeneralFilter;
