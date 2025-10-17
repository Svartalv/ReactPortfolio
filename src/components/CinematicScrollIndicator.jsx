import React, { useEffect, useState } from 'react'
import { useScroll, useTransform } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const CinematicScrollIndicator = () => {
  const [activeSection, setActiveSection] = useState(0)
  const [isVisible, setIsVisible] = useState(true)
  
  const sections = [
    { id: 'hero', label: 'H' },
    { id: 'bio', label: 'B' },
    { id: 'streamings', label: 'S' },
    { id: 'music', label: 'M' },
    { id: 'events', label: 'E' },
    { id: 'photos', label: 'P' },
    { id: 'tech', label: 'T' },
    { id: 'contact', label: 'C' }
  ]

  useEffect(() => {
    // Create ScrollTrigger for each section
    sections.forEach((section, index) => {
      ScrollTrigger.create({
        trigger: `#${section.id}`,
        start: "top center",
        end: "bottom center",
        onEnter: () => setActiveSection(index),
        onEnterBack: () => setActiveSection(index)
      })
    })

    // Hide indicator on scroll
    let scrollTimeout
    const handleScroll = () => {
      setIsVisible(false)
      clearTimeout(scrollTimeout)
      scrollTimeout = setTimeout(() => setIsVisible(true), 2000)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearTimeout(scrollTimeout)
    }
  }, [])

  return (
    <div 
      className={`cinematic-scroll-indicator ${isVisible ? 'visible' : 'hidden'}`}
      style={{
        position: 'fixed',
        right: '30px',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 1000,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '15px',
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.5s ease'
      }}
    >
      {sections.map((section, index) => (
        <div
          key={section.id}
          className={`scroll-dot ${activeSection === index ? 'active' : ''}`}
          onClick={() => {
            document.getElementById(section.id)?.scrollIntoView({ 
              behavior: 'smooth' 
            })
          }}
          style={{
            width: '12px',
            height: '12px',
            borderRadius: '50%',
            background: activeSection === index 
              ? 'rgba(255, 255, 255, 0.9)' 
              : 'rgba(255, 255, 255, 0.3)',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            transform: activeSection === index ? 'scale(1.5)' : 'scale(1)',
            boxShadow: activeSection === index 
              ? '0 0 20px rgba(255, 255, 255, 0.5)' 
              : 'none',
            position: 'relative'
          }}
        >
          {/* Hover tooltip */}
          <div 
            className="scroll-tooltip"
            style={{
              position: 'absolute',
              right: '20px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'rgba(0, 0, 0, 0.8)',
              color: '#fff',
              padding: '5px 10px',
              borderRadius: '4px',
              fontSize: '0.8rem',
              whiteSpace: 'nowrap',
              opacity: 0,
              pointerEvents: 'none',
              transition: 'opacity 0.3s ease',
              fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'
            }}
          >
            {section.label}
          </div>
        </div>
      ))}
      
      {/* Connecting line */}
      <div 
        className="scroll-line"
        style={{
          width: '1px',
          height: '120px',
          background: 'linear-gradient(to bottom, transparent 0%, rgba(255, 255, 255, 0.3) 50%, transparent 100%)',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: -1
        }}
      />
    </div>
  )
}

export default CinematicScrollIndicator


