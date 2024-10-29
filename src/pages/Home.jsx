import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { IoCloseSharp } from "react-icons/io5";
import { scrollWithOffset } from "../utils/scrollHelper";
import SearchBar from "../components/SearchBar";
import HomeResourceDisplay from "../components/HomeResourceDisplay";
import speech from "/speech.png";
import arrow from "/arrow.png";

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate(); // <-- useNavigate hook should be at the top level of the component

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      handleCloseModal();
    }
  };

  const handleClick = () => {
    navigate("/all-resources"); // <--To /all-resources
  };

  return (
    <div>
      {/* First section with background and main title */}
      <header className="relative flex flex-col bg-black">
        <div className="relative w-full min-w-[320px] min-h-[40vh] sm:h-[100vh]">
          <div
            className="
          absolute inset-0 w-full h-[52vh]
  galaxy-z-fold-max:!h-[46vh]
  galaxy-s8-max:h-[44vh] 
  iphone-12-max:h-[28.9vh] 
  galaxy-s20-max:h-[28.19vh] 
  iphone-xr-max:h-[28.9vh] 
  iphone-14-max:h-[40vh]
  surface-duo-max:h-[46.9vh] 
  ipad-mini:h-[100vh]
  ipad-air-max:h-[100vh]
  asus-zenbook-max:h-[100vh]
  suface-pro-max:h-[100vh] 
  nest-hub:h-[100vh] 
  ipad-pro-height:h-[100vh] 
  nest-hub-max:h-[100vh] 
  full-hd-max:h-[100vh]
  ultra-wide:h-[100vh] 
  bg-mobile-home-one bg-cover bg-center bg-no-repeat z-0
  sm:bg-home-one
  landscape-iphone-se:h-[92vh]
  landscape-surface-duo:h-[75vh]
  landscape-galaxy-s8:h-[115.5vh]
  landscape-galaxy-z-fold:h-[144.3vh]
  landscape-iphone-12:h-[113vh]
  landscape-iphone-xr:h-[112vh]
  landscape-pixel-7:h-[106vh]
  landscape-iphone-14:h-[100vh]
  landscape-ipad-mini:h-[81vh]
  landscape-ipad-air:h-[79.5vh]
  landscape-ipad-pro:!h-[67vh]
  landscape-surface-pro:h-[73vh]"
          ></div>

<div
          className="
            absolute inset-0 w-full pointer-events-none 
            h-[52vh] galaxy-z-fold-max:!h-[46vh] galaxy-s8-max:h-[44vh] 
            iphone-12-max:h-[35vh] iphone-14-max:h-[40vh] asus-zenbook-max:h-[37.5vh] surface-pro-max:h-[37.5vh] galaxy-s20-max:h-[33vh] 
            iphone-xr-max:h-[32.5vh] surface-duo-max:h-[47vh] 
            ipad-mini:h-[41vh] ipad-air-max:h-[100vh] nest-hub:h-[108vh] 
            ipad-pro-height:h-[51vh] nest-hub-max:h-[82vh] 
            full-hd-max:h-[65vh] ultra-wide:h-[50vh] sm:h-[75vh]
            landscape-iphone-se:h-[92vh] landscape-surface-duo:h-[75vh]
            landscape-galaxy-s8:h-[115.5vh] landscape-galaxy-z-fold:h-[144.3vh]
            landscape-iphone-12:h-[113vh] landscape-iphone-xr:h-[112vh]
            landscape-pixel-7:h-[106vh] landscape-iphone-14:h-[100vh]
            landscape-ipad-mini:h-[81vh] landscape-ipad-air:h-[79.5vh]
            landscape-ipad-pro:!h-[67vh] landscape-surface-pro:h-[73vh]"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0, 0, 0, 0) 10%, rgba(0, 0, 0, 0.5) 75%, rgba(0, 0, 0, 1) 100%)",
          }}
        ></div>

          <div className="flex flex-grow flex-col items-center justify-center z-10">
            <div className="relative z-10 flex flex-col items-center h-full mt-16 sm:mt-36">
              <h1 className="text-center text-white text-[48px] sm:text-[60px] md:text-[90.17px] font-extrabold font-playfair mb-1">
                WLNS
              </h1>
              <h2 className="text-center text-white text-xl sm:text-2xl md:text-3xl font-extralight font-inter sm:mb-8">
                The Wellness Hub
              </h2>

              {/* Search bar component */}
              <SearchBar />
              <HashLink
                smooth
                to="#resource-page"
                scroll={scrollWithOffset}
                className="text-center text-white text-sm sm:text-base md:text-[19px] font-light font-['Inter'] underline m-2 py-4"
              >
                Explore More
              </HashLink>
            </div>
          </div>
        </div>
      </header>

      {/* ABOUT US second section with additional content and 'Read More' button */}
      <section className="relative flex flex-col bg-black">
        <div className="relative w-full h-[50vh] min-w-[390px]">

          {/* Background Image Container */}
          <div className="absolute inset-0 w-full h-[100vh] z-0">
            
          <div
            className="
          absolute inset-0 w-full sm:h-full h-[60vh] 
  galaxy-z-fold-max:!h-[50vh] 
  galaxy-s8-max:h-[55vh] 
  iphone-12-max:h-[29vh] 
  galaxy-s20-max:h-[28.19vh] 
  iphone-xr-max:h-[28.9vh] 
iphone-14-max:h-[50vh]
  surface-duo-max:h-[46.9vh] 
  ipad-mini:h-[100vh]
  ipad-air-max:h-[90vh]
  asus-zenbook-max:h-[100vh]
  suface-pro-max:h-[100vh] 
  nest-hub:h-[100vh] 
  ipad-pro-height:h-[100vh] 
  nest-hub-max:h-[100vh] 
  full-hd-max:h-[100vh]
  ultra-wide:h-[100vh] 
  bg-mobile-home-two bg-cover bg-center bg-no-repeat z-0
  sm:bg-home-two
  landscape-iphone-se:h-[92vh]
  landscape-surface-duo:h-[75vh]
  landscape-galaxy-s8:h-[115.5vh]
  landscape-galaxy-z-fold:h-[144.3vh]
  landscape-iphone-12:h-[113vh]
  landscape-iphone-xr:h-[112vh]
  landscape-pixel-7:h-[106vh]
  landscape-ipad-mini:h-[81vh]
  landscape-ipad-air:h-[79.5vh]
  landscape-ipad-pro:!h-[67vh]
  landscape-surface-pro:h-[73vh]"
          ></div>
            
      
              <div
                className="absolute inset-0 w-full h-full pointer-events-none"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0, 0, 0, 0) 75%, rgba(0, 0, 0, 0.7) 90%, rgba(0, 0, 0, 1))",
                }}
              ></div>
              </div>

          {/* Content */}
          <div
            id="about-us"
            className="relative flex flex-grow flex-col items-center justify-center mx-4 sm:mx-8 md:mx-12 my-4 sm:my-12"
          >
            <article className="w-full md:w-[80%] lg:w-[70%] flex flex-grow flex-col items-start justify-center">
              <h3 className="w-full text-white text-[26px] sm:text-[38px] lg:text-[53px] font-extrabold font-playfair leading-tight md:leading-[67.45px] mt-14 mb-4 lg:mt-20">
                Sunrise Health & Clinical <br /> Excellence Centre
              </h3>
              <p className="w-full text-white text-[12px] md:text-[14px] lg:text-[24px] font-light font-['Inter'] leading-4 md:leading-[24px] lg:leading-[38px] mt-1 
              galaxy-z-fold-max:text-[11px] galaxy-z-fold-max:pr-9
              galaxy-s8-max:text-[10px] galaxy-s8-max:pr-9
              ">
                The Sun rises everyday - and we believe that in mental health
                and life in general - hope and new beginnings are key
                ingredients to wellness. At SUNRISE, not only do we focus on
                comprehensive psychiatric care - but also wellness as both are
                essential for long-term well-being. Our team is going to be
                expanding over time and currently consists of Dr. Mammoliti.
                <br />
                <br />
                Being a medical doctor, a consultation with Dr. Mammoliti is
                covered by OHIP as well as ongoing care (your health card) if
                you have OHIP coverage. THERE IS NO CAPACITY FOR ONGOING
                PSYCHIATRIC CARE AT THIS TIME WITH DR. MAMMOLITI AND CONSULTS
                ARE AVAILABLE on a limited basis given the demand and expertise
                fields.
              </p>
              {/* Button to open the modal */}
              <button
                onClick={handleOpenModal}
                className="mt-5 md:mt-7 px-4 py-2 bg-white text-[8px] md:text-md font-inter rounded text-alt hover:text-white hover:bg-alt"
              >
                Read More
              </button>
            </article>
          </div>
        </div>
      </section>

      {/* Section displaying various resource categories */}
      <section id="resource-page">
        <div className="max-w-[400px] md:max-w-[690px] lg:max-w-[960px] xl:max-w-[1115px] 2xl:max-w-[1420px] mx-auto">
          {/* Title and Button Section */}
          <div className="flex justify-between items-center mt-4 lg:mt-5 px-[18px] md:px-[1px]">
            <h2 className="text-[28px] md:text-[50px] lg:text-[76px] font-bold font-playfair galaxy-s8-max:mt-16 sm:mt-96">
              Resources
            </h2>
            <button
              className="bg-[#393939] shadow-custom-even font-bold text-white font-inter rounded-[4px] px-[6.5px] py-[2.5px] text-[8px] md:text-[14px] md:px-[10px] md:py-[4px] lg:text-[19px] lg:px-[15px] lg:py-[6px] flex-shrink-0 z-10"
              onClick={handleClick}
            >
              View All Resources
            </button>
          </div>

          {/* Card and Directory Container */}
          <div className="mt-5">
            <HomeResourceDisplay />
          </div>
        </div>
      </section>

      {/* CONTACT US information */}
      <section
  id="contact-page"
  className="relative flex flex-col h-[85vh] bg-black"
>
  <div className="relative w-full h-screen min-w-[344px]">
    <div className="absolute inset-0 w-full h-full z-0">
      <div
        className="
          absolute inset-0 w-full h-full 
          galaxy-z-fold-max:!h-[80vh] 
          galaxy-s8-max:h-[85vh] 
          iphone-12-max:h-[29vh] 
          galaxy-s20-max:h-[28.19vh] 
          iphone-xr-max:h-[28.9vh] 
          iphone-14-max:h-[80vh]
          surface-duo-max:h-[46.9vh] 
          ipad-mini:h-[100vh]
          ipad-air-max:h-[100vh]
          asus-zenbook-max:h-[100vh]
          suface-pro-max:h-[100vh] 
          nest-hub:h-[100vh] 
          ipad-pro-height:h-[100vh] 
          nest-hub-max:h-[100vh] 
          full-hd-max:h-[100vh]
          ultra-wide:h-[100vh] 
          bg-mobile-home-three bg-cover bg-center bg-no-repeat z-0
          sm:bg-home-three sm:bg-cover
          landscape-iphone-se:h-[92vh]
          landscape-surface-duo:h-[75vh]
          landscape-galaxy-s8:h-[115.5vh]
          landscape-galaxy-z-fold:h-[144.3vh]
          landscape-iphone-12:h-[113vh]
          landscape-iphone-xr:h-[112vh]
          landscape-pixel-7:h-[106vh]
          landscape-ipad-mini:h-[81vh]
          landscape-ipad-air:h-[79.5vh]
          landscape-ipad-pro:!h-[67vh]
          landscape-surface-pro:h-[73vh]"
      ></div>

      <div
        className="
          absolute inset-0 w-full pointer-events-none 
          h-[42vh] galaxy-z-fold-max:!h-[80vh] galaxy-s8-max:h-[85vh] 
          iphone-12-max:h-[35vh] iphone-14-max:h-[80vh] 
          asus-zenbook-max:h-[37.5vh] surface-pro-max:h-[37.5vh] 
          galaxy-s20-max:h-[33vh] iphone-xr-max:h-[32.5vh] 
          surface-duo-max:h-[47vh] ipad-mini:h-[41vh] ipad-air-max:h-[39vh] 
          nest-hub:h-[108vh] ipad-pro-height:h-[51vh] 
          nest-hub-max:h-[82vh] full-hd-max:h-[65vh] ultra-wide:h-[50vh] 
          sm:h-[75vh] landscape-iphone-se:h-[92vh] 
          landscape-surface-duo:h-[75vh] landscape-galaxy-s8:h-[115.5vh] 
          landscape-galaxy-z-fold:h-[144.3vh] landscape-iphone-12:h-[113vh] 
          landscape-iphone-xr:h-[112vh] landscape-pixel-7:h-[106vh] 
          landscape-iphone-14:h-[100vh] landscape-ipad-mini:h-[81vh] 
          landscape-ipad-air:h-[79.5vh] landscape-ipad-pro:!h-[67vh] 
          landscape-surface-pro:h-[73vh]"
        style={{
          background:
          "linear-gradient(to bottom, rgba(0, 0, 0, 0) 10%, rgba(0, 0, 0, 0.2) 80%, rgba(0, 0, 0, 1) 100%)",            
        }}
      ></div>
    </div>

    {/* Basic Container for Contact Us and FAQ */}
    <div className="relative flex flex-col h-full space-y-6">
      {/* Contact Us Section */}
      <div className="w-full lg:w-[50%]">
        <h3 className="text-white text-[22px] sm:text-[38px] lg:text-[55px] font-extrabold font-playfair leading-tight md:leading-[67.45px] mt-20 mb-8 ml-5">
          Contact Us
        </h3>

      {/* Centered Paragraph Block */}
<div className="w-full lg:w-[50%] justify-center flex">
  <p className="font-inter text-white text-[12px] md:text-[18px] lg:text-[14px] leading-[20px] md:leading-[35px] galaxy-z-fold-max:text-[10px] galaxy-s8-max:text-[10.5px]">
    Please note, you will need a referral from your Family Doctor to
    <br />
    be referred to Dr. Mammoliti for a consultation. The consultation
    <br />
    and ongoing care are covered by OHIP but not the NO SHOW FEE,
    <br /> LATE FEE or other non-insured services...
  </p>
</div>



      {/* FAQ Section */}
      <div className="w-full lg:w-[45%]">
        <h4 className="text-white font-bold text-[22px] lg:text-[35px] font-playfair ml-5 mt-10 mb-8">
          Explore some of our FAQ
        </h4>

        {/* Centered FAQ Buttons */}
        <div className="flex flex-col items-center space-y-3 font-inter">
          <button className="min-w-[300px] 2xl:w-3/4 bg-white text-black flex justify-between items-center p-3 rounded-lg shadow-md font-bold text-[11px] lg:text-[16px]">
            <span className="flex items-center">
              <img src={speech} alt="Speech bubble" className="w-6 h-6 mr-4" />
              What can I expect for a consultation?
            </span>
            <img src={arrow} alt="Arrow" className="w-4 h-4" />
          </button>

          <button className="min-w-[300px] 2xl:w-3/4 bg-white text-black flex justify-between items-center p-3 rounded-lg shadow-md font-bold text-[11px] lg:text-[16px]">
            <span className="flex items-center">
              <img src={speech} alt="Speech bubble" className="w-6 h-6 mr-4" />
              What can I expect for general policy?
            </span>
            <img src={arrow} alt="Arrow" className="w-4 h-4" />
          </button>

          <button className="min-w-[300px] 2xl:w-3/4 bg-white text-black flex justify-between items-center p-3 rounded-lg shadow-md font-bold text-[11px] lg:text-[16px]">
            <span className="flex items-center">
              <img src={speech} alt="Speech bubble" className="w-6 h-6 mr-4" />
              Missed appointments or service fees?
            </span>
            <img src={arrow} alt="Arrow" className="w-4 h-4" />
          </button>
        </div>

        <a href="faq" className="font-inter text-white underline text-[14px] mt-8 ml-5 block ">
          See All Frequently Asked Questions
        </a>
      </div>
    </div>
  </div>
  </div>
</section>



      {/* Modal for 'Read More' content */}
      {isModalOpen && (
        <section
          className="fixed inset-0 bg-black bg-opacity-0 backdrop-blur-sm flex items-center justify-center z-50"
          role="dialog"
          aria-labelledby="modal-title"
          aria-modal="true"
          onClick={handleBackdropClick} // Handle click on backdrop
        >
          <div className="relative w-[85%] lg:w-[957px] bg-white/80 bg-opacity-50 rounded-[18px] p-6">
            {/* Close button for the modal */}
            <IoCloseSharp
              className="absolute top-4 right-4 cursor-pointer w-8 h-8 text-black"
              onClick={handleCloseModal}
              aria-label="Close modal"
            />

            <h2
              id="modal-title"
              className="text-center text-black text-[30px] md:text-[40px] font-extrabold font-playfair mb-4"
            >
              About Us
            </h2>
            <div className="bg-white/80 rounded-[18px] mb-4">
              <p className="text-[#1e1e1e] text-[12px] sm:text-base md:text-[19px] font-normal leading-[18px] font-inter p-6">
                Dr. M. Mammoliti is a dedicated psychiatrist specializing in
                General Adult Psychiatry with a focus on Physician Mental Health
                and ADHD in adults. She completed her medical education at the
                University of Ottawa and her psychiatry residency at the
                University of Western Ontario. Dr. Mammoliti is committed to
                comprehensive psychiatric care, combining medication management
                and psychotherapy to optimize patient outcomes. She is also
                involved in advocacy and education, ensuring her patients
                receive informed and compassionate care.
              </p>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

export default Home;
