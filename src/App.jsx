import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LegalDisclosure from './components/LegalDisclosure';
import { ModalProvider } from './context/ModalContext'; // Import the ModalProvider

function App() {
  return (
    <ModalProvider>
      {/* The LegalDisclosure modal will pop up on the first visit */}
      <LegalDisclosure />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </ModalProvider>
  );
}

export default App;
