"use client"

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";


interface Project {
    title: string
    text: string
    image: string
    url: string
}

export default function Project(project: Project) {
    return (

        <motion.div className="max-w-sm bg-bg1 border border-slate-600 rounded-lg shadow m-10 opacity-80 hover:opacity-100"
        whileHover={{ scale: 1.1 }}>

            <Image className="rounded-t-lg" src={project.image} alt="" width={500} height={500} />

            <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-primary">
                    {project.title}
                </h5>

                <div className="mb-3 font-normal text-primary">
                    {project.text.slice(0,250)}
                </div>
                
                <Link href={project.url} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-slate-700 rounded-lg hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800">
                    Read more
                    <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </Link>
            </div>
        </motion.div>

    )
}