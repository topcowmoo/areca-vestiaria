import { useState } from "react"; 
// Import the useState hook from React to manage local state within this component.

import GeneralFilter from "../components/GeneralFilter";
// Import the GeneralFilter component from the specified path.

import Directory from "../components/Directory";
// Import the Directory component from the specified path.

function CouplesResources() {
  const [filteredData, setFilteredData] = useState([]);
  // Initialize a state variable 'filteredData' with an empty array as the initial value.
  // 'setFilteredData' is the function used to update 'filteredData'.

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      {/* A container div with Flexbox utilities to center its content both horizontally and vertically.
          It also ensures that the minimum height of the screen is covered and applies a black background. */}
      
      <GeneralFilter currentPage="Couples Resources" setFilteredData={setFilteredData} />
      {/* The GeneralFilter component is rendered here, and we pass two props:
          - 'currentPage' to indicate which page is currently active.
          - 'setFilteredData' to allow this component to update the 'filteredData' state in this component. */}
      
      <Directory filteredData={filteredData} />
      {/* The Directory component is rendered here, with 'filteredData' passed as a prop.
          This ensures that the Directory displays only the filtered data. */}
    </div>
  );
}

export default CouplesResources;
// Export the CouplesResources component as the default export.
