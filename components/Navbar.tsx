"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { COMPANY, NAV_LINKS } from "@/lib/constants";
import { cn, getTelUrl } from "@/lib/utils";
import Logo from "./Logo";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed top-0 right-0 left-0 z-50 transition-all duration-500",
          scrolled
            ? "border-b border-white/10 bg-deep-blue/90 py-3 shadow-lg shadow-deep-blue/20 backdrop-blur-xl"
            : "bg-transparent py-5"
        )}
      >
        <nav
          className="container-wide flex items-center justify-between px-4 sm:px-6 lg:px-8"
          aria-label="Main navigation"
        >
          <a href="#" className="group flex items-center gap-3">
            <Logo size="sm" />
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-lg px-4 py-2 text-sm font-medium text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={getTelUrl(COMPANY.phone.primary)}
              className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-white/80 transition-colors hover:text-white"
              aria-label={`Call ${COMPANY.phone.primary}`}
            >
              <Phone className="h-4 w-4 text-industrial-green" />
              {COMPANY.phone.primary}
            </a>
            <a
              href="#contact"
              className="rounded-lg bg-industrial-green px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-industrial-green/30 transition-all hover:bg-industrial-green-dark hover:shadow-industrial-green/40"
            >
              Get Quote
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-lg p-2 text-white lg:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-deep-blue/95 backdrop-blur-xl lg:hidden"
          >
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="flex h-full flex-col justify-center px-8"
              aria-label="Mobile navigation"
            >
              <ul className="space-y-2">
                {NAV_LINKS.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="block rounded-lg px-4 py-3 text-2xl font-semibold text-white transition-colors hover:text-industrial-green"
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-10 space-y-4 border-t border-white/10 pt-10">
                <a
                  href={getTelUrl(COMPANY.phone.primary)}
                  className="flex items-center gap-3 text-lg text-white"
                >
                  <Phone className="h-5 w-5 text-industrial-green" />
                  {COMPANY.phone.primary}
                </a>
                <a
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-lg bg-industrial-green px-6 py-3 text-center text-lg font-semibold text-white"
                >
                  Get Quote
                </a>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
