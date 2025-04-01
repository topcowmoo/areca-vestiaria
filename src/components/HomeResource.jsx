import HomeResourceDisplay from "../components/HomeResourceDisplay";

function HomeResources() {
  return (
    <section id="resource-page">
      <div className="max-w-[400px] md:max-w-[690px] lg:max-w-[960px] xl:max-w-[1115px] 2xl:max-w-[1420px] mx-auto">
        {/* Title */}
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
        </div>

        {/* Card Container */}
        <div className="mt-12 mb-24">
          <HomeResourceDisplay />
        </div>
      </div>
    </section>
  );
}

export default HomeResources;
