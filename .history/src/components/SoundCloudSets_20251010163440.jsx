import { useState, useEffect } from 'react'

const SoundCloudSets = () => {
  const [isVisible, setIsVisible] = useState(false)

  // Individual SoundCloud sets - you can add more sets here
  const soundcloudSets = [
    {
      id: 'set-1',
      title: 'Set Name 1',
      embedUrl: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/soundcloud%253Aplaylists%253A1792528977&color=%23000000&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true'
    },
    {
      id: 'set-2',
      title: 'Set Name 2',
      embedUrl: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/soundcloud%253Aplaylists%253A1792528977&color=%23000000&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true'
    },
    {
      id: 'set-3',
      title: 'Set Name 3',
      embedUrl: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/soundcloud%253Aplaylists%253A1792528977&color=%23000000&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true'
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
