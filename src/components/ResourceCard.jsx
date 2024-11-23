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

const ResourceCard = ({ category }) => {
  const card = cardData[category];

  return (
    <div
      className={`w-full md:w-[335px] lg:w-[470px] xl:w-[550px] 2xl:w-[700px] ultra-wide:w-[1000px]
    min-h-12 sm:min-h-[95px] md:min-h-[250px] lg:min-h-[350px] xl:min-h-[400px] 2xl:min-h-[475px]
    landscape-iphone-se:w-[452px] landscape-iphone-se:-ml-[45px]
    landscape-surface-duo:-ml-[75px] landscape-surface-duo:w-[516px]
    landscape-galaxy-s8:-ml-[84px] landscape-galaxy-s8:w-[537px]
    rounded-md sm:rounded-[10px] md:rounded-[10px] lg:rounded-[10px] xl:rounded-[10px] 
    relative overflow-hidden flex bg-cover bg-no-repeat full-hd-max:w-[815px]
    ${card.backgroundClass} 
    ${category === "Attachment & Emotions" ? "bg-[center_top_82%]" : ""}
    ${category === "Therapy" ? "bg-[center_top_10%]" : ""}
    ${category === "Physician Patient" ? "bg-[center_top_27%]" : ""}
    ${category !== "Attachment & Emotions" && category !== "Therapy" && category !== "Physician Patient" ? "bg-center" : ""}
    `}
    >
      {/* Card Content */}
      <div className="absolute inset-0 flex md:flex-col justify-between md:justify-evenly md:items-start lg:flex-col lg:items-start lg:px-[55px] lg:py-24 lg:justify-evenly md:px-9 md:py-16 items-center px-4">
        {/* Title */}
        <div className="text-white text-sm sm:text-lg md:text-[34px] lg:text-[50px] xl:text-[58px] 2xl:text-[68px] font-extrabold font-playfair md:break-words md:leading-tight">
          {category}
        </div>
        {/* View All Button */}
        <Link
          to={card.link || "#"}
          className="text-white text-[9px] sm:text-[12px] md:text-[14px] lg:text-[18px] xl:text-[25px] 2xl:text-[30px] font-inter underline md:mt-5"
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
