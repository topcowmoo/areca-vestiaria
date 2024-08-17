import PropTypes from "prop-types";
import ResourceCard from "./ResourceCard";
import { collectionData } from "../data/collectionData";
import { categoryData } from "../data/categoryData";
import HomeDirectory from "../components/HomeDirectory";

const CategoryResourceDisplay = ({ category }) => {
  // Find the matching category data
  const categoryInfo = categoryData.find((item) => item.title === category);

  // Filter resources by the given category
  const resources = collectionData.filter((item) => item.category === category);

  if (!categoryInfo) {
    return <p>Category not found.</p>;
  }

  if (resources.length === 0) {
    return <p>No resources found for this category.</p>;
  }

  return (
    <div className="flex justify-center items-center my-8">
      <div className="flex flex-col md:flex-row items-start justify-center w-full">
        {/* Left side: Main Resource Card */}
        <div className="w-full md:w-[80%] lg:w-auto">
          <ResourceCard
            title={categoryInfo.title}
            image={categoryInfo.image}
            size="large"
            link={categoryInfo.link}
          />
        </div>

        {/* Right side: Scrollable list of related resources */}
        <div className="w-full md:w-[80%] lg:w-[612px] lg:h-[550px] overflow-y-auto p-1 rounded-md box-border">
          <HomeDirectory filteredData={resources} />
        </div>
      </div>
    </div>
  );
};

// Prop validation
CategoryResourceDisplay.propTypes = {
  category: PropTypes.string.isRequired, // category is required and must be a string
};

export default CategoryResourceDisplay;
