import { IoCloseSharp } from "react-icons/io5";

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex items-center justify-center">
      <div className="relative w-full max-w-[1100px] bg-white/80 bg-opacity-50 rounded-[18px] p-8 shadow-lg">
        <IoCloseSharp
          className="absolute top-4 right-4 cursor-pointer w-8 h-8 text-black"
          onClick={onClose}
        />
        <h2 className="text-center text-black text-[40px] font-extrabold font-playfair mb-6">
          {title}
        </h2>
        <div className="bg-white/80 rounded-[18px] p-8 overflow-y-auto shadow-inner max-h-[400px] custom-scrollbar">
          <div className="text-[#1e1e1e] text-[18px] font-normal font-inter leading-[37px]">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
