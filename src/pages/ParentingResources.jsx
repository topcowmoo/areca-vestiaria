import { useState } from "react";
// Import the useState hook from React for managing state within this component.

import ParentingFilterBox from "../components/ParentingFilterBox";
// Import the ParentingFilterBox component from the specified file path.

import Directory from "../components/Directory";
// Import the Directory component from the specified file path.

function ParentingResources() {
  const [filteredData, setFilteredData] = useState([]);
  // Declare a state variable 'filteredData', initialized as an empty array.
  // The 'setFilteredData' function is used to update the 'filteredData' state.

  const category = "Parenting Resources";
  // Define a constant 'category' to represent the current resource category.

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      {/* A container div styled with Flexbox to center its content both horizontally and vertically.
          The div covers the full height of the screen and has a black background. */}
      
      <ParentingFilterBox currentPage={category} setFilteredData={setFilteredData} />
      {/* Render the ParentingFilterBox component, passing two props:
          - 'currentPage' specifies the current page as "Parenting Resources".
          - 'setFilteredData' allows the ParentingFilterBox component to update the 'filteredData' state. */}
      
      <Directory filteredData={filteredData} />
      {/* Render the Directory component, passing the filtered data as a prop.
          This ensures that the Directory component displays only the data filtered by the ParentingFilterBox. */}
    </div>
  );
}

export default ParentingResources;
// Export the ParentingResources component as the default export of this module.
