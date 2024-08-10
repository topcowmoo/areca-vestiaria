import { useState } from "react";
// Import the useState hook from React, which allows you to add state management to the component.

import GeneralFilter from "../components/GeneralFilter";
// Import the GeneralFilter component from the specified file path.

import Directory from "../components/Directory";
// Import the Directory component from the specified file path.

function AttachmentsAndEmotions() {
  const [filteredData, setFilteredData] = useState([]);
  // Initialize a state variable 'filteredData' with an empty array as the initial state.
  // 'setFilteredData' is the function to update the 'filteredData' state.

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      {/* A container div styled with Flexbox utilities to center its children both horizontally and vertically.
          The div covers the full height of the screen and has a black background. */}
      
      <GeneralFilter currentPage="Attachment & Emotions" setFilteredData={setFilteredData} />
      {/* Render the GeneralFilter component, passing two props:
          - 'currentPage' indicates the current page, which is "Attachment & Emotions" in this case.
          - 'setFilteredData' allows the GeneralFilter component to update the 'filteredData' state in this component. */}
      
      <Directory filteredData={filteredData} />
      {/* Render the Directory component, passing 'filteredData' as a prop.
          This prop ensures that the Directory component displays only the data filtered by the GeneralFilter component. */}
    </div>
  );
}

export default AttachmentsAndEmotions;
// Export the AttachmentsAndEmotions component as the default export of this module.
