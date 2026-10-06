'use client'
import { Canvas } from '@react-three/fiber'
import { Environment, Float, ContactShadows, Sparkles } from '@react-three/drei'
import { EffectComposer, Bloom, Vignette, ChromaticAberration } from '@react-three/postprocessing'
import { BlendFunction } from 'postprocessing'
import { Suspense, useRef, useEffect } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

const PARTICLE_COUNT = 800
const PARTICLE_POSITIONS = Float32Array.from(
  { length: PARTICLE_COUNT * 3 },
  (_, index) => {
    const value = Math.sin((index + 1) * 12.9898) * 43758.5453
    return ((value - Math.floor(value)) - 0.5) * 25
  }
)

function HeroObject() {
  const meshRef = useRef()
  const groupRef = useRef()

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.15
      meshRef.current.rotation.y += delta * 0.25
    }
    if (groupRef.current) {
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, state.mouse.y * 0.3, 0.05)
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, state.mouse.x * 0.3, 0.05)
    }
  })

  return (
    <group ref={groupRef}>
      <Float speed={1.5} rotationIntensity={0.4} floatIntensity={1}>
        <mesh ref={meshRef} castShadow>
          <torusKnotGeometry args={[1, 0.35, 256, 64]} />
          <meshPhysicalMaterial
            color="#d4a574"
            metalness={1}
            roughness={0.05}
            clearcoat={1}
            clearcoatRoughness={0.1}
            envMapIntensity={2}
            iridescence={1}
            iridescenceIOR={1.5}
          />
        </mesh>
        <mesh scale={0.6}>
          <icosahedronGeometry args={[1, 4]} />
          <meshBasicMaterial color="#b8935f" wireframe />
        </mesh>
      </Float>
    </group>
  )
}

function ParticleField() {
  const ref = useRef()

  useFrame((state) => {
    if (ref.current) ref.current.rotation.y = state.clock.elapsedTime * 0.03
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[PARTICLE_POSITIONS, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.025}
        color="#b8935f"
        transparent
        opacity={0.7}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  )
}

/* ====== SCROLL-DRIVEN CAMERA ====== */
function CameraRig() {
  const { camera } = useThree()
  const scrollRef = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      scrollRef.current = window.scrollY
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // R3F animates Three.js objects imperatively inside its frame loop.
  /* eslint-disable react-hooks/immutability */
  useFrame((state) => {
    const scrollProgress = Math.min(scrollRef.current / 1000, 1)

    // Camera moves back and rotates on scroll
    const targetZ = 6 + scrollProgress * 2
    const targetY = scrollProgress * 1.5
    const targetRotationY = scrollProgress * 0.5

    camera.position.x = THREE.MathUtils.lerp(camera.position.x, state.mouse.x * 0.5, 0.05)
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, state.mouse.y * 0.3 + targetY, 0.05)
    camera.position.z = THREE.MathUtils.lerp(camera.position.z, targetZ, 0.05)

    camera.lookAt(0, 0, 0)
    camera.rotation.z = THREE.MathUtils.lerp(camera.rotation.z, targetRotationY * 0.1, 0.05)
  })
  /* eslint-enable react-hooks/immutability */

  return null
}

export default function Scene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 40 }}
      dpr={[1, 2]}
      shadows="percentage"
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
    >
      <color attach="background" args={['#08060a']} />
      <fog attach="fog" args={['#08060a', 8, 20]} />

      <Suspense fallback={null}>
        <ambientLight intensity={0.2} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} castShadow />
        <pointLight position={[-5, -5, -5]} color="#d4a574" intensity={3} />
        <pointLight position={[5, 5, 5]} color="#b8935f" intensity={2} />

        <HeroObject />
        <ParticleField />
        <Sparkles count={60} scale={12} size={2} speed={0.4} color="#f0e6d2" opacity={0.6} />

        <Environment preset="night" background={false} />
        <ContactShadows position={[0, -2.5, 0]} opacity={0.7} scale={15} blur={3} far={5} color="#d4a574" />
        <CameraRig />

        <EffectComposer multisampling={4}>
          <Bloom intensity={0.6} luminanceThreshold={0.7} luminanceSmoothing={0.9} mipmapBlur />
          <ChromaticAberration
            blendFunction={BlendFunction.NORMAL}
            offset={[0.0008, 0.0008]}
            radialModulation={false}
            modulationOffset={0}
          />
          <Vignette eskil={false} offset={0.2} darkness={0.8} />
        </EffectComposer>
      </Suspense>
    </Canvas>
  )
}