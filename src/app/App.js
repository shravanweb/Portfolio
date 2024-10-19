import React, { Suspense, lazy } from 'react';
import { ThemeToggleProvider } from './ThemeToggleProvider'; // Change to named import
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Herosection from '../pages/herosection';
import "../app/App.css";
import Aboutus from '../pages/aboutus';
import SkillsSection from '../pages/skills';
// Lazy load your components
const Navbar = lazy(() => import('../header/navbar')); // Adjust the path as necessary


const App = () => {
  return (
    <ThemeToggleProvider>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Navbar />
          <Herosection />
          <Aboutus />
          <SkillsSection/>
          <Routes>
            {/* <Route path="/" element={<HomePage />} /> */}
       
            {/* Add more routes as needed */}
          </Routes>
        </Suspense>
      </Router>
    </ThemeToggleProvider>
  );
};

export default App;
