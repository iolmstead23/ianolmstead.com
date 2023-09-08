"use client"

import { motion } from "framer-motion";

interface Skill {
    title: string
    text: string
}

export default function Skill(project: Skill) {
    return (

        <motion.div className="bg-bg1 border border-gray-600 rounded-lg shadow m-10 opacity-80 hover:opacity-100 max-w-lg"
        whileHover={{ scale: 1.1 }}>
            <div className="flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                    stroke="currentColor" className="h-12 w-12">
                    <path stroke-linecap="round" stroke-linejoin="round"
                    d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                </svg>
            </div>

            <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-primary">
                    {project.title}
                </h5>

                <p className="mb-3 font-normal text-primary">
                    {project.text}
                </p>
            </div>
        </motion.div>

    )
}