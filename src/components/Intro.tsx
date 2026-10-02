"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

export default function Intro() {
  return (
    <section className="bg-[#f4f1eb] text-[#171716]">
      <div className="mx-auto max-w-[1500px] px-6 py-28 md:px-10 md:py-36 lg:px-14 lg:py-44">
        <div className="grid gap-16 md:grid-cols-[0.8fr_2fr] md:gap-20 lg:grid-cols-[0.75fr_2fr] lg:gap-28">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="flex items-start gap-3"
          >
            <span className="mt-2 h-px w-8 bg-black/30" />

            <div>
              <p className="text-[10px] uppercase tracking-[0.28em] text-black/50">
                The Ocaso
              </p>

              <p className="mt-2 text-[11px] text-black/35">Uttara · Dhaka</p>
            </div>
          </motion.div>

          {/* Statement */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="max-w-5xl text-[clamp(2.8rem,6vw,6.5rem)] font-light leading-[0.95] tracking-[-0.055em]"
            >
              Good food feels
              <br />
              <span className="text-black/35">different up here.</span>
            </motion.h2>

            <div className="mt-12 flex flex-col gap-10 md:mt-16 md:flex-row md:items-end md:justify-between">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="max-w-lg text-sm leading-7 text-black/55 md:text-[15px]"
              >
                Ocaso brings together open-air dining, generous food and the
                energy of Uttara in one elevated setting. Come for the view,
                stay for the evening.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, x: 15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: 0.25 }}
              >
                <a
                  href="#experience"
                  className="group flex items-center gap-3 border-b border-black/25 pb-2 text-[10px] uppercase tracking-[0.2em]"
                >
                  Discover the experience
                  <ArrowUpRight
                    size={15}
                    strokeWidth={1.3}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
