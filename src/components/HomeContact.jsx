function HomeContact() {
  return (
    <section
    id="contact-page"
    className="relative flex flex-col min-h-screen bg-black landscape-xs:min-h-[130vh] landscape-xs:pb-8"
  >
  
      {/* Background Layer */}
      <div className="absolute inset-0 w-full h-full z-0">
        <div className="absolute inset-0 w-full h-[68vh] bg-mobile-home-three bg-cover bg-center bg-no-repeat sm:bg-home-three landscape-xs:h-[70vh]" />
        <div
          className="absolute inset-0 w-full h-[68vh] pointer-events-none landscape-xs:h-[70vh]"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0, 0, 0, 0) 10%, rgba(0, 0, 0, 0.2) 80%, rgba(0, 0, 0, 1))",
          }}
        />
      </div>

      {/* Content Container aligned like the Resources section */}
      <div className="relative z-10 w-full max-w-[400px] md:max-w-[690px] lg:max-w-[960px] xl:max-w-[1115px] 2xl:max-w-[1420px] mx-auto px-[18px] md:px-[1px] py-12 sm:pb-6">
      <div className="grid md:grid-cols-2 md:gap-x-12 lg:gap-x-16 xl:gap-x-20 gap-y-10">
          {/* Column 1: Contact Heading and Paragraph */}
          <div className="md:pt-20 lg:pt-30 2xl:pt-40">
            <h3 className="text-white text-[22px] sm:text-[38px] md:text-[44px] lg:text-[52px] font-extrabold font-playfair leading-tight">
              Contact Us
            </h3>
            <p className="text-white font-inter text-[13px] sm:text-[15px] md:text-[16px] lg:text-[18px] leading-relaxed text-justify max-w-4xl mt-5">
              Please note, you will need a referral from your Family Doctor to be referred to Dr. Mammoliti for a consultation. The consultation and ongoing care are covered by OHIP but not the NO SHOW FEE, LATE FEE or other non-insured services.
            </p>
          </div>

          {/* Column 2: FAQ Section */}
          <div className="md:pt-20 lg:pt-30 2xl:pt-40">
            <h4 className="text-white font-bold text-[20px] sm:text-[26px] md:text-[32px] font-playfair mb-5">
              Explore some of our FAQ
            </h4>
            <div className="flex flex-col items-start space-y-3 font-inter">
              {[
                "What can I expect for a consultation?",
                "What can I expect for general policy?",
                "Missed appointments or service fees?",
              ].map((text, index) => (
                <a
                  key={index}
                  href="faq"
                  className="w-full bg-white text-black flex justify-between items-center p-3 rounded-lg shadow-md font-bold text-[11px] sm:text-[14px] md:text-[16px]"
                >
                  <span className="flex items-center">
                    <img src="/speech.png" alt="Speech bubble" className="w-6 h-6 mr-4" />
                    {text}
                  </span>
                  <img src="/arrow.png" alt="Arrow" className="w-4 h-4" />
                </a>
              ))}
            </div>

            {/* Link to all FAQ */}
            <a
              href="faq"
              className="text-white underline font-inter text-[14px] sm:text-[16px] mt-6 block"
            >
              See All Frequently Asked Questions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeContact;
