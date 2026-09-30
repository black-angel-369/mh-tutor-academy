import { MessageCircle } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { academy } from "../data/content.js";

function FloatingWhatsApp() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.a
      className="floating-whatsapp"
      href={academy.whatsapp}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with us on WhatsApp"
      title="Chat with us"
      initial={false}
      animate={reduceMotion ? undefined : { scale: [1, 1.08, 1] }}
      transition={{ duration: 0.5, delay: 2.5, repeat: 2, repeatDelay: 5, ease: "easeOut" }}
      whileHover={reduceMotion ? undefined : { scale: 1.06 }}
      whileTap={reduceMotion ? undefined : { scale: 0.96 }}
    >
      <span className="floating-tooltip">Chat with us</span>
      <MessageCircle size={25} fill="currentColor" strokeWidth={1.8} />
    </motion.a>
  );
}

export default FloatingWhatsApp;
