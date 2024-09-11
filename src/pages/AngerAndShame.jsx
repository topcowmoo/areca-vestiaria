import { useState } from "react";
import GeneralFilter from "../components/GeneralFilter";
import Directory from "../components/Directory";
import SearchBarWithCommit from "../components/SearchBarWithCommit";

function AngerAndShame() {
  const [filteredData, setFilteredData] = useState([]);
  const [isFilterBoxOpen, setIsFilterBoxOpen] = useState(false);
  const [isInitial, setIsInitial] = useState(true); // Initial state to control first interaction
  const category = "Anger & Shame"; // Category specific to this page

  const handleFilterBoxToggle = () => {
    if (isInitial) {
      setIsInitial(false); // Set to false after the first interaction
    }
    setIsFilterBoxOpen(!isFilterBoxOpen);
  };

  return (
    <div className="relative flex flex-col bg-black">
      {/* Background Image with Gradient Layer */}
      <div className="relative w-full h-[847px] min-w-[320px]">
      <div
  className="absolute inset-0 w-full h-full bg-testanger opacity-50 bg-no-repeat bg-cover [background-position-x:60%] [background-position-y:-190px] z-0"
></div>







        {/* Title and SearchBar positioned near the bottom of the image */}
        <div className="relative z-10 flex flex-col items-center h-full justify-end pb-[575px] md:pb-[490px] lg:pb-[410px]">
          <h1 className="text-center text-white text-[34px] sm:text-[34px] md:text-[71px] lg:text-[71px] font-extrabold font-[playfair]">
            Anger & Shame
          </h1>
          <SearchBarWithCommit
            setFilteredData={setFilteredData}
            category={category}
            className="mt-6"
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="relative z-20 flex flex-col items-center justify-start flex-grow pt-2 -mt-[440px] md:pt-8 md:-mt-[370px] lg:pt-10 lg:-mt-[315px]">
        <div className="w-full max-w-[1200px] px-4 py-4 sm:px-6 sm:py-6 mx-auto">
          {/* Container for FilterBox and Directory */}
          <div className="relative flex flex-col w-full gap-[37px]">

            {/* Filter Box */}
            <div className="relative flex w-full">
              <GeneralFilter
                currentPage={category}
                setFilteredData={setFilteredData}
                setIsFilterBoxOpen={handleFilterBoxToggle}
                isFilterBoxOpen={isFilterBoxOpen}
                className={`transition-all duration-500 ease-in-out ${
                  !isInitial &&
                  (isFilterBoxOpen ? "animate-slideDown" : "animate-slideUp")
                } ${
                  isFilterBoxOpen ? "z-30 sm:z-30" : "z-10"
                }`}
                style={{
                  width: "100%",
                  maxWidth: "90%",
                  marginLeft: "auto",
                  marginRight: "auto",
                  paddingLeft: "15px",
                  paddingRight: "15px",
                  boxSizing: "border-box",
                }}
              />
            </div>

            {/* Directory */}
            <div
              className={`relative flex flex-col flex-grow transition-all duration-700 ease-out ${
                isFilterBoxOpen
                  ? "sm:ml-[310px] sm:z-10 z-0 sm:pointer-events-auto pointer-events-none opacity-0 sm:opacity-100"
                  : "ml-0 z-10 pointer-events-auto opacity-100"
              }`}
              style={{
                minHeight: "calc(80px * 6)", // Ensure the min-height matches the height of 9 rows
              }}
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

export default AngerAndShame;
