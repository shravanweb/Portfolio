import React, { useRef } from 'react';
import { ThemeToggleProvider } from './ThemeToggleProvider';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../header/navbar';
import Aboutus from '../pages/aboutus';
import ServicesSection from '../pages/services';
import BackToTop from '../pages/backtotop';
import Contact from '../pages/footer';
import Herosection from '../pages/herosection';
import SkillsSection from '../pages/skills';
import Projects from '../pages/projects';
import CustomCursor from '../pages/customcursor';
import TermsAndConditions from '../pages/TermsAndConditions';
import PrivacyPolicy from '../pages/PrivacyPolicy';
import ContactPage from '../pages/ContactPage';
import AboutPage from '../pages/AboutPage';
import Disclaimer from '../pages/Disclaimer';
import CookiePolicy from '../pages/CookiePolicy';

const HomePage = ({ scrollToSection, homeRef, aboutRef, skillsRef, servicesRef, projectsRef, contactRef }) => {
  return (
    <>
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
    </>
  );
};

const MainContent = ({ scrollToSection, homeRef, aboutRef, skillsRef, servicesRef, projectsRef, contactRef }) => {
  return (
    <Routes>
      <Route 
        path="/" 
        element={
          <HomePage 
            scrollToSection={scrollToSection}
            homeRef={homeRef}
            aboutRef={aboutRef}
            skillsRef={skillsRef}
            servicesRef={servicesRef}
            projectsRef={projectsRef}
            contactRef={contactRef}
          />
        } 
      />
      <Route path="/terms" element={<TermsAndConditions />} />
      <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
      <Route path="/privacy" element={<PrivacyPolicy />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/contact-us" element={<ContactPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/about-us" element={<AboutPage />} />
      <Route path="/disclaimer" element={<Disclaimer />} />
      <Route path="/cookie-policy" element={<CookiePolicy />} />
      <Route path="/cookies" element={<CookiePolicy />} />
      <Route 
        path="*" 
        element={
          <HomePage 
            scrollToSection={scrollToSection}
            homeRef={homeRef}
            aboutRef={aboutRef}
            skillsRef={skillsRef}
            servicesRef={servicesRef}
            projectsRef={projectsRef}
            contactRef={contactRef}
          />
        } 
      />
    </Routes>
  );
};

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
        <MainContent 
          scrollToSection={scrollToSection}
          homeRef={homeRef}
          aboutRef={aboutRef}
          skillsRef={skillsRef}
          servicesRef={servicesRef}
          projectsRef={projectsRef}
          contactRef={contactRef}
        />
        <BackToTop />
      </Router>
    </ThemeToggleProvider>
  );
};

export default App;
