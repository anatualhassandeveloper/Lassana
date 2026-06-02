"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

interface ProductCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  index?: number;
}

export default function ProductCard({
  title,
  description,
  image,
  index = 0,
}: ProductCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative"
    >
      <div className="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-lg shadow-slate-200/50 transition-all duration-500 hover:-translate-y-2 hover:border-industrial-green/40 hover:shadow-2xl hover:shadow-industrial-green/10">
        <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-deep-blue/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

          <div className="absolute top-4 right-4 rounded-full bg-industrial-green/90 px-3 py-1 text-xs font-semibold text-white opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
            Commercial Grade
          </div>
        </div>

        <div className="p-6">
          <h3 className="text-xl font-bold text-deep-blue transition-colors group-hover:text-industrial-green">
            {title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-gray-accent">
            {description}
          </p>
        </div>

        <div
          className="pointer-events-none absolute inset-0 rounded-2xl ring-0 ring-industrial-green/0 transition-all duration-500 group-hover:ring-2 group-hover:ring-industrial-green/30"
          aria-hidden="true"
        />
      </div>
    </motion.article>
  );
}

interface CounterProps {
  value: number;
  suffix: string;
  label: string;
}

export function StatCounter({ value, suffix, label }: CounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl font-bold text-industrial-green sm:text-5xl">
        {count}
        {suffix}
      </div>
      <div className="mt-2 text-sm font-medium uppercase tracking-wider text-gray-accent">
        {label}
      </div>
    </div>
  );
}
