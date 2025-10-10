import { useState, useEffect } from 'react'

const Videos = ({ openModal }) => {
  const [currentVideo, setCurrentVideo] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  const videos = [
    {
      id: 'gimic-radio',
      title: 'Gimic Radio',
      description: 'Live performance at Gimic Radio',
      embedUrl: 'https://www.youtube.com/embed/B2bWISebXjM?start=1423&modestbranding=1&rel=0&showinfo=0'
    },
    {
      id: 'hor-latest',
      title: 'HÖR Berlin - Latest Set',
      description: 'Latest performance at HÖR Berlin',
      embedUrl: 'https://www.youtube.com/embed/UPMVv5elCls?modestbranding=1&rel=0&showinfo=0'
    },
    {
      id: 'hand-of-blood',
      title: 'Hand of Blood - Techno Freitag',
      description: 'Berlin performance',
      embedUrl: 'https://www.youtube.com/embed/m7WoV6CYoUI?start=3308&modestbranding=1&rel=0&showinfo=0'
    },
    {
      id: 'hor-previous',
      title: 'HÖR Berlin',
      description: 'Previous HÖR performance',
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
      { threshold: 0.3 }
    )

    const videosSection = document.getElementById('videos')
    if (videosSection) {
      observer.observe(videosSection)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setCurrentVideo((prev) => (prev + 1) % videos.length)
      }, 5000) // Change video every 5 seconds

      return () => clearInterval(interval)
    }
  }, [isVisible, videos.length])

  return (
    <section id="videos" className="cinematic-videos-section">
      <div className="cinematic-header">
        <h2 className={isVisible ? 'animate' : ''}>VIDEOS</h2>
        <p className={`cinematic-subtitle ${isVisible ? 'animate' : ''}`}>
          Live performances and studio sessions
        </p>
      </div>
      
      <div className="cinematic-video-container">
        <div className={`main-video ${isVisible ? 'animate' : ''}`}>
          <div className="video-player">
            <iframe
              src={videos[currentVideo].embedUrl}
              title={videos[currentVideo].title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
          <div className="video-info">
            <h3>{videos[currentVideo].title}</h3>
            <p>{videos[currentVideo].description}</p>
          </div>
        </div>

        <div className="video-thumbnails">
          {videos.map((video, index) => (
            <div 
              key={video.id}
              className={`thumbnail ${index === currentVideo ? 'active' : ''} ${isVisible ? 'animate' : ''}`}
              onClick={() => setCurrentVideo(index)}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="thumbnail-overlay">
                <span className="play-icon">▶</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Videos
