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
      <div className="relative max-w-[1440px] mx-auto px-12 pt-[150px] sm:pt-[200px] lg:pt-[250px]">
        {/* FAQ Section Title */}
        <div className="text-left">
          <div className="text-[#090909] text-[32px] sm:text-[45px] lg:text-[65px] font-bold font-['Playfair'] leading-tight lg:leading-none">
            Frequently Asked Questions
          </div>
        </div>

        {/* FAQ Section Intro */}
        <div className="mt-4">
          <div className="text-[15px] sm:text-[17px] text-black font-normal font-['Inter'] mb-8 w-full lg:mx-0">
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
              Sunrise has a ZERO TOLERANCE policy for violence. Any Physical, verbal or emotional abuse or threatening behavior towards the doctor or staff will not be tolerated and the person committing such acts will not be seen and will be discharged automatically from the practice and security and the police will be called in such situations. Legal charges will be pressed and cost of any property damage will be pursued. Everyone deserves a safe work environment.
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
                      2) The doctor will ask you many questions about who you are as a person, your childhood, upbringing, work and family situation, medical health, family and medications and past psychiatric history to understand who you are, what is happening and what the diagnoses are. Mental health concerns are biopsychosocial meaning that even though your brain maybe wired a certain way to present with anxiety, certain life situations may have triggered or made it worse.
                    </p>
                    <p style={{ marginBottom: "20px" }}>
                      3) Please bring a list of all your medications or the bottles or a pharmacy print out, including any supplements you may be taking.
                    </p>
                    <p style={{ marginBottom: "20px" }}>
                      4) AT THIS TIME ONLY, virtual care is offered via OTN. PLEASE check your links and ensure it is working or follow instructions to contact the office. 
                    </p>
                    <p style={{ marginBottom: "20px" }}>
                      5) The doctors hate being late, however many various issues/hospital phone call or emergency calls can happen during the booked day as well as patients who are quite ill could need to be sent to the hospital or patient distress that goes past the booked time or technological issues may arise. Thus at times, the doctors will run late and will attempt to give patients as much notice as possible electronically but there are times this is not possible. We hope you understand that the doctors try their best to be on time but they attend to each patients unique needs equally which puts them behind sometimes.   
                    </p>
                    <p style={{ marginBottom: "20px" }}>
                      6) At this time, SUNRISE uses the OCEAN program for secure email communication to book consultations thus it is important to provide your confidential working email and phone number and/or provide concent with your referral whom we can speak with to book the appointment on your behalf. You will be sent some forms to complete before the consultation and it is important you complete them to your best ability.   
                    </p>
                    <p style={{ marginBottom: "20px" }}>
                      7) Please feel free to write down and ask any questions during your consultation. This is your health and you should feel comfortable to ask your doctor the questions you have.   
                    </p>
                    <p style={{ marginBottom: "20px" }}>
                      8)  The doctors are very aware of what skills they have and what they dont. If your case presents with a problem that they are not experienced with or may not be able to help with - they will advise you so. Just like a surgeon may be able to do a particular surgery on one patient for one issue but not for another issue, a psychiatrist maybe able to provide care for one issue but may not have the expertise for another issue. Taking on a patient for which a doctor is not experienced to treat is unethical and can cause harm to the patient this if the doctors feel your case is outside of their expertise they will advise you of such.   
                    </p>
                    <p style={{ marginBottom: "20px" }}>
                      9)  We have seen patients across Ontario and pride ourselves in not limiting access to psychiatric consultation to Southern Ontario only - if you are outside the GTA - we will gladly see you virtually.  
                    </p>
                    <p style={{ marginBottom: "20px" }}>
                      10)  For moms/parents - if you cannot secure childcare during the appointment - we totally understand - you are more than welcome to breastfeed during the virtual appointment, or attend to childcare as needed and we will do our best to do the consultation. Parenting/childcare should never be a barrier to your care and mental wellness.   
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
            <div className="text-[#1f1f1f] text-[20px] sm:text-[22px] font-semibold font-['Inter']">What fees do I need to know about?</div>
            <div className="text-black text-[15px] sm:text-[17px] font-normal font-['Inter']">
            Being a medical doctor, a consultation with Dr. Mammoliti is covered by OHIP as well as ongoing care ( your health card ) if you have OHIP coverage. THERE IS NO CAPICAITY FOR ONGOING PSYCHIATRIC CARE AT THIS TIME WITH THE DOCTOR. Consults are available on a LIMITED BASIS, given the demand and expertise in the specific fields.
            </div>
            <div
              className="text-black text-[15px] sm:text-[17px] font-semibold font-['Inter'] underline cursor-pointer"
              onClick={() =>
                openModal(
                  "What fees do I need to know about?",
                  <div>
                    <p style={{ marginBottom: "20px" }}>
                      1) NO SHOW and LATE FEES are not covered by OHIP and will be charged directly to the patient. FEES ARE SUBJECT TO CHANGE AND WILL BE UPDATED WHEN CHANGED. 
                    </p>
                    <p style={{ marginBottom: "20px" }}>
                      2) NO SHOW FEES will be charged if there is no 24 business hours cancellation notice (emergencies/hospitalization/special circumstances will be considered)
                    </p>
                    <p style={{ marginBottom: "20px" }}>
                      3) Consultation NO SHOW FEE - $300 (without 24 business hours cancellation notice)
                      <br /> 
                      <div style={{ paddingLeft: "23px" }}>
                      Regular/Therapy Appointment NO SHOW FEE $175
                      </div>
                      <div style={{ paddingLeft: "23px" }}>
                      Medication Check Appointment NO SHOW FEE $86
                      </div>
                      <div style={{ paddingLeft: "23px" }}>
                      Late FEE of more than 15 minutes (weather permitting/special circumstances) $80
                      </div>
                      <div style={{ paddingLeft: "23px" }}>
                      Insurance Forms $100-150
                      </div>
                      <div style={{ paddingLeft: "23px" }}>
                      Simple Work/School Notes $40-60
                      </div>
                      <div style={{ paddingLeft: "23px" }}>
                      Chart Copies - $30/each 50 pages 
                      </div>
                      <div style={{ paddingLeft: "23px" }}>
                      Prescription Refill $10/script outside of appointments
                      </div>
                      < br />
                      <p style={{ marginBottom: "20px" }}>
                      4) Other non-OHIP covered services should be discussed directly with the office
                    </p>
                      <p style={{ marginBottom: "20px" }}>
                      5) OHIP ONLY covers treatment-focused consultations and that is what Dr. Mammoliti provides for patients referred by their Family Doctors.
                    </p>
                      <p style={{ marginBottom: "20px" }}>
                      6) Dr. Mammoliti does not provide capacity assessments, CAS parental capacity assessments, forensic assessments or ODSP disability determining assessments.
                    </p>
                    </p>
                  </div>
                  
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
              What policies should I be aware of?
            </div>
            <div className="text-black text-[15px] sm:text-[17px] font-normal font-['Inter']">
              It&apos;s important to be aware of the clinic&apos;s policies regarding confidentiality, legal obligations, and the services provided. Dr.Mammoliti follows strict guidelines to ensure the safety and privacy of all patients, while adhering to mandatory reporting laws and offering a range of psychiatric services.
            </div>
            <div
              className="text-black text-[15px] sm:text-[17px] font-semibold font-['Inter'] underline cursor-pointer"
              onClick={() =>
                openModal(
                  "What policies should I be aware of?",
                  <div> 
                     <p style={{ marginBottom: "20px" }}>
                      1) As doctors licensed in Ontario, certain laws must be followed. If there is a concern about abuse or neglect of a child under the age of 18, she is obligated to report to CAS by law. If there are concerns about driving safety, she is by law obligated to report to the Ministry of Transportation. If you are planning to hurt someone, the doctor is obligatged to report that. If you are in a sexual relationship with a healthcare provider, the doctor is obligated to report that. The doctor is also obligated to report certain issues under federal laws for railway conductors and pilots. 
                    </p>
                     <p style={{ marginBottom: "20px" }}>
                      2) Dr. Mammoliti does not provide capacity assessments, CAS parental capacity assessments, forensic assessments or ODSP disability determining assessments.
                    </p>
                     <p style={{ marginBottom: "20px" }}>
                      3) Please note, unless the doctors have expressed consent by the patient, they cannot provide information/book appointments with other individuals due to confidentiality. If you are a concerned relative or partner - please take your relative to the nearest ER if this is a safety/suicide/harm to others situation or you can leave information that the doctor can discuss with the patient directly (but the source of the information will be revealed.)
                    </p>
                     <p style={{ marginBottom: "20px" }}>
                      4) The doctors hate being late, however many various issues/hospital phone call or emergency calls can happen during the booked day as well as patients who are quite ill could need to be sent to the hospital or patient distress that goes past the booked time or technological issues may arise. Thus at times, the doctors will run late and will attempt to give patients as much notice as possible electronically but there are times this is not possible. We hope you understand that the doctors try their best to be on time but they attend to each patients unique needs equally which puts them behind sometimes.
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
            <div className="text-[#1f1f1f] text-[20px] sm:text-[22px] font-semibold font-['Inter']">
              What should I do in case of an emergency?
            </div>
            <div className="text-black text-[15px] sm:text-[17px] font-normal font-['Inter']">
              In urgent situations, it&apos;s crucial to know where to seek immediate help. Whether you&apos;re dealing with a mental health emergency or need urgent physchiatric care, there are resources available to support you. Here&apos;s what you need to know about accessing emergency services.
            </div>
            <div
              className="text-black text-[15px] sm:text-[17px] font-semibold font-['Inter'] underline cursor-pointer"
              onClick={() =>
                openModal(
                  "What should I do in case of an emergency or urgent care need?",
                  <div> 
                     <p style={{ marginBottom: "20px" }}>
                       If you are suicidal or do not feel safe or have a plan/thoughts to hurt others, please proceed to your nearest Emergency Department. If you are in London, LHSC at Commissioners Rd East and Wellington has the 24hr Psychiatric Emergyency Service within the ER so you can be seen there for immediate concerns. You may also check out CMHA Crisis Center at 648 Huron St In London. Additionally online service <a href= "http://reachout247.ca/" target="_blank" rel="noopener noreferrer" className = "text-blue-600 hover:underline" >http://reachout247.ca/</a>  can be helpful in situations where you are not suicidal or homicidal
                    </p>
                  </div>
                  
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
