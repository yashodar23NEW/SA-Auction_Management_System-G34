import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';  
import Allvehicles from './components/AllVehicles/Allvehicles';
import Productdetails from './components/productdetails/productdetails'; // Assuming this component exists

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/hero" element={<Hero />} /> // Set Hero as the default route
          <Route path="/allvehicles" element={<Allvehicles />} />
          <Route path="/productdetails" element={<Productdetails />} />
            
          {/* Add more routes as needed */}
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;