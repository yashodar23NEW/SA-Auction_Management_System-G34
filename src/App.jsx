import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Footer from './components/footer/footer'; // Capitalize component name
import Allvehicles from './components/AllVehicles/Allvehicles'; 

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar /> 
        <Routes>
          <Route path="/hero" element={<Hero />} />
          <Route path="/allvehicles" element={<Allvehicles />} />
          {/* Add more routes as needed */}
        </Routes>
        <Footer /> {/* Place the Footer outside the Routes */}
      </div>
    </BrowserRouter>
  );
};

export default App;