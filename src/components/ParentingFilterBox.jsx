import { useState, } from "react";
import PropTypes from "prop-types";
import { RiEqualizerFill } from "react-icons/ri";
import { IoCheckmarkSharp } from "react-icons/io5";

const subcategoryLabels = {
  "Local Services": "Local Services",
  "Sex Discussion": "Sex Discussion",
  ADHD: "ADHD",
  Bullying: "Bullying",
  General: "General",
};

const ParentingFilterBox = ({
  onFilterChange,
  setIsFilterBoxOpen,
  isFilterBoxOpen,
}) => {
  const [checkedKinds, setCheckedKinds] = useState({
    Article: false,
    Video: false,
    Book: false,
  });

  const [selectedSubcategories, setSelectedSubcategories] = useState({
    "Local Services": false,
    "Sex Discussion": false,
    ADHD: false,
    Bullying: false,
    General: false,
  });

  const applyFilterAndTrack = (nextKinds, nextSubcategories) => {
    const kinds = Object.keys(nextKinds).filter((key) => nextKinds[key]);
    const subcategories = Object.keys(nextSubcategories).filter((key) => nextSubcategories[key]);

    // Send filters up to parent
    onFilterChange({ kinds, subcategories });

  
  };

  const handleKindCheckboxChange = (e) => {
    const { value, checked } = e.target;
    const updated = { ...checkedKinds, [value]: checked };
    setCheckedKinds(updated);
    applyFilterAndTrack(updated, selectedSubcategories);
  };

  const handleSubcategoryCheckboxChange = (e) => {
    const { value, checked } = e.target;
    const updated = { ...selectedSubcategories, [value]: checked };
    setSelectedSubcategories(updated);
    applyFilterAndTrack(checkedKinds, updated);
  };

  const toggleFilterBox = () => {
    setIsFilterBoxOpen(!isFilterBoxOpen);

  
  };

  return (
    <div className="w-full sm:w-[90%] md:w-[90%] lg:w-[90%] mx-auto relative">
      {/* Filter Button */}
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

      {/* Filter Dropdown */}
      <div
        className={`w-full mt-[19px] absolute top-full left-0 transition-all duration-500 ease-in-out transform ${
          isFilterBoxOpen ? "translate-y-0 opacity-100" : "-translate-y-8 opacity-0"
        }`}
        style={{ visibility: isFilterBoxOpen ? "visible" : "hidden" }}
      >
        <div
          className={`w-full pt-7 pb-11 px-4 sm:w-[282px] md:px-4 md:pt-7 md:pb-[69px] lg:px-4 lg:pt-7 lg:pb-[69px]
          ${isFilterBoxOpen ? "bg-[#f0f0f0] backdrop-blur-xl text-black" : "bg-[#f0f0f0]"}
          sm:bg-[#e8e8e8]/20 sm:text-white 
          md:bg-[#e8e8e8]/20 md:text-white 
          lg:bg-[#e8e8e8]/20 lg:text-white 
          xl:bg-[#e8e8e8]/20 xl:text-white 
          sm:backdrop-blur-[24.90px] md:backdrop-blur-[24.90px] lg:backdrop-blur-[24.90px] xl:backdrop-blur-[24.90px] 
          rounded-[10px] border border-white flex-col justify-start items-start gap-[15px] inline-flex`}
        >
          <div className="sm:text-white md:text-white lg:text-white text-[32px] font-semibold font-['Inter']">
            Filter
          </div>
          <hr className="w-full h-[2px] sm:bg-white md:bg-white lg:bg-white bg-black border-0" />

          {/* Kinds */}
          <div className="sm:text-white md:text-white lg:text-white text-[19px] font-semibold font-['Inter'] leading-7 tracking-tight">
            Resource Format
          </div>
          <div className="flex-col justify-start items-start gap-[12px] flex">
            {Object.keys(checkedKinds).map((kind) => (
              <div className="justify-start items-center gap-8 inline-flex" key={kind}>
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
                <div className="sm:text-white md:text-white lg:text-white text-base font-medium font-['Urbanist'] leading-normal tracking-tight">
                  {kind}
                </div>
              </div>
            ))}
          </div>

          {/* Subcategories */}
          <div className="sm:text-white md:text-white lg:text-white text-[19px] font-semibold font-['Inter'] leading-7 tracking-tight">
            Type of Resource
          </div>
          <div className="flex-col justify-start items-start gap-[12px] flex">
            {Object.keys(subcategoryLabels).map((subcategoryKey) => (
              <div className="justify-start items-center gap-8 inline-flex" key={subcategoryKey}>
                <label className="relative flex items-center">
                  <input
                    type="checkbox"
                    value={subcategoryKey}
                    checked={selectedSubcategories[subcategoryKey]}
                    onChange={handleSubcategoryCheckboxChange}
                    className="appearance-none w-6 h-6 bg-white border border-gray-300 rounded-md cursor-pointer checked:bg-black sm:checked:bg-white checked:border-black sm:checked:border-white"
                  />
                  {selectedSubcategories[subcategoryKey] && (
                    <IoCheckmarkSharp className="absolute w-6 h-6 sm:text-black text-white left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                  )}
                </label>
                <div className="sm:text-white md:text-white lg:text-white text-base font-medium font-['Urbanist'] leading-normal tracking-tight">
                  {subcategoryLabels[subcategoryKey]}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

ParentingFilterBox.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
  setIsFilterBoxOpen: PropTypes.func.isRequired,
  isFilterBoxOpen: PropTypes.bool.isRequired,
};

export default ParentingFilterBox;
