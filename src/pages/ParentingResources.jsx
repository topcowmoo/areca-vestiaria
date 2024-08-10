import { useState } from "react";
import ParentingFilterBox from "../components/ParentingFilterBox";
import Directory from "../components/Directory";

function ParentingResources() {
  const [filteredData, setFilteredData] = useState([]);
  const category = "Parenting Resources";

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <ParentingFilterBox currentPage={category} setFilteredData={setFilteredData} />
      <Directory filteredData={filteredData} />
    </div>
  );
}

export default ParentingResources;