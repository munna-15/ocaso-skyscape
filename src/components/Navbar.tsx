"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const links = [
  { label: "Menu", href: "#menu" },
  { label: "Experience", href: "#experience" },
  { label: "Reserve", href: "#reserve" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-white/10 bg-black/70 backdrop-blur-xl"
            : "bg-gradient-to-b from-black/60 via-black/20 to-transparent"
        }`}
      >
        <div className="mx-auto flex h-[88px] max-w-[1500px] items-center justify-between px-6 md:px-10 lg:px-14">
          {/* LOGO */}
          <Link
            href="/"
            className="relative z-[60] flex items-center gap-3"
            aria-label="Ocaso Skyscape"
          >
            <Image
              src="/images/ocaso/logo.jpg"
              alt="Ocaso Skyscape logo"
              width={180}
              height={40}
              priority
              className="h-[36px] w-auto object-contain md:h-[42px]"
            />

            <span className="text-[17px] font-medium tracking-[0.28em] !text-white md:text-[18px]">
              OCASO
            </span>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden items-center gap-9 md:flex">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="relative block text-[10px] uppercase tracking-[0.22em] !text-white/75 transition-colors duration-300 hover:!text-white"
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="#reserve"
              className="group ml-2 flex items-center gap-2 border border-white/35 bg-white/5 px-5 py-3 text-[9px] uppercase tracking-[0.2em] !text-white backdrop-blur-sm transition-all duration-300 hover:bg-white hover:!text-black"
            >
              <span className="!text-inherit">Book a Table</span>

              <ArrowUpRight
                size={14}
                strokeWidth={1.4}
                className="text-current transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </nav>

          {/* MOBILE TOGGLE */}
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="relative z-[60] flex h-11 w-11 items-center justify-center border border-white/30 bg-black/10 !text-white backdrop-blur-sm md:hidden"
          >
            <AnimatePresence mode="wait" initial={false}>
              {menuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={19} strokeWidth={1.5} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={19} strokeWidth={1.5} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-40 bg-[#11110f] md:hidden"
          >
            <div className="flex h-full flex-col justify-center px-8">
              <nav className="flex flex-col">
                {links.map((link, index) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.08,
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="block border-b border-white/10 py-5 text-[clamp(2.5rem,12vw,4.5rem)] font-light tracking-[-0.04em] !text-white"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.45,
                  delay: 0.3,
                }}
              >
                <Link
                  href="#reserve"
                  onClick={() => setMenuOpen(false)}
                  className="group mt-10 flex w-fit items-center gap-3 border border-white/30 px-6 py-4 text-[10px] uppercase tracking-[0.22em] !text-white"
                >
                  <span className="!text-inherit">Reserve a Table</span>

                  <ArrowUpRight
                    size={15}
                    strokeWidth={1.4}
                    className="text-current transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </Link>
              </motion.div>

              <div className="absolute bottom-8 left-8 right-8 flex items-center justify-between text-[9px] uppercase tracking-[0.25em] text-white/35">
                <span>Ocaso Skyscape</span>
                <span>Uttara · Dhaka</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
