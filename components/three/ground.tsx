import { usePlane } from '@react-three/cannon'

export default function Plane(props: any) {
    const [ref]: any = usePlane(() => ({ mass: 0, ...props }))

    return (
      <mesh
        ref={ref}
        receiveShadow
        castShadow
      >
        <planeGeometry attach="geometry" args={[1000, 1000]} />
        <shadowMaterial attach="material" color="#171717" opacity={0.5} />
      </mesh>
    )
  }