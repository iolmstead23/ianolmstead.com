"use client"

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"


interface Project {
    title: string
    text: string
    image: string
    url: string
}

export default function Project(project: Project) {
    return (

        <motion.div className="max-w-md"
        whileHover={{ scale: 1.1 }}>

            <Card className="bg-bg1 border border-slate-600 rounded-lg m-10 opacity-80 hover:opacity-100 h-[500px]">
                <CardHeader>
                    <Image src={project.image} alt="" width={500} height={500} />
                
                    <CardTitle className="text-2xl font-bold tracking-tight text-primary">
                        {project.title}
                    </CardTitle>
                </CardHeader>

                <CardDescription className="m-5 font-normal text-primary">
                    {project.text}
                </CardDescription>
                
                <CardFooter>
                    <Link href={project.url} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-slate-700 rounded-lg hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800">
                        Read more
                        <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </Link>
                </CardFooter>
            </Card>
        </motion.div>

    )
}