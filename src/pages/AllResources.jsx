import SearchBar from "../components/SearchBar";
import AllResourcesCard from "../components/AllResourcesCard";

// Extract the category names from the cardData object
const categoryNames = Object.keys({
  "ADHD Resources": {},
  "Parenting Resources": {},
  "Attachment & Emotions": {},
  "Couples Resources": {},
  "Anger & Shame": {},
  "Physician Patient": {},
  "Therapy": {},
  "Additional Resources": {},
});

function AllResources() {
  return (
    <div>
      {/* Top Page + NavBar */}
      <div className="flex flex-col h-[50vh] sm:h-[60vh] md:h-[70vh] bg-resource-image bg-cover bg-center">
        <div className="flex justify-center"></div>

        <div className="flex flex-grow flex-col items-center justify-center px-4">
          <div>
            <h2 className="text-center text-white text-[50px] font-extrabold font-playfair">
              Resources
            </h2>
          </div>

          <SearchBar />
        </div>
      </div>

      <div className=" py-[20px]">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5 p-4">
          {categoryNames.map((category, index) => (
            <AllResourcesCard key={index} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AllResources;
