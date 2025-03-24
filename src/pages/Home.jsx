import { useState } from "react";

// import { HashLink } from "react-router-hash-link";
import { IoCloseSharp } from "react-icons/io5";
// import { scrollWithOffset } from "../utils/scrollHelper";
// import SearchBar from "../components/SearchBar";
import speech from "/speech.png";
import arrow from "/arrow.png";
import HomeHero from "../components/HomeHero";
import HomeAbout from "../components/HomeAbout";
import HomeResource from "../components/HomeResource";

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  

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

 

  

  return (
    <div>
      {/* First section with background and main title */}
      <HomeHero />

      {/* ABOUT US second section with additional content and 'Read More' button */}
      <HomeAbout onReadMore={handleOpenModal} />
      
      {/* Section displaying various resource categories */}
      <HomeResource />


      {/* CONTACT US information */}
      <section
        id="contact-page"
        className="relative flex flex-col h-[80vh] lg:h-[100vh] 
        landscape-iphone-se:h-[120vh] 
        landscape-surface-duo:h-[95vh] 
        landscape-galaxy-s8:h-[145vh] 
        landscape-galaxy-z-fold:h-[180vh]  
        landscape-iphone-12:h-[160vh]
        landscape-iphone-xr:h-[150vh]
        landscape-pixel-7:h-[155vh]
        landscape-iphone-14:h-[155vh]
       
         bg-black"
      >
        <div className="relative w-full h-screen min-w-[344px]">
          <div className="absolute inset-0 w-full h-full z-0">
            <div
              className="
          absolute inset-0 w-full h-[62vh] 
          galaxy-z-fold-max:!h-[80vh] 
          galaxy-s8-max:h-[78vh] 
          iphone-12-max:h-[75vh] 
          galaxy-s20-max:h-[80vh] 
          iphone-xr-max:h-[78vh] 
          iphone-14-max:h-[80vh]
          surface-duo-max:h-[80vh] 
          ipad-mini:h-[80vh]
          ipad-air-max:h-[80-vh]
          asus-zenbook-max:h-[80vh]
          surface-pro-max:h-[65vh]
          ipad-pro-height:h-[90vh] ipad-pro-height:bg-top
          full-hd-max:h-[100vh] full-hd-max:bg-top
          ultra-wide:h-[100vh] 
          bg-mobile-home-three bg-cover bg-center bg-no-repeat z-0
          sm:bg-home-three sm:bg-cover
          landscape-iphone-se:h-[120vh]
          landscape-surface-duo:h-[95vh]
          landscape-galaxy-s8:h-[145vh]
          landscape-galaxy-z-fold:h-[180vh]
           landscape-iphone-12:h-[160vh]
           landscape-iphone-xr:h-[150vh]
           landscape-pixel-7:h-[155vh]
          landscape-iphone-14:h-[155vh]
         
           "
            ></div>

            <div
              className="
          absolute inset-0 w-full pointer-events-none 
          h-[62vh] 
          galaxy-z-fold-max:!h-[80vh] 
          galaxy-s8-max:h-[78vh] 
          iphone-12-max:h-[75vh]
          galaxy-s20-max:h-[80vh]
          iphone-xr-max:h-[78vh]  
          iphone-14-max:h-[80vh] 
          surface-duo-max:h-[80vh] 
          ipad-mini:h-[80vh] 
          ipad-air-max:h-[80vh]
          asus-zenbook-max:h-[80vh]
          surface-pro-max:h-[65vh]
          ipad-pro-height:h-[90vh] 
          full-hd-max:h-[100vh] 
          ultra-wide:h-[100vh] 
          sm:h-[75vh] 
          landscape-iphone-se:h-[120vh]
          landscape-surface-duo:h-[95vh]
          landscape-galaxy-s8:h-[145vh]
          landscape-galaxy-z-fold:h-[180vh]
          landscape-iphone-12:h-[160vh]
          landscape-iphone-xr:h-[150vh]
          landscape-pixel-7:h-[155vh]
          landscape-iphone-14:h-[155vh]
         
          "
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
              <h3
                className="text-white text-[22px] sm:text-[38px] font-extrabold font-playfair leading-tight md:leading-[67.45px] mt-8
              galaxy-z-fold-max:mt-24
              iphone-12-max:mt-14 
              galaxy-s20-max:ml-7 galaxy-s20-max:mt-28
              iphone-xr-max:mt-28 iphone-xr-max:ml-7
              iphone-14-max:mt-20 iphone-14-max:ml-9
              surface-duo-max:text-[24px] surface-duo-max:mt-10 surface-duo-max:ml-[86px]
              ipad-mini:text-[42px] ipad-mini:ml-10 ipad-mini:mt-10
              ipad-air-max:text-[42px] ipad-air-max:ml-[70px] ipad-air-max:mt-12
              asus-zenbook-max:text-[42px] asus-zenbook-max:mt-10 asus-zenbook-max:ml-[84px]
              surface-pro-max:text-[42px] surface-pro-max:mt-9 surface-pro-max:ml-[115px] surface-pro-max:mb-10
              ipad-pro-height:mt-28 ipad-pro-height:ml-[66px] ipad-pro-height:mb-11
              full-hd-max:text-[65px] full-hd-max:mt-14 full-hd-max:ml-[135px] full-hd-max:mb-20
              ultra-wide:text-[96px] ultra-wide:mt-24 ultra-wide:mb-16 ultra-wide:ml-[275px]
              mb-8 ml-5
              landscape-iphone-se:ml-[110px] landscape-iphone-se:mb-4 landscape-iphone-se:mt-5
              landscape-surface-duo:ml-[103px]
              landscape-galaxy-s8:ml-[105px]
               landscape-iphone-12:ml-[72px] landscape-iphone-12:mt-6
               landscape-iphone-xr:ml-[105px] landscape-iphone-xr:mt-8
               landscape-iphone-14:mt-12
              
              ">
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
                  ipad-pro-height:ml-12 ipad-pro-height:text-[17px] ipad-pro-height:pr-1
                  full-hd-max:text-[22px] full-hd-max:ml-[120px] full-hd-max:pr-[90px]
                  ultra-wide:text-[32px] ultra-wide:mb-1 ultra-wide:leading-loose ultra-wide:ml-[260px] ultra-wide:pr-[220px]
                  landscape-iphone-se:ml-[92px] landscape-iphone-se:-mb-4 landscape-iphone-se:mr-10
                  landscape-surface-duo:ml-[83px]
                  landscape-galaxy-s8:ml-[87px]
                  landscape-iphone-12:ml-[55px]
                  landscape-iphone-xr:ml-[85px] landscape-iphone-xr:mr-11
                
                  "
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
                <h4
                  className="text-white font-bold text-[22px] font-playfair ml-5 mt-7 mb-8
                galaxy-s20-max:ml-7
                iphone-xr-max:ml-7
                iphone-14-max:ml-9
                surface-duo-max:text-[24px] surface-duo-max:ml-[87px]
                ipad-mini:text-[42px] ipad-mini:ml-10 
                ipad-air-max:text-[42px] ipad-air-max:ml-[70px]
                asus-zenbook-max:text-[42px] asus-zenbook-max:ml-[84px]
                surface-pro-max:text-[42px] surface-pro-max:ml-[115px]
                ipad-pro-height:ml-[66px]
                full-hd-max:text-[65px] full-hd-max:ml-[135px]
                ultra-wide:text-[96px] ultra-wide:mb-7 ultra-wide:ml-[275px]
                landscape-iphone-se:ml-[110px] landscape-iphone-se:mb-4
                landscape-surface-duo:ml-[103px]
                landscape-galaxy-s8:ml-[105px]
                 landscape-iphone-12:ml-[72px]
                 landscape-iphone-xr:ml-[105px]
                
                "
                >
                  Explore some of our FAQ
                </h4>

                {/* Centered FAQ Buttons */}
                <div className="flex flex-col items-center space-y-3 font-inter">
                  <button
                    className="
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
                 ipad-pro-height:min-w-[891px]
            full-hd-max:min-w-[1628px] full-hd-max:mr-4 full-hd-max:text-[22px] full-hd-max:font-normal
              ultra-wide:min-w-[2000px]
              landscape-iphone-se:min-w-[445px]
              landscape-surface-duo:min-w-[510px]
              landscape-galaxy-s8:min-w-[527px]
              landscape-galaxy-z-fold:min-w-[710px]
              landscape-iphone-12:min-w-[700px]
              landscape-iphone-xr:min-w-[682px]
              landscape-iphone-14:min-w-[700px]
      
                 bg-white text-black flex justify-between items-center 
                  p-3 rounded-lg shadow-md font-bold text-[11px] lg:text-[16px]"
                  >
                    <span className="flex items-center">
                      <img
                        src={speech}
                        alt="Speech bubble"
                        className="w-6 h-6 mr-4"
                      />
                      What can I expect for a consultation?
                    </span>
                    <img
                      src={arrow}
                      alt="Arrow"
                      className="w-4 h-4 full-hd-max:w-6 full-hd-max:h-6"
                    />
                  </button>

                  <button
                    className=" 
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
                    ipad-pro-height:min-w-[891px]
                    full-hd-max:min-w-[1628px] full-hd-max:mr-4 full-hd-max:text-[22px] full-hd-max:font-normal
                    ultra-wide:min-w-[2000px]
                    landscape-iphone-se:min-w-[445px]
                     landscape-surface-duo:min-w-[510px]
                     landscape-galaxy-s8:min-w-[527px]
                     landscape-galaxy-z-fold:min-w-[710px]
                     landscape-iphone-12:min-w-[700px]
                     landscape-iphone-xr:min-w-[682px]
                     landscape-iphone-14:min-w-[700px]
                   
                  bg-white text-black flex justify-between items-center 
                  p-3 rounded-lg shadow-md font-bold text-[11px] lg:text-[16px]"
                  >
                    <span className="flex items-center">
                      <img
                        src={speech}
                        alt="Speech bubble"
                        className="w-6 h-6 mr-4"
                      />
                      What can I expect for general policy?
                    </span>
                    <img
                      src={arrow}
                      alt="Arrow"
                      className="w-4 h-4 full-hd-max:w-6 full-hd-max:h-6"
                    />
                  </button>

                  <button
                    className=" 
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
                   ipad-pro-height:min-w-[891px]
                    full-hd-max:min-w-[1628px] full-hd-max:mr-4 full-hd-max:text-[22px] full-hd-max:font-normal
                      ultra-wide:min-w-[2000px]
                      landscape-iphone-se:min-w-[445px]
                       landscape-surface-duo:min-w-[510px]
                       landscape-galaxy-s8:min-w-[527px]
                       landscape-galaxy-z-fold:min-w-[710px]
                       landscape-iphone-12:min-w-[700px]
                       landscape-iphone-xr:min-w-[682px]
                       landscape-iphone-14:min-w-[700px]
                      
                   bg-white text-black flex justify-between items-center 
                  p-3 rounded-lg shadow-md font-bold text-[11px] lg:text-[16px]"
                  >
                    <span className="flex items-center">
                      <img
                        src={speech}
                        alt="Speech bubble"
                        className="w-6 h-6 mr-4"
                      />
                      Missed appointments or service fees?
                    </span>
                    <img
                      src={arrow}
                      alt="Arrow"
                      className="w-4 h-4 full-hd-max:w-6 full-hd-max:h-6"
                    />
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
                  ipad-pro-height:ml-[66px] ipad-pro-height:mt-11
                  full-hd-max:text-[18px] full-hd-max:ml-[135px]
                  ultra-wide:ml-[275px] ultra-wide:mt-20
                   mt-6 ml-11 ultra-wide:text-[28px] block
                   landscape-iphone-se:mt-5 landscape-iphone-se:ml-[110px]
                   landscape-surface-duo:ml-[103px] landscape-surface-duo:mt-8
                   landscape-galaxy-s8:ml-[105px]
                   landscape-iphone-12:ml-[72px]
                   landscape-iphone-xr:ml-[105px]
                  
                   ">
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
