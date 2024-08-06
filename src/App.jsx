// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';



function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <>
    
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      
    </>
  );
}

export default App
