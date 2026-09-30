import { BookOpen, Laptop, MapPin, Monitor, School } from "lucide-react";
import Reveal from "./Reveal.jsx";

const offers = [
  { label: "Home Tuition", icon: BookOpen },
  { label: "O Levels", icon: School },
  { label: "Computer Courses", icon: Monitor },
  { label: "Online Classes", icon: Laptop },
  { label: "Peshawar", icon: MapPin },
];

function OfferStrip() {
  return (
    <section className="offer-strip" aria-labelledby="offer-strip-heading">
      <div className="container offer-strip-inner">
        <Reveal className="offer-strip-label">
          <p className="offer-strip-eyebrow">MH TUTOR ACADEMY</p>
          <h2 id="offer-strip-heading">What We Offer</h2>
          <p className="offer-strip-description">Learning options in Peshawar and online.</p>
        </Reveal>
        <div className="offer-list">
          {offers.map(({ label, icon: Icon }) => (
            <div className="offer-item" key={label}>
              <span className="offer-item-icon"><Icon size={19} strokeWidth={1.8} aria-hidden="true" /></span>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OfferStrip;
