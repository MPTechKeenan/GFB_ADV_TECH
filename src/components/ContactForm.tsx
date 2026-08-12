"use client";

import { useState, FormEvent } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    organization: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    setSubmitted(true);
    setForm({
      name: "",
      organization: "",
      email: "",
      phone: "",
      message: "",
    });
    setTimeout(() => setSubmitted(false), 4000);
  };

  const inputClass =
    "w-full rounded-md border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted/70 outline-none transition-colors focus:border-accent";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-foreground">
          Name
        </label>
        <input
          id="name"
          type="text"
          required
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className={inputClass}
        />
      </div>

      <div>
        <label
          htmlFor="organization"
          className="mb-1.5 block text-sm font-medium text-foreground"
        >
          Organization
        </label>
        <input
          id="organization"
          type="text"
          required
          value={form.organization}
          onChange={(e) => setForm({ ...form, organization: e.target.value })}
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-foreground">
          Email
        </label>
        <input
          id="email"
          type="email"
          required
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-foreground">
          Phone <span className="font-normal text-muted">(optional)</span>
        </label>
        <input
          id="phone"
          type="tel"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-foreground">
          Message
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className={`${inputClass} resize-none`}
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-md bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-light"
      >
        {submitted ? "Message Sent" : "Send Message"}
      </button>
    </form>
  );
}
