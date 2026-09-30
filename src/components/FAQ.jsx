import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Plus } from "lucide-react";
import { faqs } from "../data/content.js";
import Reveal from "./Reveal.jsx";
import SectionHeading from "./SectionHeading.jsx";

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const reduceMotion = useReducedMotion();

  return (
    <section className="section-wrap faq-section" id="faq">
      <div className="container faq-container">
        <Reveal><SectionHeading eyebrow="GOOD TO KNOW" title="Frequently Asked Questions" description="A few helpful answers about tuition, courses and getting started." /></Reveal>
        <div className="faq-list">
          {faqs.map(({ question, answer }, index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-panel-${index}`;
            return (
              <Reveal key={question} delay={index * 0.025}>
                <article className={`faq-item${isOpen ? " is-open" : ""}`}>
                  <h3>
                    <button
                      className="faq-question"
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                    >
                      <span>{question}</span>
                      <motion.span className="faq-chevron" animate={{ rotate: isOpen ? 45 : 0 }} transition={{ duration: reduceMotion ? 0 : 0.22, ease: [0.22, 1, 0.36, 1] }}>
                        <Plus size={19} />
                      </motion.span>
                    </button>
                  </h3>
                  <motion.div
                    id={panelId}
                    className="faq-answer"
                    initial={false}
                    animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                    aria-hidden={!isOpen}
                    transition={{ duration: reduceMotion ? 0 : 0.22 }}
                  >
                    <p>{answer}</p>
                  </motion.div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
