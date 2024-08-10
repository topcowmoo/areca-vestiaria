import { useState, useMemo, useEffect } from "react"; 
import PropTypes from "prop-types";
import { collectionData } from "../data/collectionData";
import { RiEqualizerFill } from "react-icons/ri";

const subcategoryLabels = {
  "Local Services": "Local Services",
  "Sex Discussion": "Sex Discussion",
  ADHD: "ADHD",
  Bullying: "Bullying",
  General: "General",
};

const ParentingFilterBox = ({ currentPage, setFilteredData }) => {
  const [showFilterBox, setShowFilterBox] = useState(false);
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

  const filteredData = useMemo(() => {
    console.log("Filtering data with the following criteria:");
    console.log("Checked Kinds:", checkedKinds);
    console.log("Selected Subcategories:", selectedSubcategories);

    const kinds = Object.keys(checkedKinds).filter((kind) => checkedKinds[kind]);
    const activeSubcategories = Object.keys(selectedSubcategories).filter(
      (key) => selectedSubcategories[key]
    );

    if (kinds.length === 0 && activeSubcategories.length === 0) {
      console.log("No filters applied, returning all data for:", currentPage);
      return collectionData.filter((item) => item.category === currentPage);
    }

    const filtered = collectionData.filter((item) => {
      const kindMatch = kinds.length > 0 ? kinds.includes(item.kind) : true;
      const subCategoryMatch =
        activeSubcategories.length > 0
          ? activeSubcategories.some((subCategory) =>
              item.subCategory.includes(subcategoryLabels[subCategory])
            )
          : true;
      return item.category === currentPage && kindMatch && subCategoryMatch;
    });

    console.log("Filtered Data:", filtered);
    return filtered;
  }, [checkedKinds, selectedSubcategories, currentPage]);

  useEffect(() => {
    console.log("Setting filtered data in ParentingResources:", filteredData);
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
    setShowFilterBox((prevState) => !prevState);
  };

  return (
    <div>
      <div
        className={`h-[33.95px] px-[9.59px] py-[4.47px] rounded-md border justify-start items-center gap-[7.67px] inline-flex cursor-pointer ${
          showFilterBox ? "bg-white border-white" : "border-white"
        }`}
        onClick={toggleFilterBox}
      >
        {showFilterBox ? (
          <div className="w-[81.96px] h-[25px] relative flex items-center">
            <RiEqualizerFill
              className="w-[24.29px] h-[24.29px] left-0 absolute"
              style={{ color: "black" }} 
            />
            <div className="left-[31.96px] absolute text-black text-xl font-medium font-['Inter']">
              Filter
            </div>
            <div className="w-[101.14px] h-[33.95px] left-[-19px] top-[-4px] absolute rounded-md" />
          </div>
        ) : (
          <>
            <RiEqualizerFill
              className="w-[24.29px] h-[24.29px]"
              style={{ color: "white" }} 
            />
            <div className="text-white text-xl font-medium font-['Inter']">
              Filter
            </div>
          </>
        )}
      </div>
      {showFilterBox && (
        <div className="mt-4">
          <div className="w-[282px] px-4 pt-7 pb-[69px] bg-[#e8e8e8]/20 rounded-[10px] border border-white backdrop-blur-[24.90px] flex-col justify-start items-start gap-[15px] inline-flex">
            <div className="text-white text-[32px] font-semibold font-['Inter']">Filter</div>
            <hr className="border-t border-white w-full" />
            <div className="text-white text-[19px] font-semibold font-['Inter'] leading-7 tracking-tight">Resource Format</div>
            <div className="flex-col justify-start items-start gap-[7px] flex">
              {Object.keys(checkedKinds).map((kind) => (
                <div className="justify-start items-center gap-8 inline-flex" key={kind}>
                  <div className="justify-start items-start gap-2.5 flex">
                    <input
                      type="checkbox"
                      value={kind}
                      checked={checkedKinds[kind]}
                      onChange={handleKindCheckboxChange}
                      className="custom-checkbox"
                    />
                  </div>
                  <div className="text-white text-base font-medium font-['Urbanist'] leading-normal tracking-tight">{kind}</div>
                </div>
              ))}
            </div>
            <div className="text-white text-[19px] font-semibold font-['Inter'] leading-7 tracking-tight">Type of Resource</div>
            <div className="flex-col justify-start items-start gap-[7px] flex">
              {Object.keys(subcategoryLabels).map((subcategoryKey) => (
                <div className="justify-start items-center gap-8 inline-flex" key={subcategoryKey}>
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
      )}
    </div>
  );  
};

ParentingFilterBox.propTypes = {
  currentPage: PropTypes.string.isRequired,
  setFilteredData: PropTypes.func.isRequired,
};

export default ParentingFilterBox;
