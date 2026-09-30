import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { academy } from "../data/content.js";
import Reveal from "./Reveal.jsx";

function ContactSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="contact-cta section-wrap" id="contact">
      <div className="container contact-card">
        <motion.span
          className="contact-orb"
          aria-hidden="true"
          initial={reduceMotion ? false : { opacity: 0, x: 24, y: -12 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: reduceMotion ? 0 : 0.8, ease: [0.22, 1, 0.36, 1] }}
        />
        <Reveal className="contact-intro">
          <p className="eyebrow">MH TUTOR ACADEMY · PESHAWAR</p>
          <h2>Let's Start Your Learning Journey</h2>
          <p>Talk with us about home tuition, O Levels support, computer courses or online classes.</p>
        </Reveal>
        <div className="contact-actions">
          <motion.a
            className="button button--whatsapp contact-primary-action"
            href={academy.whatsapp}
            target="_blank"
            rel="noreferrer"
            whileHover={reduceMotion ? undefined : { y: -2 }}
            whileTap={reduceMotion ? undefined : { scale: 0.98 }}
          ><MessageCircle size={18} /> WhatsApp Us</motion.a>
          <motion.a
            className="button button--call contact-primary-action"
            href={`tel:${academy.phoneLink}`}
            whileHover={reduceMotion ? undefined : { y: -2 }}
            whileTap={reduceMotion ? undefined : { scale: 0.98 }}
          ><Phone size={18} /> Call {academy.phone}</motion.a>
          <a className="contact-email" href={`mailto:${academy.email}`}><Mail size={16} /> Email {academy.email}</a>
        </div>
        <div className="contact-location"><MapPin size={16} />{academy.location}</div>
      </div>
    </section>
  );
}

export default ContactSection;
