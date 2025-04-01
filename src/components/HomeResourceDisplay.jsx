

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
    <div className=" space-y-10 mb-8">
      {/* Iterate through the ordered categories */}
      {orderedCategories.map((category, index) => (
        
          <div
            key={index}
            className="flex flex-col md:flex-row justify-start mx-4 items-stretch md:justify-center md:items-center my-4 space-y-6 md:space-y-0 md:space-x-6"
          >
            {/* ResourceCard */}
    
              <ResourceCard category={category} />
            

            
          </div>
      ))}
    </div>
  );
};

export default HomeResourceDisplay;
