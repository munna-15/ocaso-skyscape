"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

export default function SkyScape() {
  return (
    <section className="overflow-hidden bg-[#11110f] text-[#f4f1eb]">
      <div className="mx-auto max-w-[1500px] px-6 py-24 md:px-10 md:py-32 lg:px-14 lg:py-36">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-5xl"
        >
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-8 bg-white/30" />

            <span className="text-[9px] uppercase tracking-[0.34em] text-white/40">
              The Rooftop
            </span>
          </div>

          <h2 className="text-[clamp(3.5rem,7vw,7.5rem)] font-light leading-[0.84] tracking-[-0.075em]">
            Where the evening
            <br />
            <span className="text-white/30">begins.</span>
          </h2>
        </motion.div>

        {/* IMAGES */}
        <div className="relative mt-16 min-h-[620px] md:mt-20 md:min-h-[720px]">
          {/* LARGE IMAGE */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute left-0 top-0 w-[72%] md:w-[68%]"
          >
            <div className="group relative overflow-hidden">
              <motion.img
                src="/images/ocaso/rooftop-04.jpg"
                alt="Ocaso rooftop dining"
                initial={{ scale: 1.06 }}
                whileInView={{ scale: 1 }}
                whileHover={{ scale: 1.025 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="h-[430px] w-full object-cover md:h-[570px]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

              <span className="absolute bottom-6 left-6 text-[8px] uppercase tracking-[0.3em] text-white/55">
                Ocaso Skyscape
              </span>
            </div>
          </motion.div>

          {/* SMALL IMAGE */}
          <motion.div
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 1,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute bottom-0 right-0 w-[48%] md:w-[38%]"
          >
            <div className="group relative overflow-hidden">
              <motion.img
                src="/images/ocaso/rooftop-05.jpg"
                alt="Ocaso rooftop atmosphere"
                initial={{ scale: 1.06 }}
                whileInView={{ scale: 1 }}
                whileHover={{ scale: 1.025 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="h-[270px] w-full object-cover md:h-[360px]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

              <span className="absolute bottom-5 left-5 text-[8px] uppercase tracking-[0.3em] text-white/55">
                After sunset
              </span>
            </div>
          </motion.div>

          {/* CENTER STATEMENT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.25,
            }}
            className="absolute right-[28%] top-[38%] z-10 hidden md:block"
          >
            <div className="flex h-28 w-28 items-center justify-center rounded-full border border-white/20 bg-[#11110f]/80 backdrop-blur-sm">
              <span className="max-w-[70px] text-center text-[8px] uppercase leading-4 tracking-[0.22em] text-white/55">
                Open
                <br />
                skies
              </span>
            </div>
          </motion.div>
        </div>

        {/* BOTTOM */}
        <div className="mt-12 grid gap-8 border-t border-white/10 pt-7 md:grid-cols-[1fr_auto] md:items-end">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-md text-sm leading-6 text-white/40"
          >
            A rooftop made for long dinners, open skies and the city lights
            stretching out below.
          </motion.p>

          <motion.a
            href="#experience"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.1,
            }}
            className="group flex items-center gap-4 text-[9px] uppercase tracking-[0.28em] text-white/45 transition-colors duration-300 hover:text-white"
          >
            Discover Ocaso
            <span className="flex h-9 w-9 items-center justify-center border border-white/20 transition-all duration-300 group-hover:border-white/50 group-hover:bg-white group-hover:text-black">
              <ArrowUpRight
                size={14}
                strokeWidth={1.2}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </span>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
