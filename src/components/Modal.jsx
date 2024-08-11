import { IoCloseSharp } from "react-icons/io5";

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center">
      <div className="relative w-[957px] h-[473px] bg-white/80 bg-opacity-50 rounded-[18px] p-6">
        <IoCloseSharp
          className="absolute top-4 right-4 cursor-pointer w-8 h-8 text-black"
          onClick={onClose}
        />
        <h2 className="text-center text-black text-[40px] font-extrabold font-playfair mb-4">
          {title}
        </h2>
        <div
          className="bg-white/80 rounded-[18px] mb-4 p-6"
          style={{ boxShadow: 'inset 0px 4px 8px rgba(0, 0, 0, 0.1)' }}
        >
          <div className="text-[#1e1e1e] text-[18px] font-normal font-inter leading-[37px]">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
