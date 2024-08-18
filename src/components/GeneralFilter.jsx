import { useState, useMemo, useEffect } from "react";
import PropTypes from "prop-types";
import { collectionData } from "../data/collectionData";
import { RiEqualizerFill } from "react-icons/ri";

const GeneralFilter = ({
  currentPage,
  setFilteredData,
  setIsFilterBoxOpen,
  isFilterBoxOpen,
}) => {
  const [checkedKinds, setCheckedKinds] = useState({
    Article: false,
    Video: false,
    Book: false,
  });

  const filteredData = useMemo(() => {
    const kinds = Object.keys(checkedKinds).filter(
      (kind) => checkedKinds[kind]
    );

    if (kinds.length === 0) {
      return collectionData.filter((item) => item.category === currentPage);
    }

    return collectionData.filter((item) => {
      const kindMatch = kinds.length > 0 ? kinds.includes(item.kind) : true;
      return item.category === currentPage && kindMatch;
    });
  }, [checkedKinds, currentPage]);

  useEffect(() => {
    setFilteredData(filteredData);
  }, [filteredData, setFilteredData]);

  const handleKindCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setCheckedKinds((prev) => ({ ...prev, [value]: checked }));
  };

  const toggleFilterBox = () => {
    setIsFilterBoxOpen(!isFilterBoxOpen);
  };

  return (
    <div className="relative">
      {/* Move the button to the desired location using CSS or layout changes */}
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

      {/* Animate visibility of the FilterBox */}
      <div
        className={`mt-[15px] absolute top-full left-0 transition-all duration-500 ease-in-out transform ${
          isFilterBoxOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-8 opacity-0"
        }`}
        style={{ visibility: isFilterBoxOpen ? "visible" : "hidden" }}
      >
        <div className="lg:w-[282px] w-[343px] px-4 pt-7 lg:pb-[69px] pb-[302px] bg-[#e8e8e8]/20 rounded-[10px] border border-white backdrop-blur-[24.90px] flex-col justify-start items-start gap-[15px] inline-flex">
          <div className="lg:text-white text-[32px] font-semibold font-['Inter']">
            Filter
          </div>
          <hr className="w-full h-[2px] sm:bg-black lg:bg-white bg-black border-0" />
          <div className="lg:text-white text-[19px] font-semibold font-['Inter'] leading-7 tracking-tight">
            Resource Format
          </div>
          <div className="flex-col justify-start items-start gap-[7px] flex">
            {Object.keys(checkedKinds).map((kind) => (
              <div
                className="justify-start items-center gap-8 inline-flex"
                key={kind}
              >
                <div className="justify-start items-start gap-2.5 sm:gap-2.5 lg:gap-2.5 flex">
                  <input
                    type="checkbox"
                    value={kind}
                    checked={checkedKinds[kind]}
                    onChange={handleKindCheckboxChange}
                    className={`custom-checkbox ${
                      isFilterBoxOpen ? "mobile-open" : ""
                    }`}
                  />
                </div>
                <div className="lg:text-white text-base font-medium font-['Urbanist'] leading-normal tracking-tight">
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
  currentPage: PropTypes.string.isRequired,
  setFilteredData: PropTypes.func.isRequired,
  setIsFilterBoxOpen: PropTypes.func.isRequired,
  isFilterBoxOpen: PropTypes.bool.isRequired,
};

export default GeneralFilter;
