function HomeContact() {
    return (
      <section
        id="contact-page"
        className="relative flex flex-col h-[80vh] lg:h-[100vh] bg-black"
      >
        {/* Background Layer */}
        <div className="absolute inset-0 w-full h-full z-0">
          <div className="absolute inset-0 w-full h-[62vh] bg-mobile-home-three bg-cover bg-center bg-no-repeat sm:bg-home-three" />
          <div
            className="absolute inset-0 w-full h-[62vh] pointer-events-none"
            style={{
              background:
                "linear-gradient(to bottom, rgba(0, 0, 0, 0) 10%, rgba(0, 0, 0, 0.2) 80%, rgba(0, 0, 0, 1) 100%)",
            }}
          />
        </div>
  
        {/* Content Wrapper */}
        <div className="relative z-10 flex flex-col h-full space-y-6 px-5 sm:px-10 md:px-14 lg:px-20 xl:px-28">
          {/* Contact Heading */}
          <h3 className="text-white text-[22px] sm:text-[38px] md:text-[44px] lg:text-[52px] font-extrabold font-playfair leading-tight mt-10">
            Contact Us
          </h3>
  
          {/* Description Paragraph */}
          <p className="text-white font-inter text-[13px] sm:text-[15px] md:text-[16px] lg:text-[18px] leading-relaxed text-justify max-w-4xl">
            Please note, you will need a referral from your Family Doctor to be referred to Dr. Mammoliti for a consultation. The consultation and ongoing care are covered by OHIP but not the NO SHOW FEE, LATE FEE or other non-insured services.
          </p>
  
          {/* FAQ Heading */}
          <h4 className="text-white font-bold text-[20px] sm:text-[26px] md:text-[32px] font-playfair mt-10">
            Explore some of our FAQ
          </h4>
  
          {/* FAQ Buttons */}
          <div className="flex flex-col items-start space-y-3 font-inter">
            {[
              "What can I expect for a consultation?",
              "What can I expect for general policy?",
              "Missed appointments or service fees?",
            ].map((text, index) => (
              <button
                key={index}
                className="w-full max-w-[720px] bg-white text-black flex justify-between items-center p-3 rounded-lg shadow-md font-bold text-[11px] sm:text-[14px] md:text-[16px]"
              >
                <span className="flex items-center">
                  <img src="/speech.png" alt="Speech bubble" className="w-6 h-6 mr-4" />
                  {text}
                </span>
                <img src="/arrow.png" alt="Arrow" className="w-4 h-4" />
              </button>
            ))}
          </div>
  
          {/* Link to all FAQ */}
          <a
            href="#faq"
            className="text-white underline font-inter text-[14px] sm:text-[16px] mt-6 block"
          >
            See All Frequently Asked Questions
          </a>
        </div>
      </section>
    );
  }
  
  export default HomeContact;