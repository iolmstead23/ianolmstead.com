'use client'

import Planets from "@/components/three/planets"
import { Suspense } from "react"
import { Stars, ScrollControls, Scroll } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import About from "@/components/about"
import Link from "next/link"

export default function OuterSpace() {
    return (
        <div className="w-screen h-screen bg-black text-white">
            <Canvas className="canvas">
                <Suspense fallback={null} >
                    <ambientLight intensity={1} />
                    <Stars radius={300} depth={60} count={20000} factor={7} saturation={0} fade={true} />

                    <ScrollControls pages={2}>
                        <Planets/>
                        <Scroll html>
                            <div className="flex flex-row justify-end p-10">
                                <Link href="/blogs">Blogs</Link>
                            </div>
                            <About />
                        </Scroll>
                    </ScrollControls>
                </Suspense>
            </Canvas>
        </div>
    )
}