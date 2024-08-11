import { useState } from "react";
import Modal from "../components/Modal"; // Import the Modal component

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
    <div className="min-h-screen bg-gray-100 relative">
      {/* Black Bar at the Top */}
      <div className="w-full h-[136px] left-0 top-0 absolute bg-black z-0" />

      {/* FAQ Section */}
      <div className="relative max-w-[1440px] mx-auto px-4 pt-[250px]">
        {/* FAQ Section Title */}
        <div>
          <div className="text-[#090909] text-[65px] font-bold font-['Playfair'] leading-none">
            Frequently Asked Questions
          </div>
        </div>

        {/* FAQ Section Intro */}
        <div className="mt-4">
          <div className="text-[17px] text-black font-normal font-['Inter'] mb-8 w-[1198px]">
            Welcome to our FAQ page! Here, we've compiled answers to the most common questions we receive from our customers. Whether you're new to our services or a long-time client, we hope you find this resource helpful. If your question isn't listed here, please don't hesitate to contact our support team for further assistance.
          </div>
        </div>

        {/* First Row of FAQ Entries */}
        <div className="flex items-start gap-[90px] pt-[90px]">
          <div className="w-[539px] flex flex-col gap-[17px]">
            <div className="w-[125px] h-[26px] flex items-center justify-center text-white text-[15px] font-bold font-['Inter'] bg-[#06a416] rounded">
              Most Asked
            </div>
            <div className="text-[#1f1f1f] text-[22px] font-semibold font-['Inter']">
              What can I expect for my consultation?
            </div>
            <div className="text-black text-[17px] font-normal font-['Inter']">
              Your consultation will be about 75 minutes (that is what you are booked for but may be longer or shorter depending on individual issues) so that the doctor can do a comprehensive assessment and have time to discuss findings directly with you as well as treatment options...
            </div>
            <div
              className="text-black text-[17px] font-semibold font-['Inter'] underline cursor-pointer"
              onClick={() =>
                openModal(
                  "What can I expect for my consultation?",
                  `
                  1) Your consultation will be about 75 minutes (that is what you are booked for but may be longer or shorter depending on individual issues) so that the doctor can do a comprehensive assessment and have time to discuss findings directly with you as well as treatment options. \n\n

                  2) Please let the office know as soon as possible if you need to rebook your consultation Monday to Friday 9-3:30pm and at least 24 business hours before to avoid a No Show fee of $300. Access to a psychiatric consultation is quite difficult in Southwestern Ontario and some people wait over a year to see a psychiatrist, and thus cancelling your consultation slot ahead of time will allow the doctor to provide the slot to someone else who can use it. Please be considerate to other people as many people need the psychiatric consultation but due to limited resources are forced to wait much longer than they should. \n\n

                  3) The doctor will ask you many questions about who you are as a person, your childhood, upbringing, work and family situation, medical health, family and medications and past psychiatric history to understand who you are, what is happening and what the diagnoses are. Mental health concerns are "biopsychosocial" meaning that even though your brain maybe wired a certain way to present with anxiety, certain life situations may have triggered or made it worse. \n\n
                  `
                )
              }
            >
              Read More
            </div>
          </div>

          {/* Vertical Divider */}
          <div className="h-[228px] w-[0.5px] bg-gray-400 mx-auto"></div>

          <div className="w-[539px] flex flex-col gap-[17px]">
            <div className="w-[125px] h-[26px] flex items-center justify-center text-white/0 text-[15px] font-bold font-['Inter']"></div>
            <div className="text-[#1f1f1f] text-[22px] font-semibold font-['Inter']">Fees</div>
            <div className="text-black text-[17px] font-normal font-['Inter']">
              Your consultation will be about 75 minutes (that is what you are booked for but may be longer or shorter depending on individual issues) so that the doctor can do a comprehensive assessment and have time to discuss findings directly with you as well as treatment options...
            </div>
            <div
              className="text-black text-[17px] font-semibold font-['Inter'] underline cursor-pointer"
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
        <div className="flex items-start gap-[90px] mt-[100px]">
          <div className="w-[539px] flex flex-col gap-[17px]">
            <div className="w-[125px] h-[26px] flex items-center justify-center text-white/0 text-[15px] font-bold font-['Inter']"></div>
            <div className="text-[#1f1f1f] text-[22px] font-semibold font-['Inter']">
              What can I expect for my consultation?
            </div>
            <div className="text-black text-[17px] font-normal font-['Inter']">
              Your consultation will be about 75 minutes (that is what you are booked for but may be longer or shorter depending on individual issues) so that the doctor can do a comprehensive assessment and have time to discuss findings directly with you as well as treatment options...
            </div>
            <div
              className="text-black text-[17px] font-semibold font-['Inter'] underline cursor-pointer"
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
          <div className="h-[228px] w-[0.5px] bg-gray-400 mx-auto"></div>

          <div className="w-[539px] flex flex-col gap-[17px]">
            <div className="w-[125px] h-[26px] flex items-center justify-center text-white/0 text-[15px] font-bold font-['Inter']"></div>
            <div className="text-[#1f1f1f] text-[22px] font-semibold font-['Inter']">
              What can I expect for my consultation?
            </div>
            <div className="text-black text-[17px] font-normal font-['Inter']">
              Your consultation will be about 75 minutes (that is what you are booked for but may be longer or shorter depending on individual issues) so that the doctor can do a comprehensive assessment and have time to discuss findings directly with you as well as treatment options...
            </div>
            <div
              className="text-black text-[17px] font-semibold font-['Inter'] underline cursor-pointer"
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

        {/* Third Row of FAQ Entries */}
        <div className="flex items-start gap-[90px] mt-[100px]">
          <div className="w-[539px] flex flex-col gap-[17px]">
            <div className="w-[125px] h-[26px] flex items-center justify-center text-white/0 text-[15px] font-bold font-['Inter']"></div>
            <div className="text-[#1f1f1f] text-[22px] font-semibold font-['Inter']">
              What can I expect for my consultation?
            </div>
            <div className="text-black text-[17px] font-normal font-['Inter']">
              Your consultation will be about 75 minutes (that is what you are booked for but may be longer or shorter depending on individual issues) so that the doctor can do a comprehensive assessment and have time to discuss findings directly with you as well as treatment options...
            </div>
            <div
              className="text-black text-[17px] font-semibold font-['Inter'] underline cursor-pointer"
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
          <div className="h-[228px] w-[0.5px] bg-gray-400 mx-auto"></div>

          <div className="w-[539px] flex flex-col gap-[17px]">
            <div className="w-[125px] h-[26px] flex items-center justify-center text-white/0 text-[15px] font-bold font-['Inter']"></div>
            <div className="text-[#1f1f1f] text-[22px] font-semibold font-['Inter']">
              What can I expect for my consultation?
            </div>
            <div className="text-black text-[17px] font-normal font-['Inter']">
              Your consultation will be about 75 minutes (that is what you are booked for but may be longer or shorter depending on individual issues) so that the doctor can do a comprehensive assessment and have time to discuss findings directly with you as well as treatment options...
            </div>
            <div
              className="text-black text-[17px] font-semibold font-['Inter'] underline cursor-pointer"
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

      {/* Modal Component */}
      <Modal isOpen={isModalOpen} onClose={closeModal} title={modalTitle}>
        {modalContent}
      </Modal>
    </div>
  );
};

export default Faq;
