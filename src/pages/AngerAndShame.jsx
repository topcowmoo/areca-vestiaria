import { useState } from "react";
import GeneralFilter from "../components/GeneralFilter";
import Directory from "../components/Directory";

function AngerAndShame() {
  const [filteredData, setFilteredData] = useState([]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <GeneralFilter currentPage="Anger & Shame" setFilteredData={setFilteredData} />
      <Directory filteredData={filteredData} />
    </div>
  );
}

export default AngerAndShame;
