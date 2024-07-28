import { useState, useEffect, useCallback } from "react";
import { collectionData } from "../data/collectionData";
import tune from "../assets/tune.png";

const ParentingFilterBox = () => {
  const [showFilterBox, setShowFilterBox] = useState(false);

  const [articleChecked, setArticleChecked] = useState(false);
  const [videoChecked, setVideoChecked] = useState(false);
  const [bookChecked, setBookChecked] = useState(false);

  const [parentingChecked, setParentingChecked] = useState(false);

  // Function to filter collection data based on selected checkboxes
  const filterData = useCallback(() => {
    let filteredData = collectionData;

    // Filter by resource format
    if (articleChecked || videoChecked || bookChecked) {
      const kinds = [];
      if (articleChecked) kinds.push("Article");
      if (videoChecked) kinds.push("Video");
      if (bookChecked) kinds.push("Book");
      filteredData = filteredData.filter((item) => kinds.includes(item.kind));
    }

    // Filter by resource category
    if (parentingChecked) {
      const categories = [];
      if (parentingChecked) categories.push("Parenting Resources");
      filteredData = filteredData.filter((item) => categories.includes(item.category));
    }

    // Log the filtered data for now
    console.log(filteredData);
  }, [
    articleChecked,
    videoChecked,
    bookChecked,
    parentingChecked,
  ]);

  // Use effect to call filterData when any of the dependencies change
  useEffect(() => {
    filterData();
  }, [
    filterData,
    articleChecked,
    videoChecked,
    bookChecked,
    parentingChecked,
  ]);

  const handleKindCheckboxChange = (e) => {
    const { value, checked } = e.target;
    if (value === "Article") setArticleChecked(checked);
    if (value === "Video") setVideoChecked(checked);
    if (value === "Book") setBookChecked(checked);
  };

  const handleCategoryCheckboxChange = (e) => {
    const { value, checked } = e.target;
    if (value === "Parenting Resources") setParentingChecked(checked);
  };

  // Toggle the visibility of the filter box
  const toggleFilterBox = () => {
    setShowFilterBox((prevState) => !prevState);
  };

  return (
    <div>
      {/* Filter button */}
      <div
        className={`h-[33.95px] px-[9.59px] py-[4.47px] rounded-md border justify-start items-center gap-[7.67px] inline-flex cursor-pointer ${showFilterBox ? "bg-white border-white" : "border-white"}`}
        onClick={toggleFilterBox}
      >
        {showFilterBox ? (
          <div className="w-[81.96px] h-[25px] relative flex items-center">
            <img
              className="w-[24.29px] h-[24.29px] left-0 absolute"
              src={tune}
              alt="Filter"
              style={{ filter: showFilterBox ? "invert(1)" : "invert(0)" }}
            />
            <div className="left-[31.96px] absolute text-black text-xl font-medium font-['Inter']">
              Filter
            </div>
            <div className="w-[101.14px] h-[33.95px] left-[-19px] top-[-4px] absolute rounded-md" />
          </div>
        ) : (
          <>
            <img className="w-[24.29px] h-[24.29px]" src={tune} alt="Filter" />
            <div className="text-white text-xl font-medium font-['Inter']">
              Filter
            </div>
          </>
        )}
      </div>
      {showFilterBox && (
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
                    value="Article"
                    checked={articleChecked}
                    onChange={handleKindCheckboxChange}
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
                    value="Video"
                    checked={videoChecked}
                    onChange={handleKindCheckboxChange}
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
                    value="Book"
                    checked={bookChecked}
                    onChange={handleKindCheckboxChange}
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
              {/* Parenting Resources checkbox */}
              <div className="justify-start items-center gap-8 inline-flex">
                <div className="justify-start items-start gap-2.5 flex">
                  <input
                    type="checkbox"
                    value="Parenting Resources"
                    checked={parentingChecked}
                    onChange={handleCategoryCheckboxChange}
                    className="custom-checkbox"
                  />
                </div>
                <div className="text-white text-base font-medium font-['Urbanist'] leading-normal tracking-tight">
                  Parenting Resources
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ParentingFilterBox;
