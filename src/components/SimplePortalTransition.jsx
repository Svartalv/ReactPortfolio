import React, { useRef, useEffect, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Simplified Portal Transition Component (CSS-only version)
const SimplePortalTransition = ({ children, sectionId }) => {
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
        if (progress > 0.1 && !isTransitioning) {
          setIsTransitioning(true)
          gsap.to(portalRef.current, {
            scale: 1,
            duration: 1.5,
            ease: "power2.out"
          })
        }
        
        // Hide portal when leaving section
        if (progress < 0.1 && isTransitioning) {
          setIsTransitioning(false)
          gsap.to(portalRef.current, {
            scale: 0,
            duration: 1,
            ease: "power2.in"
          })
        }
      }
    })

    return () => trigger.kill()
  }, [isTransitioning])

  return (
    <div ref={containerRef} className="simple-portal-section">
      {/* CSS-only Portal Effects */}
      <div className="css-portal-effects">
        <div 
          className="portal-glow"
          style={{
            transform: `scale(${progress * 2})`,
            opacity: progress * 0.5
          }}
        />
        <div 
          className="portal-particles"
          style={{
            opacity: progress * 0.8
          }}
        />
      </div>

      {/* Portal Mask Container */}
      <div 
        ref={portalRef}
        className="simple-portal-mask"
        style={{
          transform: 'scale(0)',
          transformOrigin: 'center center',
          clipPath: `circle(${progress * 100}% at 50% 50%)`
        }}
      >
        <div className="portal-content">
          {children}
        </div>
      </div>

      {/* Atmospheric Overlay */}
      <div className="atmospheric-overlay">
        <div className="light-rays"></div>
        <div className="fog-layer"></div>
      </div>
    </div>
  )
}

export default SimplePortalTransition


