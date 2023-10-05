import { useLoader, useFrame } from "@react-three/fiber"
import { TextureLoader } from "three"
import { useRef} from "react";

export default function Planets() {

    const [colorMap] = useLoader(TextureLoader, ["/Earth.jpg"])

    // using Type any is a lazy fix but I don't know how to fix it
    const earth: any = useRef();

    useFrame(({ clock }) => {
        const a = clock.getElapsedTime() / 4;
        earth.current.rotation.y = a
      })

    return (
        <>
            <mesh ref={earth}>
                <sphereGeometry args={[ 2, 32, 32 ]}/>
                <meshStandardMaterial map={colorMap}/>
            </mesh>
        </>
    )
}
