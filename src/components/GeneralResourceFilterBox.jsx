import { useState, useMemo, useEffect } from "react";
import PropTypes from "prop-types";
import { collectionData } from "../data/collectionData";
import { RiEqualizerFill } from "react-icons/ri";

const subcategoryLabels = {
  Guideline: "Guideline",
  General: "General",
  "Borderline Personality Disorder": "Borderline Personality Disorder",
};

const GeneralResourceFilterBox = ({
  currentPage,
  setFilteredData,
  setIsFilterBoxOpen,
  isFilterBoxOpen
}) => {
  const [checkedKinds, setCheckedKinds] = useState({
    Article: false,
    Video: false,
    Book: false,
  });

  const [selectedSubcategories, setSelectedSubcategories] = useState({
    "Borderline Personality Disorder": false,
    Guideline: false,
    General: false,
  });

  const filteredData = useMemo(() => {
    const kinds = Object.keys(checkedKinds).filter(
      (kind) => checkedKinds[kind]
    );

    const activeSubcategories = Object.keys(selectedSubcategories).filter(
      (key) => selectedSubcategories[key]
    );

    if (kinds.length === 0 && activeSubcategories.length === 0) {
      return collectionData.filter((item) => item.category === currentPage);
    }

    return collectionData.filter((item) => {
      const kindMatch = kinds.length > 0 ? kinds.includes(item.kind) : true;
      const subCategoryMatch =
        activeSubcategories.length > 0
          ? activeSubcategories.some((subCategory) =>
              item.subCategory.includes(subcategoryLabels[subCategory])
            )
          : true;
      return item.category === currentPage && kindMatch && subCategoryMatch;
    });
  }, [checkedKinds, selectedSubcategories, currentPage]);

  useEffect(() => {
    setFilteredData(filteredData);
  }, [filteredData, setFilteredData]);

  const handleKindCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setCheckedKinds((prev) => ({ ...prev, [value]: checked }));
  };

  const handleSubcategoryCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setSelectedSubcategories((prev) => ({
      ...prev,
      [value]: checked,
    }));
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
        className={`mt-[37px] absolute top-full left-0 transition-all duration-500 ease-in-out transform ${
          isFilterBoxOpen ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0'
        }`}
        style={{ visibility: isFilterBoxOpen ? 'visible' : 'hidden' }}
      >
        <div className="w-[282px] px-4 pt-7 pb-[69px] bg-[#e8e8e8]/20 rounded-[10px] border border-white backdrop-blur-[24.90px] flex-col justify-start items-start gap-[15px] inline-flex">
          <div className="text-white text-[32px] font-semibold font-['Inter']">
            Filter
          </div>
          <hr className="border-t border-white w-full" />
          <div className="text-white text-[19px] font-semibold font-['Inter'] leading-7 tracking-tight">
            Resource Format
          </div>
          <div className="flex-col justify-start items-start gap-[7px] flex">
            {Object.keys(checkedKinds).map((kind) => (
              <div
                className="justify-start items-center gap-8 inline-flex"
                key={kind}
              >
                <div className="justify-start items-start gap-2.5 flex">
                  <input
                    type="checkbox"
                    value={kind}
                    checked={checkedKinds[kind]}
                    onChange={handleKindCheckboxChange}
                    className="custom-checkbox"
                  />
                </div>
                <div className="text-white text-base font-medium font-['Urbanist'] leading-normal tracking-tight">
                  {kind}
                </div>
              </div>
            ))}
          </div>
          <div className="text-white text-[19px] font-semibold font-['Inter'] leading-7 tracking-tight">
            Type of Resource
          </div>
          <div className="flex-col justify-start items-start gap-[7px] flex">
            {Object.keys(subcategoryLabels).map((subcategoryKey) => (
              <div
                className="justify-start items-center gap-8 inline-flex"
                key={subcategoryKey}
              >
                <div className="justify-start items-start gap-2.5 flex">
                  <input
                    type="checkbox"
                    value={subcategoryKey}
                    checked={selectedSubcategories[subcategoryKey]}
                    onChange={handleSubcategoryCheckboxChange}
                    className="custom-checkbox"
                  />
                </div>
                <div className="text-white text-base font-medium font-['Urbanist'] leading-normal tracking-tight">
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

GeneralResourceFilterBox.propTypes = {
  currentPage: PropTypes.string.isRequired,
  setFilteredData: PropTypes.func.isRequired,
  setIsFilterBoxOpen: PropTypes.func.isRequired,
  isFilterBoxOpen: PropTypes.bool.isRequired,
};

export default GeneralResourceFilterBox;
