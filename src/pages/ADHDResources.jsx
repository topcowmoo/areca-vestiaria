import { useState } from "react";
import GeneralFilter from "../components/GeneralFilter";
import Directory from "../components/Directory";
import SearchBarWithCommit from "../components/SearchBarWithCommit";

function ADHDResources() {
  const [filteredData, setFilteredData] = useState([]);
  const [isFilterBoxOpen, setIsFilterBoxOpen] = useState(false);
  const [isInitial, setIsInitial] = useState(true);
  const category = "ADHD";

  const handleFilterBoxToggle = () => {
    if (isInitial) {
      setIsInitial(false);
    }
    setIsFilterBoxOpen(!isFilterBoxOpen);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-black to-black">
      <div className="w-full h-[847px] bg-adhd-page bg-cover bg-center flex flex-col items-center justify-center">
        <h1 className="text-center text-white text-[71px] font-extrabold font-[playfair] -mt-[161.5px]">
          ADHD Resources
        </h1>
        <div className="flex flex-col items-center">
          <SearchBarWithCommit
            setFilteredData={setFilteredData}
            category={category}
          />
        </div>
      </div>

      <div className="flex flex-col items-center justify-start flex-grow pb-[100px] -mt-[173px]">
        <div className="w-[1200px] min-h-[500px]">
          <GeneralFilter
            currentPage={category}
            setFilteredData={setFilteredData}
            setIsFilterBoxOpen={handleFilterBoxToggle}
            isFilterBoxOpen={isFilterBoxOpen}
            className={`transition-all duration-500 ease-in-out ${
              !isInitial &&
              (isFilterBoxOpen ? "animate-slideDown" : "animate-slideUp")
            }`}
          />

          <div className="flex flex-col pt-[37px]">
            <div
              className={`transition-all duration-500 ease-in-out flex origin-left ${
                isFilterBoxOpen ? "ml-[300px] shrink" : "ml-0 grow"
              }`}
            >
              <Directory
                filteredData={filteredData}
                className="flex-1 min-w-[75%]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ADHDResources;
