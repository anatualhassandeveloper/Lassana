"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { COMPANY } from "@/lib/constants";
import { getWhatsAppUrl } from "@/lib/utils";

export default function WhatsAppFloat() {
  return (
    <motion.a
      href={getWhatsAppUrl(COMPANY.whatsapp)}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed right-6 bottom-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-industrial-green text-white shadow-2xl shadow-industrial-green/40"
      aria-label="Chat on WhatsApp"
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-industrial-green opacity-30" />
      <MessageCircle className="relative h-7 w-7" />
    </motion.a>
  );
}
