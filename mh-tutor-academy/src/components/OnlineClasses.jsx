import { Globe2, Laptop, MessageCircle, Wifi } from "lucide-react";
import { academy } from "../data/content.js";
import Reveal from "./Reveal.jsx";

function OnlineClasses() {
  return (
    <section className="section-wrap online-section" id="online">
      <div className="container online-grid">
        <Reveal className="online-visual-wrap">
          <div className="online-visual" role="img" aria-label="Illustration of a laptop displaying an online learning session">
            <div className="online-visual-orbit" />
            <div className="online-bubble online-bubble--globe"><Globe2 size={20} /></div>
            <div className="video-window">
              <div className="video-window-bar"><span /><span /><span /></div>
              <div className="video-window-body">
                <div className="video-screen">
                  <div className="video-person"><i /><b /></div>
                  <span className="video-caption">LEARNING SESSION</span>
                </div>
                <div className="video-sidebar"><i /><i /><i /></div>
              </div>
              <div className="video-controls"><span /><span /><span /><b><Wifi size={14} /></b></div>
              <div className="laptop-base" />
            </div>
            <div className="online-bubble online-bubble--laptop"><Laptop size={19} /></div>
          </div>
        </Reveal>
        <Reveal className="online-copy" delay={0.1}>
          <p className="eyebrow">ONLINE CLASSES</p>
          <h2>Learn From Anywhere</h2>
          <p className="online-lead">Not in Peshawar? Learn Online.</p>
          <p className="online-detail">Join MH Tutor Academy through online classes from anywhere. Get in touch to discuss tuition or beginner computer courses and your learning needs.</p>
          <a className="button button--primary" href={`${academy.whatsapp}?text=${encodeURIComponent("Hello MH Tutor Academy, I'd like to ask about online classes.")}`} target="_blank" rel="noreferrer">Ask About Online Classes <MessageCircle size={17} /></a>
          <div className="online-note"><Globe2 size={17} /><span>Online learning for students beyond Peshawar</span></div>
        </Reveal>
      </div>
    </section>
  );
}

export default OnlineClasses;
