import { useState, useEffect } from 'react'

const SoundCloudSets = () => {
  const [isVisible, setIsVisible] = useState(false)

  // Your actual SoundCloud tracks with embedded players
  const soundcloudSets = [
    {
      id: 'hor-september',
      title: 'XHUMANS - Pamela Svart | HÖR - September 20 / 2025',
      embedUrl: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2176566852&color=%23000000&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true'
    },
    {
      id: 'hand-of-blood',
      title: 'Hand of Blood - Techno Freitag Club Edition',
      embedUrl: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A1792528977&color=%23000000&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true'
    },
    {
      id: 'gimic-radio',
      title: 'Gimic Radio - June 2025',
      embedUrl: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A1792528977&color=%23000000&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true'
    },
    {
      id: 'mercy-techno',
      title: 'Mercy Techno Berlin',
      embedUrl: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A1792528977&color=%23000000&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true'
    }
  ]

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
      
      <div className="soundcloud-container">
        {soundcloudSets.map((set, index) => (
          <div 
            key={set.id}
            className={`soundcloud-poster ${isVisible ? 'animate' : ''}`}
            style={{ animationDelay: `${index * 0.3}s` }}
          >
            <div className="soundcloud-player">
              <iframe
                src={set.embedUrl}
                title={set.title}
                allow="autoplay"
                allowFullScreen
              />
            </div>
            <div className="soundcloud-title">
              <h3>{set.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default SoundCloudSets
