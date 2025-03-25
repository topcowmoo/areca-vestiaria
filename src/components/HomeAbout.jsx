import PropTypes from "prop-types";

function HomeAbout({ onReadMore }) {
  return (
    <section className="relative w-full h-screen bg-black">
      {/* Background Image */}
      <div
        className="
          absolute inset-0 w-full
          aspect-[9/19.5]:min-h-[34vh]
          aspect-[9/20]:min-h-[35vh]
          aspect-[3/4]:min-h-[50vh]
          aspect-[16/9]:min-h-[60vh]
          aspect-[16/10]:min-h-[65vh]
          aspect-[9/22]:min-h-[30vh]
          aspect-[9/18.5]:min-h-[36vh]
          bg-mobile-home-two bg-cover bg-center bg-no-repeat
          sm:bg-home-two
        "
      ></div>

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background:
            "linear-gradient(to top, rgba(0, 0, 0, 0) 75%, rgba(0, 0, 0, 0.7) 90%, rgba(0, 0, 0, 1))",
        }}
      ></div>

      {/* About Content */}
      <div
        id="about-us"
        className="
        relative z-10 flex flex-col justify-start h-full
        px-8 sm:px-8 md:px-12
        pt-[16vh] sm:pt-[24vh] md:pt-[14vh] lg:pt-[14vh] xl:pt-[18vh] 2xl:pt-[16vh]
        landscape-xs:pt-[4vh] landscape-sm:pt-[10vh] landscape-xs:px-4 landscape-sm:px-5 landscape-xs:pb-[4vh] landscape-sm:pb-[6vh]
      "
    >
        <article className="text-white max-w-5xl mx-auto">
          <h3 className="
            text-[22px] sm:text-[32px] 
            lg:text-[48px] xl:text-[56px] 2xl:text-[64px] 
            font-[playfair] font-extrabold leading-tight mb-4 text-center
            md:text-[26px] 
            md:landscape-xs:text-[28px] md:landscape-xs:leading-[1.3]
            landscape-xs:text-[16px] landscape-xs:leading-[1.2] landscape-sm:text-[20px]
          ">
            Sunrise Health & Clinical <br /> Excellence Centre
          </h3>
          <p className="
  text-[11px] sm:text-sm 
  lg:text-[24px] xl:text-[19px] 2xl:text-[20px] 
  font-light font-inter text-justify leading-relaxed

  md:text-[13px] md:leading-[1.7]             /* Generic md fallback */

  tablet-portrait:text-[14px] tablet-portrait:leading-[1.6] /* iPad Mini & Air in portrait */
  tablet-landscape:text-[14px] tablet-landscape:leading-[1.6] /* iPad Mini & Air in landscape */

  md:landscape-xs:text-[12px] md:landscape-xs:leading-[1.6] /* Phones in landscape */
  landscape-xs:text-[10px] landscape-sm:text-[11px]
">

            The Sun rises everyday - and we believe that in mental health and life in general - hope and new beginnings are key
            ingredients to wellness. At SUNRISE, not only do we focus on comprehensive psychiatric care - but also wellness as
            both are essential for long-term well-being. Our team is going to be expanding over time and currently consists of
            Dr. Mammoliti.
            <br />
            <br />
            Being a medical doctor, a consultation with Dr. Mammoliti is covered by OHIP as well as ongoing care (your health
            card) if you have OHIP coverage. There is no capacity for ongoing psychiatric care at this time with Dr. Mammoliti and 
            consults are available on a limited basis given the demand and expertise fields.
          </p>
          <button
            onClick={onReadMore}
            className="
              mt-4 px-3 py-2 bg-white text-black text-xs sm:text-sm
              lg:text-sm xl:text-base 2xl:text-base
              font-inter rounded text-alt
              md:landscape-xs:text-[10px] md:landscape-xs:px-2 md:landscape-xs:py-[4px]
              landscape-xs:text-[9px] landscape-sm:text-[10px] landscape-sm:px-3 landscape-sm:py-[5px]
            "
          >
            Read More
          </button>
        </article>
      </div>
    </section>
  );
}

HomeAbout.propTypes = {
  onReadMore: PropTypes.func.isRequired,
};

export default HomeAbout;
