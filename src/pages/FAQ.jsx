const Faq = () => {
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
            <div className="text-[#1f1f1f]">Read More</div>
          </div>

          {/* Vertical Divider */}
          <div className="h-[228px] w-[0.5px] bg-gray-400 mx-auto"></div>

          <div className="w-[539px] flex flex-col gap-[17px]">
            <div className="w-[125px] h-[26px] flex items-center justify-center text-white/0 text-[15px] font-bold font-['Inter']"></div>
            <div className="text-[#1f1f1f] text-[22px] font-semibold font-['Inter']">Fees</div>
            <div className="text-black text-[17px] font-normal font-['Inter']">
              Your consultation will be about 75 minutes (that is what you are booked for but may be longer or shorter depending on individual issues) so that the doctor can do a comprehensive assessment and have time to discuss findings directly with you as well as treatment options...
            </div>
            <div className="text-[#1f1f1f]">Read More</div>
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
            <div className="text-[#1f1f1f]">Read More</div>
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
            <div className="text-[#1f1f1f]">Read More</div>
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
            <div className="text-[#1f1f1f]">Read More</div>
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
            <div className="text-[#1f1f1f]">Read More</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
