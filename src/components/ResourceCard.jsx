import PropTypes from "prop-types";

const ResourceCard = ({ title, image, link, size }) => {
  const cardSize =
    size === "large"
      ? "w-full md:w-[450px] md:h-[408px] lg:w-[612px] h-[100px] md:h-[400px] lg:h-[550px]"
      : "w-[450px] h-[408px]";

  return (
    <div
      className={`relative ${cardSize} rounded-lg overflow-hidden bg-cover bg-center md:bg-center ${image}`}
    >
      <div className="absolute inset-0 flex flex-row md:flex-col justify-between md:justify-center items-center md:items-start p-8">
        <h2 className="text-white text-[21px] md:text-[44px] lg:text-[60px] font-playfair text-left">
          {title}
        </h2>
        <a
          href={link}
          className="text-white text-[14px] sm:text-md md:text-lg underline text-left py-4"
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
