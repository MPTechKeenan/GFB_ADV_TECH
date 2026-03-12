"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "10+", label: "Years of Experience" },
  { value: "150+", label: "Clients Served" },
  { value: "300+", label: "Projects Delivered" },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-start gap-16 lg:grid-cols-2">
          {/* Left — copy */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-4xl font-semibold tracking-[0.02em] text-white sm:text-5xl">
              Built on Real-World
              <br />
              Enterprise Experience
            </h2>

            <div className="mt-8 space-y-5 text-zinc-400 leading-relaxed">
              <p>
                GFB Advanced Technologies was founded in Jacksonville, FL with a
                clear mission: give small businesses access to the same
                data-driven strategies and infrastructure that power the largest
                enterprises — without the enterprise price tag.
              </p>
              <p>
                Our team has architected data systems, built custom software, and
                managed IT environments across industries including healthcare,
                finance, logistics, and retail. We bring that depth to every
                engagement, no matter the size.
              </p>
              <p>
                We don&apos;t believe in one-size-fits-all. Every solution we
                deliver is tailored to your operations, your goals, and your
                budget. We work alongside you — not above you.
              </p>
            </div>
          </motion.div>

          {/* Right — stats */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="grid gap-6 sm:grid-cols-3 lg:grid-cols-1"
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/[0.06] bg-surface/60 p-8 text-center lg:text-left"
              >
                <span className="font-heading text-4xl font-bold text-accent sm:text-5xl">
                  {stat.value}
                </span>
                <p className="mt-2 text-sm text-zinc-400">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
