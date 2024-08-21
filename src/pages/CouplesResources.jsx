import { useState } from "react";
import GeneralFilter from "../components/GeneralFilter";
import Directory from "../components/Directory";
import SearchBarWithCommit from "../components/SearchBarWithCommit";

function CouplesResources() {
  const [filteredData, setFilteredData] = useState([]);
  const [isFilterBoxOpen, setIsFilterBoxOpen] = useState(false);
  const [isInitial, setIsInitial] = useState(true); // Initial state to control first interaction
  const category = "Couples Resources"; // Category specific to this page

  const handleFilterBoxToggle = () => {
    if (isInitial) {
      setIsInitial(false); // Set to false after the first interaction
    }
    setIsFilterBoxOpen(!isFilterBoxOpen);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-black to-black">
      <div className="w-full h-[847px] min-w-[320px] lg:bg-cover md:bg-cover sm:bg-cover bg-cover bg-couples-page bg-center bg-no-repeat flex flex-col items-center justify-center ">
        <h1 className="text-center text-white text-[34px] sm:text-[34px] md:text-[71px] lg:text-[71px] font-extrabold font-[playfair] -mt-[275px]">
          Couples Resources
        </h1>

        <div className="flex flex-col items-center">
          <SearchBarWithCommit
            setFilteredData={setFilteredData}
            category={category}
          />
        </div>
      </div>

      <div className="flex flex-col items-center justify-start flex-grow pb-[100px] -mt-[173px]">
        <div className="w-full max-w-[1200px] px-4 py-4 sm:px-6 sm:py-6 mx-auto">
          <div className="flex items-start">
            <GeneralFilter
              currentPage={category}
              setFilteredData={setFilteredData}
              setIsFilterBoxOpen={handleFilterBoxToggle}
              isFilterBoxOpen={isFilterBoxOpen}
              className={`transition-all duration-500 ease-in-out ${
                !isInitial &&
                (isFilterBoxOpen ? "animate-slideDown" : "animate-slideUp")
              }`}
              style={{
                width: "100%", // Ensure full width on all screen sizes
                maxWidth: "90%", // Match the directory's width
                marginLeft: "auto", // Center the button
                marginRight: "auto", // Center the button
                paddingLeft: "15px", // Ensure consistent padding across all screen sizes
                paddingRight: "15px",
                boxSizing: "border-box", // Include padding in the width calculation
              }}
            />
          </div>

          <div className="flex flex-col pt-9">
            <div
              className={`flex origin-left transition-all duration-700 ease-out ${
                isFilterBoxOpen
                  ? "sm:ml-[310px]" // Apply margin only when the filter box is open on sm and above
                  : "ml-0"
              }`} // Disable transition for sm and smaller
            >
              <Directory
                filteredData={filteredData}
                className="flex-1 min-w-[75%] w-full px-4 py-4 sm:w-[90%] sm:px-6 sm:py-6 md:w-full lg:w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CouplesResources;
