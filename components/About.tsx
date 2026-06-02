"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { COMPANY, STATS } from "@/lib/constants";
import SectionHeading from "./SectionHeading";
import { StatCounter } from "./ProductCard";
import { slideInLeft, slideInRight } from "@/lib/animations";

const HIGHLIGHTS = [
  "Commercial-grade equipment for professional kitchens",
  "Trusted by restaurants, bakeries, and cafés across Ghana",
  "Expert consultation and after-sales support",
  "Competitive pricing with reliable delivery",
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-soft-white">
      <div className="container-wide">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl shadow-slate-300/50">
              <Image
                src="https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&q=80"
                alt="Commercial food machinery at Lassana Food Machinery"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-blue/40 to-transparent" />
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-6 -right-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-xl sm:-right-10"
            >
              <div className="text-3xl font-bold text-industrial-green">12+</div>
              <div className="text-sm font-medium text-gray-accent">
                Years of Excellence
              </div>
            </motion.div>

            <div
              className="absolute -top-4 -left-4 h-24 w-24 rounded-2xl border-2 border-industrial-green/30"
              aria-hidden="true"
            />
          </motion.div>

          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <SectionHeading
              eyebrow="About Us"
              title="Your Partner in Commercial Food Equipment"
              align="left"
              className="mb-8"
            />

            <p className="text-base leading-relaxed text-gray-accent sm:text-lg">
              {COMPANY.description}
            </p>

            <ul className="mt-8 space-y-4">
              {HIGHLIGHTS.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 shrink-0 text-industrial-green"
                    aria-hidden="true"
                  />
                  <span className="text-sm text-deep-blue sm:text-base">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-12 grid grid-cols-3 gap-6 border-t border-slate-200 pt-10">
              {STATS.map((stat) => (
                <StatCounter
                  key={stat.label}
                  value={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
