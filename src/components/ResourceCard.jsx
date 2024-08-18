import PropTypes from "prop-types";

const ResourceCard = ({ title, image, link, size }) => {
  const cardSize =
    size === "large"
      ? "w-full md:w-[450px] md:h-[408px] lg:w-[612px] h-[100px] md:h-[400px] lg:h-[550px]"
      : "w-[176px] h-[158px] lg:w-[450px] lg:h-[400px]";

  const cardStyle =
    size === "large"
      ? "flex-row md:flex-col justify-between md:justify-center items-center md:items-start p-8"
      : "flex-col justify-center items-start p-4 md:p-8";

  const cardText =
    size === "large"
      ? "text-[17px] md:text-[44px] lg:text-[60px]"
      : "text-[17px] lg:text-[60px]";

  return (
    <div
      className={`relative ${cardSize} rounded-lg overflow-hidden bg-cover bg-center md:bg-center ${image}`}
    >
      <div className={`absolute inset-0 flex ${cardStyle}`}>
        <h2 className={`text-white ${cardText} font-playfair text-left`}>
          {title}
        </h2>
        <a
          href={link}
          className="text-white text-[11px] sm:text-sm lg:text-lg underline text-left py-2"
        >
          View More
        </a>
      </div>
    </div>
  );
};

ResourceCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  size: PropTypes.oneOf(["large", "small"]), // Add prop type for size
};

export default ResourceCard;
