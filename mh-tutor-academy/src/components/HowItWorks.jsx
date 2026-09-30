import { motion, useReducedMotion } from "motion/react";
import Reveal from "./Reveal.jsx";
import SectionHeading from "./SectionHeading.jsx";
import { steps } from "../data/content.js";

function HowItWorks() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="section-wrap process-section">
      <div className="container">
        <Reveal><SectionHeading eyebrow="SIMPLE NEXT STEPS" title="How It Works" description="Getting started is a conversation. Here's what to expect." /></Reveal>
        <div className="process-list">
          <motion.span
            className="process-connector"
            aria-hidden="true"
            initial={reduceMotion ? false : { scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: reduceMotion ? 0 : 0.9, delay: reduceMotion ? 0 : 0.12, ease: [0.22, 1, 0.36, 1] }}
          />
          {steps.map(({ title, description }, index) => (
            <Reveal key={title} delay={reduceMotion ? 0 : index * 0.075} className="process-item">
              <div className="process-number">{String(index + 1).padStart(2, "0")}</div>
              <div className="process-copy"><h3>{title}</h3><p>{description}</p></div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
