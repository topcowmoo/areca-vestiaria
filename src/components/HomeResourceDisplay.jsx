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
        const resources = collectionData.filter(
          (item) => item.category === category
        );

        return (
          <div
            key={index}
            className="flex flex-col md:flex-row justify-start items-stretch md:space-x-8 space-y-6 md:space-y-0 lg:space-x-6 xl:space-x-10"
          >
            {/* Render a single ResourceCard per category */}
            <div className="w-full md:w-[400px] lg:w-[590px] flex-none">
              <ResourceCard category={category} />
            </div>

            {/* Render Directory with filtered resources */}
            <div className="w-full md:flex-grow">
              <HomeDirectory filteredData={resources} category={category} />
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
