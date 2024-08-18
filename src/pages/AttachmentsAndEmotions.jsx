import { useState, useEffect } from "react";
import GeneralFilter from "../components/GeneralFilter";
import Directory from "../components/Directory";
import SearchBarWithCommit from "../components/SearchBarWithCommit";

function AttachmentsAndEmotions() {
  const [filteredData, setFilteredData] = useState([]);
  const [isFilterBoxOpen, setIsFilterBoxOpen] = useState(false);
  const [isInitial, setIsInitial] = useState(true); // Initial state to control first interaction
  const [isMobile, setIsMobile] = useState(false); // State to track if it's a mobile screen
  const category = "Attachment & Emotions"; // Category specific to this page

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)"); // Mobile breakpoint at 768px
    setIsMobile(mediaQuery.matches);

    const handleResize = () => setIsMobile(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleResize);

    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, []);

  const handleFilterBoxToggle = () => {
    if (isInitial) {
      setIsInitial(false); // Set to false after the first interaction
    }
    setIsFilterBoxOpen(!isFilterBoxOpen);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-black to-black">
      <div className="w-full h-[50vh] md:h-[847px] bg-attachment-page md:bg-center bg-[length:auto_67%] bg-no-repeat md:bg-cover flex flex-col items-center justify-center">
        <h1 className="text-center text-white text-[34px] md:text-[71px] font-extrabold font-[playfair] -mt-[35px] md:-mt-[161.5px]">
          Attachment & Emotions
        </h1>
        <div className="flex flex-col items-center">
          <SearchBarWithCommit
            setFilteredData={setFilteredData}
            category={category}åå
          />
        </div>
      </div>

      {/* Adjusting the margin for mobile view */}
      <div className={`flex flex-col items-center justify-start flex-grow pb-[100px] ${isMobile ? "mt-[50px]" : "-mt-[192px]"}`}>
        <div className="w-full max-w-[1200px] min-h-[500px] px-4 md:px-6 lg:px-8">
          <GeneralFilter
            currentPage={category}
            setFilteredData={setFilteredData}
            setIsFilterBoxOpen={handleFilterBoxToggle} // Use the toggle handler
            isFilterBoxOpen={isFilterBoxOpen}
            className={`transition-all duration-500 ease-in-out ${
              !isInitial &&
              !isMobile && // Disable animation on mobile
              (isFilterBoxOpen ? "animate-slideDown" : "animate-slideUp")
            }`}
          />
          <div className="flex flex-col pt-[15px]">
            <div
              className={`transition-all duration-500 ease-in-out flex origin-left ${
                isFilterBoxOpen && !isMobile ? "ml-[300px] shrink" : "ml-0 grow"
              }`}
            >
              <Directory
                filteredData={filteredData}
                className="flex-1 min-w-[75%] md:min-w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AttachmentsAndEmotions;
