import React, { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Motion Blur Text Component
const MotionBlurText = ({ 
  children, 
  className = '', 
  delay = 0, 
  duration = 1.5,
  blurAmount = 10,
  direction = 'up'
}) => {
  const ref = useRef()
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (isInView && ref.current) {
      setIsVisible(true)
      
      // GSAP animation with motion blur effect
      const tl = gsap.timeline({ delay })
      
      tl.fromTo(ref.current, 
        {
          y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
          x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
          opacity: 0,
          filter: `blur(${blurAmount}px)`,
          scale: 0.8
        },
        {
          y: 0,
          x: 0,
          opacity: 1,
          filter: 'blur(0px)',
          scale: 1,
          duration: duration,
          ease: "power3.out"
        }
      )
    }
  }, [isInView, delay, duration, blurAmount, direction])

  return (
    <motion.div
      ref={ref}
      className={`motion-blur-text ${className}`}
      style={{
        willChange: 'transform, opacity, filter'
      }}
    >
      {children}
    </motion.div>
  )
}

// Holographic Title Component
const HolographicTitle = ({ 
  children, 
  size = 'large',
  glow = true,
  shimmer = true 
}) => {
  const ref = useRef()
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView && ref.current) {
      gsap.fromTo(ref.current, 
        {
          opacity: 0,
          scale: 0.5,
          filter: 'blur(20px) brightness(0.5)',
          textShadow: '0 0 0px rgba(255,255,255,0)'
        },
        {
          opacity: 1,
          scale: 1,
          filter: 'blur(0px) brightness(1)',
          textShadow: glow ? '0 0 30px rgba(255,255,255,0.8), 0 0 60px rgba(255,255,255,0.4)' : 'none',
          duration: 2,
          ease: "power3.out"
        }
      )
    }
  }, [isInView, glow])

  const sizeClasses = {
    small: 'text-2xl',
    medium: 'text-4xl',
    large: 'text-6xl',
    xlarge: 'text-8xl'
  }

  return (
    <h1
      ref={ref}
      className={`holographic-title ${sizeClasses[size]} ${shimmer ? 'holographic-text' : ''}`}
      style={{
        fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
        fontWeight: 300,
        letterSpacing: '0.2em',
        textTransform: 'uppercase',
        textAlign: 'center',
        willChange: 'transform, opacity, filter'
      }}
    >
      {children}
    </h1>
  )
}

// Ancient Runes Text Component
const AncientRunesText = ({ children, delay = 0 }) => {
  const ref = useRef()
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView && ref.current) {
      const letters = ref.current.textContent.split('')
      ref.current.innerHTML = letters.map(letter => 
        `<span class="rune-letter">${letter === ' ' ? '&nbsp;' : letter}</span>`
      ).join('')

      const letterElements = ref.current.querySelectorAll('.rune-letter')
      
      gsap.fromTo(letterElements, 
        {
          opacity: 0,
          y: 50,
          rotationX: 90,
          filter: 'blur(5px)',
          textShadow: '0 0 0px rgba(255,255,255,0)'
        },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          filter: 'blur(0px)',
          textShadow: '0 0 10px rgba(255,255,255,0.5), 0 0 20px rgba(255,255,255,0.2)',
          duration: 0.8,
          stagger: 0.05,
          delay: delay,
          ease: "power3.out"
        }
      )
    }
  }, [isInView, delay])

  return (
    <div
      ref={ref}
      className="ancient-runes-text"
      style={{
        fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
        fontSize: '1.5rem',
        fontWeight: 300,
        letterSpacing: '0.1em',
        color: '#fff',
        textAlign: 'center',
        lineHeight: 1.6,
        perspective: '1000px'
      }}
    >
      {children}
    </div>
  )
}

// Floating Text Component
const FloatingText = ({ children, floatSpeed = 2 }) => {
  const ref = useRef()

  useEffect(() => {
    if (ref.current) {
      gsap.to(ref.current, {
        y: -20,
        duration: floatSpeed,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1
      })
    }
  }, [floatSpeed])

  return (
    <div
      ref={ref}
      className="floating-text"
      style={{
        willChange: 'transform'
      }}
    >
      {children}
    </div>
  )
}

// Glitch Text Effect
const GlitchText = ({ children, trigger = false }) => {
  const ref = useRef()

  useEffect(() => {
    if (trigger && ref.current) {
      const tl = gsap.timeline()
      
      tl.to(ref.current, {
        textShadow: '2px 0 #ff0000, -2px 0 #00ffff',
        duration: 0.1,
        repeat: 5,
        yoyo: true
      })
      .to(ref.current, {
        textShadow: 'none',
        duration: 0.1
      })
    }
  }, [trigger])

  return (
    <div
      ref={ref}
      className="glitch-text"
      style={{
        fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
        fontSize: '2rem',
        fontWeight: 600,
        color: '#fff',
        textAlign: 'center',
        willChange: 'text-shadow'
      }}
    >
      {children}
    </div>
  )
}

// Cinematic Paragraph Component
const CinematicParagraph = ({ children, stagger = 0.1 }) => {
  const ref = useRef()
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView && ref.current) {
      const words = ref.current.textContent.split(' ')
      ref.current.innerHTML = words.map(word => 
        `<span class="cinematic-word">${word}</span>`
      ).join(' ')

      const wordElements = ref.current.querySelectorAll('.cinematic-word')
      
      gsap.fromTo(wordElements, 
        {
          opacity: 0,
          y: 30,
          filter: 'blur(3px)'
        },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 0.8,
          stagger: stagger,
          ease: "power3.out"
        }
      )
    }
  }, [isInView, stagger])

  return (
    <p
      ref={ref}
      className="cinematic-paragraph"
      style={{
        fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
        fontSize: '1.1rem',
        lineHeight: 1.8,
        color: 'rgba(255, 255, 255, 0.8)',
        textAlign: 'center',
        maxWidth: '800px',
        margin: '0 auto',
        willChange: 'transform, opacity'
      }}
    >
      {children}
    </p>
  )
}

export { 
  MotionBlurText, 
  HolographicTitle, 
  AncientRunesText, 
  FloatingText, 
  GlitchText, 
  CinematicParagraph 
}


