import { useState, useMemo } from "react"; // Importing useState and useMemo hooks from React
import { collectionData } from "../data/collectionData"; // Importing collectionData from the data file
import { RiEqualizerFill } from "react-icons/ri"; // Importing the filter icon

const ParentingFilterBox = () => {
  const [showFilterBox, setShowFilterBox] = useState(false); // State to manage the visibility of the filter box

  // Combined state to manage checked state of resource format checkboxes
  const [checkedKinds, setCheckedKinds] = useState({
    Article: false,
    Video: false,
    Book: false,
  });

  // useMemo is used here to optimize the performance of filtering the data.
  // It will recompute the filtered data only when `checkedKinds` change.
  const filteredData = useMemo(() => {
    const kinds = Object.keys(checkedKinds).filter((kind) => checkedKinds[kind]); // Get the kinds that are checked

    // Early exit if no filters are active
    if (kinds.length === 0) {
      return collectionData.filter((item) => item.category === "Parenting Resources"); // Return all parenting resources if no filters are selected
    }

    return collectionData.filter((item) => {
      const kindMatch = kinds.length > 0 ? kinds.includes(item.kind) : true; // Check if the item kind matches the selected kinds
      return item.category === "Parenting Resources" && kindMatch; // Return items that match the category and kind
    });
  }, [checkedKinds]); // Recompute filteredData when checkedKinds change

  console.log(filteredData);

  // Handle checkbox change for resource format
  const handleKindCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setCheckedKinds((prev) => ({ ...prev, [value]: checked })); // Update checkedKinds state based on the checkbox value and checked status
  };

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
        onClick={toggleFilterBox}
      >
        {showFilterBox ? (
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
      {showFilterBox && (
        <div className="mt-4">
          {/* Filter options */}
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
          </div>
        </div>
      )}
    </div>
  );  
};

export default ParentingFilterBox;
