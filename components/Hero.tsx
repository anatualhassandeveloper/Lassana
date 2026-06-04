"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { COMPANY, STATS } from "@/lib/constants";
import { getTelUrl } from "@/lib/utils";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const words = COMPANY.tagline.split(" ");

  return (
    <section
      ref={ref}
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden"
      aria-label="Hero section"
    >
      <motion.div style={{ y }} className="absolute inset-0">
        <Image
          src="/hero/food-dehydrator.png"
          alt="Commercial 10-layer food dehydrator"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-br from-deep-blue/95 via-deep-blue/85 to-deep-blue/70" />

      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(22,163,74,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(22,163,74,0.15) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
        aria-hidden="true"
      />

      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-[10%] h-32 w-32 rounded-full border border-industrial-green/20 bg-industrial-green/5 backdrop-blur-sm"
        aria-hidden="true"
      />
      <motion.div
        animate={{ y: [0, 15, 0], rotate: [0, -3, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/3 left-[5%] h-24 w-24 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm"
        aria-hidden="true"
      />
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 left-[20%] h-16 w-16 rotate-45 border border-industrial-green/30 bg-industrial-green/10"
        aria-hidden="true"
      />

      <motion.div style={{ opacity }} className="container-wide relative z-10 px-4 pt-32 pb-20 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm"
          >
            <span className="h-2 w-2 rounded-full bg-industrial-green animate-pulse" />
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-white/80">
              Accra, Ghana — Commercial Equipment
            </span>
          </motion.div>

          <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            {words.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.3 + i * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mr-[0.25em] inline-block last:mr-0"
              >
                {word === "Machinery" ? (
                  <span className="text-industrial-green">{word}</span>
                ) : (
                  word
                )}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mt-6 max-w-xl text-lg text-white/75 sm:text-xl"
          >
            Reliable commercial kitchen and bakery equipment in Accra.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href={getTelUrl(COMPANY.phone.primary)}
              className="group inline-flex items-center justify-center gap-2 rounded-lg bg-industrial-green px-8 py-4 text-base font-semibold text-white shadow-xl shadow-industrial-green/30 transition-all hover:bg-industrial-green-dark hover:shadow-industrial-green/40"
            >
              <Phone className="h-5 w-5" />
              Call Now
            </a>
            <a
              href="#products"
              className="group inline-flex items-center justify-center gap-2 rounded-lg border border-white/30 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:border-white/50 hover:bg-white/20"
            >
              View Products
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="mt-16 flex items-center gap-8 border-t border-white/10 pt-8"
          >
            {[
              { value: `${STATS[0].value}${STATS[0].suffix}`, label: "Years Experience" },
              { value: `${STATS[1].value}${STATS[1].suffix}`, label: "Machines Sold" },
              { value: `${STATS[2].value}${STATS[2].suffix}`, label: "Satisfaction" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-bold text-white sm:text-3xl">
                  {stat.value}
                </div>
                <div className="text-xs uppercase tracking-wider text-white/50">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/30 p-1"
        >
          <div className="h-2 w-1 rounded-full bg-industrial-green" />
        </motion.div>
      </motion.div>
    </section>
  );
}
