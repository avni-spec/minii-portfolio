'use client'
import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Html } from '@react-three/drei'
import * as THREE from 'three'
import Image from 'next/image'

type Props = {
  position: [number, number, number]
  rotation?: [number, number, number]
  image: string
  caption: string
  delay?: number
}

export default function Photo3D({ position, rotation = [0, 0, 0], image, caption, delay = 0 }: Props) {
  const groupRef = useRef<THREE.Group>(null!)
  const [hovered, setHovered] = useState(false)

  useFrame((state) => {
    if (!groupRef.current) return
    const t = state.clock.elapsedTime + delay
    groupRef.current.position.y = position[1] + Math.sin(t * 0.8) * 0.15
    groupRef.current.rotation.y = rotation[1] + Math.sin(t * 0.3) * 0.15
    groupRef.current.rotation.z = THREE.MathUtils.lerp(
      groupRef.current.rotation.z,
      hovered ? Math.sin(t * 2) * 0.05 : 0,
      0.05
    )
    const targetScale = hovered ? 1.08 : 1
    groupRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1)
  })

  return (
    <group ref={groupRef} position={position} rotation={rotation}>
      <mesh
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <boxGeometry args={[2, 2.5, 0.08]} />
        <meshPhysicalMaterial
          color="#08060a"
          metalness={0.9}
          roughness={0.15}
          clearcoat={1}
          clearcoatRoughness={0.05}
          emissive={hovered ? '#d4a574' : '#1a0f1a'}
          emissiveIntensity={hovered ? 0.4 : 0.1}
        />
      </mesh>

      <mesh position={[0, 0, -0.04]}>
        <boxGeometry args={[2.1, 2.6, 0.01]} />
        <meshBasicMaterial color={hovered ? '#b8935f' : '#d4a574'} transparent opacity={hovered ? 0.6 : 0.3} />
      </mesh>

      <Html
        transform
        distanceFactor={3}
        position={[0, 0, 0.05]}
        style={{ width: '180px', height: '225px', pointerEvents: 'none' }}
      >
        <div className="w-full h-full rounded-sm overflow-hidden relative">
          <Image src={image} alt={caption} fill className="object-cover" sizes="180px" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          <div className="absolute bottom-2 left-2 right-2 text-white text-[10px] font-mono tracking-widest uppercase">
            {caption}
          </div>
        </div>
      </Html>
    </group>
  )
}