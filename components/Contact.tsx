"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MessageCircle, Clock } from "lucide-react";
import { COMPANY } from "@/lib/constants";
import { getTelUrl, getMailtoUrl } from "@/lib/utils";
import SectionHeading from "./SectionHeading";
import TikTokIcon from "./TikTokIcon";

export default function Contact() {
  return (
    <section id="contact" className="section-padding relative overflow-hidden bg-deep-blue">
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 0% 100%, rgba(22,163,74,0.2) 0%, transparent 50%), radial-gradient(circle at 100% 0%, rgba(59,130,246,0.15) 0%, transparent 50%)",
        }}
        aria-hidden="true"
      />

      <div className="container-wide relative">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Contact Us Today"
          description="Reach out by phone, email, or WhatsApp. We are here to help with your questions and enquiries."
          light
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2"
        >
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <h3 className="mb-6 text-lg font-bold text-white">
                Contact Information
              </h3>
              <div className="space-y-5">
                <a
                  href={getTelUrl(COMPANY.phone.primary)}
                  className="flex items-center gap-4 text-white/80 transition-colors hover:text-white"
                >
                  <div className="rounded-lg bg-industrial-green/20 p-3">
                    <Phone className="h-5 w-5 text-industrial-green" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-white/50">
                      Primary
                    </div>
                    <div className="font-medium">{COMPANY.phone.primary}</div>
                  </div>
                </a>

                <a
                  href={getTelUrl(COMPANY.phone.secondary)}
                  className="flex items-center gap-4 text-white/80 transition-colors hover:text-white"
                >
                  <div className="rounded-lg bg-industrial-green/20 p-3">
                    <Phone className="h-5 w-5 text-industrial-green" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-white/50">
                      Secondary
                    </div>
                    <div className="font-medium">{COMPANY.phone.secondary}</div>
                  </div>
                </a>

                <a
                  href={getMailtoUrl(COMPANY.email, "Contact Enquiry")}
                  className="flex items-center gap-4 text-white/80 transition-colors hover:text-white"
                >
                  <div className="rounded-lg bg-industrial-green/20 p-3">
                    <Mail className="h-5 w-5 text-industrial-green" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-white/50">
                      Email
                    </div>
                    <div className="font-medium break-all">{COMPANY.email}</div>
                  </div>
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <div className="mb-4 flex items-center gap-3">
                <Clock className="h-5 w-5 text-industrial-green" />
                <h3 className="font-bold text-white">Business Hours</h3>
              </div>
              <ul className="space-y-2 text-sm text-white/70">
                <li>{COMPANY.hours.weekdays}</li>
                <li>{COMPANY.hours.saturday}</li>
                <li>{COMPANY.hours.sunday}</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <h3 className="mb-4 font-bold text-white">Follow Us</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  { icon: MessageCircle, href: COMPANY.social.whatsapp, label: "WhatsApp" },
                  { icon: TikTokIcon, href: COMPANY.social.tiktok, label: "TikTok" },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit us on ${label}`}
                    className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white/80 transition-all hover:border-industrial-green/40 hover:text-white"
                  >
                    <Icon className="h-4 w-4 text-industrial-green" />
                    {label}
                  </a>
                ))}
              </div>
            </div>
        </motion.div>
      </div>
    </section>
  );
}
