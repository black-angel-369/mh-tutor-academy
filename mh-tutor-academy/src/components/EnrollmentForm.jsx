import { useState } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { academy } from "../data/content.js";

const initialValues = { name: "", phone: "", interest: "" };

const interests = [
  "Home Tuition — Nursery / Primary",
  "Home Tuition — Middle classes",
  "Home Tuition — Matric",
  "O Levels",
  "Introduction to ICT",
  "Web Development",
  "Using AI for Benefits",
  "Introduction to Cyber Security",
  "Online Classes",
];

function EnrollmentForm() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const details = [
    `Name: ${values.name.trim()}`,
    `Phone: ${values.phone.trim()}`,
    values.interest && `Interested in: ${values.interest}`,
  ].filter(Boolean).join("\n");
  const whatsappHref = `${academy.whatsapp}?text=${encodeURIComponent(
    `Hello MH Tutor Academy,\n\nI'd like to ask about learning options.\n${details}\n\nThank you.`,
  )}`;

  function updateField(event) {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: "" }));
    setSent(false);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const nextErrors = {};
    if (!values.name.trim()) nextErrors.name = "Please enter your name.";

    const phone = values.phone.trim();
    const phoneDigits = phone.replace(/\D/g, "");
    if (!phone) {
      nextErrors.phone = "Please enter your phone number.";
    } else if (!/^\+?[\d\s()-]+$/.test(phone) || phoneDigits.length < 7 || phoneDigits.length > 15) {
      nextErrors.phone = "Please enter a valid phone number.";
    }

    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors);
      setSent(false);
      document.getElementById(Object.keys(nextErrors)[0])?.focus();
      return;
    }

    window.open(whatsappHref, "_blank", "noopener,noreferrer");
    setSent(true);
    setErrors({});
  }

  return (
    <section className="section-wrap enrollment-section" id="enrollment">
      <div className="container enrollment-grid">
        <div className="enrollment-copy">
          <p className="eyebrow eyebrow--light">LET'S GET STARTED</p>
          <h2>Ready to Start Learning?</h2>
          <p>Talk to MH Tutor Academy about home tuition, O Levels support or beginner computer courses.</p>
          <div className="enrollment-points">
            <span><CheckCircle2 size={17} /> Home tuition in Peshawar</span>
            <span><CheckCircle2 size={17} /> Beginner-friendly courses</span>
            <span><CheckCircle2 size={17} /> Online classes available</span>
          </div>
          <p className="enrollment-note">Share your name and phone number to start a WhatsApp inquiry. The interest selector is optional.</p>
        </div>

        <form className="inquiry-form" onSubmit={handleSubmit} noValidate>
          <div className="form-heading"><span>QUICK INQUIRY</span><h3>How can we help?</h3></div>
          <div className="form-grid">
            <div className="form-field">
              <label htmlFor="name">Your Name<span aria-hidden="true"> *</span></label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                placeholder="Enter your name"
                value={values.name}
                onChange={updateField}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? "name-error" : undefined}
              />
              {errors.name && <span className="field-error" id="name-error">{errors.name}</span>}
            </div>
            <div className="form-field">
              <label htmlFor="phone">Phone Number<span aria-hidden="true"> *</span></label>
              <input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                placeholder="e.g. 03XX XXXXXXX"
                value={values.phone}
                onChange={updateField}
                aria-invalid={Boolean(errors.phone)}
                aria-describedby={errors.phone ? "phone-error" : undefined}
              />
              {errors.phone && <span className="field-error" id="phone-error">{errors.phone}</span>}
            </div>
            <div className="form-field form-field--full">
              <label htmlFor="interest">What are you interested in? <span className="optional-label">(optional)</span></label>
              <select id="interest" name="interest" value={values.interest} onChange={updateField}>
                <option value="">Choose a service or course</option>
                {interests.map((interest) => <option key={interest}>{interest}</option>)}
              </select>
            </div>
          </div>
          <button className="button button--primary form-submit" type="submit">Continue to WhatsApp <Send size={16} /></button>
          {sent && <p className="form-success" role="status"><CheckCircle2 size={17} /> Your inquiry is ready in WhatsApp. If it didn't open, <a href={whatsappHref} target="_blank" rel="noreferrer">continue here</a>.</p>}
        </form>
      </div>
    </section>
  );
}

export default EnrollmentForm;
