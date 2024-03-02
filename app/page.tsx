'use client'

import Planet from "@/components/three/planet"
import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import Link from "next/link"
import { Physics } from "@react-three/cannon"
import Ground from "@/components/three/ground"
import { Html } from '@react-three/drei'
import CTA from "@/components/fiverr/cta"
import Light from "@/components/three/light"
import Footer from "@/components/footer"
import TagManager from "react-gtm-module"

const tagManagerArgs = {
    gtmId: 'GTM-PDP55VPW',
    dataLayerName: 'PageDataLayer'
}

export default function Home() {

    useEffect(()=>{
        TagManager.initialize(tagManagerArgs)
      },[])
    
    return (
        <>
            <div className="h-screen text-white">
                <Canvas
                    className="canvas"
                    camera={{ position: [-1, 1, 15], fov: 50}}
                    shadows
                >

                    <Suspense fallback={null} >

                        <Light />
                        <color attach="background" args={['lightblue']} />

                        <mesh>
                            <Html fullscreen>
                                <div className="text-gray-900 font-bold flex flex-row justify-end w-screen py-2 px-[100px] m-5">
                                    <Link href="/blogs">Blog</Link>
                                </div>
                            </Html>
                        </mesh>

                        <mesh>
                            <Html center><CTA /></Html>
                        </mesh>

                        <Physics defaultContactMaterial={{ contactEquationStiffness: 10000 }}>
                            <Ground rotation={[-Math.PI / 2, 0, 0]} receiveShadow />

                            <Planet texture={"Earth.jpg"} size={1} />
                            <Planet texture={"Saturn.jpg"} size={1.2} />
                            <Planet texture={"Jupiter.jpg"} size={.3} />
                            <Planet texture={"moonmap1k.jpg"} size={.8} />
                        </Physics >
                    </Suspense>
                </Canvas>
            </div>
            <Footer />
        </>
    )
}
