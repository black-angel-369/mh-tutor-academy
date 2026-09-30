import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import OfferStrip from "./components/OfferStrip.jsx";
import TuitionSection from "./components/TuitionSection.jsx";
import CoursesSection from "./components/CoursesSection.jsx";
import OnlineClasses from "./components/OnlineClasses.jsx";
import WhyChooseUs from "./components/WhyChooseUs.jsx";
import HowItWorks from "./components/HowItWorks.jsx";
import AboutSection from "./components/AboutSection.jsx";
import FAQ from "./components/FAQ.jsx";
import EnrollmentForm from "./components/EnrollmentForm.jsx";
import ContactSection from "./components/ContactSection.jsx";
import Footer from "./components/Footer.jsx";
import FloatingWhatsApp from "./components/FloatingWhatsApp.jsx";

function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <OfferStrip />
        <TuitionSection />
        <CoursesSection />
        <OnlineClasses />
        <WhyChooseUs />
        <HowItWorks />
        <AboutSection />
        <FAQ />
        <EnrollmentForm />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}

export default App;
