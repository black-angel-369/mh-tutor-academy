import { benefits } from "../data/content.js";
import Reveal from "./Reveal.jsx";
import SectionHeading from "./SectionHeading.jsx";

function WhyChooseUs() {
  return (
    <section className="section-wrap benefits-section">
      <div className="container">
        <Reveal><SectionHeading eyebrow="A THOUGHTFUL WAY TO LEARN" title="Learning Support, Built Around You" description="Choose the learning format and support that works for your needs." /></Reveal>
        <div className="card-grid benefit-grid">
          {benefits.map(({ title, description, icon: Icon }, index) => (
            <Reveal key={title} delay={index * 0.07}>
              <article className="benefit-card">
                <span className="benefit-icon"><Icon size={21} strokeWidth={1.8} /></span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
