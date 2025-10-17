import React, { useRef, useEffect } from 'react'
import { useScroll, useTransform, useSpring } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const ParallaxDepth = ({ children, depth = 0, speed = 1 }) => {
  const ref = useRef()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [depth * 100, -depth * 100])
  const springY = useSpring(y, { stiffness: 100, damping: 30 })

  useEffect(() => {
    if (ref.current) {
      gsap.set(ref.current, {
        transform: `translateZ(${depth}px)`,
        transformStyle: 'preserve-3d'
      })
    }
  }, [depth])

  return (
    <div
      ref={ref}
      style={{
        y: springY,
        transform: `translateZ(${depth}px) scale(${1 + depth * 0.01})`,
        willChange: 'transform'
      }}
      className={`depth-layer depth-layer-${Math.abs(depth)}`}
    >
      {children}
    </div>
  )
}

// Background Layer Component
const BackgroundLayer = ({ image, depth = -200, opacity = 0.3 }) => {
  const ref = useRef()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [depth * 0.5, -depth * 0.5])
  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 0.9])

  return (
    <div
      ref={ref}
      className="background-layer"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        opacity: opacity,
        y: y,
        scale: scale,
        transform: `translateZ(${depth}px)`,
        filter: 'blur(2px) brightness(0.8)'
      }}
    />
  )
}

// Foreground Layer Component
const ForegroundLayer = ({ children, depth = 100 }) => {
  const ref = useRef()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [depth * 0.3, -depth * 0.3])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <div
      ref={ref}
      className="foreground-layer"
      style={{
        y: y,
        opacity: opacity,
        transform: `translateZ(${depth}px)`,
        willChange: 'transform, opacity'
      }}
    >
      {children}
    </div>
  )
}

// Atmospheric Layer Component
const AtmosphericLayer = ({ type = 'particles' }) => {
  const ref = useRef()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [50, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 0.6, 0.6, 0])

  useEffect(() => {
    if (ref.current && type === 'particles') {
      // Create floating particles
      const particles = []
      for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div')
        particle.className = 'particle'
        particle.style.left = Math.random() * 100 + '%'
        particle.style.animationDelay = Math.random() * 20 + 's'
        particle.style.animationDuration = (15 + Math.random() * 10) + 's'
        ref.current.appendChild(particle)
        particles.push(particle)
      }
    }
  }, [type])

  return (
    <div
      ref={ref}
      className={`atmospheric-layer ${type}`}
      style={{
        y: y,
        opacity: opacity,
        transform: 'translateZ(0px)',
        willChange: 'transform, opacity'
      }}
    />
  )
}

// Main Cinematic Section Component
const CinematicSection = ({ 
  children, 
  backgroundImage, 
  sectionId,
  depthLayers = [-300, -150, 0, 150, 300]
}) => {
  const sectionRef = useRef()
  const [isVisible, setIsVisible] = React.useState(false)

  useEffect(() => {
    if (sectionRef.current) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        },
        { threshold: 0.1 }
      )

      observer.observe(sectionRef.current)
      return () => observer.disconnect()
    }
  }, [])

  return (
    <section ref={sectionRef} id={sectionId} className="cinematic-section">
      {/* Background Layers */}
      {backgroundImage && (
        <BackgroundLayer 
          image={backgroundImage} 
          depth={-400} 
          opacity={0.2} 
        />
      )}
      
      {/* Atmospheric Effects */}
      <AtmosphericLayer type="particles" />
      <AtmosphericLayer type="fog" />
      
      {/* Content Layers */}
      <div className="content-layers">
        {depthLayers.map((depth, index) => (
          <ParallaxDepth key={index} depth={depth} speed={1 + index * 0.1}>
            {index === Math.floor(depthLayers.length / 2) ? children : null}
          </ParallaxDepth>
        ))}
      </div>
      
      {/* Foreground Effects */}
      <ForegroundLayer depth={200}>
        <div className="light-overlay"></div>
      </ForegroundLayer>
    </section>
  )
}

export { ParallaxDepth, BackgroundLayer, ForegroundLayer, AtmosphericLayer, CinematicSection }


