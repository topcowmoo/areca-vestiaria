import SearchBar from "../components/SearchBar";
import { HashLink } from "react-router-hash-link";
import { scrollWithOffset } from "../utils/scrollHelper";

function HomeHero() {
  return (
    <header className="relative flex flex-col bg-black">
      {/* Hero Container */}
      <div className="relative w-full min-w-[320px] h-screen overflow-hidden landscape:h-auto landscape:min-h-[135vh]">
        {/* Background Image */}
        <div
          className="
            absolute inset-0 w-full
            aspect-[9/19.5]:min-h-[34vh]     /* iPhone 12/13/14/15/16 Pro (19.5:9) */
            aspect-[9/20]:min-h-[35vh]       /* iPhone XR, Galaxy S20 (20:9) */
            aspect-[3/4]:min-h-[50vh]        /* iPads Portrait (3:4) */
            aspect-[16/9]:min-h-[60vh]       /* Laptops, Tablets Landscape (16:9) */
            aspect-[16/10]:min-h-[65vh]      /* MacBooks, Surface (16:10) */
            aspect-[9/22]:min-h-[30vh]       /* Galaxy Z Fold (Folded, 22:9) */
            aspect-[9/18.5]:min-h-[36vh]     /* Galaxy S8/S9/S10 (18.5:9) */
            bg-mobile-home-one bg-no-repeat bg-cover bg-center
            sm:bg-home-one sm:bg-cover
          "
        ></div>

        {/* Gradient Overlay */}
        <div
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0, 0, 0, 0) 10%, rgba(0, 0, 0, 0.5) 75%, rgba(0, 0, 0, 1) 100%)",
          }}
        ></div>

        {/* Hero Content */}
        <div
  className="
    relative z-10 flex flex-col items-center justify-start h-full px-4

    pt-[28vh]                  /* default mobile/tablet */
    sm:pt-[22vh]
    md:pt-[28vh]

    lg:pt-[20vh]               /* large screens */
    xl:pt-[22vh]
    2xl:pt-[24vh]

    landscape:pt-[28vh]        /* landscape spacing preserved */
  "
>

          <h1
            className="text-center text-white font-extrabold font-[playfair] leading-[1.1]"
            style={{
              fontSize: "clamp(40px, 8vw, 90px)",
              marginBottom: "clamp(8px, 2vh, 24px)",
            }}
          >
            WLNS
          </h1>

          <h2
            className="text-center text-white font-[inter] font-light"
            style={{
              fontSize: "clamp(16px, 4vw, 36px)",
              marginBottom: "clamp(16px, 3vh, 32px)",
            }}
          >
            The Wellness Hub
          </h2>

          {/* Search Bar */}
          <SearchBar />

          {/* Scroll Link */}
          <HashLink
            smooth
            to="#resource-page"
            scroll={scrollWithOffset}
            className="text-center text-white text-sm sm:text-base md:text-[19px] font-light font-inter underline mt-4"
          >
            Explore More
          </HashLink>
        </div>
      </div>
    </header>
  );
}

export default HomeHero;