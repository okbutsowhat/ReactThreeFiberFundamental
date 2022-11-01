import { useFrame, useLoader } from '@react-three/fiber'
import { useRef, StrictMode, Suspense } from 'react'
import { RandomizedLight, AccumulativeShadows, softShadows, Html, OrbitControls, TransformControls, useHelper } from '@react-three/drei'
import { useControls } from 'leva'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import * as THREE from 'three'
import { Model } from './Model'

// softShadows({
//   frustum: 3.75,
//   size: 0.005,
//   near: 9.5,
//   samples: 17,
//   rings: 11
// })

export default function Experience() {
  const cube = useRef()
  const sphere = useRef()
  useFrame((state, delta) => {
    // cubeRef.current.rotation.y += delta
    // const time = state.clock.elapsedTime
    // sphere.current.position.x = 2 + Math.sin(time)
  })
  const directionalLight = useRef()
  useHelper(directionalLight, THREE.DirectionalLightHelper, 1)
  const { position } = useControls({
    position:
    {
      value: { x: - 2, y: 0, z: 0 },
      step: 0.01
    }
  })
  return (
    <>
      <StrictMode>
        <color args={['ivory']} attach="background" />
        <OrbitControls enableDamping makeDefault ></OrbitControls>
        <pointLight
          // ref={directionalLight}
          position={[6, 4, -5]}
          intensity={1.5}
        // castShadow
        // shadow-mapSize={[10240, 10240]}
        // shadow-camera-near={1}
        // shadow-camera-far={10}
        // shadow-camera-top={5}
        // shadow-camera-right={5}
        // shadow-camera-bottom={- 5}
        // shadow-camera-left={- 5}
        />
        <directionalLight
          position={[1, 2, 3]}
          intensity={1.5}
          castShadow
          shadow-mapSize={[10240, 10240]}
          shadow-camera-near={1}
          shadow-camera-far={10}
          shadow-camera-top={5}
          shadow-camera-right={5}
          shadow-camera-bottom={- 5}
          shadow-camera-left={- 5}
        />
        <ambientLight intensity={1} />
        {/* <AccumulativeShadows
          position={[0, - 0.99, 0]}
          scale={10}
          color="#316d39"
          opacity={0.8}
          frames={Infinity}
          temporal
          blend={100}
        >
          <RandomizedLight
            amount={8}
            radius={1}
            ambient={0.5}
            intensity={1}
            position={[1, 2, 3]}
            bias={0.001}
          />
        </AccumulativeShadows> */}
        <Suspense>
          <Model></Model>
        </Suspense>
        {/* <mesh castShadow ref={cube} position={[position.x, position.y, position.z]}>
          <boxGeometry />
          <meshStandardMaterial color="orange" />
        </mesh>
        <mesh castShadow ref={sphere} position-x={2} scale={1.5}>
          <sphereGeometry />
          <meshStandardMaterial color="mediumpurple" />
          <Html
            position={[0, 2, 0]}
            wrapperClass="label"
            center
            distanceFactor={8}
            occlude={[sphere, cube]}
          >
            That's a sphere 👍
          </Html>
        </mesh> */}
        {/* <mesh position-y={- 1} rotation-x={- Math.PI * 0.5} scale={10}>
          <planeGeometry />
          <meshStandardMaterial color="greenyellow" />
        </mesh> */}
      </StrictMode>
    </>
  )
}