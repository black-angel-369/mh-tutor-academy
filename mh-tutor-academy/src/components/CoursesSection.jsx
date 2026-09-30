import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { academy, computerCourses } from "../data/content.js";
import Reveal from "./Reveal.jsx";
import SectionCta from "./SectionCta.jsx";
import SectionHeading from "./SectionHeading.jsx";

function CoursesSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="section-wrap courses-section" id="courses">
      <div className="container">
        <Reveal><SectionHeading eyebrow="COMPUTER COURSES" title="Learn Computer Skills for the Digital World" description="Beginner-level courses to help you understand the tools and ideas shaping everyday digital life." /></Reveal>
        <div className="card-grid course-grid">
          {computerCourses.map(({ title, description, icon: Icon, tone }, index) => (
            <Reveal key={title} delay={index * 0.07}>
              <motion.article
                className="service-card course-card"
                whileHover={reduceMotion ? undefined : "hover"}
                whileTap={reduceMotion ? undefined : { scale: 0.99 }}
                variants={{ hover: { y: -4, scale: 1.01, boxShadow: "0 16px 34px rgba(18, 42, 83, 0.095)" } }}
                transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="course-card-header">
                  <motion.div
                    className={`icon-box icon-box--${tone}`}
                    variants={{ hover: { scale: 1.07, rotate: -4 } }}
                    transition={{ duration: 0.2 }}
                  ><Icon size={23} strokeWidth={1.8} /></motion.div>
                  <span className="level-badge"><span /> Beginner Level</span>
                </div>
                <h3>{title}</h3>
                <p className="card-description">{description}</p>
                <a
                  className="card-link"
                  href={`${academy.whatsapp}?text=${encodeURIComponent(`Hello MH Tutor Academy, I'd like to learn more about ${title}.` )}`}
                  target="_blank"
                  rel="noreferrer"
                >Learn More / Enroll <ArrowRight size={16} /></a>
              </motion.article>
            </Reveal>
          ))}
        </div>
        <SectionCta
          title="Start with the Basics. Build Real Digital Skills."
          buttonLabel="Ask About Courses"
          message="Hello MH Tutor Academy, I'd like to ask about your beginner computer courses."
        />
      </div>
    </section>
  );
}

export default CoursesSection;
