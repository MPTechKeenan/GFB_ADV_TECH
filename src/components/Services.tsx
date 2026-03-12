"use client";

import { motion, type Variants } from "framer-motion";

const services = [
  {
    title: "Business Automation",
    description:
      "Eliminate repetitive tasks and streamline operations with custom workflows that save your team hours every week.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-7 w-7"
      >
        <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83" />
      </svg>
    ),
  },
  {
    title: "Web Development",
    description:
      "High-performance websites and web apps that look sharp, load fast, and convert visitors into customers.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-7 w-7"
      >
        <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
      </svg>
    ),
  },
  {
    title: "Data & Analytics",
    description:
      "Turn raw data into clear, actionable insights with dashboards and pipelines that drive smarter decisions.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-7 w-7"
      >
        <path d="M3 3v18h18" />
        <path d="M7 16l4-8 4 4 4-10" />
      </svg>
    ),
  },
  {
    title: "IT Setup & Support",
    description:
      "From networks to cloud infrastructure, we set up and maintain the technology your business depends on.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-7 w-7"
      >
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8m-4-4v4" />
      </svg>
    ),
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Services() {
  return (
    <section id="services" className="relative overflow-hidden py-24 sm:py-32">
      {/* Hexagonal tiling background — #00d4ff stroke, 6% opacity, no fill */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.06]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="hex-services"
              width="56"
              height="100"
              patternUnits="userSpaceOnUse"
              patternTransform="scale(2)"
            >
              <path
                d="M28 66L0 50L0 16L28 0L56 16L56 50L28 66L28 100"
                fill="none"
                stroke="#00d4ff"
                strokeWidth="0.5"
              />
              <path
                d="M28 0L28 34L0 50L0 84L28 100L56 84L56 50L28 34"
                fill="none"
                stroke="#00d4ff"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hex-services)" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="font-heading text-4xl font-semibold tracking-[0.02em] text-white sm:text-5xl">
            What We Do
          </h2>
          <p className="mt-4 text-zinc-400 sm:text-lg">
            End-to-end technology services designed to move your business
            forward.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ staggerChildren: 0.12 }}
          className="grid gap-6 sm:grid-cols-2"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              className="group rounded-lg border border-white/[0.06] bg-surface/60 p-8 backdrop-blur-sm transition-all duration-300 hover:border-accent/40 hover:shadow-[0_0_20px_rgba(0,212,255,0.12)]"
            >
              <div
                className="mb-5 flex h-12 w-12 items-center justify-center bg-accent/10 text-accent"
                style={{
                  clipPath:
                    "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                }}
              >
                {service.icon}
              </div>
              <h3 className="font-heading text-xl font-semibold text-white">
                {service.title}
              </h3>
              <p className="mt-2 leading-relaxed text-zinc-400">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
