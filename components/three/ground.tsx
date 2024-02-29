import { usePlane } from '@react-three/cannon'

export default function Ground(props: any) {
    const [ref]: any = usePlane(() => ({ mass: 0, ...props }))

    return (
      <mesh ref={ref} receiveShadow>
      <planeGeometry attach="geometry" args={[200, 200, 32, 32]} />
      <meshStandardMaterial attach="material" color={0x00FF00} />
    </mesh>
  );
}