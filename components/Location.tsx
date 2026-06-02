"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation, Clock } from "lucide-react";
import { COMPANY } from "@/lib/constants";
import SectionHeading from "./SectionHeading";

export default function Location() {
  const mapsUrl = COMPANY.mapsUrl;

  return (
    <section id="location" className="section-padding bg-white">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Find Us"
          title="Visit Our Showroom"
          description="Located in the heart of Accra's Post Office Area — your destination for commercial food machinery."
        />

        <div className="grid gap-8 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col justify-center rounded-2xl border border-slate-200 bg-soft-white p-8 shadow-lg lg:col-span-2"
          >
            <div className="mb-6 inline-flex rounded-xl bg-industrial-green/10 p-4">
              <MapPin className="h-8 w-8 text-industrial-green" aria-hidden="true" />
            </div>

            <h3 className="text-2xl font-bold text-deep-blue">
              {COMPANY.location.city}
            </h3>
            <p className="mt-2 text-lg text-gray-accent">
              {COMPANY.location.area}
            </p>
            <p className="text-lg font-medium text-industrial-green">
              {COMPANY.location.country}
            </p>

            <div className="mt-8 space-y-3 border-t border-slate-200 pt-8">
              <div className="flex items-center gap-3 text-sm text-gray-accent">
                <Clock className="h-4 w-4 text-industrial-green" />
                {COMPANY.hours.weekdays}
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-accent">
                <Clock className="h-4 w-4 text-industrial-green" />
                {COMPANY.hours.saturday}
              </div>
            </div>

            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-lg bg-industrial-green px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-industrial-green/30 transition-all hover:bg-industrial-green-dark"
            >
              <Navigation className="h-4 w-4" />
              Get Directions
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative min-h-[400px] overflow-hidden rounded-2xl border border-slate-200 shadow-lg lg:col-span-3"
          >
            <iframe
              title="Lassana Food Machinery location map"
              src="https://maps.google.com/maps?q=Post+Office+Area,+Accra,+Ghana&z=15&output=embed"
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/5" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
