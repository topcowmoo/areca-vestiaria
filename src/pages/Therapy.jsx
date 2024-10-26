import { useState } from "react";
import GeneralFilter from "../components/GeneralFilter";
import Directory from "../components/Directory";
import SearchBarWithCommit from "../components/SearchBarWithCommit";

function Therapy() {
  const [filteredData, setFilteredData] = useState([]);
  const [isFilterBoxOpen, setIsFilterBoxOpen] = useState(false);
  const [isInitial, setIsInitial] = useState(true); // Initial state to control first interaction
  const category = "Therapy"; // Category specific to this page

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
          className="
  absolute inset-0 w-full h-[35.2vh] 
  galaxy-z-fold-max:!h-[24.4vh] 
  galaxy-s8-max:h-[30.5vh] 
  iphone-12-max:h-[29vh] 
  galaxy-s20-max:h-[28.2vh] 
  iphone-xr-max:h-[28.9vh] 
  iphone-14-max:h-[28.8vh]
  surface-duo-max:h-[46.9vh] 
  ipad-mini:h-[38vh] 
  nest-hub:h-[82vh] 
  ipad-pro-height:h-[37vh] 
  nest-hub-max:h-[70.7vh] 
  full-hd-max:h-[45vh] 
  sm:h-[75vh] 
  bg-mobile-therapy-page bg-no-repeat bg-contain bg-center z-0 
  sm:bg-therapy-page sm:bg-cover
  landscape-iphone-se:h-[80vh]
  landscape-surface-duo:h-[65vh]
  landscape-galaxy-s8:h-[98vh]
landscape-galaxy-z-fold:h-[99vh]
landscape-iphone-12:h-[98vh]
  landscape-iphone-xr:h-[98vh]
  landscape-pixel-7:h-[98vh]
  landscape-iphone-14:h-[82vh]
  landscape-ipad-mini:h-[64vh]
  landscape-ipad-air:h-[66vh]
  landscape-ipad-pro:!h-[59vh]
  landscape-surface-pro:h-[66vh]"
        ></div>
      
        <div
          className="
            absolute inset-0 w-full pointer-events-none 
            h-[35.2vh] galaxy-z-fold-max:!h-[24.4vh] galaxy-s8-max:h-[30.5vh] 
            iphone-12-max:h-[29vh] iphone-14-max:h-[28.8vh] galaxy-s20-max:h-[28.2vh] 
            iphone-xr-max:h-[28.9vh] surface-duo-max:h-[46.9vh] 
            ipad-mini:h-[38vh] nest-hub:h-[82vh] 
            ipad-pro-height:h-[37vh] nest-hub-max:h-[70.7vh] 
            full-hd-max:h-[45vh] sm:h-[75vh]
            landscape-iphone-se:h-[80vh] landscape-surface-duo:h-[65vh]
            landscape-galaxy-s8:h-[98vh] landscape-galaxy-z-fold:h-[99vh]
            landscape-iphone-12:h-[98vh] landscape-iphone-xr:h-[98vh]
            landscape-pixel-7:h-[98vh] landscape-iphone-14:h-[82vh]
            landscape-ipad-mini:h-[64vh] landscape-ipad-air:h-[66vh]
            landscape-ipad-pro:!h-[59vh] landscape-surface-pro:h-[66vh]"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0, 0, 0, 0) 10%, rgba(0, 0, 0, 0) 90%, rgba(0, 0, 0, 2) 100%)",
          }}
        ></div>

        {/* Title and SearchBar positioned near the bottom of the image */}
        <div className="relative z-10 flex flex-col items-center h-full justify-end pb-[575px] md:pb-[490px] lg:pb-[410px]">
          <h1 className="text-center text-white text-[34px] sm:text-[34px] md:text-[71px] lg:text-[71px] font-extrabold font-[playfair]">
            Therapy
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
          <div className="relative flex flex-col w-full gap-[19px]">
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
                } ${isFilterBoxOpen ? "z-30 sm:z-30" : "z-10"}`}
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
              className={`relative flex flex-col flex-grow transition-all duration-700 pb-[50px] sm:pb-[100px] md:pb-[160px] ease-out ${
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

export default Therapy;
