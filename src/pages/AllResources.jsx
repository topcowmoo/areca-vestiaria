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
      <div 
        className="
          flex flex-col
        h-[42vh] 
        galaxy-z-fold-max:!h-[32.8vh] 
        galaxy-s8-max:h-[40vh] 
        iphone-12-max:h-[35vh] 
        galaxy-s20-max:h-[33vh] 
        iphone-xr-max:h-[32.5vh] 
        iphone-14-max:h-[34vh]
        surface-duo-max:h-[47vh] 
        ipad-mini:h-[41vh]
        ipad-air-max:h-[39vh]
        asus-zenbook-max:h-[37.5vh]
        suface-pro-max:h-[37.5vh] 
        ipad-pro-height:h-[51vh] 
        full-hd-max:h-[75vh]
        ultra-wide:h-[70vh]
        sm:h-[75vh] 
        bg-mobile-resource-image bg-no-repeat bg-cover bg-center z-0 
        sm:bg-resource sm:bg-cover
        landscape-iphone-se:h-[92vh]
        landscape-surface-duo:h-[75vh]
        landscape-galaxy-s8:h-[115.5vh]
      landscape-galaxy-z-fold:h-[144.3vh]
      landscape-iphone-12:h-[113vh]
        landscape-iphone-xr:h-[112vh]
        landscape-pixel-7:h-[106vh]
        landscape-iphone-14:h-[95vh]
        landscape-ipad-mini:h-[81vh]
        landscape-ipad-air:h-[79.5vh]
        landscape-ipad-pro:!h-[67vh]
        landscape-surface-pro:h-[73vh]"
      >
        
        
        <div className="flex justify-center"></div>

        <div className="flex flex-grow flex-col items-center justify-center px-4">
          <div>
            <h2 className="text-center text-white text-[42px] sm:text-[50px] xl:text-[90px] font-extrabold font-playfair">
              Resources
            </h2>
          </div>

          <SearchBar />
        </div>
      </div>

      <div className=" py-[20px]">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 
        p-6 gap-6
        galaxy-z-fold-max:p-4 galaxy-z-fold-max:gap-4 
        galaxy-s8-max:p-6 galaxy-s8-max:gap-6
        iphone-12-max:p-6 iphone-12-max:gap-6
        galaxy-s20-max:p-6 galaxy-s20-max:gap-6 
        surface-duo-max:p-8 surface-duo-max:gap-8
        xl:gap-12 xl:p-14 
        ultra-wide:gap-14 ultra-wide:p-20">
          {categoryNames.map((category, index) => (
            <AllResourcesCard key={index} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AllResources;