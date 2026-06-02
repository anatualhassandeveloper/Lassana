"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";

interface FormData {
  name: string;
  phone: string;
  email: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", phone: "", email: "", message: "" });
    }, 4000);
  };

  const fields = [
    { id: "name", label: "Full Name", type: "text", required: true },
    { id: "phone", label: "Phone Number", type: "tel", required: true },
    { id: "email", label: "Email Address", type: "email", required: true },
  ] as const;

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      onSubmit={handleSubmit}
      className="rounded-2xl border border-white/20 bg-white/10 p-8 backdrop-blur-xl"
      aria-label="Contact form"
    >
      {submitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center justify-center py-12 text-center"
        >
          <CheckCircle className="mb-4 h-16 w-16 text-industrial-green" />
          <h3 className="text-xl font-bold text-white">Message Sent</h3>
          <p className="mt-2 text-white/70">
            Thank you for reaching out. We will contact you shortly.
          </p>
        </motion.div>
      ) : (
        <>
          <div className="grid gap-6 sm:grid-cols-2">
            {fields.map((field) => (
              <div key={field.id} className="relative">
                <input
                  id={field.id}
                  type={field.type}
                  required={field.required}
                  placeholder=" "
                  value={formData[field.id]}
                  onChange={(e) =>
                    setFormData({ ...formData, [field.id]: e.target.value })
                  }
                  className="floating-input peer w-full rounded-lg border border-white/20 bg-white/5 px-4 pb-2 pt-6 text-white outline-none transition-all focus:border-industrial-green focus:ring-2 focus:ring-industrial-green/30"
                />
                <label
                  htmlFor={field.id}
                  className="floating-label pointer-events-none absolute left-4 top-4 origin-left text-sm text-white/50 transition-all peer-focus:-translate-y-5 peer-focus:scale-90 peer-focus:text-industrial-green peer-[:not(:placeholder-shown)]:-translate-y-5 peer-[:not(:placeholder-shown)]:scale-90 peer-[:not(:placeholder-shown)]:text-industrial-green"
                >
                  {field.label}
                </label>
              </div>
            ))}
          </div>

          <div className="relative mt-6">
            <textarea
              id="message"
              required
              rows={4}
              placeholder=" "
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="floating-input peer w-full resize-none rounded-lg border border-white/20 bg-white/5 px-4 pb-2 pt-6 text-white outline-none transition-all focus:border-industrial-green focus:ring-2 focus:ring-industrial-green/30"
            />
            <label
              htmlFor="message"
              className="floating-label pointer-events-none absolute left-4 top-4 origin-left text-sm text-white/50 transition-all peer-focus:-translate-y-5 peer-focus:scale-90 peer-focus:text-industrial-green peer-[:not(:placeholder-shown)]:-translate-y-5 peer-[:not(:placeholder-shown)]:scale-90 peer-[:not(:placeholder-shown)]:text-industrial-green"
            >
              Your Message
            </label>
          </div>

          <button
            type="submit"
            className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-industrial-green px-6 py-4 text-base font-semibold text-white shadow-lg shadow-industrial-green/30 transition-all hover:bg-industrial-green-dark sm:w-auto"
          >
            <Send className="h-5 w-5" />
            Send Message
          </button>
        </>
      )}
    </motion.form>
  );
}
