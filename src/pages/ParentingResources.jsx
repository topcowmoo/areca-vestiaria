import { useState, useEffect, useCallback } from "react";
import ParentingFilterBox from "../components/ParentingFilterBox";
import Directory from "../components/Directory";
import SearchBarWithCommit from "../components/SearchBarWithCommit";
import { collectionData } from "../data/collectionData"; // Needed for filtering logic

function ParentingResources() {
  const [filteredData, setFilteredData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilters, setActiveFilters] = useState({
    kinds: [],
    subcategories: [],
  });
  const [isFilterBoxOpen, setIsFilterBoxOpen] = useState(false);
  const [isInitial, setIsInitial] = useState(true); // Initial state to control first interaction
  const category = "Parenting Resources";

  // Combine search + kind + subcategory filters
  const applyFilters = useCallback((query, filters) => {
    const { kinds, subcategories } = filters;
  
    const filtered = collectionData.filter((item) => {
      const matchesCategory = item.category === category;
      const matchesSearch = !query || item.title.toLowerCase().includes(query.toLowerCase());
      const matchesKind = kinds.length === 0 || kinds.includes(item.kind);
      const matchesSubcategory =
        subcategories.length === 0 ||
        (item.subCategory && subcategories.some((sub) => item.subCategory.includes(sub)));
  
      return matchesCategory && matchesSearch && matchesKind && matchesSubcategory;
    });
  
    setFilteredData(filtered);
  }, []);
  
  // Run once on mount to show default list
  useEffect(() => {
    applyFilters("", { kinds: [], subcategories: [] });
  }, [applyFilters]);



  const handleSearchChange = (value) => {
    setSearchQuery(value);
    applyFilters(value, activeFilters);
  };
  
  const handleFilterChange = (filters) => {
    setActiveFilters(filters);
    applyFilters(searchQuery, filters);
  };
  


  const handleFilterBoxToggle = () => {
    if (isInitial) {
      setIsInitial(false); // Set to false after the first interaction
    }
    setIsFilterBoxOpen(!isFilterBoxOpen);
  };

  return (
    <div className="relative flex flex-col bg-black z-0">
      {/* Hero Section */}
      <div className="relative w-full min-w-[320px] ">
        <div
          className={`
              relative w-full 
    min-h-[40vh] sm:min-h-[60vh] md:min-h-[70vh] lg:min-h-[70vh] xl:min-h-[65vh] 
    max-h-[85vh] 
    aspect-[9/19.5]:min-h-[34vh]  /* iPhone 12, 13, 14, 15, 16 Pro/Pro Max (19.5:9) */
    aspect-[9/20]:min-h-[35vh]    /* iPhone XR, Samsung Galaxy S20 (20:9) */
    aspect-[3/4]:min-h-[50vh]     /* iPads in Portrait Mode (3:4) */
    aspect-[16/9]:min-h-[60vh]    /* Older iPhones (iPhone SE, 8, etc.) */
    aspect-[9/22]:min-h-[30vh]    /* Samsung Galaxy Fold */
    aspect-[9/18.5]:min-h-[36vh]  /* Samsung Galaxy S8, S9, S10 (18.5:9) */
    aspect-[16/9]:min-h-[60vh]    /* Landscape Tablets, Laptops (16:9) */
    aspect-[16/10]:min-h-[65vh]   /* MacBooks, Surface Laptops (16:10) */
    bg-mobile-parenting-page bg-no-repeat bg-cover bg-center
    sm:bg-parenting-page sm:bg-cover
          `}
        >
          {/* Gradient Overlay */}
          <div
            className="absolute inset-0 pointer-events-none z-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(0, 0, 0, 0) 25%, rgba(0, 0, 0, 0) 65%, rgba(0, 0, 0, 0.6) 95%, rgba(0, 0, 0, 1) 100%) ",
            }}
          ></div>

          {/* Title and SearchBar In Hero Image */}
          <div className="absolute inset-0 flex flex-col items-center justify-center px-4 ">
            <h1
              className="text-center text-white font-extrabold font-[playfair] leading-[1.1]"
              style={{
                fontSize: "clamp(42px, 8vw, 71px)",
                paddingTop:
                  "clamp(20px, 7vh, 80px)" /* Lower padding in landscape */,
                marginBottom:
                  "clamp(10px, 2vh, 15px)" /* Less space between title & search */,
              }}
            >
              Parenting Resources
            </h1>
            <SearchBarWithCommit
              category={category}
              onSearchChange={handleSearchChange}
              className="mt-6 w-full max-w-[320px] sm:max-w-[400px] "
            />
          </div>
        </div>
      </div>

      {/* Content Section At Bottom Of Hero Image */}
      <div className="relative z-20 flex flex-col items-center justify-start flex-grow pt-[clamp(50px, 12vh, 110px)] sm:pt-[10vh] pb-12">
        <div className="w-full max-w-[1200px] px-4 py-4 sm:px-6 sm:py-6 mx-auto">
          {/* Container for FilterBox and Directory */}
          <div
            className="
    relative flex flex-col w-full gap-[19px]
    mt-[100px]                          /* Default for mobile */
    iphone-se-max:mt-[110px]           /* Extra space for iPhone SE */
    sm:mt-[30px]                       /* Less aggressive for tablets */
    md:mt-[60px]                       /* Adjust for iPads & tablets */
    aspect-9-18_5:mt-[100px]           /* Galaxy S8 */
    zfold:mt-[130px]                   /* Z Fold 5 */
  "
          >
            {/* Filter Box Below Hero Section */}
            <div className="relative flex w-full z-10">
              <ParentingFilterBox
                setIsFilterBoxOpen={handleFilterBoxToggle}
                isFilterBoxOpen={isFilterBoxOpen}
                onFilterChange={handleFilterChange}
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

            {/* Directory Beside FilterBox */}
            <div
              className={`relative flex flex-col flex-grow transition-all duration-700 ease-out pb-[50px] sm:pb-[100px] md:pb-[160px] ${
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
                className="flex-1 w-full px-4 py-4 sm:w-[90%] sm:px-6 sm:py-6 md:w-full lg:w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ParentingResources;
