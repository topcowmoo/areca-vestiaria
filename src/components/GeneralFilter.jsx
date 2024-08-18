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
    <div className="relative w-full">
      {/* Button styles for large and small screens */}
      <div
        className={`h-[33.95px] px-[9.59px] py-[4.47px] justify-start items-center gap-[7.67px] inline-flex cursor-pointer ${
          isFilterBoxOpen
            ? "lg:bg-white lg:text-black sm:bg-white sm:text-black sm:border-none"
            : "lg:bg-black lg:text-white sm:bg-black sm:text-white"
        } ${
          !isFilterBoxOpen
            ? "rounded-md border border-white"
            : "rounded-md border-none"
        } sm:h-[28px] sm:px-[8px] sm:py-[4px] sm:gap-[5px] lg:h-[33.95px] lg:px-[9.59px] lg:py-[4.47px] lg:gap-[7.67px]`}
        onClick={toggleFilterBox}
      >
        <RiEqualizerFill
          className={`w-[24.29px] h-[24.29px] sm:w-[20px] sm:h-[20px] lg:w-[24.29px] lg:h-[24.29px] ${
            isFilterBoxOpen ? "sm:text-black lg:text-black" : "sm:text-white lg:text-white"
          }`}
        />
        <div
          className={`text-xl font-medium sm:text-base lg:text-xl ${
            isFilterBoxOpen ? "sm:text-black lg:text-black" : "sm:text-white lg:text-white"
          }`}
        >
          Filter
        </div>
      </div>

      {/* Animate visibility of the FilterBox */}
      <div
        className={`mt-[37px] absolute top-full left-0 transition-all duration-500 ease-in-out transform ${
          isFilterBoxOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-8 opacity-0"
        } sm:mt-[20px] lg:mt-[37px] lg:border lg:border-white rounded-[10px]`}
        style={{ visibility: isFilterBoxOpen ? "visible" : "hidden" }}
      >
        <div
          className={`w-[343px] sm:w-[500px] px-4 sm:px-6 pt-7 pb-[304px] rounded-[10px] ${
            isFilterBoxOpen
              ? "sm:bg-white sm:text-black sm:border-none lg:bg-[#e8e8e8]/20 lg:text-white"
              : "sm:bg-[#e8e8e8]/20 sm:text-white lg:bg-[#e8e8e8]/20 lg:text-white"
          } backdrop-blur-[24.90px] flex-col justify-start items-start gap-[15px] inline-flex lg:w-[282px] lg:px-4 lg:pt-7 lg:pb-[69px] rounded-[10px]`}
        >
          <div
            className={`text-[32px] font-semibold sm:text-[24px] lg:text-[32px] ${
              isFilterBoxOpen
                ? "sm:text-black lg:text-white"
                : "sm:text-white lg:text-white"
            }`}
          >
            Filter
          </div>
          <hr className="w-full h-[2px] sm:bg-black lg:bg-white bg-black border-0" />

          <div
            className={`text-[19px] font-semibold leading-7 tracking-tight sm:text-[16px] lg:text-[19px] ${
              isFilterBoxOpen
                ? "sm:text-black lg:text-white"
                : "sm:text-white lg:text-white"
            }`}
          >
            Resource Format
          </div>
          <div className="flex-col justify-start items-start gap-[7px] sm:gap-[5px] lg:gap-[7px] flex">
            {Object.keys(checkedKinds).map((kind) => (
              <div
                className="justify-start items-center gap-8 sm:gap-4 lg:gap-8 inline-flex"
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
                <div
                  className={`text-base sm:text-sm lg:text-base font-medium ${
                    isFilterBoxOpen
                      ? "sm:text-black lg:text-white"
                      : "sm:text-white lg:text-white"
                  }`}
                >
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
