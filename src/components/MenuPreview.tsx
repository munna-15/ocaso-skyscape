"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

const menuItems = [
  {
    number: "01",
    name: "Seafood Delight",
    category: "From the Sea",
    image: "/images/ocaso/food-01.jpg",
  },
  {
    number: "02",
    name: "Royal Tandoori Platter",
    category: "Signature Grill",
    image: "/images/ocaso/food-02.jpg",
  },
  {
    number: "03",
    name: "Fish & Chips",
    category: "Ocaso Classics",
    image: "/images/ocaso/food-03.jpg",
  },
  {
    number: "04",
    name: "Chicken Medallions Steak",
    category: "From the Grill",
    image: "/images/ocaso/food-04.jpg",
  },
  {
    number: "05",
    name: "Classic Pizza",
    category: "Ocaso Kitchen",
    image: "/images/ocaso/food-01.jpg",
  },
  {
    number: "06",
    name: "Seafood Pasta",
    category: "From the Kitchen",
    image: "/images/ocaso/food-02.jpg",
  },
];

function MenuItem({
  number,
  name,
  category,
  image,
}: {
  number: string;
  name: string;
  category: string;
  image: string;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group"
    >
      {/* IMAGE */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <motion.img
          src={image}
          alt={name}
          initial={{ scale: 1.06 }}
          whileInView={{ scale: 1 }}
          whileHover={{ scale: 1.035 }}
          viewport={{ once: true }}
          transition={{
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-100" />

        <span className="absolute left-5 top-5 text-[8px] tracking-[0.2em] text-white/65">
          {number}
        </span>

        <span className="absolute bottom-5 right-5 text-[8px] uppercase tracking-[0.25em] text-white/55">
          Ocaso
        </span>
      </div>

      {/* INFO */}
      <div className="border-t border-black/10 pt-4">
        <div className="flex items-start justify-between gap-5">
          <div>
            <h3 className="text-[clamp(1.15rem,1.7vw,1.45rem)] font-light leading-tight tracking-[-0.025em] text-black/80 transition-colors duration-300 group-hover:text-black">
              {name}
            </h3>

            <span className="mt-2 block text-[8px] uppercase tracking-[0.28em] text-black/30">
              {category}
            </span>
          </div>

          <ArrowUpRight
            size={16}
            strokeWidth={1.2}
            className="mt-1 shrink-0 text-black/25 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-black/70"
          />
        </div>
      </div>
    </motion.article>
  );
}

export default function MenuPreview() {
  return (
    <section id="menu" className="overflow-hidden bg-[#f4f1eb] text-[#171716]">
      <div className="mx-auto max-w-[1500px] px-6 py-24 md:px-10 md:py-32 lg:px-14 lg:py-36">
        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-16 md:mb-20 lg:mb-24"
        >
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-8 bg-black/25" />

            <span className="text-[9px] uppercase tracking-[0.34em] text-black/40">
              The Menu
            </span>
          </div>

          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <h2 className="max-w-4xl text-[clamp(4rem,8vw,8.5rem)] font-light leading-[0.82] tracking-[-0.075em]">
              A taste of
              <br />
              <span className="text-black/25">Ocaso.</span>
            </h2>

            <p className="max-w-xs text-sm leading-6 text-black/45 md:pb-2">
              A selection from the kitchen, made for sharing, lingering and
              enjoying the evening above the city.
            </p>
          </div>
        </motion.div>

        {/* 6 FOOD ITEMS */}
        <div className="grid gap-x-8 gap-y-14 md:grid-cols-2 lg:gap-x-12 lg:gap-y-20">
          {menuItems.map((item) => (
            <MenuItem key={item.number} {...item} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 flex justify-center border-t border-black/10 pt-9 md:mt-20"
        >
          <a
            href="#reserve"
            className="group inline-flex items-center gap-4 text-[9px] uppercase tracking-[0.28em] text-black/50 transition-colors duration-300 hover:text-black"
          >
            Explore the full menu
            <span className="flex h-9 w-9 items-center justify-center border border-black/15 transition-all duration-300 group-hover:border-black/40">
              <ArrowUpRight
                size={14}
                strokeWidth={1.2}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
