import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { academy } from "../data/content.js";
import Reveal from "./Reveal.jsx";

function SectionCta({ title, buttonLabel, message }) {
  const reduceMotion = useReducedMotion();
  const href = `${academy.whatsapp}?text=${encodeURIComponent(message)}`;

  return (
    <Reveal className="section-cta">
      <p>{title}</p>
      <motion.a
        className="button button--primary section-cta-button"
        href={href}
        target="_blank"
        rel="noreferrer"
        aria-label={`${buttonLabel} on WhatsApp`}
        whileHover={reduceMotion ? undefined : { y: -2 }}
        whileTap={reduceMotion ? undefined : { scale: 0.98 }}
      >
        {buttonLabel} <ArrowRight size={16} />
      </motion.a>
    </Reveal>
  );
}

export default SectionCta;
