import { useState } from "react";
// Import the useState hook from React for managing state within this component.

import GeneralFilter from "../components/GeneralFilter";
// Import the GeneralFilter component from the specified path.

import Directory from "../components/Directory";
// Import the Directory component from the specified path.

function AngerAndShame() {
  const [filteredData, setFilteredData] = useState([]);
  // Declare a state variable 'filteredData' initialized to an empty array.
  // 'setFilteredData' is the function used to update 'filteredData'.

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      {/* A div container that centers its content using Flexbox.
          The content is centered both horizontally and vertically,
          with a minimum height set to cover the entire screen and a black background. */}
      
      <GeneralFilter currentPage="Anger & Shame" setFilteredData={setFilteredData} />
      {/* Render the GeneralFilter component, passing two props:
          - 'currentPage' specifies the active page.
          - 'setFilteredData' allows this component to update the 'filteredData' state. */}
      
      <Directory filteredData={filteredData} />
      {/* Render the Directory component, passing 'filteredData' as a prop.
          This ensures that the Directory displays only the filtered data. */}
    </div>
  );
}

export default AngerAndShame;
// Export the AngerAndShame component as the default export.
