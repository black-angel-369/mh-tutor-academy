import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { academy, tuitionOptions } from "../data/content.js";
import Reveal from "./Reveal.jsx";
import SectionCta from "./SectionCta.jsx";
import SectionHeading from "./SectionHeading.jsx";

function TuitionSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="section-wrap tuition-section" id="tuition">
      <div className="container">
        <Reveal><SectionHeading eyebrow="HOME TUITION" title="Home Tuition That Fits Your Child" description="Personalized learning support at home in Peshawar, shaped around the student's class and learning needs." /></Reveal>
        <div className="card-grid tuition-grid">
          {tuitionOptions.map(({ title, description, detail, icon: Icon, tone }, index) => (
            <Reveal key={title} delay={index * 0.07}>
              <motion.article
                className="service-card tuition-card"
                whileHover={reduceMotion ? undefined : "hover"}
                whileTap={reduceMotion ? undefined : { scale: 0.99 }}
                variants={{ hover: { y: -4, scale: 1.01, boxShadow: "0 16px 34px rgba(18, 42, 83, 0.095)" } }}
                transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              >
                <motion.div
                  className={`icon-box icon-box--${tone}`}
                  variants={{ hover: { scale: 1.07, rotate: -4 } }}
                  transition={{ duration: 0.2 }}
                ><Icon size={23} strokeWidth={1.8} /></motion.div>
                <p className="card-kicker">{detail}</p>
                <h3>{title}</h3>
                <p className="card-description">{description}</p>
                <a
                  className="card-link"
                  href={`${academy.whatsapp}?text=${encodeURIComponent(`Hello MH Tutor Academy, I'd like to discuss ${title} home tuition.`)}`}
                  target="_blank"
                  rel="noreferrer"
                >Discuss Tuition <ArrowUpRight size={16} /></a>
              </motion.article>
            </Reveal>
          ))}
        </div>
        <SectionCta
          title="Looking for a tutor for your child?"
          buttonLabel="Discuss Tuition"
          message="Hello MH Tutor Academy, I'd like to discuss home tuition for my child."
        />
      </div>
    </section>
  );
}

export default TuitionSection;
