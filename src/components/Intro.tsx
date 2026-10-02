"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Intro() {
  return (
    <section className="bg-[#f4f1eb] text-[#171716]">
      <div className="mx-auto max-w-[1500px] px-6 py-24 md:px-10 md:py-32 lg:px-14 lg:py-36">
        {/* TOP LINE */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease }}
          className="origin-left border-t border-black/10"
        />

        <div className="grid gap-14 pt-8 md:grid-cols-[0.7fr_2fr] md:gap-16 lg:grid-cols-[0.65fr_2fr] lg:gap-24">
          {/* LABEL */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-start gap-3"
          >
            <span className="mt-[7px] h-px w-7 bg-black/25" />

            <div>
              <p className="text-[9px] uppercase tracking-[0.32em] text-black/45">
                The Ocaso
              </p>

              <p className="mt-2 text-[10px] text-black/30">Uttara · Dhaka</p>
            </div>
          </motion.div>

          {/* MAIN */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease,
            }}
          >
            <h2 className="max-w-5xl text-[clamp(3.2rem,6.2vw,6.8rem)] font-light leading-[0.9] tracking-[-0.065em]">
              Good food feels
              <br />
              <span className="text-black/30">different up here.</span>
            </h2>

            <div className="mt-12 grid gap-10 border-t border-black/10 pt-7 md:mt-16 md:grid-cols-[1fr_auto] md:items-end md:gap-16">
              <p className="max-w-lg text-sm leading-7 text-black/50 md:text-[15px]">
                Ocaso brings together open-air dining, generous food and the
                energy of Uttara in one elevated setting. Come for the view,
                stay for the evening.
              </p>

              <a
                href="#experience"
                className="group flex w-fit items-center gap-4 border-b border-black/20 pb-2 text-[9px] uppercase tracking-[0.28em] text-black/60 transition-colors duration-300 hover:text-black"
              >
                <span>Discover the experience</span>

                <span className="flex h-7 w-7 items-center justify-center border border-black/15 transition-all duration-300 group-hover:border-black/40 group-hover:bg-black group-hover:text-[#f4f1eb]">
                  <ArrowUpRight
                    size={13}
                    strokeWidth={1.2}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* BOTTOM DETAILS */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-16 grid grid-cols-2 border-t border-black/10 pt-5 text-[8px] uppercase tracking-[0.28em] text-black/30 md:mt-20 md:grid-cols-4"
        >
          <span>Open skies</span>
          <span>Rooftop dining</span>
          <span className="hidden md:block">Uttara · Dhaka</span>
          <span className="text-right md:text-left">
            Evenings above the city
          </span>
        </motion.div>
      </div>
    </section>
  );
}
