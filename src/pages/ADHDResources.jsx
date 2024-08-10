import { useState } from "react";
// Import the useState hook from React for managing state within this component.

import GeneralFilter from "../components/GeneralFilter";
// Import the GeneralFilter component from the specified path.

import Directory from "../components/Directory";
// Import the Directory component from the specified path.

function ADHDResources() {
  const [filteredData, setFilteredData] = useState([]);
  // Declare a state variable 'filteredData', initialized to an empty array.
  // 'setFilteredData' is the function used to update 'filteredData'.

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      {/* A div container using Flexbox to center its content both horizontally and vertically.
          The container covers the entire screen with a black background. */}
      
      <GeneralFilter currentPage="ADHD" setFilteredData={setFilteredData} />
      {/* Render the GeneralFilter component, passing two props:
          - 'currentPage' specifies the active page (in this case, "ADHD").
          - 'setFilteredData' allows the GeneralFilter component to update the 'filteredData' state. */}
      
      <Directory filteredData={filteredData} />
      {/* Render the Directory component, passing 'filteredData' as a prop.
          This ensures that the Directory displays only the filtered data. */}
    </div>
  );
}

export default ADHDResources;
// Export the ADHDResources component as the default export.
