import { useState } from "react";
// Import the useState hook from React to manage state within this component.

import GeneralFilter from "../components/GeneralFilter";
// Import the GeneralFilter component from the specified file path.

import Directory from "../components/Directory";
// Import the Directory component from the specified file path.

function Therapy() {
  const [filteredData, setFilteredData] = useState([]);
  // Declare a state variable 'filteredData', initialized to an empty array.
  // The 'setFilteredData' function is used to update the 'filteredData' state.

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      {/* A container div styled with Flexbox to center its content both horizontally and vertically.
          The div covers the full height of the screen and has a black background. */}
      
      <GeneralFilter currentPage="Therapy" setFilteredData={setFilteredData} />
      {/* Render the GeneralFilter component, passing two props:
          - 'currentPage' specifies the current page as "Therapy".
          - 'setFilteredData' allows the GeneralFilter component to update the 'filteredData' state. */}
      
      <Directory filteredData={filteredData} />
      {/* Render the Directory component, passing the filtered data as a prop.
          This ensures that the Directory component displays only the data filtered by the GeneralFilter. */}
    </div>
  );
}

export default Therapy;
// Export the Therapy component as the default export of this module.
