import { useState } from "react";
import GeneralFilter from "../components/GeneralFilter";
import Directory from "../components/Directory";

function Therapy () {
  const [filteredData, setFilteredData] = useState([]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <GeneralFilter currentPage="Therapy" setFilteredData={setFilteredData} />
      <Directory filteredData={filteredData} />
    </div>
  );
}

export default Therapy;