import { useState } from "react";
// Import the useState hook from React, which is used for state management within the component.

import GeneralResourceFilterBox from "../components/GeneralResourceFilterBox";
// Import the GeneralResourceFilterBox component from the specified file path.

import Directory from "../components/Directory";
// Import the Directory component from the specified file path.

function GeneralResources() {
  const [filteredData, setFilteredData] = useState([]);
  // Declare a state variable 'filteredData', initialized with an empty array.
  // 'setFilteredData' is the function to update 'filteredData'.

  const category = "General Resources";
  // Define a constant 'category' to hold the string "General Resources".
  // This can be passed as a prop to other components to identify the current category.

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      {/* A container div styled with Flexbox utilities to center its content both horizontally and vertically.
          The div covers the full height of the screen and has a gray background with a shade of 900. */}
      
      <GeneralResourceFilterBox currentPage={category} setFilteredData={setFilteredData} />
      {/* Render the GeneralResourceFilterBox component, passing two props:
          - 'currentPage' which is set to the value of the 'category' constant ("General Resources").
          - 'setFilteredData' to allow this component to update the 'filteredData' state. */}
      
      <Directory filteredData={filteredData} />
      {/* Render the Directory component, passing 'filteredData' as a prop.
          This prop ensures that the Directory component displays only the data filtered by the GeneralResourceFilterBox. */}
    </div>
  );
}

export default GeneralResources;
// Export the GeneralResources component as the default export of this module.
