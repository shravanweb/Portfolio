import React, { useRef, useEffect } from 'react';
import { ThemeToggleProvider } from './ThemeToggleProvider';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Container } from '@mui/material';
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
import AdSense from '../components/AdSense';

/* ----------------------------------------------------------------
   Reusable AdSense divider — renders a centered ad between sections
   ---------------------------------------------------------------- */
const SectionAd = ({ slot }) => (
    <Container maxWidth="lg" sx={{ py: 1 }}>
        <AdSense adSlot={slot} adFormat="horizontal" />
    </Container>
);

const HomePage = ({ scrollToSection, homeRef, aboutRef, skillsRef, servicesRef, projectsRef, contactRef, scrollToSectionOnMount }) => {
  useEffect(() => {
    if (scrollToSectionOnMount) {
      let retryCount = 0;
      const maxRetries = 10;

      const scrollToTarget = () => {
        let targetRef = null;
        switch (scrollToSectionOnMount) {
          case 'home': targetRef = homeRef; break;
          case 'about': targetRef = aboutRef; break;
          case 'skills': targetRef = skillsRef; break;
          case 'services': targetRef = servicesRef; break;
          case 'projects': targetRef = projectsRef; break;
          case 'contact': targetRef = contactRef; break;
          default: return;
        }

        if (targetRef?.current) {
          targetRef.current.scrollIntoView({ behavior: 'smooth' });
        } else if (retryCount < maxRetries) {
          retryCount++;
          setTimeout(scrollToTarget, 50);
        }
      };

      setTimeout(scrollToTarget, 150);
    }
  }, [scrollToSectionOnMount, homeRef, aboutRef, skillsRef, servicesRef, projectsRef, contactRef]);

  return (
    <>
      <div ref={homeRef}>
        <Herosection />
      </div>

      <div ref={aboutRef}>
        <Aboutus />
      </div>

      {/* Ad between About and Skills */}
      <SectionAd slot="1234567890" />

      <div ref={skillsRef}>
        <SkillsSection />
      </div>

      {/* Ad between Skills and Services */}
      <SectionAd slot="1234567891" />

      <div ref={servicesRef}>
        <ServicesSection />
      </div>

      {/* Ad between Services and Projects */}
      <SectionAd slot="1234567892" />

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
  const location = useLocation();
  const scrollToSectionOnMount = location.state?.scrollTo || null;

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
            scrollToSectionOnMount={scrollToSectionOnMount}
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
            scrollToSectionOnMount={scrollToSectionOnMount}
          />
        } 
      />
    </Routes>
  );
};

const AppContent = () => {
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
    <>
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
    </>
  );
};

const App = () => {
  return (
    <ThemeToggleProvider>
      <CustomCursor/>
      <Router>
        <AppContent />
      </Router>
    </ThemeToggleProvider>
  );
};

export default App;
