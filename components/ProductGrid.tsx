"use client";

import { PRODUCTS } from "@/lib/constants";
import SectionHeading from "./SectionHeading";
import ProductCard from "./ProductCard";

export default function ProductGrid() {
  return (
    <section id="products" className="section-padding bg-white">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Our Equipment"
          title="Commercial Food Machinery"
          description="Professional-grade equipment for bakeries, restaurants, cafés, and food businesses across Ghana."
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((product, index) => (
            <ProductCard key={product.id} {...product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
