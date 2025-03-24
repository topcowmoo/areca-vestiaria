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
  Therapy: {},
  "Additional Resources": {},
});

function AllResources() {
  return (
    <div>
      {/* Hero Section */}
      <div
        className={`
          relative flex flex-col z-0 
           min-h-[60vh] sm:min-h-[70vh] md:min-h-[70vh] lg:min-h-[70vh] xl:min-h-[85vh]
           landscape:min-h-[90vh]
          bg-mobile-resource-image bg-no-repeat bg-cover bg-center
          sm:bg-resource sm:bg-cover
    aspect-[9/19.5]:min-h-[34vh]  /* iPhone 12, 13, 14, 15, 16 Pro/Pro Max (19.5:9) */
    aspect-[9/20]:min-h-[35vh]    /* iPhone XR, Samsung Galaxy S20 (20:9) */
    aspect-[3/4]:min-h-[50vh]     /* iPads in Portrait Mode (3:4) */
    aspect-[16/9]:min-h-[60vh]    /* Older iPhones (iPhone SE, 8, etc.) */
    aspect-[9/22]:min-h-[30vh]    /* Samsung Galaxy Fold */
    aspect-[9/18.5]:min-h-[36vh]  /* Samsung Galaxy S8, S9, S10 (18.5:9) */
    aspect-[16/9]:min-h-[60vh]    /* Landscape Tablets, Laptops (16:9) */
    aspect-[16/10]:min-h-[65vh]   /* MacBooks, Surface Laptops (16:10) */
        `}
      >
        
        {/* Title and SearchBar in Hero Image */}
        <div
  className="flex flex-grow flex-col items-center justify-center px-4"
  style={{
    paddingTop: "clamp(10px, 10vh, 80px)",
    paddingBottom: "clamp(90px, 12vh, 140px)", 
  }}
>
  <h2
    className="text-center text-white font-extrabold font-playfair leading-[1.1]"
    style={{
      fontSize: "clamp(42px, 8vw, 90px)",
      marginBottom: "clamp(10px, 2vh, 20px)",
    }}
  >
    Resources
  </h2>

  <div
  className="relative z-[999] w-full"
  style={{
    width: "100%",
    maxWidth: "320px",
  }}
>
  <SearchBar />
</div>

</div>

      </div>

      {/* Grid Section (Resource Cards) Below Hero Section */}
      <div className="relative z-0 py-[35px]">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 px-6 xl:gap-12 xl:px-14">
          {categoryNames.map((category, index) => (
            <AllResourcesCard key={index} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AllResources;
