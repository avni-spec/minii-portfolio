'use client'
import { Canvas } from '@react-three/fiber'
import { Environment, Float, Sparkles } from '@react-three/drei'
import { EffectComposer, Bloom, Vignette } from '@react-three/postprocessing'
import { Suspense, useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import Photo3D from './Photo3D'

function GalleryCamera() {
  const { camera } = useThree()
  useFrame((state) => {
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, state.mouse.x * 1.5, 0.05)
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, state.mouse.y * 0.5, 0.05)
    camera.lookAt(0, 0, 0)
  })
  return null
}

function FloatingParticles() {
  const ref = useRef<THREE.Points>(null!)
  const count = 400
  const positions = new Float32Array(count * 3)
  for (let i = 0; i < count * 3; i++) positions[i] = (Math.random() - 0.5) * 30

  useFrame((state) => {
    if (ref.current) ref.current.rotation.y = state.clock.elapsedTime * 0.02
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.04} color="#b8935f" transparent opacity={0.8} sizeAttenuation
        blending={THREE.AdditiveBlending} depthWrite={false} />
    </points>
  )
}

export default function PhotoGallery3D() {
  return (
    <Canvas camera={{ position: [0, 0, 7], fov: 45 }} dpr={[1, 2]} gl={{ antialias: true, alpha: true }}>
      <color attach="background" args={['#08060a']} />
      <fog attach="fog" args={['#08060a', 10, 25]} />

      <Suspense fallback={null}>
        <ambientLight intensity={0.3} />
        <pointLight position={[5, 5, 5]} color="#d4a574" intensity={3} />
        <pointLight position={[-5, -3, 5]} color="#b8935f" intensity={2} />
        <pointLight position={[0, 5, -5]} color="#e8c9a0" intensity={2} />

        <Float speed={1} rotationIntensity={0.2} floatIntensity={0.5}>
          <Photo3D position={[-3.5, 0, 0]} rotation={[0, 0.3, -0.05]} image="/images/minii/portrait.jpg" caption="Portrait" delay={0} />
        </Float>
        <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.5}>
          <Photo3D position={[-1.2, 0.3, 1]} rotation={[0, 0.15, 0.03]} image="/images/minii/hero.jpg" caption="Lifestyle" delay={1} />
        </Float>
        <Float speed={1.4} rotationIntensity={0.2} floatIntensity={0.5}>
          <Photo3D position={[1.2, -0.2, 1]} rotation={[0, -0.15, -0.03]} image="/images/minii/staircase.jpg" caption="Fashion" delay={2} />
        </Float>
        <Float speed={1} rotationIntensity={0.2} floatIntensity={0.5}>
          <Photo3D position={[3.5, 0, 0]} rotation={[0, -0.3, 0.05]} image="/images/minii/dress.jpg" caption="Elegance" delay={3} />
        </Float>

        <Sparkles count={80} scale={15} size={2} speed={0.3} color="#d4a574" opacity={0.7} />
        <FloatingParticles />
        <Environment preset="night" background={false} />
        <GalleryCamera />

        <EffectComposer>
          <Bloom intensity={0.5} luminanceThreshold={0.8} mipmapBlur />
          <Vignette eskil={false} offset={0.3} darkness={0.7} />
        </EffectComposer>
      </Suspense>
    </Canvas>
  )
}