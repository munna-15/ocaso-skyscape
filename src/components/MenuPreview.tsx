
"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

const menuItems = [
  {
    number: "01",
    name: "Royal Tandoori Platter",
    category: "Signature Grill",
    image: "/images/ocaso/food-02.jpg",
  },
  {
    number: "02",
    name: "Fish & Chips",
    category: "Ocaso Classics",
    image: "/images/ocaso/food-03.jpg",
  },
  {
    number: "03",
    name: "Chicken Medallions Steak",
    category: "From the Grill",
    image: "/images/ocaso/food-04.jpg",
  },
  {
    number: "04",
    name: "Classic Pizza",
    category: "Ocaso Kitchen",
    image: "/images/ocaso/food-05.jpg",
  },
  {
    number: "05",
    name: "Seafood Pasta",
    category: "From the Kitchen",
    image: "/images/ocaso/food-06.jpg",
  },
];

const ease = [0.16, 1, 0.3, 1] as const;

export default function MenuPreview() {
  return (
    <section
      id="menu"
      className="overflow-hidden bg-[#f4f1eb] text-[#171716]"
    >
      <div className="mx-auto max-w-[1500px] px-6 py-24 md:px-10 md:py-32 lg:px-14 lg:py-36">

        {/* INTRO */}
        <div className="flex flex-col gap-10 border-t border-black/10 pt-7 md:flex-row md:items-end md:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease }}
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-black/25" />
              <span className="text-[9px] uppercase tracking-[0.34em] text-black/40">
                The Menu
              </span>
            </div>

            <h2 className="text-[clamp(3.2rem,5.8vw,6.5rem)] font-light leading-[0.86] tracking-[-0.065em]">
              Something for
              <br />
              <span className="text-black/25">every table.</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-xs pb-1 text-sm leading-6 text-black/45"
          >
            From generous plates to Ocaso favourites, made for evenings that
            are better shared.
          </motion.p>
        </div>

        {/* FEATURED + MENU */}
        <div className="mt-16 grid gap-16 md:mt-20 lg:grid-cols-[1.08fr_0.92fr] lg:gap-24">

          {/* FEATURED */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 1, ease }}
            className="group"
          >
            <div className="relative overflow-hidden bg-[#e9e4db]">

              <motion.img
                src="/images/ocaso/offer-02.jpg"
                alt="Seafood Delight"
                initial={{ scale: 1.035 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.4, ease }}
                className="block h-auto max-h-[680px] w-full object-contain object-center transition-transform duration-[1400ms] group-hover:scale-[1.012]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

              <div className="absolute bottom-7 left-7 md:bottom-9 md:left-9">
                <span className="text-[8px] uppercase tracking-[0.34em] text-white/55">
                  Featured
                </span>

                <h3 className="mt-2 text-[clamp(2rem,3.4vw,3.4rem)] font-light leading-none tracking-[-0.045em] text-white">
                  Seafood Delight
                </h3>

                <p className="mt-3 text-[9px] uppercase tracking-[0.3em] text-white/45">
                  From the Sea
                </p>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <span className="text-[8px] uppercase tracking-[0.28em] text-black/25">
                Ocaso Kitchen
              </span>

              <span className="text-[8px] uppercase tracking-[0.28em] text-black/25">
                Featured dish
              </span>
            </div>
          </motion.div>

          {/* MENU LIST */}
          <div className="flex flex-col lg:pt-3">

            <div className="mb-5 flex items-center justify-between border-b border-black/10 pb-4">
              <span className="text-[8px] uppercase tracking-[0.3em] text-black/30">
                Selected dishes
              </span>

              <span className="text-[8px] uppercase tracking-[0.25em] text-black/20">
                01 — 05
              </span>
            </div>

            {menuItems.map((item, index) => (
              <motion.article
                key={item.number}
                initial={{ opacity: 0, x: 18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.06,
                  ease,
                }}
                className="group border-b border-black/10 py-5 md:py-6"
              >
                <div className="flex items-center gap-5">

                  {/* NUMBER */}
                  <span className="w-8 shrink-0 text-[10px] tracking-[0.18em] text-black/25">
                    {item.number}
                  </span>

                  {/* FOOD IMAGE */}
                  <div className="relative h-[68px] w-[88px] shrink-0 overflow-hidden bg-[#e9e4db] md:h-[78px] md:w-[102px]">
                    <motion.img
                      src={item.image}
                      alt={item.name}
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.8, ease }}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  {/* INFO */}
                  <div className="min-w-0 flex-1">
                    <h3 className="text-[clamp(1.05rem,1.7vw,1.4rem)] font-light leading-tight tracking-[-0.025em] text-black/70 transition-colors duration-300 group-hover:text-black">
                      {item.name}
                    </h3>

                    <p className="mt-2 text-[8px] uppercase tracking-[0.27em] text-black/30">
                      {item.category}
                    </p>
                  </div>

                  {/* SUBTLE LINE */}
                  <span className="hidden h-px w-5 shrink-0 bg-black/15 transition-all duration-500 group-hover:w-9 group-hover:bg-black/40 md:block" />
                </div>
              </motion.article>
            ))}

            {/* LIST FOOTER */}
            <div className="mt-6 flex items-center justify-between">
              <span className="text-[8px] uppercase tracking-[0.28em] text-black/20">
                Five selections
              </span>

              <span className="text-[8px] uppercase tracking-[0.28em] text-black/20">
                Ocaso · Uttara
              </span>
            </div>
          </div>
        </div>

        {/* SINGLE CTA */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease }}
          className="mt-16 flex flex-col gap-6 border-t border-black/10 pt-7 md:mt-20 md:flex-row md:items-center md:justify-between"
        >
          <div>
            <span className="text-[8px] uppercase tracking-[0.3em] text-black/25">
              The full table
            </span>

            <p className="mt-2 text-sm text-black/45">
              Explore the complete Ocaso menu.
            </p>
          </div>

          <a
            href="#reserve"
            className="group inline-flex w-fit items-center gap-4 text-[9px] uppercase tracking-[0.28em] text-black/60 transition-colors duration-300 hover:text-black"
          >
            <span>Explore full menu</span>

            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-black/20 transition-all duration-400 group-hover:border-black group-hover:bg-black group-hover:text-[#f4f1eb]">
              <ArrowUpRight
                size={15}
                strokeWidth={1.2}
                className="transition-transform duration-400 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

