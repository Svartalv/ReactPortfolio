import { useState, useEffect } from 'react'

const SoundCloudSets = () => {
  const [isVisible, setIsVisible] = useState(false)

  // Your actual SoundCloud tracks with compact players
  const soundcloudSets = [
    {
      id: 'hor-september',
      title: 'XHUMANS - Pamela Svart | HÖR - September 20 / 2025',
      embedUrl: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2176566852&color=%23000000&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false',
      height: '166'
    },
    {
      id: 'hand-of-blood',
      title: 'Hand Of Blood - Techno Freitag Berlin 22/11/24',
      embedUrl: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A1968843099&color=%23000000&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false',
      height: '166'
    },
    {
      id: 'gimic-radio',
      title: 'Pamela Svart @ GIMIC - 01 June 2025',
      embedUrl: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2107675044&color=%23000000&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false',
      height: '166'
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('soundcloud-sets')
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  return (
    <section id="soundcloud-sets" className="soundcloud-section">
      <div className="soundcloud-header">
        <h2 className={isVisible ? 'animate' : ''}>MUSIC</h2>
      </div>
      
      <div className="soundcloud-list">
        {soundcloudSets.map((set) => (
          <div key={set.id} className={`soundcloud-item ${isVisible ? 'animate' : ''}`}>
            <div className="soundcloud-player-small">
              <iframe
                src={set.embedUrl}
                width="100%"
                height={set.height}
                frameBorder="no"
                scrolling="no"
                allow="autoplay"
              />
            </div>
            <div className="soundcloud-title-small">
              <h4>{set.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default SoundCloudSets