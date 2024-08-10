import { useState } from "react";
import GeneralResourceFilterBox from "../components/GeneralResourceFilterBox";
import Directory from "../components/Directory";

function GeneralResources() {
  const [filteredData, setFilteredData] = useState([]);
  const category = "General Resources";

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <GeneralResourceFilterBox currentPage={category} setFilteredData={setFilteredData} />
      <Directory filteredData={filteredData} />
    </div>
  );
}

export default GeneralResources;
