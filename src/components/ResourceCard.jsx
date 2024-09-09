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
    backgroundClass: "bg-testemotion",
  },
  "Couples Resources": {
    link: "/couples-resources",
    backgroundClass: "bg-couples-page",
  },
  "Anger & Shame": {
    link: "/anger-and-shame",
    backgroundClass: "bg-testanger",
  },
  "Physician Patient": {
    link: "/physician-patient-resources",
    backgroundClass: "bg-testtall",
  },
  Therapy: {
    link: "/therapy",
    backgroundClass: "bg-testtherapy",
  },
  "Additional Resources": {
    link: "/additional-resources",
    backgroundClass: "bg-additional-page",
  },
};

const ResourceCard = ({ category }) => {
  const card = cardData[category];

  return (
    <div
      className={`w-full md:w-[400px] lg:w-[590px] xl:w-[612px] 
    min-h-12 sm:min-h-[95px] md:min-h-[550px] lg:min-h-[550px] xl:min-h-[550px] 
    rounded-md sm:rounded-[10px] md:rounded-[10px] lg:rounded-[10px] xl:rounded-[10px] 
    relative overflow-hidden flex bg-cover bg-no-repeat
    ${card.backgroundClass} 
    ${category === "Attachment & Emotions" ? "bg-[center_top_82%]" : ""}
    ${category === "Therapy" ? "bg-[center_top_10%]" : ""}
    ${category === "Physician Patient" ? "bg-[center_top_27%]" : ""}
    ${category !== "Attachment & Emotions" && category !== "Therapy" && category !== "Physician Patient" ? "bg-center" : ""}
    `}
    >
      {/* Conditionally render Overlay for specific categories */}
      {(category === "Attachment & Emotions" ||
        category === "Therapy" ||
        category === "Physician Patient" ||
        category === "Anger & Shame") && (
        <div className="absolute inset-0 bg-black bg-opacity-60" />
      )}

      {/* Card Content */}
      <div className="absolute inset-0 flex md:flex-col justify-between md:justify-evenly md:items-start lg:flex-col lg:items-start lg:px-[61px] lg:py-24 lg:justify-evenly md:px-9 md:py-16 items-center px-4">
        {/* Title */}
        <div className="text-white text-sm sm:text-lg md:text-[50px] lg:text-[71px] xl:text-[75px] font-extrabold font-playfair md:break-words md:leading-tight">
          {category}
        </div>
        {/* View All Button */}
        <Link
          to={card.link || "#"}
          className="text-white text-[9px] sm:text-[12px] md:text-[14px] lg:text-xl xl:text-[25px] font-extrabold font-inter underline md:-mt-11 lg:mt-1 xl:mt-1"
        >
          View All
        </Link>
      </div>
    </div>
  );
};

ResourceCard.propTypes = {
  category: PropTypes.string.isRequired,
};

export default ResourceCard;
