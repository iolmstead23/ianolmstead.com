"use client"

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Project({title,text,url}) {
    return (

<motion.div class="max-w-sm bg-bg1 dark:bg-bg1Dark border border-gray-600 rounded-lg shadow m-10 opacity-80 hover:opacity-100"
whileHover={{ scale: 1.1 }}>

    <Image class="rounded-t-lg" src={url} alt="" width={500} height={500} />

    <div class="p-5">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-primary dark:text-primaryDark">{title}</h5>
        <p class="mb-3 font-normal text-primary dark:text-primaryDark">{text.slice(0,250)}</p>
        <Link href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </Link>
    </div>
</motion.div>

    )
}