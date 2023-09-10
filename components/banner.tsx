"use client"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

import { motion } from "framer-motion"

export default function Banner() {
    return (
        <div className="w-full py-20">
            <div className="flex flex-row flex-wrap justify-around lg:ml-[80px]">
            <motion.div whileHover={{ scale: 1.1 }}>
                    <Card className="shadow-2xl my-10">
                        <CardHeader>
                            <CardTitle className="text-center">Data<br />Analyst</CardTitle>
                        </CardHeader>
                        <CardContent className="w-[250px]">
                            <div className="text-center">I Received a Certificate from MIT in Applied Data Science in 2022. I have been working on expanding my skills.</div>
                        </CardContent>
                    </Card>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }}>
                    <Card className="shadow-2xl my-10">
                        <CardHeader>
                            <CardTitle className="text-center">Programming<br />Nerd</CardTitle>
                        </CardHeader>
                        <CardContent className="w-[250px]">
                            <div className="text-center">The programming languages I use are Javascript, Python, and SQL lately. I started programming when I was a teenager.</div>
                        </CardContent>
                    </Card>
                </motion.div>

                <motion.div whileHover={{ scale: 1.1 }}>
                    <Card className="shadow-2xl my-10">
                        <CardHeader>
                            <CardTitle className="text-center">Front End<br />Developer</CardTitle>
                        </CardHeader>
                        <CardContent className="w-[250px]">
                            <div className="text-center">This website was hand built using reusable components in NextJS. I coded and designed the layout.</div>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </div>
    )
}