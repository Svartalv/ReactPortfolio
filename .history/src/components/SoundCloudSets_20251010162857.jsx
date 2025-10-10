import { useState, useEffect } from 'react'

const SoundCloudSets = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    const setsSection = document.getElementById('soundcloud-sets')
    if (setsSection) {
      observer.observe(setsSection)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="soundcloud-sets" className="soundcloud-section">
      <div className="soundcloud-header">
        <h2 className={isVisible ? 'animate' : ''}>SOUNDCLOUD SETS</h2>
      </div>
      
      <div className={`soundcloud-player-container ${isVisible ? 'animate' : ''}`}>
        <iframe 
          width="100%" 
          height="450" 
          scrolling="no" 
          frameBorder="no" 
          allow="autoplay" 
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/soundcloud%253Aplaylists%253A1792528977&color=%23000000&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
          title="Pamela Svart DJ Sets"
        />
        <div className="soundcloud-attribution">
          <a href="https://soundcloud.com/pamela-svart" title="Pamela Svart" target="_blank" rel="noreferrer">Pamela Svart</a> · <a href="https://soundcloud.com/pamela-svart/sets/sets" title="DJ Sets" target="_blank" rel="noreferrer">DJ Sets</a>
        </div>
      </div>
    </section>
  )
}

export default SoundCloudSets
