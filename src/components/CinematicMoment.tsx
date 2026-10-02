"use client";

import { motion } from "motion/react";

export default function CinematicMoment() {
  return (
    <section className="relative h-[65vh] min-h-[500px] overflow-hidden">
      {/* Cinematic background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url('/images/ocaso/rooftop-06.jpg')",
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/35" />

      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/65" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="text-center text-white"
        >
          <div className="mb-6 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-white/45" />

            <span className="text-[9px] uppercase tracking-[0.35em] text-white/65">
              After sunset
            </span>

            <span className="h-px w-8 bg-white/45" />
          </div>

          <h2 className="text-[clamp(3rem,7vw,7.5rem)] font-light leading-[0.88] tracking-[-0.065em]">
            Stay a little
            <br />
            <span className="text-white/55">longer.</span>
          </h2>
        </motion.div>
      </div>

      {/* Details */}
      <div className="absolute bottom-7 left-6 right-6 z-10 flex items-center justify-between md:left-10 md:right-10 lg:left-14 lg:right-14">
        <span className="text-[9px] uppercase tracking-[0.28em] text-white/45">
          Ocaso Skyscape
        </span>

        <span className="text-[9px] uppercase tracking-[0.28em] text-white/40">
          Uttara · Dhaka
        </span>
      </div>
    </section>
  );
}
