import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Menu, X } from "lucide-react";
import { navigation } from "../data/content.js";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const reduceMotion = useReducedMotion();
  const isTutorPage = window.location.pathname.endsWith("/become-a-tutor.html");
  const homeHref = (hash) => `${isTutorPage ? import.meta.env.BASE_URL : ""}${hash}`;
  const getNavigationHref = (href) => (
    href.startsWith("#") ? homeHref(href) : `${import.meta.env.BASE_URL}${href}`
  );
  const enrollmentHref = homeHref("#enrollment");

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <motion.header
      className="site-header"
      onKeyDown={(event) => {
        if (event.key === "Escape") closeMenu();
      }}
      initial={reduceMotion ? false : { y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: reduceMotion ? 0 : 0.45 }}
    >
      <nav className="nav-shell container" aria-label="Main navigation">
        <motion.a
          className="brand"
          href={homeHref("#home")}
          onClick={closeMenu}
          aria-label="MH Tutor Academy home"
          whileHover={reduceMotion ? undefined : { y: -1 }}
          whileTap={reduceMotion ? undefined : { scale: 0.98 }}
        >
          <span className="brand-mark" aria-hidden="true"><span>MH</span></span>
          <span className="brand-name">MH Tutor <strong>Academy</strong></span>
        </motion.a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls={menuOpen ? "mobile-navigation" : undefined}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>

        <div className="desktop-nav" id="primary-navigation">
          {navigation.map((item) => (
            <a key={item.href} href={getNavigationHref(item.href)}>{item.label}</a>
          ))}
        </div>
        <motion.a
          className="button button--nav"
          href={enrollmentHref}
          whileHover={reduceMotion ? undefined : { y: -2, scale: 1.02 }}
          whileTap={reduceMotion ? undefined : { scale: 0.97 }}
        >Enroll Now</motion.a>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-nav"
            id="mobile-navigation"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.26, ease: [0.22, 1, 0.36, 1] }}
          >
            {navigation.map((item, index) => (
              <motion.a
                key={item.href}
                href={getNavigationHref(item.href)}
                onClick={closeMenu}
                initial={reduceMotion ? false : { opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: reduceMotion ? 0 : 0.2, delay: reduceMotion ? 0 : index * 0.025 }}
              >{item.label}</motion.a>
            ))}
            <motion.a
              className="button button--primary"
              href={enrollmentHref}
              onClick={closeMenu}
              whileHover={reduceMotion ? undefined : { y: -2 }}
              whileTap={reduceMotion ? undefined : { scale: 0.97 }}
            >Enroll Now</motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Navbar;
