import SearchBar from "../components/SearchBar";
import { categoryData } from "../data/categoryData";
import ResourceCard from "../components/ResourceCard";

function AllResources() {
  return (
    // Top Page + NavBar
    <div>
      <div className="flex flex-col h-[70vh] bg-resource-image bg-cover bg-center">
        <div className="flex justify-center"></div>

        <div className="flex flex-grow flex-col items-center justify-center">
          <div>
            <h2 className="text-center text-white text-[75px] font-extrabold font-playfair">
              Resources
            </h2>
          </div>

          <SearchBar />
        </div>
      </div>
      <div className="px-8 md:px-32 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8 justify-items-center">
          {categoryData.map((card, index) => (
            <ResourceCard
              key={index}
              title={card.title}
              image={card.image}
              link={card.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AllResources;
