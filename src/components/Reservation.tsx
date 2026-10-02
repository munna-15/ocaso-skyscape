"use client";

import { ArrowUpRight, MapPin } from "lucide-react";
import { motion } from "motion/react";

export default function Reservation() {
  return (
    <section
      id="reserve"
      className="overflow-hidden bg-[#f4f1eb] text-[#171716]"
    >
      <div className="mx-auto max-w-[1500px] px-6 py-24 md:px-10 md:py-32 lg:px-14 lg:py-36">
        <div className="grid gap-14 md:grid-cols-[0.82fr_1.18fr] md:items-center lg:gap-24">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative"
          >
            <div className="relative aspect-[4/5] max-h-[620px] overflow-hidden">
              <motion.img
                src="/images/ocaso/rooftop-03.jpg"
                alt="Ocaso rooftop dining"
                initial={{ scale: 1.06 }}
                whileInView={{ scale: 1 }}
                whileHover={{ scale: 1.025 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1.3,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6">
                <span className="text-[9px] uppercase tracking-[0.3em] text-white/65">
                  Ocaso Skyscape
                </span>
              </div>
            </div>

            <span className="absolute -bottom-7 right-0 text-[8px] uppercase tracking-[0.3em] text-black/30">
              Rooftop · Uttara
            </span>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.9,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="md:pl-2 lg:pl-6"
          >
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-8 bg-black/25" />

              <span className="text-[9px] uppercase tracking-[0.34em] text-black/40">
                Reservations
              </span>
            </div>

            <h2 className="max-w-3xl text-[clamp(3.5rem,6vw,7rem)] font-light leading-[0.87] tracking-[-0.07em]">
              Make an evening
              <br />
              <span className="text-black/25">worth staying for.</span>
            </h2>

            <p className="mt-8 max-w-sm text-sm leading-6 text-black/50">
              Come for dinner, stay for the skyline. Reserve your table and make
              the evening yours.
            </p>

            <a
              href="tel:+880XXXXXXXXXX"
              className="group mt-9 inline-flex items-center gap-4 border border-[#171716]/20 bg-[#171716] px-6 py-4 text-[9px] uppercase tracking-[0.28em] !text-[#f4f1eb] transition-all duration-300 hover:bg-transparent hover:!text-[#171716]"
            >
              <span className="!text-inherit">Call to reserve</span>

              <span className="flex h-7 w-7 items-center justify-center border border-current">
                <ArrowUpRight
                  size={14}
                  strokeWidth={1.3}
                  className="text-current transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </span>
            </a>

            <div className="mt-14 border-t border-black/10 pt-6">
              <div className="flex items-start gap-3">
                <MapPin
                  size={14}
                  strokeWidth={1.2}
                  className="mt-0.5 text-black/40"
                />

                <div>
                  <span className="text-[8px] uppercase tracking-[0.28em] text-black/35">
                    Find us
                  </span>

                  <p className="mt-2 text-sm text-black/55">
                    16 Sonargaon Janapath Road
                    <br />
                    Sector 9 · Uttara · Dhaka
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
