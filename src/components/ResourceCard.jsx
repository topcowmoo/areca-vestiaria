import PropTypes from "prop-types";

const ResourceCard = ({ title, image, link }) => {
  return (
    <div
      className={`relative w-[450px] h-[408px] rounded-lg overflow-hidden bg-cover bg-center ${image}`}
    >
      <div className="absolute inset-0 flex flex-col justify-center p-8">
        <h2 className="text-white text-[60px] font-playfair text-left">
          {title}
        </h2>
        <a href={link} className="text-white text-lg underline text-left py-4">
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
};

export default ResourceCard;