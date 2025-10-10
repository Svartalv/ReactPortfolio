import { useState, useEffect } from 'react'

const SoundCloudSets = () => {
  const [isVisible, setIsVisible] = useState(false)

  // Add your SoundCloud sets here manually
  const soundcloudSets = [
    {
      id: 'set-1',
      title: 'Set Name 1',
      url: 'https://soundcloud.com/pamela-svart/set-url-1'
    },
    {
      id: 'set-2',
      title: 'Set Name 2', 
      url: 'https://soundcloud.com/pamela-svart/set-url-2'
    },
    {
      id: 'set-3',
      title: 'Set Name 3',
      url: 'https://soundcloud.com/pamela-svart/set-url-3'
    }
    // Add more sets as needed
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
      
      <div className="soundcloud-list">
        {soundcloudSets.map((set, index) => (
          <div 
            key={set.id}
            className={`soundcloud-item ${isVisible ? 'animate' : ''}`}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <a 
              href={set.url} 
              target="_blank" 
              rel="noreferrer"
              className="soundcloud-link"
            >
              <div className="soundcloud-content">
                <div className="play-icon">▶</div>
                <h3>{set.title}</h3>
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default SoundCloudSets
