"use client";

import { ArrowUpRight, Clock3, MapPin } from "lucide-react";
import { motion } from "motion/react";

const mapUrl =
  "https://www.google.com/maps/search/?api=1&query=16+Sonargaon+Janapath+Road+Sector+9+Uttara+Dhaka";

export default function Location() {
  return (
    <section className="min-h-[60vh] bg-[#0b1628] text-[#f4f1eb]">
      <div className="mx-auto flex min-h-[80vh] max-w-[1500px] items-center px-6 py-20 md:px-10 md:py-24 lg:px-14">
        <div className="grid w-full gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-24">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-8 bg-white/25" />

              <span className="text-[9px] uppercase tracking-[0.34em] text-white/40">
                Visit Ocaso
              </span>
            </div>

            <h2 className="max-w-xl text-[clamp(3.5rem,6vw,6.8rem)] font-light leading-[0.88] tracking-[-0.07em]">
              Above the city.
              <br />
              <span className="text-white/30">Come find us.</span>
            </h2>

            <p className="mt-8 max-w-md text-sm leading-7 text-white/50">
              Ocaso Skyscape brings dinner, open skies and the lights of Uttara
              together in one elevated setting.
            </p>

            {/* LOCATION */}
            <div className="mt-10 flex gap-4 border-t border-white/10 pt-6">
              <MapPin
                size={16}
                strokeWidth={1.2}
                className="mt-0.5 shrink-0 text-white/40"
              />

              <div>
                <span className="text-[8px] uppercase tracking-[0.3em] text-white/35">
                  Location
                </span>

                <p className="mt-2 text-sm leading-6 text-white/60">
                  16 Sonargaon Janapath Road
                  <br />
                  Sector 9 · Uttara · Dhaka
                </p>
              </div>
            </div>

            {/* HOURS */}
            <div className="mt-7 border-t border-white/10 pt-6">
              <div className="mb-5 flex items-center gap-3">
                <Clock3 size={15} strokeWidth={1.2} className="text-white/40" />

                <span className="text-[8px] uppercase tracking-[0.3em] text-white/35">
                  Opening hours
                </span>
              </div>

              <div className="max-w-md space-y-3">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span className="text-xs text-white/45">
                    Saturday — Thursday
                  </span>

                  <span className="text-xs text-white/65">12 PM — 11 PM</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-white/45">Friday</span>

                  <span className="text-xs text-white/65">2 PM — 11 PM</span>
                </div>
              </div>
            </div>

            {/* CTA */}
            <a
              href={mapUrl}
              target="_blank"
              rel="noreferrer"
              className="group mt-9 inline-flex items-center gap-4 border border-[#f4f1eb]/30 bg-[#f4f1eb] px-6 py-4 text-[9px] uppercase tracking-[0.28em] !text-[#171716] transition-all duration-300 hover:bg-transparent hover:!text-[#f4f1eb]"
            >
              <span className="!text-inherit">Get directions</span>

              <span className="flex h-7 w-7 items-center justify-center border border-current">
                <ArrowUpRight
                  size={14}
                  strokeWidth={1.3}
                  className="text-current transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </span>
            </a>
          </motion.div>

          {/* RIGHT — MAP */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 1,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative h-[420px] overflow-hidden border border-white/10 md:h-[500px] lg:h-[540px]"
          >
            <iframe
              title="Ocaso Skyscape location"
              src="https://www.google.com/maps?q=16+Sonargaon+Janapath+Road,+Sector+9,+Uttara,+Dhaka&output=embed"
              className="absolute inset-0 h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* MAP LABEL */}
            <div className="absolute bottom-5 left-5 md:bottom-7 md:left-7">
              <div className="flex items-center gap-3 bg-white px-4 py-3 shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-black/30" />

                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#171716]" />
                </span>

                <span className="text-[8px] uppercase tracking-[0.27em] text-black/60">
                  Ocaso · Uttara
                </span>
              </div>
            </div>

            {/* INDEX */}
            <span className="absolute right-5 top-5 text-[8px] uppercase tracking-[0.3em] text-black/45 md:right-7 md:top-7">
              05 / 05
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
