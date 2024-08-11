import { useState } from "react";
import GeneralFilter from "../components/GeneralFilter";
import Directory from "../components/Directory";

function AttachmentsAndEmotions() {
  const [filteredData, setFilteredData] = useState([]);
  const [isFilterBoxOpen, setIsFilterBoxOpen] = useState(false);
  const [isInitial, setIsInitial] = useState(true); // Initial state to control first interaction
  const category = "Attachment & Emotions"; // Category specific to this page

  const handleFilterBoxToggle = () => {
    if (isInitial) {
      setIsInitial(false); // Set to false after the first interaction
    }
    setIsFilterBoxOpen(!isFilterBoxOpen);
  };

  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-black pb-[100px] pt-[100px]">
      <div className="relative w-[1200px]">
        <div className="relative z-20">
          <GeneralFilter
            currentPage={category}
            setFilteredData={setFilteredData}
            setIsFilterBoxOpen={handleFilterBoxToggle} // Use the toggle handler
            isFilterBoxOpen={isFilterBoxOpen}
            className={`transition-all duration-500 ease-in-out ${
              !isInitial &&
              (isFilterBoxOpen ? "animate-slideDown" : "animate-slideUp")
            }`}
          />
        </div>

        <div className="flex flex-col pt-[37px]">
          <div
            className={`transition-all duration-500 ease-in-out flex origin-left ${
              isFilterBoxOpen ? "ml-[300px] shrink" : "ml-0 grow"
            }`}
          >
            <Directory
              filteredData={filteredData}
              className="flex-1 min-w-[75%]" // Keep this as a base width when open
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AttachmentsAndEmotions;
