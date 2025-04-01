

import ResourceCard from "./ResourceCard";


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
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-[18px] md:px-[1px]">

    {orderedCategories.map((category, index) => (
      <ResourceCard key={index} category={category} />
    ))}
  </div>
  
  
  );
};

export default HomeResourceDisplay;
