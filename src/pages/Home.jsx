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
          absolute inset-0 w-full h-[50vh]
  galaxy-z-fold-max:!h-[39vh]
  galaxy-s8-max:h-[44vh] 
  iphone-12-max:h-[28.9vh] 
  galaxy-s20-max:h-[39vh] 
  iphone-xr-max:h-[40vh] 
  iphone-14-max:h-[40vh]
  surface-duo-max:h-[45vh] 
  ipad-mini:h-[100vh]
  ipad-air-max:h-[100vh]
  asus-zenbook-max:h-[100vh]
  surface-pro-max:h-[90vh]
  nest-hub:h-[100vh] 
  ipad-pro-height:h-[100vh]
  nest-hub-max:h-[100vh] 
  full-hd-max:h-[100vh] full-hd-max:bg-top
  ultra-wide:h-[100vh] ultra-wide:bg-right
  bg-mobile-home-one bg-cover bg-center bg-no-repeat z-0
  sm:bg-home-one
  "
          ></div>

          <div
            className="
            absolute inset-0 w-full pointer-events-none 
            h-[50vh] 
            galaxy-z-fold-max:!h-[39vh] 
            galaxy-s8-max:h-[44vh] 
            iphone-12-max:h-[28.9vh]
            galaxy-s20-max:h-[39vh]
            iphone-xr-max:h-[40vh]
            iphone-14-max:h-[40vh] 
            surface-duo-max:h-[45vh] 
            ipad-mini:h-[100vh]
            ipad-air-max:h-[100vh]
            asus-zenbook-max:h-[100vh]
            nest-hub:h-[100vh] 
            ipad-pro-height:h-[100vh] 
            nest-hub-max:h-[100vh] 
            full-hd-max:h-[100vh] 
            ultra-wide:h-[100vh] 
            sm:h-[75vh]
            landscape-iphone-se:h-[92vh]
  landscape-surface-duo:h-[75vh]
  landscape-galaxy-s8:h-[115.5vh]
  landscape-galaxy-z-fold:h-[144.3vh]
  landscape-iphone-12:h-[113vh]
  landscape-iphone-xr:h-[112vh]
  landscape-pixel-7:h-[106vh]
  landscape-ipad-mini:h-[81vh]
  landscape-ipad-air:h-[79.5vh]
  landscape-ipad-pro:h-[67vh]
  landscape-surface-pro:h-[73vh]
            "
            style={{
              background:
                "linear-gradient(to bottom, rgba(0, 0, 0, 0) 10%, rgba(0, 0, 0, 0.5) 75%, rgba(0, 0, 0, 1) 100%)",
            }}
          ></div>

          <div className="flex flex-grow flex-col items-center justify-center z-10">
            <div className="relative z-10 flex flex-col items-center h-full mt-16 sm:mt-36">
              <h1 className="text-center text-white text-[48px] sm:text-[60px] md:text-[90.17px] font-extrabold font-playfair mb-1 full-hd-max:mt-20">
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
        <div className="relative w-full h-[55vh] min-w-[390px]">
          {/* Background Image Container */}
          <div className="absolute inset-0 w-full h-[100vh] z-0">
            <div
              className="
          absolute inset-0 w-full sm:h-full h-[65vh] 
  galaxy-z-fold-max:h-[55vh] 
  galaxy-s8-max:h-[62vh] 
  iphone-12-max:h-[55vh] 
  galaxy-s20-max:h-[55vh] 
  iphone-xr-max:h-[55vh] 
  iphone-14-max:h-[55vh]
  surface-duo-max:h-[70vh] 
  ipad-mini:h-[100vh]
  ipad-air-max:h-[90vh]
  asus-zenbook-max:h-[85vh]
  surface-pro-max:h-[70vh]
  nest-hub:h-[100vh] 
  ipad-pro-height:h-[75vh] 
  nest-hub-max:h-[100vh]
  full-hd-max:h-[100vh] full-hd-max:bg-top
  ultra-wide:h-[100vh] 
  bg-mobile-home-two bg-cover bg-center bg-no-repeat z-0
  sm:bg-home-two
  landscape-iphone-se:h-[92vh]
  landscape-surface-duo:h-[75vh]
  landscape-galaxy-s8:h-[115.5vh]
  landscape-galaxy-z-fold:h-[144.3vh]
  landscape-iphone-12:h-[113vh]
  landscape-iphone-xr:h-[112vh]
  landscape-ipad-mini:h-[81vh]
  landscape-ipad-air:h-[79.5vh]
  landscape-ipad-pro:h-[67vh]
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
            <article className="w-full flex flex-grow flex-col items-start justify-center">
              <h3 className="w-full text-white text-[22px]
              galaxy-z-fold-max:mt-28
              galaxy-s8-max:mt-20
              galaxy-s20-max:ml-2 galaxy-s20-max:mt-20
              iphone-12-max:mt-[78px]
              iphone-xr-max:mt-28
              iphone-14-max:text-[22px] iphone-14-max:ml-4 iphone-14-max:mt-[84px]
              surface-duo-max:text-[26px] surface-duo-max:mt-24 surface-duo-max:ml-[72px]
              ipad-mini:text-[42px] ipad-mini:mt-36 ipad-mini:ml-0
              ipad-air-max:text-[42px] ipad-air-max:mt-24 ipad-air-max:ml-5
              asus-zenbook-max:text-[42px] asus-zenbook-max:mt-64 asus-zenbook-max:ml-10
              surface-pro-max:mt-52 surface-pro-max:text-[42px] surface-pro-max:ml-16
              nest-hub:mt-16 nest-hub:-ml-3
              ipad-pro-height:ml-0 ipad-pro-height:mt-52 
              full-hd-max:text-[76px] full-hd-max:ml-24 full-hd-max:mt-32
              font-extrabold font-playfair leading-tight md:leading-normal mt-16 mb-4 md:mt-48d">
                Sunrise Health & Clinical <br /> Excellence Centre
              </h3>
              <p
                className="w-full text-[11px] pr-4 text-white font-light font-['Inter'] leading-4 md:leading-[34px] lg:leading-[24px] mt-1
              galaxy-z-fold-max:!pr-12 
              galaxy-s8-max:pr-8
              iphone-12-max:text-[11px] iphone-12-max:pr-1
              galaxy-s20-max:ml-2 galaxy-s20-max:pr-3
              iphone-xr-max:text-[11px] iphone-xr-max:pr-2
              iphone-14-max:text-[12px] iphone-14-max:ml-4 iphone-14-max:pr-6
              surface-duo-max:ml-[72px] surface-duo-max:pr-36
              ipad-mini:text-[16px] ipad-mini:ml-0 ipad-mini:pr-0
              ipad-air-max:text-[16px] ipad-air-max:ml-5 ipad-air-max:pr-9
              asus-zenbook-max:text-[16px] asus-zenbook-max:mx-10 asus-zenbook-max:pr-16
              surface-pro-max:text-[16px] surface-pro-max:ml-16 surface-pro-max:pr-32
              nest-hub:text-[16px] nest-hub:-ml-3 nest-hub:pr-0
              ipad-pro-height:ml-0 ipad-pro-height:pr-0
              full-hd-max:text-[20px] full-hd-max:pr-44 full-hd-max:ml-24
              "
                style={{ textAlign: "justify" }}
              >
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
                className="mt-8 px-4 py-2 bg-white text-[8px] md:text-sm font-inter rounded text-alt hover:text-black hover:bg-alt 
                iphone-se-max:mt-5
                galaxy-s20-max:ml-2
                iphone-14-max:ml-4 iphone-14-max:mt-5
                surface-duo-max:mt-5 surface-duo-max:ml-[72px]
                ipad-mini:mt-9 ipad-mini:-ml-1
                ipad-air-max:ml-5
                asus-zenbook-max:ml-10
                surface-pro-max:ml-16
                nest-hub:mt-11 nest-hub:-ml-3 
                ipad-pro-height:ml-0
                full-hd-max:ml-24"
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
            <h2 className="text-[28px] md:text-[50px] lg:text-[65px] font-bold font-playfair
            galaxy-z-fold-max:!mt-14  galaxy-s8-max:mt-16 
            iphone-se-max:mt-16 
            surface-duo-max:mt-28 
            ipad-mini:mt-[450px] 
            ipad-air-max:mt-[320px] 
            asus-zenbook-max:mt-[500px] 
            surface-pro-max:mt-56 
            nest-hub:mt-96
            nest-hub-max:mt-96 full-hd-max:-ml-[115px]
            full-hd-max:mt-[415px]
            ultra-wide:mt-[650px] sm:mt-96">
              Resources
            </h2>
            <button
              className="bg-[#393939] shadow-custom-even font-bold text-white font-inter rounded-[4px] px-[6.5px] py-[2.5px] text-[8px] md:text-[14px] md:px-[10px] md:py-[4px] lg:text-[16px] lg:px-[15px] lg:py-[6px] flex-shrink-0
              galaxy-z-fold-max:!mt-14 
              iphone-se-max:mt-16  z-10
              surface-duo-max:mt-28
              ipad-mini:mt-[450px]
              ipad-air-max:mt-[320px]
              asus-zenbook-max:mt-[500px]
              surface-pro-max:mt-56
              nest-hub:mt-80
              nest-hub-max:mt-96
              full-hd-max:mt-[415px] full-hd-max:-mr-[115px]
              ultra-wide:mt-[650px]"
              onClick={handleClick}
            >
              View All Resources
            </button>
          </div>

          {/* Card and Directory Container */}
          <div className="mt-5 mb-14">
            <HomeResourceDisplay />
          </div>
        </div>
      </section>

      {/* CONTACT US information */}
      <section
        id="contact-page"
        className="relative flex flex-col h-[80vh] lg:h-[100vh] bg-black"
      >
        <div className="relative w-full h-screen min-w-[344px]">
          <div className="absolute inset-0 w-full h-full z-0">
            <div
              className="
          absolute inset-0 w-full h-[62vh] 
          galaxy-z-fold-max:h-[80vh] 
          galaxy-s8-max:h-[78vh] 
          iphone-12-max:h-[75vh] 
          galaxy-s20-max:h-[80vh] 
          iphone-xr-max:h-[78vh] 
          iphone-14-max:h-[80vh]
          surface-duo-max:h-[80vh] 
          ipad-mini:h-[80vh]
          ipad-air-max:h-[80-vh]
          asus-zenbook-max:h-[80vh]
          surface-pro-max:h-[80vh] 
          nest-hub:h-[100vh] 
          ipad-pro-height:h-[100vh] 
          nest-hub-max:h-[100vh]
          full-hd-max:h-[100vh] full-hd-max:bg-top
          ultra-wide:h-[100vh] 
          bg-mobile-home-three bg-cover bg-center bg-no-repeat z-0
          sm:bg-home-three sm:bg-cover
          landscape-iphone-se:h-[92vh]
          landscape-surface-duo:h-[75vh]
          landscape-galaxy-s8:h-[115.5vh]
          landscape-galaxy-z-fold:h-[144.3vh]
          landscape-iphone-12:h-[113vh]
          landscape-pixel-7:h-[106vh]
          landscape-ipad-mini:h-[81vh]
          landscape-ipad-air:h-[79.5vh]
          landscape-ipad-pro:h-[67vh]
          landscape-surface-pro:h-[73vh]"
            ></div>

            <div
              className="
          absolute inset-0 w-full pointer-events-none 
          h-[62vh] 
          galaxy-z-fold-max:h-[80vh] 
          galaxy-s8-max:h-[78vh] 
          iphone-12-max:h-[75vh]
          galaxy-s20-max:h-[80vh]
          iphone-xr-max:h-[78vh]  
          iphone-14-max:h-[80vh] 
          surface-duo-max:h-[80vh] 
          ipad-mini:h-[80vh] 
          ipad-air-max:h-[80vh]
          asus-zenbook-max:h-[80vh]
          surface-pro-max:h-[80vh]
          nest-hub:h-[100vh] 
          ipad-pro-height:h-[100vh] 
          nest-hub-max:h-[100vh] 
          full-hd-max:h-[100vh] 
          ultra-wide:h-[50vh] 
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
            <div className="w-full">
              <h3 className="text-white text-[22px] sm:text-[38px] font-extrabold font-playfair leading-tight md:leading-[67.45px] mt-8
              galaxy-z-fold-max:mt-24
              iphone-12-max:mt-14 
              galaxy-s20-max:ml-7 galaxy-s20-max:mt-28
              iphone-xr-max:mt-28 iphone-xr-max:ml-7
              iphone-14-max:mt-20 iphone-14-max:ml-9
              surface-duo-max:text-[24px] surface-duo-max:mt-10 surface-duo-max:ml-[86px]
              ipad-mini:text-[42px] ipad-mini:ml-10 ipad-mini:mt-10
              ipad-air-max:text-[42px] ipad-air-max:ml-[70px] ipad-air-max:mt-12
              asus-zenbook-max:text-[42px] asus-zenbook-max:mt-10 asus-zenbook-max:ml-[84px]
              surface-pro-max:text-[42px] surface-pro-max:mt-56 surface-pro-max:ml-[115px]
              nest-hub:text-[40px] nest-hub:mt-6
              nest-hub-max:text-[50px]
              ipad-pro-height:ml-8 ipad-pro-height:mt-72
              nest-hub-max:mt-10
              full-hd-max:text-[65px] full-hd-max:mt-14 full-hd-max:ml-[135px] full-hd-max:mb-20
              ultra-wide:text-[96px] ultra-wide:mt-40 ultra-wide:mb-24
              mb-8 ml-5">
                Contact Us
              </h3>

              {/* Centered Paragraph Block */}
              <div className="w-full justify-center flex">
                <p
                  className="
                  font-inter text-white px-5 text-[12.5px] leading-[20px] md:leading-[34px] xl:leading-9
                  galaxy-z-fold-max:!text-[12.5px] 
                  galaxy-s8-max:text-[12.5px]
                  galaxy-s20-max:ml-2
                  iphone-xr-max:text-[12.5px] iphone-xr-max:ml-2 iphone-xr-max:mr-2
                  iphone-14-max:ml-4 iphone-14-max:mr-5
                  surface-duo-max:text-[13px] surface-duo-max:ml-[66px] surface-duo-max:pr-20
                  ipad-mini:text-[16px] ipad-mini:ml-6 ipad-mini:mb-6 ipad-mini:-mt-6 ipad-mini:pr-8
                  ipad-air-max:text-[16px] ipad-air-max:ml-[52px] ipad-air-max:pr-14
                  asus-zenbook-max:text-[16px] asus-zenbook-max:mx-16
                  surface-pro-max:text-[16px] surface-pro-max:ml-24 surface-pro-max:pr-14
                  nest-hub:text-[18px]
                  ipad-pro-height:ml-4 ipad-pro-height:-mr-5
                  full-hd-max:text-[22px] full-hd-max:ml-[120px] full-hd-max:pr-[90px]
                  ultra-wide:text-[38px] ultra-wide:mb-24"
                  style={{ textAlign: "justify" }}
                >
                  Please note, you will need a referral from your Family Doctor
                  to be referred to Dr. Mammoliti for a consultation. The
                  consultation and ongoing care are covered by OHIP but not the
                  NO SHOW FEE, LATE FEE or other non-insured services.
                </p>
              </div>

              {/* FAQ Section */}
              <div className="w-full">
                <h4 className="text-white font-bold text-[22px] font-playfair ml-5 mt-7 mb-8
                galaxy-s20-max:ml-7
                iphone-xr-max:ml-7
                iphone-14-max:ml-9
                surface-duo-max:text-[24px] surface-duo-max:ml-[87px]
                ipad-mini:text-[42px] ipad-mini:ml-10 
                ipad-air-max:text-[42px] ipad-air-max:ml-[70px]
                asus-zenbook-max:text-[42px] asus-zenbook-max:ml-[84px]
                surface-pro-max:text-[42px] surface-pro-max:ml-[115px]
                nest-hub:text-[42px]
                ipad-pro-height:ml-8
                nest-hub-max:text-[50px] 
                full-hd-max:text-[65px] full-hd-max:ml-[135px]
                 ultra-wide:text-[96px] ultra-wide:mb-24">
                  Explore some of our FAQ
                </h4>

                {/* Centered FAQ Buttons */}
                <div className="flex flex-col items-center space-y-3 font-inter">
                  <button className="
                  min-w-[333px]
                  galaxy-z-fold-max:!min-w-[305px]
                  galaxy-s8-max:min-w-[320px]
                  iphone-12-max:min-w-[348px] 
                  galaxy-s20-max:min-w-[360px]
                  iphone-xr-max:min-w-[360px] 
                  iphone-14-max:min-w-[360px]
                  surface-duo-max:min-w-[370px]
                  ipad-mini:min-w-[685px]
                  ipad-air-max:min-w-[685px]
                  asus-zenbook-max:min-w-[680px]
                 surface-pro-max:min-w-[680px]
                 nest-hub:min-w-[970px]
                 nest-hub-max:min-w-[1230px]
            full-hd-max:min-w-[1628px] full-hd-max:mr-4 full-hd-max:text-[22px] full-hd-max:font-normal
                 bg-white text-black flex justify-between items-center 
                  p-3 rounded-lg shadow-md font-bold text-[11px] lg:text-[16px]">
                    <span className="flex items-center">
                      <img
                        src={speech}
                        alt="Speech bubble"
                        className="w-6 h-6 mr-4"
                      />
                      What can I expect for a consultation?
                    </span>
                    <img src={arrow} alt="Arrow" className="w-4 h-4 full-hd-max:w-6 full-hd-max:h-6" />
                  </button>

                  <button className=" 
                  min-w-[333px]
                  galaxy-z-fold-max:!min-w-[305px]
                  galaxy-s8-max:min-w-[320px]
                  iphone-12-max:min-w-[348px]
                  galaxy-s20-max:min-w-[360px]
                  iphone-xr-max:min-w-[360px] 
                  iphone-14-max:min-w-[360px]
                surface-duo-max:min-w-[370px]
                  ipad-mini:min-w-[685px]
                  ipad-air-max:min-w-[685px]
                  asus-zenbook-max:min-w-[680px]
                    surface-pro-max:min-w-[680px]
                    nest-hub:min-w-[970px]
                    full-hd-max:min-w-[1628px] full-hd-max:mr-4 full-hd-max:text-[22px] full-hd-max:font-normal
                  bg-white text-black flex justify-between items-center 
                  p-3 rounded-lg shadow-md font-bold text-[11px] lg:text-[16px]">
                    <span className="flex items-center">
                      <img
                        src={speech}
                        alt="Speech bubble"
                        className="w-6 h-6 mr-4"
                      />
                      What can I expect for general policy?
                    </span>
                    <img src={arrow} alt="Arrow" className="w-4 h-4 full-hd-max:w-6 full-hd-max:h-6" />
                  </button>

                  <button className=" 
                  min-w-[333px]
                  galaxy-z-fold-max:!min-w-[305px]
                  galaxy-s8-max:min-w-[320px] 
                  iphone-12-max:min-w-[348px]
                  galaxy-s20-max:min-w-[360px]
                  iphone-xr-max:min-w-[360px] 
                  iphone-14-max:min-w-[360px]
                surface-duo-max:min-w-[370px]
                  ipad-mini:min-w-[685px]
                  ipad-air-max:min-w-[685px]
                  asus-zenbook-max:min-w-[680px]
                  surface-pro-max:min-w-[680px]
                  nest-hub:min-w-[970px]
                    full-hd-max:min-w-[1628px] full-hd-max:mr-4 full-hd-max:text-[22px] full-hd-max:font-normal
                   bg-white text-black flex justify-between items-center 
                  p-3 rounded-lg shadow-md font-bold text-[11px] lg:text-[16px]">
                    <span className="flex items-center">
                      <img
                        src={speech}
                        alt="Speech bubble"
                        className="w-6 h-6 mr-4"
                      />
                      Missed appointments or service fees?
                    </span>
                    <img src={arrow} alt="Arrow" className="w-4 h-4 full-hd-max:w-6 full-hd-max:h-6" />
                  </button>
                </div>

                <a
                  href="faq"
                  className="font-inter text-white underline 
                  text-[14px]
                  iphone-se-max:ml-6
                  iphone-12-max:ml-6
                  galaxy-s20-max:ml-7
                  iphone-xr-max:ml-7 iphone-xr-max:mt-9
                  iphone-14-max:ml-9
                  surface-duo-max:ml-[87px]
                  ipad-mini:text-[16px] ipad-mini:ml-10
                  ipad-air-max:text-[16px]
                  asus-zenbook-max:text-[16px] asus-zenbook-max:ml-[88px]
                  surface-pro-max:text-[16px] surface-pro-max:ml-[119px]
                  ipad-air-max:ml-[70px]
                  ipad-pro-height:ml-8 
                  full-hd-max:text-[18px] full-hd-max:ml-[135px]
                   mt-6 ml-11 lg:ml-6 lg:mt-14 ultra-wide:text-[28px] block"
                >
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
