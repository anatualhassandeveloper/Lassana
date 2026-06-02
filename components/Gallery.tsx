"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import { GALLERY_IMAGES } from "@/lib/constants";
import SectionHeading from "./SectionHeading";

export default function Gallery() {
  const [selected, setSelected] = useState<(typeof GALLERY_IMAGES)[number] | null>(
    null
  );

  return (
    <section id="gallery" className="section-padding bg-soft-white">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Our Work"
          title="Equipment Gallery"
          description="Explore our commercial food machinery installations and professional-grade equipment."
        />

        <div className="grid auto-rows-[200px] grid-cols-2 gap-4 md:grid-cols-4 lg:auto-rows-[220px]">
          {GALLERY_IMAGES.map((image, index) => (
            <motion.button
              key={image.id}
              type="button"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              onClick={() => setSelected(image)}
              className={`group relative overflow-hidden rounded-2xl ${image.span} cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-industrial-green focus-visible:ring-offset-2`}
              aria-label={`View ${image.alt}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-deep-blue/0 transition-colors duration-500 group-hover:bg-deep-blue/40" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="rounded-full bg-white/20 p-3 backdrop-blur-sm">
                  <ZoomIn className="h-6 w-6 text-white" />
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-deep-blue/95 p-4 backdrop-blur-xl"
            onClick={() => setSelected(null)}
            role="dialog"
            aria-modal="true"
            aria-label="Image preview"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative max-h-[85vh] max-w-5xl overflow-hidden rounded-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selected.src}
                alt={selected.alt}
                width={1200}
                height={800}
                className="max-h-[85vh] w-auto object-contain"
              />
              <button
                type="button"
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 rounded-full bg-white/20 p-2 text-white backdrop-blur-sm transition-colors hover:bg-white/30"
                aria-label="Close preview"
              >
                <X className="h-6 w-6" />
              </button>
              <p className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-deep-blue/90 to-transparent p-6 text-white">
                {selected.alt}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
