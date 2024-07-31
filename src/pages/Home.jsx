import { useState } from "react";
import SearchBar from "../components/SearchBar";

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    //Top page

    <div>
      <div className="flex flex-col min-h-screen bg-page-one bg-cover bg-center">
        <div className="flex justify-center">
          <h2>**Nav Bar Here**</h2>
        </div>

        <div className="flex flex-grow flex-col items-center justify-center">
          <div className="w-[261px]">
            <h1 className="w-full text-center text-white text-[90.17px] font-extrabold font-playfair mb-2">
              WLNS
            </h1>
            <h4 className="w-full text-center text-white text-3xl font-extralight font-inter mb-8">
              The Wellness Hub
            </h4>
          </div>

          <SearchBar />
          <a
            href=""
            className="text-center text-white text-[19px] font-light font-['Inter'] underline m-8 pb-4"
          >
            Explore More
          </a>
        </div>
      </div>

      <div className="flex flex-col min-h-screen bg-page-two bg-cover bg-center p-6">
        <div className="flex flex-grow flex-col items-center justify-center mx-12 my-12">
          <div className="w-3/4 flex flex-grow flex-col items-start justify-center">
            <div className="w-[1014px] text-white text-[71px] font-extrabold font-playfair leading-[67.45px] mb-4">
              Sunrise Health & Clinical Excellence Centre
            </div>
            <div className="w-full text-white text-[19px] font-light font-['Inter'] leading-[37px] mt-8">
              Sun rises everyday - and we believe that in mental health and life
              in general - hope and new beginnings are key ingredients to
              wellness. At SUNRISE, not only do we focus on comprehensive
              psychiatric care - but also wellness as both are essential for
              long term well being. Our team is going to be expanding over time
              and currently consists of Dr. Mammoliti and Dr. Eletu. <br />
              <br />
              Being a medical doctor, a consultation with Dr. Mammoliti or Dr.
              Eletu is covered by OHIP as well as ongoing care <br />
              (your health card) if you have OHIP coverage. THERE IS NO CAPACITY
              FOR ONGOING PSYCHIATRIC CARE AT THIS TIME WITH EITHER DOCTOR AND
              CONSULTS ARE AVAILABLE on a limited basis given the demand and
              expertise fields.{" "}
            </div>
            <button
              onClick={handleOpenModal}
              className="mt-4 px-4 py-2 bg-white text-white font-inter rounded text-[#161616] hover:text-white hover:bg-[#161616]"
            >
              Read More
            </button>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
            <h2 className="text-2xl mb-4">More Information</h2>
            <p>
              Detailed information about the services and expertise offered by
              Dr. Mammoliti and Dr. Eletu, including their backgrounds,
              specializations, and availability for consultations.
            </p>
            <button
              onClick={handleCloseModal}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
