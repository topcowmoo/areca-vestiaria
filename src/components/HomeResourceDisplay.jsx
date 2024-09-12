import PropTypes from "prop-types";
import HomeDirectory from "./HomeDirectory";
import ResourceCard from "./ResourceCard";
import { collectionData } from "../data/collectionData";

// Define the order of categories
const orderedCategories = [
  "ADHD Resources",
  "Parenting Resources",
  "Attachment & Emotions",
  "Couples Resources",
  "Anger & Shame",
  "Physician Patient",
  "Therapy",
  "Additional Resources",
];

const HomeResourceDisplay = () => {
  return (
    <div className="px-[25px] space-y-10 mb-8">
      {/* Iterate through the ordered categories */}
      {orderedCategories.map((category, index) => {
        // Filter collectionData for resources matching the current category
        const filteredData = collectionData.filter(
          (item) => item.category === category
        );

        // Return JSX for each category
        return (
          <div key={index} className="flex flex-col md:flex-row justify-start items-stretch mx-8 md:justify-center md:items-center my-8 space-y-6 md:space-y-0 md:space-x-6">
            {/* ResourceCard */}
            <div>
              <ResourceCard category={category} />
            </div>

            {/* HomeDirectory */}
            <div>
              <HomeDirectory filteredData={filteredData} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

HomeResourceDisplay.propTypes = {
  category: PropTypes.string,
};

export default HomeResourceDisplay;
