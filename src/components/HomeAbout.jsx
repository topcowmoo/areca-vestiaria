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
          className="relative z-10 flex flex-col justify-start h-full px-4 sm:px-8 md:px-12 pt-[22vh] sm:pt-[20vh] md:pt-[18vh] lg:pt-[16vh] xl:pt-[14vh] 2xl:pt-[12vh]"
        >
          <article className="text-white max-w-5xl mx-auto">
            <h3 className="text-[22px] sm:text-[32px] md:text-[42px] font-playfair font-extrabold leading-tight mb-4">
              Sunrise Health & Clinical <br /> Excellence Centre
            </h3>
            <p className="text-[11px] sm:text-sm md:text-base font-light font-inter text-justify">
              The Sun rises everyday - and we believe that in mental health and life in general - hope and new beginnings are key
              ingredients to wellness. At SUNRISE, not only do we focus on comprehensive psychiatric care - but also wellness as
              both are essential for long-term well-being. Our team is going to be expanding over time and currently consists of
              Dr. Mammoliti.
              <br />
              <br />
              Being a medical doctor, a consultation with Dr. Mammoliti is covered by OHIP as well as ongoing care (your health
              card) if you have OHIP coverage. THERE IS NO CAPACITY FOR ONGOING PSYCHIATRIC CARE AT THIS TIME WITH DR. MAMMOLITI AND
              CONSULTS ARE AVAILABLE on a limited basis given the demand and expertise fields.
            </p>
            <button
              onClick={onReadMore}
              className="mt-6 px-4 py-2 bg-white text-xs sm:text-sm font-inter rounded text-alt text-black"
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
  

