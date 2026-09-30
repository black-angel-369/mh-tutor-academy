import { useState } from "react";
import { ArrowLeft, CheckCircle2, GraduationCap, Send } from "lucide-react";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import FloatingWhatsApp from "./FloatingWhatsApp.jsx";
import { academy } from "../data/content.js";

const initialValues = {
  name: "",
  phone: "",
  email: "",
  teachingAreas: "",
  qualification: "",
  experience: "",
  preferredMode: "",
  message: "",
};

function BecomeTutor() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const applicationDetails = [
    `Name: ${values.name.trim()}`,
    `Phone: ${values.phone.trim()}`,
    values.email.trim() && `Email: ${values.email.trim()}`,
    `Subjects or classes to teach: ${values.teachingAreas.trim()}`,
    `Qualification: ${values.qualification.trim()}`,
    values.experience.trim() && `Teaching experience: ${values.experience.trim()}`,
    values.preferredMode && `Preferred teaching mode: ${values.preferredMode}`,
    values.message.trim() && `Additional information: ${values.message.trim()}`,
  ].filter(Boolean).join("\n");
  const whatsappHref = `${academy.whatsapp}?text=${encodeURIComponent(
    `Hello MH Tutor Academy,\n\nI'd like to apply to become a tutor.\n\n${applicationDetails}\n\nThank you.`,
  )}`;

  function updateField(event) {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: "" }));
    setSubmitted(false);
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

    if (values.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (!values.teachingAreas.trim()) nextErrors.teachingAreas = "Tell us which subjects or classes you can teach.";
    if (!values.qualification.trim()) nextErrors.qualification = "Please enter your qualification.";

    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors);
      setSubmitted(false);
      document.getElementById(`tutor-${Object.keys(nextErrors)[0]}`)?.focus();
      return;
    }

    window.open(whatsappHref, "_blank", "noopener,noreferrer");
    setSubmitted(true);
    setErrors({});
  }

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Navbar />
      <main id="main-content">
        <section className="tutor-application section-wrap" aria-labelledby="tutor-page-title">
          <div className="container tutor-application-grid">
            <div className="tutor-application-copy">
              <a className="tutor-back-link" href={`${import.meta.env.BASE_URL}#home`}>
                <ArrowLeft size={16} aria-hidden="true" /> Back to home
              </a>
              <p className="eyebrow"><span className="eyebrow-dot" />TEACH WITH MH TUTOR ACADEMY</p>
              <h1 id="tutor-page-title">Become a Tutor</h1>
              <p className="tutor-intro">
                Interested in teaching with MH Tutor Academy? Share a little about your background and the subjects or classes you can teach.
              </p>
              <div className="tutor-info-card">
                <span className="tutor-info-icon"><GraduationCap size={22} aria-hidden="true" /></span>
                <div>
                  <h2>Tell us about your teaching profile</h2>
                  <p>Include your areas of teaching, qualification and any relevant experience so we can learn more about your application.</p>
                </div>
              </div>
              <p className="tutor-whatsapp-note">
                Your application details will be prepared in WhatsApp. Review the message there and tap send to submit it.
              </p>
            </div>

            <form className="inquiry-form tutor-form" onSubmit={handleSubmit} noValidate>
              <div className="form-heading">
                <span>TUTOR APPLICATION</span>
                <h2>Introduce yourself</h2>
                <p>Required fields are marked with an asterisk.</p>
              </div>
              <div className="form-grid">
                <div className="form-field">
                  <label htmlFor="tutor-name">Full Name<span aria-hidden="true"> *</span></label>
                  <input id="tutor-name" name="name" type="text" autoComplete="name" placeholder="Your full name" value={values.name} onChange={updateField} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "tutor-name-error" : undefined} />
                  {errors.name && <span className="field-error" id="tutor-name-error">{errors.name}</span>}
                </div>
                <div className="form-field">
                  <label htmlFor="tutor-phone">Phone Number<span aria-hidden="true"> *</span></label>
                  <input id="tutor-phone" name="phone" type="tel" autoComplete="tel" placeholder="e.g. 03XX XXXXXXX" value={values.phone} onChange={updateField} aria-invalid={Boolean(errors.phone)} aria-describedby={errors.phone ? "tutor-phone-error" : undefined} />
                  {errors.phone && <span className="field-error" id="tutor-phone-error">{errors.phone}</span>}
                </div>
                <div className="form-field form-field--full">
                  <label htmlFor="tutor-email">Email Address <span className="optional-label">(optional)</span></label>
                  <input id="tutor-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" value={values.email} onChange={updateField} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "tutor-email-error" : undefined} />
                  {errors.email && <span className="field-error" id="tutor-email-error">{errors.email}</span>}
                </div>
                <div className="form-field form-field--full">
                  <label htmlFor="tutor-teachingAreas">Subjects or Classes You Can Teach<span aria-hidden="true"> *</span></label>
                  <input id="tutor-teachingAreas" name="teachingAreas" type="text" placeholder="e.g. primary classes, O Levels, ICT" value={values.teachingAreas} onChange={updateField} aria-invalid={Boolean(errors.teachingAreas)} aria-describedby={errors.teachingAreas ? "tutor-teachingAreas-error" : undefined} />
                  {errors.teachingAreas && <span className="field-error" id="tutor-teachingAreas-error">{errors.teachingAreas}</span>}
                </div>
                <div className="form-field form-field--full">
                  <label htmlFor="tutor-qualification">Qualification<span aria-hidden="true"> *</span></label>
                  <input id="tutor-qualification" name="qualification" type="text" autoComplete="off" placeholder="Your education or relevant qualification" value={values.qualification} onChange={updateField} aria-invalid={Boolean(errors.qualification)} aria-describedby={errors.qualification ? "tutor-qualification-error" : undefined} />
                  {errors.qualification && <span className="field-error" id="tutor-qualification-error">{errors.qualification}</span>}
                </div>
                <div className="form-field form-field--full">
                  <label htmlFor="tutor-experience">Teaching Experience <span className="optional-label">(optional)</span></label>
                  <input id="tutor-experience" name="experience" type="text" placeholder="Share any relevant experience" value={values.experience} onChange={updateField} />
                </div>
                <div className="form-field form-field--full">
                  <label htmlFor="tutor-preferredMode">Preferred Teaching Mode <span className="optional-label">(optional)</span></label>
                  <select id="tutor-preferredMode" name="preferredMode" value={values.preferredMode} onChange={updateField}>
                    <option value="">Select a preference</option>
                    <option value="Home tuition in Peshawar">Home tuition in Peshawar</option>
                    <option value="Online classes">Online classes</option>
                    <option value="Either">Either</option>
                  </select>
                </div>
                <div className="form-field form-field--full">
                  <label htmlFor="tutor-message">Anything Else You'd Like to Share? <span className="optional-label">(optional)</span></label>
                  <textarea id="tutor-message" name="message" rows="3" placeholder="Add any details you'd like us to know" value={values.message} onChange={updateField} />
                </div>
              </div>
              <button className="button button--primary form-submit" type="submit">Apply via WhatsApp <Send size={16} /></button>
              {submitted && (
                <p className="form-success" role="status">
                  <CheckCircle2 size={17} /> Your application message is ready in WhatsApp. Review it and tap send, or <a href={whatsappHref} target="_blank" rel="noreferrer">open it here</a>.
                </p>
              )}
            </form>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}

export default BecomeTutor;
