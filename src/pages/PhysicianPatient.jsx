import { useState, useEffect } from "react";
import GeneralFilter from "../components/GeneralFilter";
import Directory from "../components/Directory";
import SearchBarWithCommit from "../components/SearchBarWithCommit";
import { collectionData } from "../data/collectionData";

function PhysicianPatient() {
  const [filteredData, setFilteredData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilters, setActiveFilters] = useState([]);

  const [isFilterBoxOpen, setIsFilterBoxOpen] = useState(false);
  const [isInitial, setIsInitial] = useState(true);

  const category = "Physician Patient";

  const applyFilters = (query = searchQuery, filters = activeFilters) => {
    const filtered = collectionData.filter((item) => {
      const matchesCategory = item.category === category;
      const matchesSearch =
        !query || item.title.toLowerCase().includes(query.toLowerCase());
      const matchesFilters =
        !filters.length || filters.includes(item.kind);

      return matchesCategory && matchesSearch && matchesFilters;
    });

    setFilteredData(filtered);
  };

  const handleSearchChange = (value) => {
    setSearchQuery(value);
    applyFilters(value, activeFilters);
  };

  const handleFilterChange = (filters) => {
    console.log("Filter tags sent from GeneralFilter:", filters);
    setActiveFilters(filters);
    applyFilters(searchQuery, filters);
  };

  const handleFilterBoxToggle = () => {
    if (isInitial) {
      setIsInitial(false);
    }
    setIsFilterBoxOpen(!isFilterBoxOpen);
  };

  useEffect(() => {
    applyFilters("", []);
  }, []);

  return (
    <div className="relative flex flex-col bg-black z-0">
      {/* Hero Section */}
      <div className="relative w-full min-w-[320px]">
        <div
          className={`
            relative w-full 
            min-h-[40vh] sm:min-h-[60vh] md:min-h-[70vh] lg:min-h-[70vh] xl:min-h-[65vh] 
            max-h-[85vh] 
            aspect-[9/19.5]:min-h-[34vh]
            aspect-[9/20]:min-h-[35vh]
            aspect-[3/4]:min-h-[50vh]
            aspect-[16/9]:min-h-[60vh]
            aspect-[9/22]:min-h-[30vh]
            aspect-[9/18.5]:min-h-[36vh]
            aspect-[16/10]:min-h-[65vh]
            bg-mobile-physician-page bg-no-repeat bg-cover bg-center
            sm:bg-physician-page sm:bg-cover
          `}
        >
          {/* Gradient Overlay */}
          <div
            className="absolute inset-0 pointer-events-none z-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(0, 0, 0, 0) 25%, rgba(0, 0, 0, 0) 65%, rgba(0, 0, 0, 0.6) 95%, rgba(0, 0, 0, 1) 100%)",
            }}
          ></div>

          {/* Title & Search */}
          <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
            <h1
              className="text-center text-white font-extrabold font-[playfair] leading-[1.1]"
              style={{
                fontSize: "clamp(38px, 7vw, 71px)",
                paddingTop: "clamp(20px, 10vh, 80px)",
                marginBottom: "clamp(10px, 2vh, 15px)",
              }}
            >
              Physician Patient Resources
            </h1>

            <SearchBarWithCommit
              category={category}
              onSearchChange={handleSearchChange}
              className="mt-6 w-full max-w-[320px] sm:max-w-[400px]"
            />
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="relative z-20 flex flex-col items-center justify-start flex-grow pt-[clamp(50px, 12vh, 110px)] sm:pt-[10vh] pb-12">
        <div className="w-full max-w-[1200px] px-4 py-4 sm:px-6 sm:py-6 mx-auto">
          <div
            className="
              relative flex flex-col w-full gap-[19px]
              mt-[100px]
              iphone-se-max:mt-[110px]
              sm:mt-[30px]
              md:mt-[60px]
              aspect-9-18_5:mt-[100px]
              zfold:mt-[130px]
            "
          >
            {/* Filter Box */}
            <div className="relative flex w-full z-10">
              <GeneralFilter
                onFilterChange={handleFilterChange}
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
              <Directory filteredData={filteredData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhysicianPatient;
