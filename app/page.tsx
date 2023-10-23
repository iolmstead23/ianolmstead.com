'use client'

import Planet from "@/components/three/planet"
import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import Link from "next/link"
import { Physics } from "@react-three/cannon"
import Plane from "@/components/three/ground"

export default function OuterSpace() {

    return (
        <>
            <div className="flex flex-row justify-end w-screen py-2 px-[100px] m-5">
                <Link href="/blogs">Blog</Link>
            </div>

            <div className="w-screen h-screen text-white">
                <Canvas
                    shadows
                    className="canvas"
                    camera={{ position: [-1, 1, 15], fov: 50 }}
                >
                <color attach="background" args={['lightblue']} />
                    <Suspense fallback={null} >
                        <ambientLight intensity={.8} />
                        <spotLight
                            position={[5, 5, 5]}
                            angle={0.3}
                            penumbra={1}
                            intensity={2}
                            castShadow
                            shadow-mapSize-width={256}
                            shadow-mapSize-height={256}
                        />

                        <Physics defaultContactMaterial={{ contactEquationStiffness: 10000 }}>
                            <Plane rotation={[-Math.PI / 2, 0, 0]} />

                            <Planet texture={"Earth.jpg"} size={1} />
                            <Planet texture={"Saturn.jpg"} size={1.2} />
                            <Planet texture={"Jupiter.jpg"} size={.3} />
                            <Planet texture={"moonmap1k.jpg"} size={.8} />
                        </Physics >
                    </Suspense>
                </Canvas>
            </div>
        </>
    )
}