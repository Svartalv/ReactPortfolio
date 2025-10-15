import { useState, useEffect, useRef } from 'react'
import { useLanguage } from '../contexts/LanguageContext'

const Videos = ({ openModal }) => {
  const [isVisible, setIsVisible] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(0)
  const [playingVideoId, setPlayingVideoId] = useState(null)
  const videosSectionRef = useRef(null)
  const { language } = useLanguage()

  const handleVideoClick = (video) => {
    if (playingVideoId === video.id) {
      // If clicking the same video, stop it
      setPlayingVideoId(null)
    } else {
      // If clicking a different video, play it
      setPlayingVideoId(video.id)
    }
  }

  const videos = [
    {
      id: 'hor-latest',
      title: 'HÖR Berlin Latest Set',
      embedUrl: 'https://www.youtube.com/embed/UPMVv5elCls?modestbranding=1&rel=0&showinfo=0',
      thumbnail: 'https://img.youtube.com/vi/UPMVv5elCls/maxresdefault.jpg'
    },
    {
      id: 'gimic-radio',
      title: 'Gimic Radio Brussels',
      embedUrl: 'https://www.youtube.com/embed/B2bWISebXjM?start=1423&modestbranding=1&rel=0&showinfo=0',
      thumbnail: 'https://img.youtube.com/vi/B2bWISebXjM/maxresdefault.jpg'
    },
    {
      id: 'hand-of-blood',
      title: 'Hand of Blood - Techno Freitag',
      embedUrl: 'https://www.youtube.com/embed/m7WoV6CYoUI?start=3308&modestbranding=1&rel=0&showinfo=0',
      thumbnail: 'https://img.youtube.com/vi/m7WoV6CYoUI/maxresdefault.jpg'
    },
    {
      id: 'loone-radio',
      title: 'Loone Berlin Radio',
      embedUrl: 'https://www.youtube.com/embed/TmlyVpqfIys?start=1130&modestbranding=1&rel=0&showinfo=0',
      thumbnail: 'https://img.youtube.com/vi/TmlyVpqfIys/maxresdefault.jpg'
    },
    {
      id: 'hor-previous',
      title: 'HÖR Berlin',
      embedUrl: 'https://www.youtube.com/embed/Mid2HTmAWl8?start=3&modestbranding=1&rel=0&showinfo=0',
      thumbnail: 'https://img.youtube.com/vi/Mid2HTmAWl8/maxresdefault.jpg'
    },
    {
      id: 'backside-radio',
      title: 'Backside Radio',
      embedUrl: 'https://www.youtube.com/embed/pTsK7j8GOws?start=2416&modestbranding=1&rel=0&showinfo=0',
      thumbnail: 'https://img.youtube.com/vi/pTsK7j8GOws/hqdefault.jpg'
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

  // Handle fullscreen change to return to same position
  useEffect(() => {
    const handleFullscreenChange = () => {
      if (!document.fullscreenElement) {
        // Returned from fullscreen, restore scroll position
        setTimeout(() => {
          window.scrollTo(0, scrollPosition)
        }, 100)
      } else {
        // Entering fullscreen, save current scroll position
        setScrollPosition(window.pageYOffset)
      }
    }

    document.addEventListener('fullscreenchange', handleFullscreenChange)
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange)
    document.addEventListener('mozfullscreenchange', handleFullscreenChange)
    document.addEventListener('MSFullscreenChange', handleFullscreenChange)

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange)
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange)
      document.removeEventListener('mozfullscreenchange', handleFullscreenChange)
      document.removeEventListener('MSFullscreenChange', handleFullscreenChange)
    }
  }, [scrollPosition])

  return (
    <section id="videos" className="videos-section" ref={videosSectionRef}>
      <div className="videos-header">
        <h2 className={isVisible ? 'animate' : ''}>{language === 'es' ? 'MÚSICA' : 'MUSIC'}</h2>
      </div>
      
      <div className="videos-container">
        {videos.map((video, index) => (
          <div 
            key={video.id}
            className={`video-poster ${isVisible ? 'animate' : ''}`}
            style={{ animationDelay: `${index * 0.3}s` }}
            onClick={() => handleVideoClick(video)}
          >
            <div className="video-thumbnail">
              {playingVideoId === video.id ? (
                <iframe
                  src={video.embedUrl}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="video-player"
                />
              ) : (
                <img 
                  src={video.thumbnail} 
                  alt={video.title}
                  className="video-thumbnail-image"
                  onError={(e) => {
                    e.target.style.display = 'none'
                  }}
                />
              )}
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

