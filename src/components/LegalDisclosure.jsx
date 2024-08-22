import { IoCloseSharp } from 'react-icons/io5';
import { useModal } from '../context/useModal'; // Adjust path accordingly

const LegalDisclosure = () => {
  const { isModalOpen, closeModal } = useModal();

 

  return (
    <>
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center pt-44 z-10"
          
        >
          <div className="relative w-[85%] lg:w-[957px] bg-white/80 bg-opacity-50 rounded-[18px] p-6">
            <IoCloseSharp
              className="absolute top-4 right-4 cursor-pointer w-8 h-8 text-black"
              onClick={closeModal}
            />
            <h2 className="text-center text-black text-[30px] md:text-[40px] font-extrabold font-playfair mb-4">
              Legal Disclosure
            </h2>
            <div className="bg-white/80 rounded-[18px] mb-4">
              <p className="text-[#1e1e1e] text-[13px] sm:text-base md:text-[19px] font-normal leading-[18px] font-inter p-6">
                Content of this website is meant for Canadian residents only. Content on this website is not sponsored, does not establish patient-doctor relationship, and is only meant for educational and advocacy purposes.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LegalDisclosure;
