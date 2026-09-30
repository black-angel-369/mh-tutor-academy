import { BookOpenCheck, MapPin } from "lucide-react";
import Reveal from "./Reveal.jsx";

function AboutSection() {
  return (
    <section className="section-wrap about-section" id="about">
      <div className="container about-grid">
        <Reveal className="about-copy">
          <p className="eyebrow">ABOUT THE ACADEMY</p>
          <h2>About MH Tutor Academy</h2>
          <p>MH Tutor Academy provides home tuition and beginner-level computer education in Peshawar, with online classes available for students outside the city.</p>
          <p>Our focus is on clear explanations, practical learning and student-friendly teaching—so students can build understanding one step at a time.</p>
          <div className="about-location"><MapPin size={18} /><span>Peshawar, Khyber Pakhtunkhwa, Pakistan</span></div>
        </Reveal>
        <Reveal className="about-note" delay={0.12}>
          <div className="about-note-icon"><BookOpenCheck size={25} /></div>
          <p className="about-quote">“Clear explanations. Practical learning. A welcoming place to grow.”</p>
          <span className="about-note-rule" />
          <p className="about-note-caption">Home tuition & beginner computer education</p>
        </Reveal>
      </div>
    </section>
  );
}

export default AboutSection;
