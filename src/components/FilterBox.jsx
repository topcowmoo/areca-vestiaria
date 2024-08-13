import { useState, useEffect, useCallback } from "react"; // Importing necessary hooks from React
import { collectionData } from "../data/collectionData"; // Importing collection data from a data file
import { RiEqualizerFill } from "react-icons/ri"; // Importing an icon from react-icons library

const FilterBox = () => {
  // State for toggling the visibility of the filter box
  const [showFilterBox, setShowFilterBox] = useState(false);

  // Single state object for all checkboxes
  const [filters, setFilters] = useState({
    articleChecked: false,
    videoChecked: false,
    bookChecked: false,
    adhdChecked: false,
    angerAndShameChecked: false,
    parentingChecked: false,
    attachmentAndEmotionsChecked: false,
    couplesChecked: false,
    therapyChecked: false,
    physicianPatientChecked: false,
    additionalChecked: false,
  });

  // Function to handle checkbox changes
  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target; // Destructure name and checked properties from the event target
    setFilters((prevFilters) => ({
      ...prevFilters, // Spread the previous filters state
      [name]: checked, // Update the specific checkbox state
    }));
  };

  // Function to filter collection data based on selected checkboxes
  const filterData = useCallback(() => {
    let filteredData = collectionData; // Initialize filteredData with all collection data

    // Filter by resource format
    const kinds = []; // Initialize an empty array for kinds
    if (filters.articleChecked) kinds.push("Article"); // Add "Article" to kinds if articleChecked is true
    if (filters.videoChecked) kinds.push("Video"); // Add "Video" to kinds if videoChecked is true
    if (filters.bookChecked) kinds.push("Book"); // Add "Book" to kinds if bookChecked is true

    if (kinds.length > 0) {
      // If there are any kinds selected
      filteredData = filteredData.filter((item) => kinds.includes(item.kind)); // Filter the data by kinds
    }

    // Filter by resource category
    const categories = []; // Initialize an empty array for categories
    if (filters.adhdChecked) categories.push("ADHD"); // Add "ADHD" to categories if adhdChecked is true
    if (filters.angerAndShameChecked) categories.push("Anger & Shame"); // Add "Anger & Shame" to categories if angerAndShameChecked is true
    if (filters.parentingChecked) categories.push("Parenting Resources"); // Add "Parenting Resources" to categories if parentingChecked is true
    if (filters.attachmentAndEmotionsChecked)
      categories.push("Attachment & Emotions"); // Add "Attachment & Emotions" to categories if attachmentAndEmotionsChecked is true
    if (filters.couplesChecked) categories.push("Couples Resources"); // Add "Couples Resources" to categories if couplesChecked is true
    if (filters.therapyChecked) categories.push("Therapy"); // Add "Therapy" to categories if therapyChecked is true
    if (filters.physicianPatientChecked)
      categories.push("Physician Patient Resources"); // Add "Physician Patient Resources" to categories if physicianPatientChecked is true
    if (filters.additionalChecked) categories.push("General Resources"); // Add "General Resources" to categories if generalChecked is true

    if (categories.length > 0) {
      // If there are any categories selected
      filteredData = filteredData.filter((item) =>
        categories.includes(item.category)
      ); // Filter the data by categories
    }

    console.log(filteredData); // Log the filtered data for now
  }, [filters]); // Dependency array for useCallback to ensure it only updates when filters change

  useEffect(() => {
    filterData(); // Call filterData whenever the component mounts or filters change
  }, [filterData]); // Dependency array for useEffect to ensure it only updates when filterData changes

  // Toggle the visibility of the filter box
  const toggleFilterBox = () => {
    setShowFilterBox((prevState) => !prevState); // Toggle the state of showFilterBox
  };

  return (
    <div>
      {/* Filter button */}
      <div
        className={`h-[33.95px] px-[9.59px] py-[4.47px] rounded-md border justify-start items-center gap-[7.67px] inline-flex cursor-pointer ${
          showFilterBox ? "bg-white border-white" : "border-white"
        }`}
        onClick={toggleFilterBox} // Toggle filter box visibility on click
      >
        {showFilterBox ? ( // If filter box is visible
          <div className="w-[81.96px] h-[25px] relative flex items-center">
            <RiEqualizerFill
              className="w-[24.29px] h-[24.29px] left-0 absolute"
              style={{ color: "black" }} // Set the icon color to black when the filter box is open
            />
            <div className="left-[31.96px] absolute text-black text-xl font-medium font-['Inter']">
              Filter
            </div>
            <div className="w-[101.14px] h-[33.95px] left-[-19px] top-[-4px] absolute rounded-md" />
          </div>
        ) : (
          // If filter box is not visible
          <>
            <RiEqualizerFill
              className="w-[24.29px] h-[24.29px]"
              style={{ color: "white" }} // Set the icon color to white when the filter box is closed
            />
            <div className="text-white text-xl font-medium font-['Inter']">
              Filter
            </div>
          </>
        )}
      </div>
      {showFilterBox && ( // If filter box is visible, render filter options
        <div className="mt-4">
          {/* Filter options */}
          <div className="w-[282px] px-4 pt-7 pb-[69px] bg-[#e8e8e8]/20 rounded-[10px] border border-white backdrop-blur-[24.90px] flex-col justify-start items-start gap-[15px] inline-flex">
            <div className="text-white text-[22px] font-semibold font-['Inter']">
              Customize your search
            </div>
            <hr className="border-t border-white w-full" />
            <div className="justify-start items-center gap-8 inline-flex">
              <div className="text-white text-[19px] font-semibold font-['Inter'] leading-7 tracking-tight">
                Resource Format
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-[7px] flex">
              {/* Article checkbox */}
              <div className="justify-start items-center gap-8 inline-flex">
                <div className="justify-start items-start gap-2.5 flex">
                  <input
                    type="checkbox"
                    name="articleChecked"
                    checked={filters.articleChecked} // Bind to articleChecked state
                    onChange={handleCheckboxChange} // Handle change event
                    className="custom-checkbox"
                  />
                </div>
                <div className="text-white text-base font-medium font-['Urbanist'] leading-normal tracking-tight">
                  Articles
                </div>
              </div>
              {/* Video checkbox */}
              <div className="justify-start items-center gap-8 inline-flex">
                <div className="justify-start items-start gap-2.5 flex">
                  <input
                    type="checkbox"
                    name="videoChecked"
                    checked={filters.videoChecked} // Bind to videoChecked state
                    onChange={handleCheckboxChange} // Handle change event
                    className="custom-checkbox"
                  />
                </div>
                <div className="text-white text-base font-medium font-['Urbanist'] leading-normal tracking-tight">
                  Videos
                </div>
              </div>
              {/* Book checkbox */}
              <div className="justify-start items-center gap-8 inline-flex">
                <div className="justify-start items-start gap-2.5 flex">
                  <input
                    type="checkbox"
                    name="bookChecked"
                    checked={filters.bookChecked} // Bind to bookChecked state
                    onChange={handleCheckboxChange} // Handle change event
                    className="custom-checkbox"
                  />
                </div>
                <div className="text-white text-base font-medium font-['Urbanist'] leading-normal tracking-tight">
                  Books
                </div>
              </div>
            </div>
            <div className="justify-start items-center gap-8 inline-flex">
              <div className="text-white text-[19px] font-semibold font-['Inter'] leading-7 tracking-tight">
                Type of Resource
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-[7px] flex">
              {/* ADHD checkbox */}
              <div className="justify-start items-center gap-8 inline-flex">
                <div className="justify-start items-start gap-2.5 flex">
                  <input
                    type="checkbox"
                    name="adhdChecked"
                    checked={filters.adhdChecked} // Bind to adhdChecked state
                    onChange={handleCheckboxChange} // Handle change event
                    className="custom-checkbox"
                  />
                </div>
                <div className="text-white text-base font-medium font-['Urbanist'] leading-normal tracking-tight">
                  ADHD
                </div>
              </div>
              {/* Anger & Shame checkbox */}
              <div className="justify-start items-center gap-8 inline-flex">
                <div className="justify-start items-start gap-2.5 flex">
                  <input
                    type="checkbox"
                    name="angerAndShameChecked"
                    checked={filters.angerAndShameChecked} // Bind to angerAndShameChecked state
                    onChange={handleCheckboxChange} // Handle change event
                    className="custom-checkbox"
                  />
                </div>
                <div className="text-white text-base font-medium font-['Urbanist'] leading-normal tracking-tight">
                  Anger & Shame
                </div>
              </div>
              {/* Parenting Resources checkbox */}
              <div className="justify-start items-center gap-8 inline-flex">
                <div className="justify-start items-start gap-2.5 flex">
                  <input
                    type="checkbox"
                    name="parentingChecked"
                    checked={filters.parentingChecked} // Bind to parentingChecked state
                    onChange={handleCheckboxChange} // Handle change event
                    className="custom-checkbox"
                  />
                </div>
                <div className="text-white text-base font-medium font-['Urbanist'] leading-normal tracking-tight">
                  Parenting Resources
                </div>
              </div>
              {/* Attachment & Emotions checkbox */}
              <div className="justify-start items-center gap-8 inline-flex">
                <div className="justify-start items-start gap-2.5 flex">
                  <input
                    type="checkbox"
                    name="attachmentAndEmotionsChecked"
                    checked={filters.attachmentAndEmotionsChecked} // Bind to attachmentAndEmotionsChecked state
                    onChange={handleCheckboxChange} // Handle change event
                    className="custom-checkbox"
                  />
                </div>
                <div className="text-white text-base font-medium font-['Urbanist'] leading-normal tracking-tight">
                  Attachment & Emotions
                </div>
              </div>
              {/* Couples Resources checkbox */}
              <div className="justify-start items-center gap-8 inline-flex">
                <div className="justify-start items-start gap-2.5 flex">
                  <input
                    type="checkbox"
                    name="couplesChecked"
                    checked={filters.couplesChecked} // Bind to couplesChecked state
                    onChange={handleCheckboxChange} // Handle change event
                    className="custom-checkbox"
                  />
                </div>
                <div className="text-white text-base font-medium font-['Urbanist'] leading-normal tracking-tight">
                  Couples Resources
                </div>
              </div>
              {/* Therapy checkbox */}
              <div className="justify-start items-center gap-8 inline-flex">
                <div className="justify-start items-start gap-2.5 flex">
                  <input
                    type="checkbox"
                    name="therapyChecked"
                    checked={filters.therapyChecked} // Bind to therapyChecked state
                    onChange={handleCheckboxChange} // Handle change event
                    className="custom-checkbox"
                  />
                </div>
                <div className="text-white text-base font-medium font-['Urbanist'] leading-normal tracking-tight">
                  Therapy
                </div>
              </div>
              {/* Physician Patient Resources checkbox */}
              <div className="justify-start items-center gap-8 inline-flex">
                <div className="justify-start items-start gap-2.5 flex">
                  <input
                    type="checkbox"
                    name="physicianPatientChecked"
                    checked={filters.physicianPatientChecked} // Bind to physicianPatientChecked state
                    onChange={handleCheckboxChange} // Handle change event
                    className="custom-checkbox"
                  />
                </div>
                <div className="text-white text-base font-medium font-['Urbanist'] leading-normal tracking-tight">
                  Physician Patient Resources
                </div>
              </div>
              {/ Additional Resources checkbox */}
              <div className="justify-start items-center gap-8 inline-flex">
                <div className="justify-start items-start gap-2.5 flex">
                  <input
                    type="checkbox"
                    name="additionalChecked"
                    checked={filters.additionalChecked} // Bind to generalChecked state
                    onChange={handleCheckboxChange} // Handle change event
                    className="custom-checkbox"
                  />
                </div>
                <div className="text-white text-base font-medium font-['Urbanist'] leading-normal tracking-tight">
                  Additional Resources
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterBox;
