import { useState } from "react";
import GeneralFilter from "../components/GeneralFilter";
import Directory from "../components/Directory";

function AttachmentsAndEmotions() {
  const [filteredData, setFilteredData] = useState([]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <GeneralFilter currentPage="Attachment & Emotions" setFilteredData={setFilteredData} />
      <Directory filteredData={filteredData} />
    </div>
  );
}

export default AttachmentsAndEmotions;
