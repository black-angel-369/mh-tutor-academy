import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { academy, navigation } from "../data/content.js";

function Footer() {
  const isTutorPage = window.location.pathname.includes("become-a-tutor");
  const homeHref = (hash) => `${isTutorPage ? (import.meta.env.BASE_URL.endsWith("/") ? import.meta.env.BASE_URL : `${import.meta.env.BASE_URL}/`) : ""}${hash}`;
  const getNavigationHref = (href) => (
    href.startsWith("#") ? homeHref(href) : `${import.meta.env.BASE_URL === "/" ? "/" : import.meta.env.BASE_URL}${href}`
  );

  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-brand">
          <a className="brand brand--footer" href={homeHref("#home")}>
            <span className="brand-mark" aria-hidden="true"><span>MH</span></span>
            <span className="brand-name">MH Tutor <strong>Academy</strong></span>
          </a>
          <p>Personalized learning support and beginner-friendly computer education in Peshawar and online.</p>
          <a className="footer-whatsapp" href={academy.whatsapp} target="_blank" rel="noreferrer">Chat on WhatsApp <ArrowUpRight size={15} /></a>
        </div>
        <div className="footer-column">
          <h2>Quick Links</h2>
          {navigation.map(({ label, href }) => <a key={href} href={getNavigationHref(href)}>{label}</a>)}
        </div>
        <div className="footer-column">
          <h2>Services</h2>
          <a href={homeHref("#tuition")}>Home Tuition</a>
          <a href={homeHref("#courses")}>Computer Courses</a>
          <a href={homeHref("#online")}>Online Classes</a>
          <a href={homeHref("#enrollment")}>Enrollment Inquiry</a>
        </div>
        <div className="footer-column footer-contact">
          <h2>Get in Touch</h2>
          <a href={`tel:${academy.phoneLink}`}><Phone size={15} />{academy.phone}</a>
          <a href={`mailto:${academy.email}`}><Mail size={15} />{academy.email}</a>
          <p><MapPin size={15} />{academy.location}</p>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} MH Tutor Academy. All rights reserved.</p>
        <a href={homeHref("#home")}>Back to top ↑</a>
      </div>
    </footer>
  );
}

export default Footer;
