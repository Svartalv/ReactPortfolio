import React, { useRef, useEffect, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { EffectComposer, Bloom, ChromaticAberration } from '@react-three/postprocessing'
import { useScroll, useTransform } from 'framer-motion'
import * as THREE from 'three'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Simplified Portal Effect Component
const PortalEffect = ({ progress }) => {
  const meshRef = useRef()
  
  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.getElapsedTime()
      
      // Create expanding circular mask
      const radius = progress * 3
      meshRef.current.scale.setScalar(radius)
      
      // Add rotation
      meshRef.current.rotation.z = time * 0.1
    }
  })

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <planeGeometry args={[2, 2]} />
      <meshBasicMaterial
        color="#ffffff"
        transparent
        opacity={progress * 0.3}
        blending={THREE.AdditiveBlending}
      />
    </mesh>
  )
}

// Particle System for Atmospheric Effects
const ParticleField = ({ progress }) => {
  const pointsRef = useRef()
  const particleCount = 200
  
  useEffect(() => {
    if (pointsRef.current) {
      const positions = new Float32Array(particleCount * 3)
      const colors = new Float32Array(particleCount * 3)
      
      for (let i = 0; i < particleCount; i++) {
        // Random positions in a sphere
        const radius = Math.random() * 10 + 5
        const theta = Math.random() * Math.PI * 2
        const phi = Math.random() * Math.PI
        
        positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
        positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
        positions[i * 3 + 2] = radius * Math.cos(phi)
        
        // Silver-white colors
        colors[i * 3] = 0.9 + Math.random() * 0.1
        colors[i * 3 + 1] = 0.9 + Math.random() * 0.1
        colors[i * 3 + 2] = 0.95 + Math.random() * 0.05
      }
      
      pointsRef.current.geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
      pointsRef.current.geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))
    }
  }, [])

  useFrame((state) => {
    if (pointsRef.current) {
      const time = state.clock.getElapsedTime()
      pointsRef.current.rotation.y = time * 0.05
      pointsRef.current.rotation.x = time * 0.02
      
      // Scale particles based on portal progress
      pointsRef.current.scale.setScalar(0.5 + progress * 1.5)
    }
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry />
      <pointsMaterial
        size={0.02}
        vertexColors
        transparent
        opacity={0.6}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

// Main Portal Transition Component - Simplified
const PortalTransition = ({ children, sectionId, isActive }) => {
  const containerRef = useRef()
  const portalRef = useRef()
  const [progress, setProgress] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    if (!containerRef.current) return

    // Create ScrollTrigger for portal animation
    const trigger = ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top center",
      end: "bottom center",
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress
        setProgress(progress)
        
        // Trigger portal effect when entering section
        if (progress > 0.2 && !isTransitioning) {
          setIsTransitioning(true)
          gsap.to(portalRef.current, {
            scale: 1,
            duration: 2,
            ease: "power2.out"
          })
        }
        
        // Hide portal when leaving section
        if (progress < 0.2 && isTransitioning) {
          setIsTransitioning(false)
          gsap.to(portalRef.current, {
            scale: 0,
            duration: 1.5,
            ease: "power2.in"
          })
        }
      }
    })

    return () => trigger.kill()
  }, [isTransitioning])

  return (
    <div ref={containerRef} className="portal-section">
      {/* Subtle WebGL Canvas for Portal Effects */}
      <div className="portal-canvas">
        <Canvas
          camera={{ position: [0, 0, 5], fov: 75 }}
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
        >
          <ambientLight intensity={0.1} />
          <pointLight position={[0, 0, 5]} intensity={0.3} color="#ffffff" />
          
          <PortalEffect progress={progress} />
          <ParticleField progress={progress} />
          
          <EffectComposer>
            <Bloom intensity={0.2} luminanceThreshold={0.1} />
            <ChromaticAberration offset={[0.0003, 0.0003]} />
          </EffectComposer>
        </Canvas>
      </div>

      {/* Portal Mask Container */}
      <div 
        ref={portalRef}
        className="portal-mask"
        style={{
          transform: 'scale(0)',
          transformOrigin: 'center center'
        }}
      >
        <div className="portal-content">
          {children}
        </div>
      </div>

      {/* Subtle Atmospheric Overlay */}
      <div className="atmospheric-overlay">
        <div className="light-rays"></div>
        <div className="fog-layer"></div>
      </div>
    </div>
  )
}

export default PortalTransition
