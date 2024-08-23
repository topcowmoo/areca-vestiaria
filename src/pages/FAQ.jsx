import { useState, lazy, Suspense } from "react"; 

// Lazy load the Modal component
const Modal = lazy(() => import("../components/Modal"));

const Faq = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [modalTitle, setModalTitle] = useState("");

  // Function to open the modal with specific content
  const openModal = (title, content) => {
    setModalTitle(title);
    setModalContent(content);
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent("");
    setModalTitle("");
  };

  return (
    <div className="min-h-screen bg-gray-100 relative pb-40">
      {/* Black Bar at the Top */}
      <div className="w-full h-[136px] left-0 top-0 absolute bg-black z-0" />

      {/* FAQ Section */}
      <div className="relative max-w-[1440px] mx-auto px-4 pt-[150px] sm:pt-[200px] lg:pt-[250px]">
        {/* FAQ Section Title */}
        <div className="text-center lg:text-left">
          <div className="text-[#090909] text-[32px] sm:text-[45px] lg:text-[65px] font-bold font-['Playfair'] leading-tight lg:leading-none">
            Frequently Asked Questions
          </div>
        </div>

        {/* FAQ Section Intro */}
        <div className="mt-4">
          <div className="text-[15px] sm:text-[17px] text-black font-normal font-['Inter'] mb-8 w-full sm:w-[80%] lg:w-[1198px] mx-auto lg:mx-0">
            Welcome to our FAQ page! Here, we&apos;ve compiled answers to the most common questions we receive from our customers. Whether you&apos;re new to our services or a long-time client, we hope you find this resource helpful. If your question isn&apos;t listed here, please don&apos;t hesitate to contact our support team for further assistance.
          </div>
        </div>

        {/* FAQ Entries */}
        <div className="space-y-16 lg:space-y-0 lg:flex lg:gap-[90px] pt-[50px] lg:pt-[90px]">
          {/* First Column */}
          <div className="w-full lg:w-[539px] flex flex-col gap-[17px]">
            <div className="w-[125px] h-[26px] flex items-center justify-center text-white text-[15px] font-bold font-['Inter'] bg-[#06a416] rounded mx-auto lg:mx-0">
              Most Asked
            </div>
            <div className="text-[#1f1f1f] text-[20px] sm:text-[22px] font-semibold font-['Inter']">
              What can I expect for my consultation?
            </div>
            <div className="text-black text-[15px] sm:text-[17px] font-normal font-['Inter']">
              Your consultation will be about 75 minutes (that is what you are booked for but may be longer or shorter depending on individual issues) so that the doctor can do a comprehensive assessment and have time to discuss findings directly with you as well as treatment options...
            </div>
            <div
              className="text-black text-[15px] sm:text-[17px] font-semibold font-['Inter'] underline cursor-pointer"
              onClick={() =>
                openModal(
                  "What can I expect for my consultation?",
                  <div>
                    <p style={{ marginBottom: "20px" }}>
                      1) Your consultation will be about 75 minutes (that is what you are booked for but may be longer or shorter depending on individual issues) so that the doctor can do a comprehensive assessment and have time to discuss findings directly with you as well as treatment options. 
                    </p>
                    <p style={{ marginBottom: "20px" }}>
                      2) Please let the office know as soon as possible if you need to rebook your consultation Monday to Friday 9-3:30pm and at least 24 business hours before to avoid a No Show fee of $300. Access to a psychiatric consultation is quite difficult in Southwestern Ontario and some people wait over a year to see a psychiatrist, and thus cancelling your consultation slot ahead of time will allow the doctor to provide the slot to someone else who can use it. Please be considerate to other people as many people need the psychiatric consultation but due to limited resources are forced to wait much longer than they should.
                    </p>
                    <p style={{ marginBottom: "20px" }}>
                      3) The doctor will ask you many questions about who you are as a person, your childhood, upbringing, work and family situation, medical health, family and medications and past psychiatric history to understand who you are, what is happening and what the diagnoses are. Mental health concerns are biopsychosocial meaning that even though your brain maybe wired a certain way to present with anxiety, certain life situations may have triggered or made it worse.
                    </p>
                  </div>
                )
              }
            >
              Read More
            </div>
          </div>

          {/* Vertical Divider */}
          <div className="hidden lg:block h-[228px] w-[0.5px] bg-gray-400 mx-auto"></div>

          {/* Second Column */}
          <div className="w-full lg:w-[539px] flex flex-col gap-[17px]">
            <div className=" lg:block w-[125px] h-[26px] flex items-center justify-center text-white/0 text-[15px] font-bold font-['Inter']"></div>
            <div className="text-[#1f1f1f] text-[20px] sm:text-[22px] font-semibold font-['Inter']">Fees</div>
            <div className="text-black text-[15px] sm:text-[17px] font-normal font-['Inter']">
              Your consultation will be about 75 minutes (that is what you are booked for but may be longer or shorter depending on individual issues) so that the doctor can do a comprehensive assessment and have time to discuss findings directly with you as well as treatment options...
            </div>
            <div
              className="text-black text-[15px] sm:text-[17px] font-semibold font-['Inter'] underline cursor-pointer"
              onClick={() =>
                openModal(
                  "Fees",
                  "The consultation is covered by your health card if you have OHIP coverage. However, other fees for forms, notes, or non-insured services may apply. Please consult with the administrative team for more details."
                )
              }
            >
              Read More
            </div>
          </div>
        </div>

        {/* Second Row of FAQ Entries */}
        <div className="space-y-16 lg:space-y-0 lg:flex lg:gap-[90px] mt-[50px] lg:mt-[100px]">
          {/* First Column */}
          <div className="w-full lg:w-[539px] flex flex-col gap-[17px]">
            <div className=" lg:block w-[125px] h-[26px] flex items-center justify-center text-white/0 text-[15px] font-bold font-['Inter']"></div>
            <div className="text-[#1f1f1f] text-[20px] sm:text-[22px] font-semibold font-['Inter']">
              What can I expect for my consultation?
            </div>
            <div className="text-black text-[15px] sm:text-[17px] font-normal font-['Inter']">
              Your consultation will be about 75 minutes (that is what you are booked for but may be longer or shorter depending on individual issues) so that the doctor can do a comprehensive assessment and have time to discuss findings directly with you as well as treatment options...
            </div>
            <div
              className="text-black text-[15px] sm:text-[17px] font-semibold font-['Inter'] underline cursor-pointer"
              onClick={() =>
                openModal(
                  "What can I expect for my consultation?",
                  "Your consultation will be about 75 minutes, depending on individual issues. The doctor will conduct a comprehensive assessment, discuss findings, and present treatment options. The discussion is aimed at providing you with the best possible care."
                )
              }
            >
              Read More
            </div>
          </div>

          {/* Vertical Divider */}
          <div className="hidden lg:block h-[228px] w-[0.5px] bg-gray-400 mx-auto"></div>

          {/* Second Column */}
          <div className="w-full lg:w-[539px] flex flex-col gap-[17px]">
            <div className=" lg:block w-[125px] h-[26px] flex items-center justify-center text-white/0 text-[15px] font-bold font-['Inter']"></div>
            <div className="text-[#1f1f1f] text-[20px] sm:text-[22px] font-semibold font-['Inter']">
              What can I expect for my consultation?
            </div>
            <div className="text-black text-[15px] sm:text-[17px] font-normal font-['Inter']">
              Your consultation will be about 75 minutes (that is what you are booked for but may be longer or shorter depending on individual issues) so that the doctor can do a comprehensive assessment and have time to discuss findings directly with you as well as treatment options...
            </div>
            <div
              className="text-black text-[15px] sm:text-[17px] font-semibold font-['Inter'] underline cursor-pointer"
              onClick={() =>
                openModal(
                  "What can I expect for my consultation?",
                  "Your consultation will be about 75 minutes, depending on individual issues. The doctor will conduct a comprehensive assessment, discuss findings, and present treatment options. The discussion is aimed at providing you with the best possible care."
                )
              }
            >
              Read More
            </div>
          </div>
        </div>
      </div>

      {/* Lazy-loaded Modal Component */}
      <Suspense fallback={<div>Loading...</div>}>
        {isModalOpen && (
          <Modal isOpen={isModalOpen} onClose={closeModal} title={modalTitle}>
            {modalContent}
          </Modal>
        )}
      </Suspense>
    </div>
  );
};

export default Faq;
