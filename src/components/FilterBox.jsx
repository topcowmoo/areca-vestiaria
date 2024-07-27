import { useState, useEffect, useCallback } from "react";
import { collectionData } from "../data/collectionData";
import tune from "../assets/tune.png";

const FilterBox = () => {
  // State for toggling the visibility of the filter box
  const [showFilterBox, setShowFilterBox] = useState(false);

  // States for resource format checkboxes
  const [articleChecked, setArticleChecked] = useState(false);
  const [videoChecked, setVideoChecked] = useState(false);
  const [bookChecked, setBookChecked] = useState(false);

  // States for resource category checkboxes
  const [adhdChecked, setAdhdChecked] = useState(false);
  const [angerAndShameChecked, setAngerAndShameChecked] = useState(false);
  const [parentingChecked, setParentingChecked] = useState(false);
  const [attachmentAndEmotionsChecked, setAttachmentAndEmotionsChecked] = useState(false);
  const [couplesChecked, setCouplesChecked] = useState(false);
  const [therapyChecked, setTherapyChecked] = useState(false);
  const [physicianPatientChecked, setPhysicianPatientChecked] = useState(false);
  const [guidelineChecked, setGuidelineChecked] = useState(false);
  const [borderlinePersonalityChecked, setBorderlinePersonalityChecked] = useState(false);
  const [generalChecked, setGeneralChecked] = useState(false);

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
    if (
      adhdChecked ||
      angerAndShameChecked ||
      parentingChecked ||
      attachmentAndEmotionsChecked ||
      couplesChecked ||
      therapyChecked ||
      physicianPatientChecked ||
      guidelineChecked ||
      borderlinePersonalityChecked ||
      generalChecked
    ) {
      const categories = [];
      if (adhdChecked) categories.push("ADHD");
      if (angerAndShameChecked) categories.push("Anger & Shame");
      if (parentingChecked) categories.push("Parenting Resources");
      if (attachmentAndEmotionsChecked) categories.push("Attachment & Emotions");
      if (couplesChecked) categories.push("Couples Resources");
      if (therapyChecked) categories.push("Therapy");
      if (physicianPatientChecked) categories.push("Physician Patient Resources");
      if (guidelineChecked) categories.push("Guidelines");
      if (borderlinePersonalityChecked) categories.push("Borderline Personality Disorder");
      if (generalChecked) categories.push("General Resources");

      filteredData = filteredData.filter((item) => categories.includes(item.category));
    }

    // Log the filtered data for now
    console.log(filteredData);
  }, [
    articleChecked,
    videoChecked,
    bookChecked,
    adhdChecked,
    angerAndShameChecked,
    parentingChecked,
    attachmentAndEmotionsChecked,
    couplesChecked,
    therapyChecked,
    physicianPatientChecked,
    guidelineChecked,
    borderlinePersonalityChecked,
    generalChecked,
  ]);

  // Use effect to call filterData when any of the dependencies change
  useEffect(() => {
    filterData();
  }, [
    filterData,
    articleChecked,
    videoChecked,
    bookChecked,
    adhdChecked,
    angerAndShameChecked,
    parentingChecked,
    attachmentAndEmotionsChecked,
    couplesChecked,
    therapyChecked,
    physicianPatientChecked,
    guidelineChecked,
    borderlinePersonalityChecked,
    generalChecked,
  ]);

  // Handler for resource format checkbox changes
  const handleKindCheckboxChange = (e) => {
    const { value, checked } = e.target;
    if (value === "Article") setArticleChecked(checked);
    if (value === "Video") setVideoChecked(checked);
    if (value === "Book") setBookChecked(checked);
  };

  // Handler for resource category checkbox changes
  const handleCategoryCheckboxChange = (e) => {
    const { value, checked } = e.target;
    if (value === "ADHD") setAdhdChecked(checked);
    if (value === "Anger & Shame") setAngerAndShameChecked(checked);
    if (value === "Parenting Resources") setParentingChecked(checked);
    if (value === "Attachment & Emotions") setAttachmentAndEmotionsChecked(checked);
    if (value === "Couples Resources") setCouplesChecked(checked);
    if (value === "Therapy") setTherapyChecked(checked);
    if (value === "Physician Patient Resources") setPhysicianPatientChecked(checked);
    if (value === "Guidelines") setGuidelineChecked(checked);
    if (value === "Borderline Personality Disorder") setBorderlinePersonalityChecked(checked);
    if (value === "General Resources") setGeneralChecked(checked);
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
              {/* ADHD checkbox */}
              <div className="justify-start items-center gap-8 inline-flex">
                <div className="justify-start items-start gap-2.5 flex">
                  <input
                    type="checkbox"
                    value="ADHD"
                    checked={adhdChecked}
                    onChange={handleCategoryCheckboxChange}
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
                    value="Anger & Shame"
                    checked={angerAndShameChecked}
                    onChange={handleCategoryCheckboxChange}
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
              {/* Attachment & Emotions checkbox */}
              <div className="justify-start items-center gap-8 inline-flex">
                <div className="justify-start items-start gap-2.5 flex">
                  <input
                    type="checkbox"
                    value="Attachment & Emotions"
                    checked={attachmentAndEmotionsChecked}
                    onChange={handleCategoryCheckboxChange}
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
                    value="Couples Resources"
                    checked={couplesChecked}
                    onChange={handleCategoryCheckboxChange}
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
                    value="Therapy"
                    checked={therapyChecked}
                    onChange={handleCategoryCheckboxChange}
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
                    value="Physician Patient Resources"
                    checked={physicianPatientChecked}
                    onChange={handleCategoryCheckboxChange}
                    className="custom-checkbox"
                  />
                </div>
                <div className="text-white text-base font-medium font-['Urbanist'] leading-normal tracking-tight">
                  Physician Patient Resources
                </div>
              </div>
              {/* Guidelines checkbox */}
              <div className="justify-start items-center gap-8 inline-flex">
                <div className="justify-start items-start gap-2.5 flex">
                  <input
                    type="checkbox"
                    value="Guidelines"
                    checked={guidelineChecked}
                    onChange={handleCategoryCheckboxChange}
                    className="custom-checkbox"
                  />
                </div>
                <div className="text-white text-base font-medium font-['Urbanist'] leading-normal tracking-tight">
                  Guidelines
                </div>
              </div>
              {/* General Resources checkbox */}
              <div className="justify-start items-center gap-8 inline-flex">
                <div className="justify-start items-start gap-2.5 flex">
                  <input
                    type="checkbox"
                    value="General Resources"
                    checked={generalChecked}
                    onChange={handleCategoryCheckboxChange}
                    className="custom-checkbox"
                  />
                </div>
                <div className="text-white text-base font-medium font-['Urbanist'] leading-normal tracking-tight">
                  General Resources
                </div>
              </div>
              {/* Borderline Personality Disorder checkbox */}
              <div className="justify-start items-center gap-8 inline-flex">
                <div className="justify-start items-start gap-2.5 flex">
                  <input
                    type="checkbox"
                    value="Borderline Personality Disorder"
                    checked={borderlinePersonalityChecked}
                    onChange={handleCategoryCheckboxChange}
                    className="custom-checkbox"
                  />
                </div>
                <div className="text-white text-base font-medium font-['Urbanist'] leading-normal tracking-tight whitespace-nowrap overflow-hidden text-ellipsis">
                  Borderline Personality Disorder
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
