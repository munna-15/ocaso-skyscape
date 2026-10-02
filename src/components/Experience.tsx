"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

export default function Experience() {
  return (
    <section id="experience" className="bg-[#11110f] text-[#f4f1eb]">
      <div className="mx-auto max-w-[1500px] px-6 py-24 md:px-10 md:py-28 lg:px-14 lg:py-32">
        <div className="grid items-end gap-10 md:grid-cols-[1fr_280px]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-white/30" />

              <span className="text-[9px] uppercase tracking-[0.32em] text-white/40">
                The evening
              </span>
            </div>

            <h2 className="max-w-4xl text-[clamp(3rem,6.5vw,7rem)] font-light leading-[0.88] tracking-[-0.065em]">
              Come for dinner.
              <br />
              <span className="text-white/30">Stay for the view.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.15,
            }}
            className="md:pb-1"
          >
            <p className="max-w-[240px] text-sm leading-6 text-white/40">
              As the city changes below, the evening takes its own pace above
              it.
            </p>

            <a
              href="#reserve"
              className="group mt-7 inline-flex items-center gap-3 text-[9px] uppercase tracking-[0.28em] text-white/55 transition-colors duration-300 hover:text-white"
            >
              Reserve your evening
              <span className="flex h-8 w-8 items-center justify-center border border-white/20 transition-all duration-300 group-hover:bg-white group-hover:text-black">
                <ArrowUpRight
                  size={14}
                  strokeWidth={1.3}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </span>
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="group relative mt-16 overflow-hidden md:mt-20"
        >
          <motion.img
            src="/images/ocaso/rooftop-04.jpg"
            alt="Ocaso rooftop dining at night"
            initial={{ scale: 1.06 }}
            whileInView={{ scale: 1 }}
            whileHover={{ scale: 1.02 }}
            viewport={{ once: true }}
            transition={{
              duration: 1.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="h-[42vh] min-h-[280px] w-full object-cover object-center md:h-[48vh]"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10" />

          <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between md:bottom-8 md:left-9 md:right-9">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-white/50" />

              <span className="text-[9px] uppercase tracking-[0.3em] text-white/60">
                Ocaso Skyscape
              </span>
            </div>

            <span className="text-[9px] uppercase tracking-[0.25em] text-white/40">
              Uttara · Dhaka
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
