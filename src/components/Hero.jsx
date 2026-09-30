import { motion, useReducedMotion } from "motion/react";
import { ArrowDown, ArrowRight, BookOpen, GraduationCap, Laptop, Sparkles } from "lucide-react";

const trustPoints = ["Nursery – Matric", "O Levels", "Beginner Computer Courses", "Peshawar + Online"];

function Hero() {
  const reduceMotion = useReducedMotion();
  const itemMotion = reduceMotion
    ? {}
    : { initial: { opacity: 0, y: 18 }, animate: { opacity: 1, y: 0 } };

  return (
    <section className="hero section-wrap" id="home">
      <div className="hero-glow hero-glow--one" aria-hidden="true" />
      <div className="hero-glow hero-glow--two" aria-hidden="true" />
      <div className="container hero-grid">
        <div className="hero-copy">
          <motion.p className="eyebrow hero-eyebrow" {...itemMotion} transition={{ delay: 0.08 }}>
            <span className="eyebrow-dot" /> Learning support in Peshawar & online
          </motion.p>
          <motion.h1 {...itemMotion} transition={{ delay: 0.16 }}>
            Personalized Learning.
            <span> Better Understanding.</span>
            <em> Stronger Results.</em>
          </motion.h1>
          <motion.p className="hero-description" {...itemMotion} transition={{ delay: 0.24 }}>
            Professional home tuition in Peshawar for Nursery to Matric and O Levels, plus beginner-friendly computer courses and online classes.
          </motion.p>
          <motion.div className="hero-actions" {...itemMotion} transition={{ delay: 0.32 }}>
            <motion.a
              className="button button--primary"
              href="#enrollment"
              initial={reduceMotion ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.38, delay: reduceMotion ? 0 : 0.32 }}
              whileHover={reduceMotion ? undefined : { y: -2, scale: 1.02 }}
              whileTap={reduceMotion ? undefined : { scale: 0.97 }}
            >
              Book a Free Consultation <ArrowRight size={17} />
            </motion.a>
            <motion.a
              className="button button--text"
              href="#courses"
              initial={reduceMotion ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.38, delay: reduceMotion ? 0 : 0.4 }}
              whileHover={reduceMotion ? undefined : { y: -2 }}
              whileTap={reduceMotion ? undefined : { scale: 0.97 }}
            >
              Explore Courses <ArrowDown size={16} />
            </motion.a>
          </motion.div>
          <motion.div className="trust-row" {...itemMotion} transition={{ delay: 0.4 }}>
            {trustPoints.map((point) => (
              <span key={point}><span className="trust-check">✓</span>{point}</span>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="hero-art"
          initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: reduceMotion ? 0 : 0.65, delay: 0.2 }}
          aria-label="Illustration of books, a digital lesson board, and learning tools"
          role="img"
        >
          <div className="art-orbit art-orbit--outer" />
          <div className="art-orbit art-orbit--inner" />
          <div className="art-float art-float--cap"><GraduationCap size={28} /></div>
          <div className="art-float art-float--spark"><Sparkles size={21} /></div>
          <motion.div
            className="learning-card"
            animate={reduceMotion ? undefined : { y: [0, -3, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="learning-card-top">
              <div className="learning-card-icon"><BookOpen size={21} /></div>
              <span className="learning-pill">LEARN & GROW</span>
            </div>
            <p className="learning-card-title">Your learning,<br /><span>your journey.</span></p>
            <p>Clear guidance for every step forward.</p>
            <div className="illustration-board">
              <div className="board-window">
                <div className="board-top"><i /><i /><i /></div>
                <div className="board-content">
                  <span className="board-line board-line--long" />
                  <span className="board-line" />
                  <span className="board-block" />
                </div>
              </div>
              <div className="book-stack"><span /><span /><span /></div>
              <div className="plant-shape"><i /><i /><b /></div>
            </div>
            <div className="learning-card-bottom">
              <span><span className="status-dot" /> A supportive place to learn</span>
              <Laptop size={18} />
            </div>
          </motion.div>
          <div className="art-caption"><span className="caption-icon"><BookOpen size={16} /></span><span><strong>Learn with clarity</strong><small>In person or online</small></span></div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
