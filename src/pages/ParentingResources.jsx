import { useState } from "react";
// Import the useState hook from React for managing state within this component.

import ParentingFilterBox from "../components/ParentingFilterBox";
// Import the ParentingFilterBox component from the specified file path.

import Directory from "../components/Directory";
// Import the Directory component from the specified file path.

function ParentingResources() {
  const [filteredData, setFilteredData] = useState([]);
  // Declare a state variable 'filteredData', initialized as an empty array.

  const category = "Parenting Resources";
  // Define a constant 'category' to represent the current resource category.

  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-red-300 py-10">
      {/* A container div styled with Flexbox to arrange items in a column, starting from the top.
          The div covers the full height of the screen, has padding on the top and bottom, and has a black background. */}
      
      <div className="flex flex-col gap-[37px] items-start w-[1200px]">
        {/* A container to hold the filter button and the directory with a gap of 37px and aligned to the left side. */}
        <ParentingFilterBox currentPage={category} setFilteredData={setFilteredData} />
        {/* Render the ParentingFilterBox component, passing two props:
            - 'currentPage' specifies the current page as "Parenting Resources".
            - 'setFilteredData' allows the ParentingFilterBox component to update the 'filteredData' state. */}
        
        <Directory filteredData={filteredData} />
        {/* Render the Directory component, passing the filtered data as a prop.
            This ensures that the Directory component displays only the data filtered by the ParentingFilterBox. */}
      </div>
    </div>
  );
}

export default ParentingResources;
// Export the ParentingResources component as the default export of this module.
