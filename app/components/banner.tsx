"use client"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "./ui/card"

import { motion } from "framer-motion"

const dummyText: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Pulvinar pellentesque habitant morbi tristique. Eget est lorem ipsum dolor sit amet consectetur adipiscing. Elementum eu facilisis sed odio morbi quis commodo. Accumsan tortor posuere ac ut consequat semper viverra nam libero. Duis at consectetur lorem donec massa sapien faucibus. Interdum velit euismod in pellentesque massa placerat. Non pulvinar neque laoreet suspendisse. Nibh praesent tristique magna sit amet. Non consectetur a erat nam at lectus. Tempor orci dapibus ultrices in iaculis nunc. Et sollicitudin ac orci phasellus egestas tellus. Quisque sagittis purus sit amet. Condimentum vitae sapien pellentesque habitant morbi tristique senectus et. Bibendum est ultricies integer quis auctor elit. Non odio euismod lacinia at quis risus. Et pharetra pharetra massa massa ultricies mi quis hendrerit. Fames ac turpis egestas sed.'

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
                            <p className="text-center">I Received a Certificate from MIT in Applied Data Science in 2022. I have been working on expanding my skills.</p>
                        </CardContent>
                    </Card>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }}>
                    <Card className="shadow-2xl my-10">
                        <CardHeader>
                            <CardTitle className="text-center">Programming<br />Nerd</CardTitle>
                        </CardHeader>
                        <CardContent className="w-[250px]">
                            <p className="text-center">The programming languages I use are Javascript, Python, and SQL lately. I started programming when I was a teenager.</p>
                        </CardContent>
                    </Card>
                </motion.div>

                <motion.div whileHover={{ scale: 1.1 }}>
                    <Card className="shadow-2xl my-10">
                        <CardHeader>
                            <CardTitle className="text-center">Front End<br />Developer</CardTitle>
                        </CardHeader>
                        <CardContent className="w-[250px]">
                            <p className="text-center">This website was hand built using reusable components in NextJS. I coded and designed the layout.</p>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </div>
    )
}