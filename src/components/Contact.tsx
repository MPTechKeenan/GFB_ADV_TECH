"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Placeholder — swap with API route, server action, or Formspree
    console.log("Form submitted:", form);
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="font-heading text-4xl font-semibold tracking-[0.02em] text-white sm:text-5xl">
            Get in Touch
          </h2>
          <p className="mt-4 text-zinc-400">
            Ready to level up your technology? Drop us a message and
            we&apos;ll get back to you within 24 hours.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-12 space-y-6"
        >
          <div>
            <label htmlFor="name" className="sr-only">
              Name
            </label>
            <input
              id="name"
              type="text"
              required
              placeholder="Your name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full rounded-xl border border-white/[0.06] bg-surface px-5 py-3.5 text-white placeholder:text-zinc-500 outline-none transition-colors focus:border-accent/40"
            />
          </div>

          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              placeholder="your@email.com"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full rounded-xl border border-white/[0.06] bg-surface px-5 py-3.5 text-white placeholder:text-zinc-500 outline-none transition-colors focus:border-accent/40"
            />
          </div>

          <div>
            <label htmlFor="message" className="sr-only">
              Message
            </label>
            <textarea
              id="message"
              required
              rows={5}
              placeholder="Tell us about your project..."
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full resize-none rounded-xl border border-white/[0.06] bg-surface px-5 py-3.5 text-white placeholder:text-zinc-500 outline-none transition-colors focus:border-accent/40"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-accent py-3.5 text-sm font-semibold text-background transition-all duration-200 hover:bg-accent/90 hover:shadow-[0_0_24px_rgba(0,212,255,0.3)]"
          >
            {submitted ? "Message Sent!" : "Send Message"}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
