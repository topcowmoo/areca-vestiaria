import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchSubmit = (query) => {
    setSearchQuery(query);
  };

  return (
    <>
      <Navbar />
      <main>
        <Outlet context={{ searchQuery, handleSearchSubmit }} />
      </main>
      <Footer />
    </>
  );
}

export default App;
