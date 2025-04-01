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
  className={`
    w-full
    aspect-[1/1]
    rounded-md sm:rounded-[10px] md:rounded-[10px]
    ${card.backgroundClass} relative overflow-hidden
    flex bg-cover bg-center bg-no-repeat
  `}
>
      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col justify-between items-start px-3 py-9 md:px-7 md:py-11 xl:py-32 z-10">
        <div className="flex flex-col gap-5 md:gap-9 lg:gap-11 xl:gap-14 2xl:gap-16">
          {/* Title */}
          <div className="text-white text-md font-extrabold font-playfair md:text-[28px] lg:text-[38px] xl:text-[44px]">
            {category}
          </div>

          {/* Link */}
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

ResourceCard.propTypes = {
  category: PropTypes.string.isRequired,
};

export default ResourceCard;
