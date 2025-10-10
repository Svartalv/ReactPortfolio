import { useState, useEffect } from 'react'

const Videos = ({ openModal }) => {
  const [isVisible, setIsVisible] = useState(false)

  const videos = [
    {
      id: 'hor-latest',
      title: 'HÖR Berlin - Latest Set',
      embedUrl: 'https://www.youtube.com/embed/UPMVv5elCls?modestbranding=1&rel=0&showinfo=0'
    },
    {
      id: 'gimic-radio',
      title: 'Gimic Radio Brussels',
      embedUrl: 'https://www.youtube.com/embed/B2bWISebXjM?start=1423&modestbranding=1&rel=0&showinfo=0'
    },
    {
      id: 'hand-of-blood',
      title: 'Hand of Blood - Techno Freitag',
      embedUrl: 'https://www.youtube.com/embed/m7WoV6CYoUI?start=3308&modestbranding=1&rel=0&showinfo=0'
    },
    {
      id: 'loone-radio',
      title: 'Loone Radio',
      embedUrl: 'https://www.youtube.com/embed/TmlyVpqfIys?start=1130&modestbranding=1&rel=0&showinfo=0'
    },
    {
      id: 'backside-radio',
      title: 'Backside Radio',
      embedUrl: 'https://www.youtube.com/embed/pTsK7j8GOws?modestbranding=1&rel=0&showinfo=0'
    },
    {
      id: 'hor-previous',
      title: 'HÖR Berlin',
      embedUrl: 'https://www.youtube.com/embed/Mid2HTmAWl8?start=3&modestbranding=1&rel=0&showinfo=0'
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

    const videosSection = document.getElementById('videos')
    if (videosSection) {
      observer.observe(videosSection)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="videos" className="videos-section">
      <div className="videos-header">
        <h2 className={isVisible ? 'animate' : ''}>VIDEOS</h2>
      </div>
      
      <div className="videos-container">
        {videos.map((video, index) => (
          <div 
            key={video.id}
            className={`video-poster ${isVisible ? 'animate' : ''}`}
            style={{ animationDelay: `${index * 0.3}s` }}
          >
            <div className="video-thumbnail">
              <iframe
                src={video.embedUrl}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <div className="video-title">
              <h3>{video.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Videos
