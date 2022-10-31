import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { Html, OrbitControls, TransformControls } from '@react-three/drei'
import { useControls } from 'leva'
export default function Experience() {
  const cube = useRef()
  const sphere = useRef()
  useFrame((state, delta) => {
    // cubeRef.current.rotation.y += delta
  })
  const controls = useControls({ position: - 2 })
  console.log(controls.position)
  return (
    <>
      <OrbitControls enableDamping makeDefault ></OrbitControls>
      <directionalLight position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.5} />

      <mesh ref={cube} position-x={- 2}>
        <boxGeometry />
        <meshStandardMaterial color="orange" />
      </mesh>

      <TransformControls position-x={2} >
        <mesh ref={sphere} scale={1.5}>
          <sphereGeometry />
          <meshStandardMaterial color="mediumpurple" />
          <Html
            position={[0, 2, 0]}
            wrapperClass="label"
            center
            distanceFactor={8}
            occlude={ [ sphere, cube ] }
          >
            That's a sphere 👍
          </Html>
        </mesh>
      </TransformControls>

      <mesh position-y={- 1} rotation-x={- Math.PI * 0.5} scale={10}>
        <planeGeometry />
        <meshStandardMaterial color="greenyellow" />
      </mesh>
    </>
  )
}