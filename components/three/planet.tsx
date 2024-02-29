import { useSphere } from "@react-three/cannon";
import { useLoader } from "@react-three/fiber"
import { MutableRefObject, useRef } from "react";
import { TextureLoader } from "three"

interface Planet {
    texture: string;
    size: number;
}

export default function Planets(planet: Planet) {

    const [colorMap] = useLoader(TextureLoader, [planet.texture])

    const [ref, api]: any = useSphere(() => ({
        mass: 1,
        position: [Math.random() - 0.5, Math.random() * 20, Math.random() - 0.5],
        args: [planet.size]
    }))

    const speed: MutableRefObject<number> = useRef(10)

    return (
        <>
            <mesh
                ref={ref}
                onClick={() => api.angularVelocity.set(
                    Math.sign(Math.random()-0.5) * speed.current,
                    0,
                    Math.sign(Math.random()-0.5) * speed.current)}
                castShadow
                receiveShadow
            >
                <sphereGeometry args={[planet.size]}/>
                <meshStandardMaterial map={colorMap}/>
            </mesh>
        </>
    )
}
