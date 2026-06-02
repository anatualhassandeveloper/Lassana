"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  BadgeDollarSign,
  Headphones,
  Truck,
  type LucideIcon,
} from "lucide-react";
import { FEATURES } from "@/lib/constants";
import SectionHeading from "./SectionHeading";
import { staggerContainer, staggerItem } from "@/lib/animations";

const iconMap: Record<string, LucideIcon> = {
  ShieldCheck,
  BadgeDollarSign,
  Headphones,
  Truck,
};

export default function FeatureCard() {
  return (
    <section id="why-us" className="section-padding relative overflow-hidden bg-deep-blue">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, rgba(22,163,74,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(59,130,246,0.1) 0%, transparent 50%)",
        }}
        aria-hidden="true"
      />

      <div className="container-wide relative">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Built for Business Success"
          description="We deliver more than equipment — we deliver confidence, performance, and partnership for your food operation."
          light
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {FEATURES.map((feature) => {
            const Icon = iconMap[feature.icon];
            return (
              <motion.div
                key={feature.id}
                variants={staggerItem}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-industrial-green/40 hover:bg-white/10 hover:shadow-xl hover:shadow-industrial-green/10"
              >
                <div className="mb-6 inline-flex rounded-xl bg-industrial-green/20 p-4 transition-colors group-hover:bg-industrial-green/30">
                  <Icon className="h-7 w-7 text-industrial-green" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  {feature.description}
                </p>
                <div
                  className="absolute -bottom-8 -right-8 h-24 w-24 rounded-full bg-industrial-green/10 transition-transform duration-500 group-hover:scale-150"
                  aria-hidden="true"
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
