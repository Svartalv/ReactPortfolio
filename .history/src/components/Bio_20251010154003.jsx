import { useState, useEffect } from 'react'

const Bio = () => {
  const [displayedText, setDisplayedText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  
  const fullText = `Pamela is a Chilean-born producer and DJ based in Berlin whose sound moves in shadows, merging dark, ethereal atmospheres with pulsing groove and emotional gravity. Rooted in the deeper end of techno, her work is shaped by intention and emotion, creating sonic journeys that invite deep connection, both inward and collective.

Shaped by the emotional landscapes of Chile, the quiet introspection of Copenhagen, and the raw openness of Berlin, her sound is a synthesis of atmosphere and instinct. These influences merge fluidly, forming a sonic language that is immersive, restrained, and emotionally focused.`

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + fullText[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, 25) // Smoother, wider animation timing
      
      return () => clearTimeout(timeout)
    }
  }, [currentIndex, fullText])

  return (
    <section id="bio" className="bio-section">
      <div className="bio-container">
        <div className="bio-image">
          <img src="/assets/bio-image.jpg" alt="Pamela Svart" />
        </div>
        <div className="bio-content">
          <h2>BIO</h2>
          <div className="bio-text">
            <div className="typewriter-text">
              {displayedText}
              <span className="cursor">|</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Bio
