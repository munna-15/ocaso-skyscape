"use client";

import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#11110f] text-white">
      {/* IMAGE */}
      <motion.div
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 3.6,
          ease,
        }}
        className="absolute inset-0"
      >
        <div className="absolute inset-0 bg-[url('/images/ocaso/hero.jpg')] bg-cover bg-center" />
      </motion.div>

      {/* CINEMATIC OVERLAY */}
      <motion.div
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 0.18 }}
        transition={{
          duration: 2.8,
          delay: 0.15,
          ease: "easeOut",
        }}
        className="absolute inset-0 bg-black"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/5 to-black/90" />

      <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/10" />

      {/* GRAIN */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.8'/%3E%3C/svg%3E\")",
        }}
      />

      {/* CONTENT */}
      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1500px] flex-col justify-end px-6 pb-8 md:px-10 md:pb-10 lg:px-14 lg:pb-12">
        {/* EYEBROW */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.75,
            ease,
          }}
          className="mb-6 flex items-center gap-3"
        >
          <motion.span
            initial={{ scaleX: 0, transformOrigin: "left" }}
            animate={{ scaleX: 1 }}
            transition={{
              duration: 0.9,
              delay: 0.8,
              ease,
            }}
            className="h-px w-8 bg-white/50"
          />

          <span className="text-[9px] uppercase tracking-[0.34em] text-white/60 md:text-[10px]">
            Rooftop Dining · Uttara
          </span>
        </motion.div>

        {/* TITLE */}
        <h1 className="select-none text-[clamp(4.8rem,10vw,9.5rem)] font-light leading-[0.76] tracking-[-0.075em]">
          {/* DINE */}
          <span className="block overflow-hidden">
            <motion.span
              initial={{ y: "100%" }}
              animate={{ y: "0%" }}
              transition={{
                duration: 1.25,
                delay: 0.72,
                ease,
              }}
              className="block"
            >
              Dine
            </motion.span>
          </span>

          {/* ABOVE */}
          <span className="ml-[8vw] block overflow-hidden">
            <motion.span
              initial={{ y: "100%" }}
              animate={{ y: "0%" }}
              transition={{
                duration: 1.35,
                delay: 0.86,
                ease,
              }}
              className="block text-white/60"
            >
              above.
            </motion.span>
          </span>
        </h1>

        {/* LOWER CONTENT */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            delay: 1.35,
            ease: "easeOut",
          }}
          className="mt-10 border-t border-white/20 pt-5"
        >
          <div className="flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
            {/* DESCRIPTION */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 1.45,
                ease,
              }}
              className="max-w-md text-sm leading-6 text-white/60 md:text-[15px]"
            >
              An elevated dining experience shaped by open skies, thoughtful
              food and unforgettable evenings.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                delay: 1.55,
                ease,
              }}
            >
              <Link
                href="#menu"
                className="group inline-flex items-center gap-4 text-[9px] uppercase tracking-[0.28em] !text-white"
              >
                <span className="!text-inherit">Explore the menu</span>

                <span className="flex h-10 w-10 items-center justify-center border border-white/30 transition-all duration-500 group-hover:border-white group-hover:bg-white group-hover:!text-black">
                  <ArrowUpRight
                    size={15}
                    strokeWidth={1.2}
                    className="text-current transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </span>
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* BOTTOM META */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            delay: 1.8,
          }}
          className="mt-8 flex items-center justify-between text-[8px] uppercase tracking-[0.28em] text-white/35"
        >
          <span>16 Sonargaon Janapath · Sector 9</span>

          <span className="hidden items-center gap-2 sm:flex">
            Scroll to explore
            <ArrowDown size={13} strokeWidth={1.1} className="animate-pulse" />
          </span>

          <span className="sm:hidden">
            <ArrowDown size={14} strokeWidth={1.1} />
          </span>
        </motion.div>
      </div>
    </section>
  );
}
