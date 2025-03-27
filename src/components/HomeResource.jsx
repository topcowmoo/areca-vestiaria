import { useNavigate } from "react-router-dom";
import HomeResourceDisplay from "../components/HomeResourceDisplay";

function HomeResources() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/all-resources");
  };

  return (
    <section id="resource-page">
      <div className="max-w-[400px] md:max-w-[690px] lg:max-w-[960px] xl:max-w-[1115px] 2xl:max-w-[1420px] mx-auto">
        {/* Title and Button Section */}
        <div
  className="
    flex justify-between items-center
    pt-[4vh] sm:pt-[26vh] md:pt-[6vh] lg:pt-[6vh] xl:pt-[6vh] 2xl:pt-[8vh]
    px-[18px] md:px-[1px]
  "
>

          <h2
            className="text-[28px] md:text-[50px] lg:text-[65px] font-bold font-playfair ml-[-3px]"
          >
            Resources
          </h2>
          <button
            className="
              bg-[#393939]  text-white font-inter
              rounded-[4px] px-[6.5px] py-[2.5px] text-[8px]
              md:text-[14px] md:px-[10px] md:py-[4px]
              lg:text-[16px] lg:px-[15px] lg:py-[6px]
              flex-shrink-0
            "
            onClick={handleClick}
          >
            View All Resources
          </button>
        </div>

        {/* Card and Directory Container */}
        <div className="mt-5 mb-14 ipad-pro-height:mb-16 ultra-wide:mb-28">
          <HomeResourceDisplay />
        </div>
      </div>
    </section>
  );
}

export default HomeResources;
