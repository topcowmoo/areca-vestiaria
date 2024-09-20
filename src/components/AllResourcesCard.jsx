import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const cardData = {
  "ADHD Resources": {
    link: "/adhd-resources",
    backgroundClass: "bg-adhd-page",
  },
  "Parenting Resources": {
    link: "/parenting-resources",
    backgroundClass: "bg-parenting-page",
  },
  "Attachment & Emotions": {
    link: "/attachments-and-emotions",
    backgroundClass: "bg-emotions-page",
  },
  "Couples Resources": {
    link: "/couples-resources",
    backgroundClass: "bg-couples-page",
  },
  "Anger & Shame": {
    link: "/anger-and-shame",
    backgroundClass: "bg-anger-page",
  },
  "Physician Patient": {
    link: "/physician-patient-resources",
    backgroundClass: "bg-physician-page",
  },
  Therapy: {
    link: "/therapy",
    backgroundClass: "bg-therapy-page",
  },
  "Additional Resources": {
    link: "/additional-resources",
    backgroundClass: "bg-additional-page",
  },
};

const AllResourcesCard = ({ category }) => {
  const card = cardData[category];

  return (
    <div
      className={`w-full 
    min-h-[150px] md:min-h-[250px] lg:min-h-[350px] xl:min-h-[450px] 
    rounded-md sm:rounded-[10px] md:rounded-[10px] lg:rounded-[10px] xl:rounded-[10px] 
    ${card.backgroundClass} relative overflow-hidden flex bg-cover bg-center bg-no-repeat
    `}
    >
      {/* Conditionally render Overlay for specific categories */}
      {(category === "Attachment & Emotions" ||
        category === "Therapy" ||
        category === "Physician Patient" ||
        category === "Anger & Shame") && (
        <div className="absolute inset-0 bg-black bg-opacity-60"/>
      )}

      {/* Card Content */}
      <div className="absolute inset-0 flex flex-col justify-between items-start px-3 py-9 md:px-7 md:py-11 z-10 xl:py-32">
        {/* Title Container */}
        <div className="text-white text-md font-extrabold font-playfair md:text-[35px] lg:text-[47px] xl:text-[50px]">
          {category}
        </div>
        
        {/* View All Button Container */}
        <div className="mb-6 sm:mb-6 md:mt-5 lg:mb-16 xl:mb-52">
          <Link
            to={card.link || "#"}
            className="text-white text-[9px] sm:text-[12px] md:text-[18px] lg:text-[20px] xl:text-[22px] font-extrabold font-inter underline"
          >
            View All
          </Link>
        </div>
      </div>
    </div>
  );
};




AllResourcesCard.propTypes = {
  category: PropTypes.string.isRequired,
};


export default AllResourcesCard;
