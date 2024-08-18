import SearchBar from "../components/SearchBar";
import { categoryData } from "../data/categoryData";
import ResourceCard from "../components/ResourceCard";

function AllResources() {
  return (
    <div>
      {/* Top Page + NavBar */}
      <div className="flex flex-col h-[50vh] sm:h-[60vh] md:h-[70vh] bg-resource-image bg-cover bg-center">
        <div className="flex justify-center"></div>

        <div className="flex flex-grow flex-col items-center justify-center px-4">
          <div>
            <h2 className="text-center text-white text-[40px] sm:text-[50px] md:text-[75px] font-extrabold font-playfair">
              Resources
            </h2>
          </div>

          <SearchBar />
        </div>
      </div>
      <div className="px-4 sm:px-8 md:px-16 lg:px-14 py-8 sm:py-12 md:py-16">
        <div className="flex flex-wrap justify-center gap-1 lg:gap-8 md:px-10">
          {categoryData.map((card, index) => (
            <ResourceCard
              key={index}
              title={card.title}
              image={card.image}
              link={card.link}
              size="small"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AllResources;
