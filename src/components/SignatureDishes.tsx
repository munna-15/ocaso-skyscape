"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

const dishes = [
  {
    number: "01",
    name: "Seafood Delight",
    category: "From the sea",
    image: "/images/ocaso/food-01.jpg",
  },
  {
    number: "02",
    name: "Royal Tandoori Platter",
    category: "Signature grill",
    image: "/images/ocaso/food-02.jpg",
  },
  {
    number: "03",
    name: "Fish & Chips",
    category: "Ocaso classics",
    image: "/images/ocaso/food-03.jpg",
  },
];

export default function SignatureDishes() {
  return (
    <section className="bg-[#f4f1eb] text-[#171716]">
      <div className="mx-auto max-w-[1500px] px-6 py-8 md:px-10 md:py-12 lg:px-14 lg:py-16">
        <div className="grid gap-16 lg:grid-cols-[0.7fr_2fr] lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:sticky lg:top-32 lg:self-start"
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-black/30" />

              <span className="text-[9px] uppercase tracking-[0.3em] text-black/45">
                From the kitchen
              </span>
            </div>

            <h2 className="max-w-xl text-[clamp(3rem,5.8vw,6.5rem)] font-light leading-[0.9] tracking-[-0.06em]">
              Made for
              <br />
              <span className="text-black/35">the table.</span>
            </h2>

            <p className="mt-8 max-w-sm text-sm leading-7 text-black/50">
              A selection of dishes made for long evenings, shared tables and
              good conversation above the city.
            </p>

            <a
              href="#menu"
              className="group mt-9 flex w-fit items-center gap-3 border-b border-black/25 pb-2 text-[10px] uppercase tracking-[0.22em]"
            >
              View full menu
              <ArrowUpRight
                size={15}
                strokeWidth={1.3}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </motion.div>

          <div className="grid gap-14 md:grid-cols-2 md:gap-x-8 md:gap-y-20">
            <motion.article
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group md:col-span-2"
            >
              <div className="relative overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.035 }}
                  transition={{
                    duration: 1.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  src={dishes[0].image}
                  alt={dishes[0].name}
                  className="aspect-[16/9] w-full object-cover md:aspect-[2.05/1]"
                />

                <div className="absolute left-5 top-5 md:left-7 md:top-7">
                  <span className="bg-[#f4f1eb]/90 px-3 py-2 text-[9px] uppercase tracking-[0.22em]">
                    {dishes[0].number}
                  </span>
                </div>
              </div>

              <div className="mt-5 flex items-end justify-between border-b border-black/15 pb-5">
                <div>
                  <p className="mb-2 text-[9px] uppercase tracking-[0.25em] text-black/35">
                    {dishes[0].category}
                  </p>

                  <h3 className="text-2xl font-light tracking-[-0.03em] md:text-3xl">
                    {dishes[0].name}
                  </h3>
                </div>

                <ArrowUpRight
                  size={19}
                  strokeWidth={1.2}
                  className="mb-1 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </div>
            </motion.article>

            {dishes.slice(1).map((dish, index) => (
              <motion.article
                key={dish.number}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`group ${index === 1 ? "md:translate-y-16" : ""}`}
              >
                <div className="relative overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.04 }}
                    transition={{
                      duration: 1,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    src={dish.image}
                    alt={dish.name}
                    className="aspect-[4/5] w-full object-cover"
                  />

                  <div className="absolute left-4 top-4">
                    <span className="bg-[#f4f1eb]/90 px-3 py-2 text-[9px] uppercase tracking-[0.22em]">
                      {dish.number}
                    </span>
                  </div>
                </div>

                <div className="mt-4 flex items-end justify-between border-b border-black/15 pb-4">
                  <div>
                    <p className="mb-2 text-[8px] uppercase tracking-[0.25em] text-black/35">
                      {dish.category}
                    </p>

                    <h3 className="text-xl font-light tracking-[-0.025em]">
                      {dish.name}
                    </h3>
                  </div>

                  <ArrowUpRight
                    size={16}
                    strokeWidth={1.2}
                    className="mb-0.5 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
