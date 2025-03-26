import { IoCloseSharp } from "react-icons/io5";
import PropTypes from "prop-types";

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex items-center justify-center z-50 overflow-y-auto landscape:items-start landscape:pt-8">
    <div
  className="
    relative w-[90%] sm:w-[85%] md:w-[80%] lg:w-[75%] xl:w-[70%]
    max-w-[1100px] bg-white/80 rounded-[18px] mt-14 px-3 sm:px-6 md:px-8 pb-8 shadow-lg
    pt-[clamp(40px,10vh,70px)]
    my-8 md:my-12 landscape:my-4 md:landscape:my-12
    landscape:max-h-[90vh] md:landscape:max-h-[none] overflow-y-auto "
>

        <IoCloseSharp
          className="absolute top-4 right-4 cursor-pointer w-8 h-8 text-black"
          onClick={onClose}
        />
       <h2
          className="text-center text-black font-extrabold font-playfair mb-6"
          style={{
            fontSize: "clamp(12px, 4vw, 40px)",
          }}
        >
          {title}
        </h2>
        <div
  className="
    bg-white
    rounded-[10px]
    shadow-custom-inner
    overflow-y-auto
    max-h-[60vh] sm:max-h-[65vh] md:max-h-[70vh]
    custom-scrollbar
     pt-[10px] pb-[10px] pr-[15px] pl-[15px]
  "
>
    <div className="text-[#1e1e1e] text-sm sm:text-base md:text-[18px] font-normal font-inter leading-[1.8]">
      {children}
    </div>
  </div>
</div>
      </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;
