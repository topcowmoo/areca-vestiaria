import { useState, useMemo, useEffect } from "react"; 
// Import useState, useMemo, and useEffect hooks from React for state management, memoization, and side effects.

import PropTypes from "prop-types";
// Import PropTypes for type-checking props passed to the component.

import { collectionData } from "../data/collectionData";
// Import the collectionData array from the specified data file.

import { RiEqualizerFill } from "react-icons/ri";
// Import the RiEqualizerFill icon from the react-icons library for the filter icon.

const subcategoryLabels = {
  "Local Services": "Local Services",
  "Sex Discussion": "Sex Discussion",
  ADHD: "ADHD",
  Bullying: "Bullying",
  General: "General",
};
// Define a mapping of subcategory keys to their display labels.

const ParentingFilterBox = ({ currentPage, setFilteredData }) => {
  const [showFilterBox, setShowFilterBox] = useState(false);
  // State to control the visibility of the filter box.

  const [checkedKinds, setCheckedKinds] = useState({
    Article: false,
    Video: false,
    Book: false,
  });
  // State to track which resource formats (Article, Video, Book) are selected.

  const [selectedSubcategories, setSelectedSubcategories] = useState({
    "Local Services": false,
    "Sex Discussion": false,
    ADHD: false,
    Bullying: false,
    General: false,
  });
  // State to track which subcategories are selected.

  const filteredData = useMemo(() => {
    // Memoize the filtering logic to avoid unnecessary recalculations.

    console.log("Filtering data with the following criteria:");
    console.log("Checked Kinds:", checkedKinds);
    console.log("Selected Subcategories:", selectedSubcategories);

    const kinds = Object.keys(checkedKinds).filter((kind) => checkedKinds[kind]);
    // Get an array of selected kinds.

    const activeSubcategories = Object.keys(selectedSubcategories).filter(
      (key) => selectedSubcategories[key]
    );
    // Get an array of selected subcategories.

    if (kinds.length === 0 && activeSubcategories.length === 0) {
      // If no filters are applied, return all data for the current page.
      console.log("No filters applied, returning all data for:", currentPage);
      return collectionData.filter((item) => item.category === currentPage);
    }

    // Filter the data based on selected kinds and subcategories.
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
  // Dependencies: recalculate the filtered data whenever checkedKinds, selectedSubcategories, or currentPage changes.

  useEffect(() => {
    // Effect to update the parent component's filtered data when filteredData changes.
    console.log("Setting filtered data in ParentingResources:", filteredData);
    setFilteredData(filteredData); 
  }, [filteredData, setFilteredData]);

  const handleKindCheckboxChange = (e) => {
    // Handler for updating the checked kinds state when a checkbox is toggled.
    const { value, checked } = e.target;
    setCheckedKinds((prev) => ({ ...prev, [value]: checked }));
  };

  const handleSubcategoryCheckboxChange = (e) => {
    // Handler for updating the selected subcategories state when a checkbox is toggled.
    const { value, checked } = e.target;
    setSelectedSubcategories((prev) => ({
      ...prev,
      [value]: checked,
    }));
  };

  const toggleFilterBox = () => {
    // Toggle the visibility of the filter box.
    setShowFilterBox((prevState) => !prevState);
  };

  return (
    <div>
      <div
        className={`h-[33.95px] px-[9.59px] py-[4.47px] rounded-md border justify-start items-center gap-[7.67px] inline-flex cursor-pointer ${
          showFilterBox ? "bg-white text-black border-white" : "bg-black text-white border-white"
        }`}
        onClick={toggleFilterBox}
      >
        {/* The clickable area that toggles the filter box visibility. */}
        <RiEqualizerFill
          className="w-[24.29px] h-[24.29px]"
          style={{ color: showFilterBox ? "black" : "white" }} 
        />
        <div className="text-xl font-medium font-['Inter']">
          Filter
        </div>
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
// Define propTypes to ensure that the correct types of props are passed to the component.

export default ParentingFilterBox;
// Export the ParentingFilterBox component as the default export.
