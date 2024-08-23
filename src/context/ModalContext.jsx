import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const hasSeenModal = sessionStorage.getItem('hasSeenLegalDisclosure');
    if (!hasSeenModal) {
      setIsModalOpen(true);
    }
  }, []);

  const openModal = () => setIsModalOpen(true);

  const closeModal = () => {
    setIsModalOpen(false);
    sessionStorage.setItem('hasSeenLegalDisclosure', 'true');
  };

  return (
    <ModalContext.Provider value={{ isModalOpen, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

// Define prop types for ModalProvider, not ModalContext
ModalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ModalContext;
