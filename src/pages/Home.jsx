import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";
import SearchBar from "../components/SearchBar";
import HomeResourceDisplay from "../components/HomeResourceDisplay";
import speech from '../assets/speech.png';
import arrow from '../assets/arrow.png';

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
    navigate("/all-resources"); // <-- Correctly navigating to /all-resources
  };

  return (
    <div>
      {/* First section with background and main title */}
      <header className="relative flex flex-col min-h-screen bg-black">
        <div className="relative w-full h-screen min-w-[320px] landscape-sm:min-h-[575px]">
          <div className="absolute inset-0 w-full h-full bg-home-one bg-cover bg-center bg-no-repeat z-0">
            <div className="flex flex-grow flex-col items-center justify-center z-10">
              <div className="relative z-10 flex flex-col items-center h-full mt-36">
                <h1 className="text-center text-white text-[48px] sm:text-[60px] md:text-[90.17px] font-extrabold font-playfair mb-2">
                  WLNS
                </h1>
                <h2 className="text-center text-white text-xl sm:text-2xl md:text-3xl font-extralight font-inter mb-8">
                  The Wellness Hub
                </h2>

                {/* Search bar component */}
                <SearchBar />
                <a
                  href="#resource-page"
                  className="text-center text-white text-sm sm:text-base md:text-[19px] font-light font-['Inter'] underline m-8 py-4"
                >
                  Explore More
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Second section with additional content and 'Read More' button */}
      <section className="relative flex flex-col min-h-screen bg-black">
        <div className="relative w-full h-full min-w-[390px]">
          {/* Background Image Container with Brightness Filter */}
          <div className="absolute inset-0 w-full h-full z-0">
            <div className="w-full min-h-screen bg-home-two bg-cover bg-no-repeat [background-position-x:50%] filter brightness-[30%]"></div>
          </div>

          {/* Content */}
          <div className="relative flex flex-grow flex-col items-center justify-center mx-4 sm:mx-8 md:mx-12 my-4 sm:my-12">
            <article className="w-full md:w-[80%] lg:w-[70%] flex flex-grow flex-col items-start justify-center">
              <h3 className="w-full text-white text-[26px] sm:text-[38px] lg:text-[53px] font-extrabold font-playfair leading-tight md:leading-[67.45px] mb-4">
                Sunrise Health & Clinical <br /> Excellence Centre
              </h3>
              <p className="w-full text-white text-[12px] md:text-[14px] lg:text-[24px] font-light font-['Inter'] leading-[20px] md:leading-[24px] lg:leading-[38px] mt-4 galaxy-fold-fix">
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
                className="mt-4 md:mt-7 px-4 py-2 bg-white text-sm md:text-md font-inter rounded text-alt hover:text-white hover:bg-alt"
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
          <div className="flex justify-between items-center mt-2 lg:mt-5 px-[18px] md:px-[1px]">
            <h2 className="text-[28px] md:text-[50px] lg:text-[76px] font-bold font-playfair">
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

      {/* Last page with contact information */}
      <section
  id="contact-page"
  className="relative flex flex-col min-h-screen bg-black"
>
  <div className="relative w-full h-screen min-w-[390px]">
    <div className="absolute inset-0 w-full h-full z-0">
      <div className="w-full h-full bg-home-three bg-cover bg-no-repeat [background-position-x:50%] filter brightness-[30%]"></div>
    </div>

    <div className="flex flex-grow flex-col lg:flex-row items-start justify-between mx-4 sm:mx-8 md:mx-12 my-4 sm:my-11 lg:mt-12">
      

   {/* Contact Us Container */}
<div className="w-full lg:w-[50%] text-left flex flex-col items-start z-10 mt-24 mx-auto">
  <article className="w-full">
    <h3 className="text-white text-[26px] sm:text-[38px] lg:text-[71px] font-extrabold font-playfair leading-tight md:leading-[67.45px] mb-4 z-20">
      Contact Us
    </h3>
    <p className="text-white text-[17px] font-['Inter'] leading-[40px] mt-4 z-20">
      Please note, you will need a referral from your Family Doctor to<br />
      be referred to Dr. Mammoliti for a consultation. The consultation<br />
      and ongoing care are covered by OHIP but not the
      NO SHOW FEE,<br /> LATE FEE or other non-insured services.
      At this time referrals are <br />seen only when there are learners present for
      teaching purposes<br /> and special slots are created - otherwise referrals
      are not accepted. <br />REFERRALS ARE ACCEPTED VIA FAX.
    </p>
  </article>
</div>

{/* FAQ Section Container */}
<div className="w-full lg:w-[45%] text-white flex flex-col justify-start items-start space-y-4 z-10 mt-24">
  <h4 className="text-white font-extrabold text-[22px] sm:text-[30px] lg:text-[38px]">
    Explore some of our FAQ
  </h4>


{/* FAQ Buttons */}
<div className="w-full">
  {/* First Button with Speech Bubble on the Left and Arrow on the Right */}
  <button className="w-3/4 bg-white text-black flex justify-between items-center p-4 rounded-lg shadow-md mb-3 font-bold">
    {/* Speech Bubble Image on the Left */}
    <span className="flex items-center">
      <img src={speech} alt="Speech bubble" className="w-6 h-6 mr-8" />
      What can I expect for my consultation?
    </span>
    {/* Right Arrow Image */}
    <img src={arrow} alt="Right arrow" className="w-6 h-6" />
  </button>

  {/* Second Button */}
  <button className="w-3/4 bg-white text-black flex justify-between items-center p-4 rounded-lg shadow-md mb-3 font-bold">
    <span className="flex items-center">
      <img src={speech} alt="Speech bubble" className="w-6 h-6 mr-8" />
      What can I expect for my consultation?
    </span>
    <img src={arrow} alt="Right arrow" className="w-6 h-6" />
  </button>

  {/* Third Button */}
  <button className="w-3/4 bg-white text-black flex justify-between items-center p-4 rounded-lg shadow-md mb-3 font-bold">
    <span className="flex items-center">
      <img src={speech} alt="Speech bubble" className="w-6 h-6 mr-8 " />
      What can I expect for my consultation?
    </span>
    <img src={arrow} alt="Right arrow" className="w-6 h-6" />
  </button>
</div>



<a href="faq" className="text-white underline mt-2">See All Frequently Asked Questions</a>

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
