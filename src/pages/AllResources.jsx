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
      <div className="flex flex-col h-[800px] bg-resource-image bg-cover bg-center bg-no-repeat">
      <div 
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{
        background: 
          "linear-gradient(to bottom, rgba(0, 0, 0, 0) 80%, rgba(0, 0, 0, 1))",
      }}
    ></div>
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
