"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="mb-40">
      <div className="overflow-hidden bg-cover bg-no-repeat bg-[url('/coding.gif')] h-[500px]">
        <div className="relative top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.75)] bg-fixed">
          <div className="flex h-full items-center justify-center">
            <div className="px-6 text-center md:px-12">

              <motion.h1 class="mt-2 mb-16 font-bold tracking-tight md:text-6xl xl:text-7xl text-white"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 1.1 }}
              >
                ianOlmstead <br /><span>Programmer & Analyst</span>
              </motion.h1>

              <motion.button type="button"
                class="rounded border-2 border-neutral-50 px-[46px] pt-[14px] pb-[12px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-100 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200"
                data-te-ripple-init data-te-ripple-color="light"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 1.1 }}
              >
                <Link href="/about">Learn More</Link>
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
     )
}