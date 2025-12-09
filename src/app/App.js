import React, { useRef } from 'react';
import { ThemeToggleProvider } from './ThemeToggleProvider';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../header/navbar';
import Aboutus from '../pages/aboutus';
import ServicesSection from '../pages/services';
import BackToTop from '../pages/backtotop';
import Contact from '../pages/footer';
import Herosection from '../pages/herosection';
import SkillsSection from '../pages/skills';
import Projects from '../pages/projects';
import CustomCursor from '../pages/customcursor';

const App = () => {
  // Create references for each section
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const servicesRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  // Scroll to the referenced section
  const scrollToSection = (section) => {
    switch (section) {
      case 'home':
        homeRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'about':
        aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'skills':
        skillsRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'services':
        servicesRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'projects':
        projectsRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'contact':
        contactRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      default:
        break;
    }
  };

  return (
    <ThemeToggleProvider>
      <CustomCursor/>
      <Router>
        <Navbar scrollToSection={scrollToSection} />
        <div ref={homeRef}>
          <Herosection />
        </div>
        <div ref={aboutRef}>
          <Aboutus />
        </div>
        <div ref={skillsRef}>
          <SkillsSection />
        </div>
        <div ref={servicesRef}>
          <ServicesSection />
        </div>
        <div ref={projectsRef}>
          <Projects />
        </div>
        <div ref={contactRef}>
          <Contact />
        </div>
        <BackToTop />
      </Router>
    </ThemeToggleProvider>
  );
};

export default App;
