"use client";

import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#11110f] text-white">
      {/* BACKGROUND IMAGE */}
      <motion.div
        initial={{
          scale: 1.12,
          y: 18,
        }}
        animate={{
          scale: 1,
          y: 0,
        }}
        transition={{
          duration: 2.2,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="absolute inset-0"
      >
        <div className="absolute inset-0 bg-[url('/images/ocaso/hero.jpg')] bg-cover bg-center" />
      </motion.div>

      {/* IMAGE DEPTH */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1.4,
          delay: 0.15,
          ease: "easeOut",
        }}
        className="absolute inset-0 bg-black/25"
      />

      <motion.div
        initial={{ opacity: 0.2 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1.8,
          delay: 0.1,
          ease: "easeOut",
        }}
        className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/10 to-black/85"
      />

      {/* SUBTLE GRAIN */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.7'/%3E%3C/svg%3E\")",
        }}
      />

      {/* HERO CONTENT */}
      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1500px] flex-col justify-end px-6 pb-8 md:px-10 md:pb-10 lg:px-14 lg:pb-12">
        <div className="flex flex-col">
          {/* EYEBROW */}
          <motion.div
            initial={{
              opacity: 0,
              x: -18,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.35,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="mb-5 flex items-center gap-3"
          >
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: 32 }}
              transition={{
                duration: 0.7,
                delay: 0.45,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="h-px bg-white/50"
            />

            <p className="text-[9px] uppercase tracking-[0.32em] text-white/65 md:text-[10px]">
              Rooftop Dining · Uttara
            </p>
          </motion.div>

          {/* HEADING */}
          <h1 className="overflow-visible text-[clamp(4.5rem,10vw,9.5rem)] font-light leading-[0.78] tracking-[-0.07em]">
            {/* DINE */}
            <span className="block overflow-hidden">
              <motion.span
                initial={{
                  y: "105%",
                  opacity: 0,
                  filter: "blur(8px)",
                }}
                animate={{
                  y: "0%",
                  opacity: 1,
                  filter: "blur(0px)",
                }}
                transition={{
                  duration: 1.05,
                  delay: 0.42,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="block"
              >
                Dine
              </motion.span>
            </span>

            {/* ABOVE */}
            <span className="ml-[8vw] block overflow-hidden">
              <motion.span
                initial={{
                  y: "105%",
                  opacity: 0,
                  filter: "blur(8px)",
                }}
                animate={{
                  y: "0%",
                  opacity: 1,
                  filter: "blur(0px)",
                }}
                transition={{
                  duration: 1.15,
                  delay: 0.54,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="block text-white/65"
              >
                above.
              </motion.span>
            </span>
          </h1>

          {/* BOTTOM ROW */}
          <motion.div
            initial={{
              opacity: 0,
              y: 22,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.9,
              delay: 0.9,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="mt-9 flex flex-col gap-7 border-t border-white/20 pt-5 md:flex-row md:items-end md:justify-between"
          >
            <p className="max-w-md text-sm leading-6 text-white/65 md:text-[15px]">
              An elevated dining experience shaped by open skies, thoughtful
              food and unforgettable evenings.
            </p>

            <Link
              href="#menu"
              className="group flex w-fit items-center gap-3 text-[10px] uppercase tracking-[0.22em] !text-white"
            >
              <span className="!text-inherit">Explore the menu</span>

              <span className="flex h-9 w-9 items-center justify-center border border-white/30 transition-all duration-500 group-hover:bg-white group-hover:!text-black">
                <ArrowUpRight
                  size={15}
                  strokeWidth={1.3}
                  className="text-current transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </span>
            </Link>
          </motion.div>
        </div>

        {/* BOTTOM META */}
        <motion.div
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 1.15,
            ease: "easeOut",
          }}
          className="mt-8 flex items-center justify-between text-[9px] uppercase tracking-[0.25em] text-white/40"
        >
          <span>16 Sonargaon Janapath · Sector 9</span>

          <span className="hidden items-center gap-2 sm:flex">
            Scroll to explore
            <ArrowDown size={13} strokeWidth={1.2} />
          </span>

          <span className="sm:hidden">
            <ArrowDown size={14} strokeWidth={1.2} />
          </span>
        </motion.div>
      </div>
    </section>
  );
}
