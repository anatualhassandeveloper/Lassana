"use client";

import { MessageCircle, Phone, Mail, MapPin } from "lucide-react";
import { COMPANY, FOOTER_LINKS, NAV_LINKS } from "@/lib/constants";
import { getTelUrl, getMailtoUrl } from "@/lib/utils";
import Logo from "./Logo";
import TikTokIcon from "./TikTokIcon";

const socialIcons = [
  { icon: MessageCircle, href: COMPANY.social.whatsapp, label: "WhatsApp" },
  { icon: TikTokIcon, href: COMPANY.social.tiktok, label: "TikTok" },
];
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-slate-900 pt-20 pb-8">
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-industrial-green/50 to-transparent"
        aria-hidden="true"
      />

      <div className="container-wide px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-3">
              <Logo size="md" light />
            </a>            <p className="mt-5 text-sm leading-relaxed text-white/60">
              Premium commercial food equipment supplier in Accra, Ghana.
              Powering restaurants, bakeries, and food businesses nationwide.
            </p>
            <div className="mt-6 flex gap-3">
              {socialIcons.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit Lassana Food Machinery on ${label}`}
                  className="rounded-lg border border-white/10 bg-white/5 p-2.5 text-white/60 transition-all hover:border-industrial-green/50 hover:bg-industrial-green/10 hover:text-industrial-green"
                >                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-5 text-sm font-bold uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-industrial-green"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-sm font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-industrial-green"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-sm font-bold uppercase tracking-wider text-white">
              Contact
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={getTelUrl(COMPANY.phone.primary)}
                  className="flex items-center gap-3 text-sm text-white/60 transition-colors hover:text-white"
                >
                  <Phone className="h-4 w-4 shrink-0 text-industrial-green" />
                  {COMPANY.phone.primary}
                </a>
              </li>
              <li>
                <a
                  href={getMailtoUrl(COMPANY.email)}
                  className="flex items-center gap-3 text-sm text-white/60 transition-colors hover:text-white"
                >
                  <Mail className="h-4 w-4 shrink-0 text-industrial-green" />
                  <span className="break-all">{COMPANY.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/60">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-industrial-green" />
                <span>
                  {COMPANY.location.area}, {COMPANY.location.city},{" "}
                  {COMPANY.location.country}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-white/40">
            &copy; {year} {COMPANY.name}. All rights reserved.
          </p>
          <p className="text-xs text-white/30">
            Commercial Food Equipment — Accra, Ghana
          </p>
        </div>
      </div>
    </footer>
  );
}
