import { useState, useEffect } from "react";
import GeneralFilter from "../components/GeneralFilter";
import Directory from "../components/Directory";
import SearchBarWithCommit from "../components/SearchBarWithCommit";

function ADHDResources() {
  const [filteredData, setFilteredData] = useState([]);
  const [isFilterBoxOpen, setIsFilterBoxOpen] = useState(false);
  const [isInitial, setIsInitial] = useState(true);
  const [maxRows, setMaxRows] = useState(6.75); // Default max rows for ADHD
  const category = "ADHD Resources";

  // Handle filter box toggle
  const handleFilterBoxToggle = () => {
    if (isInitial) {
      setIsInitial(false);
    }
    setIsFilterBoxOpen(!isFilterBoxOpen);
  };

  // Adjust row count based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 640) {
        setMaxRows(8); // Mobile size (sm)
      } else if (window.innerWidth <= 768) {
        setMaxRows(5.75); // Small screens (md)
      } else if (window.innerWidth <= 820) {
        // Specific handling for iPad Air
        setMaxRows(5.75); // Adjust maxRows for iPad Air
      } else if (window.innerWidth <= 1024) {
        setMaxRows(6.4); // Medium screens (lg)
      } else if (window.innerWidth <= 1280) {
        setMaxRows(7); // Extra-large screens (xl)
      } else {
        setMaxRows(7); // Everything above xl
      }
    };

    // Run once on initial render
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative flex flex-col bg-black">
      {/* Background Image with Gradient Layer */}
      <div className="relative w-full h-[847px] min-w-[320px]">
        <div
          className="
  absolute inset-0 w-full h-[42vh] 
  galaxy-z-fold-max:!h-[32.8vh] 
  galaxy-s8-max:h-[40vh] 
  iphone-12-max:h-[35vh] 
  galaxy-s20-max:h-[33vh] 
  iphone-xr-max:h-[32.5vh] 
  iphone-14-max:h-[34.5vh]
  surface-duo-max:h-[47vh] 
  ipad-mini:h-[41vh]
  ipad-air-max:h-[39vh]
  asus-zenbook-max:h-[37.5vh]
  suface-pro-max:h-[37.5vh]
  ipad-pro-height:h-[55vh]
  full-hd-max:h-[65vh]
  ultra-wide:h-[50vh] 
  sm:h-[75vh] 
  bg-mobile-adhd-page bg-no-repeat bg-cover bg-center z-0 
  sm:bg-adhd-page sm:bg-cover
  landscape-iphone-se:h-[92vh]
  landscape-surface-duo:h-[75vh]
  landscape-galaxy-s8:h-[115.5vh]
landscape-galaxy-z-fold:h-[144.3vh]
landscape-iphone-12:h-[113vh]
  landscape-iphone-xr:h-[112vh]
  landscape-pixel-7:h-[106vh]
  landscape-iphone-14:!h-[100vh]
  landscape-ipad-mini:h-[81vh]
  landscape-iphone-16:h-[100vh]
  landscape-ipad-air:h-[79.5vh]
  landscape-ipad-pro:!h-[67vh]
  landscape-surface-pro:h-[73vh]"
        ></div>

        <div
          className="
            absolute inset-0 w-full pointer-events-none 
            h-[42vh] galaxy-z-fold-max:!h-[32.8vh] galaxy-s8-max:h-[40vh] 
            iphone-12-max:h-[35vh] iphone-14-max:h-[34.5vh] asus-zenbook-max:h-[37.5vh] surface-pro-max:h-[37.5vh] galaxy-s20-max:h-[33vh] 
            iphone-xr-max:h-[32.5vh] surface-duo-max:h-[47vh] 
            ipad-mini:h-[41vh] ipad-air-max:h-[39vh]
            ipad-pro-height:h-[55vh]
            full-hd-max:h-[65vh] ultra-wide:h-[50vh] sm:h-[75vh]
            landscape-iphone-se:h-[92vh] landscape-surface-duo:h-[75vh]
            landscape-galaxy-s8:h-[115.5vh] landscape-galaxy-z-fold:h-[144.3vh]
            landscape-iphone-12:h-[113vh] landscape-iphone-xr:h-[112vh]
            landscape-pixel-7:h-[106vh] landscape-iphone-14:h-[100vh]
            landscape-ipad-mini:h-[81vh] landscape-iphone-16:h-[100vh] landscape-ipad-air:h-[79.5vh]
            landscape-ipad-pro:!h-[67vh] landscape-surface-pro:h-[73vh]"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0, 0, 0, 0) 10%, rgba(0, 0, 0, 0.2) 90%, rgba(0, 0, 0, 1) 100%)",
          }}
        ></div>

        {/* Title and SearchBar positioned near the bottom of the image */}
        <div className="relative z-10 flex flex-col items-center h-full justify-end pb-[575px] md:pb-[490px] lg:pb-[410px]">
          <h1 className="text-center text-white text-[34px] sm:text-[34px] md:text-[71px] lg:text-[71px] font-extrabold font-[playfair]">
            ADHD Resources
          </h1>
          <SearchBarWithCommit
            setFilteredData={setFilteredData}
            category={category}
            className="mt-6"
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="relative z-20 flex flex-col items-center justify-start flex-grow pt-2 -mt-[440px] md:pt-8 md:-mt-[370px] lg:pt-10 lg:-mt-[315px] pb-12 ">
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
                minHeight: "calc(80px * 6)",
              }}
            >
              <Directory
                filteredData={filteredData}
                maxRows={maxRows} // Pass the dynamically adjusted row count here
                className="flex-1 min-w-[75%] w-full px-4 py-4 sm:w-[90%] sm:px-6 sm:py-6 md:w-full lg:w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ADHDResources;
