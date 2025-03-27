import { useState } from "react";

import { IoCloseSharp } from "react-icons/io5";
import HomeHero from "../components/HomeHero";
import HomeAbout from "../components/HomeAbout";
import HomeResource from "../components/HomeResource";
import HomeContact from "../components/HomeContact";

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
      <HomeContact />
        


      {/* Modal for 'Read More' content */}
      {isModalOpen && (
        <section
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50"
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
              <p className="text-[#1e1e1e] text-[14px] md:text-[17px] font-normal leading-[18px] font-inter p-6">
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
