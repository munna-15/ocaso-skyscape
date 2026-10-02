"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

const links = [
  { label: "Menu", href: "#menu" },
  { label: "Experience", href: "#experience" },
  { label: "Reserve", href: "#reserve" },
];

export default function Footer() {
  return (
    <footer className="bg-black text-[#f4f1eb]">
      <div className="mx-auto max-w-[1500px] px-6 md:px-10 lg:px-14">
        {/* TOP */}
        <div className="border-t border-white/10 py-20 md:py-24 lg:py-28">
          <div className="grid gap-16 md:grid-cols-[1.2fr_0.8fr] lg:grid-cols-[1.4fr_0.6fr_0.6fr]">
            {/* BRAND */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Link href="/" className="inline-block">
                <Image
                  src="/images/ocaso/logo.jpg"
                  alt="Ocaso Skyscape"
                  width={220}
                  height={100}
                  className="h-auto w-[80px] object-contain md:w-[100px]"
                />
              </Link>

              <p className="mt-7 max-w-sm text-sm leading-7 text-white/40">
                Rooftop dining above the city. Thoughtful food, open skies and
                evenings worth staying for.
              </p>
            </motion.div>

            {/* NAVIGATION */}
            <div>
              <span className="text-[8px] uppercase tracking-[0.3em] text-white/30">
                Explore
              </span>

              <nav className="mt-6 flex flex-col items-start">
                {links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="group flex items-center gap-2 py-2 text-sm text-white/55 transition-colors duration-300 hover:text-white"
                  >
                    {link.label}

                    <ArrowUpRight
                      size={13}
                      strokeWidth={1.2}
                      className="opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                    />
                  </Link>
                ))}
              </nav>
            </div>

            {/* VISIT */}
            <div>
              <span className="text-[8px] uppercase tracking-[0.3em] text-white/30">
                Visit
              </span>

              <p className="mt-6 text-sm leading-7 text-white/50">
                16 Sonargaon Janapath Road
                <br />
                Sector 9 · Uttara · Dhaka
              </p>

              <a
                href="https://www.google.com/maps/search/?api=1&query=16+Sonargaon+Janapath+Road+Sector+9+Uttara+Dhaka"
                target="_blank"
                rel="noreferrer"
                className="group mt-5 inline-flex items-center gap-2 text-[9px] uppercase tracking-[0.25em] text-white/45 transition-colors duration-300 hover:text-white"
              >
                Get directions
                <ArrowUpRight
                  size={13}
                  strokeWidth={1.2}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>
          </div>
        </div>

        {/* BRAND STATEMENT */}
        <div className="border-t border-white/10 py-12 md:py-14">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="text-[8px] uppercase tracking-[0.32em] text-white/25">
                Ocaso Skyscape
              </span>

              <h2 className="mt-4 max-w-2xl text-[clamp(2.2rem,4vw,4.5rem)] font-light leading-[0.95] tracking-[-0.06em] text-white/75">
                See you
                <br />
                <span className="text-white/25">above the city.</span>
              </h2>
            </div>

            {/* SOCIAL */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/ocasoskyscape/"
                target="_blank"
                rel="noreferrer"
                aria-label="Ocaso Instagram"
                className="group flex h-10 w-10 items-center justify-center border border-white/15 text-white/45 transition-all duration-300 hover:border-white/40 hover:text-white"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-[15px] w-[15px]"
                  aria-hidden="true"
                >
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                </svg>
              </a>

              <a
                href="https://www.facebook.com/ocasoskyscape/"
                target="_blank"
                rel="noreferrer"
                aria-label="Ocaso Facebook"
                className="group flex h-10 w-10 items-center justify-center border border-white/15 text-white/45 transition-all duration-300 hover:border-white/40 hover:text-white"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-[15px] w-[15px]"
                  aria-hidden="true"
                >
                  <path d="M14 8h3V4h-3c-3.31 0-5 1.69-5 5v3H6v4h3v8h4v-8h3.2l.8-4H13V9c0-.66.34-1 1-1Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="flex flex-col gap-4 border-t border-white/10 py-6 text-[8px] uppercase tracking-[0.25em] text-white/25 md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} Ocaso Skyscape</span>

          <span>Uttara · Dhaka · Bangladesh</span>

          <span>Rooftop Dining</span>
        </div>
      </div>
    </footer>
  );
}
