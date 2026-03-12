"use client";

import { motion, type Variants } from "framer-motion";
import GFBLogo from "./GFBLogo";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Hexagonal background texture */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="hex"
              width="56"
              height="100"
              patternUnits="userSpaceOnUse"
              patternTransform="scale(2)"
            >
              <path
                d="M28 66L0 50L0 16L28 0L56 16L56 50L28 66L28 100"
                fill="none"
                stroke="white"
                strokeWidth="0.5"
              />
              <path
                d="M28 0L28 34L0 50L0 84L28 100L56 84L56 50L28 34"
                fill="none"
                stroke="white"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hex)" />
        </svg>
      </div>

      {/* Radial cyan glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-accent/[0.07] blur-[120px]" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto max-w-4xl px-6 text-center"
      >
        <motion.div variants={fadeUp} className="mb-8 flex justify-center">
          <GFBLogo size="xl" />
        </motion.div>
        <motion.h1
          variants={fadeUp}
          className="font-display text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Enterprise-Grade Data Solutions.
          <br />
          <span className="text-accent">Built for Your Business.</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400 sm:text-xl"
        >
          We bring the data architecture, automation, and IT infrastructure that
          Fortune 500s rely on — scaled and priced for small businesses ready to
          grow.
        </motion.p>

        <motion.div variants={fadeUp} className="mt-10">
          <a
            href="#contact"
            className="inline-block rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-background transition-all duration-200 hover:bg-accent/90 hover:shadow-[0_0_24px_rgba(0,212,255,0.3)]"
          >
            Let&apos;s Talk
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
