import { useSphere } from "@react-three/cannon";
import { useLoader } from "@react-three/fiber"
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

    const speed: number = 1

    return (
        <>
            <mesh
                ref={ref}
                onClick={() => api.angularVelocity.set(
                    Math.sign(Math.random()-0.5) * speed,
                    0,
                    Math.sign(Math.random()-0.5) * speed)}
                castShadow
                receiveShadow
            >
                <sphereGeometry args={[ planet.size]}/>
                <meshStandardMaterial map={colorMap}/>
            </mesh>
        </>
    )
}
