import { useLanguage } from '../contexts/LanguageContext'

const Videos = ({ openModal }) => {
  const { language } = useLanguage()
  
  const videos = [
    {
      id: 'hor-latest',
      title: 'HÖR Berlin - Latest Set',
      year: '2024',
      embedUrl: 'https://www.youtube.com/embed/UPMVv5elCls?modestbranding=1&rel=0&showinfo=0',
      thumbnail: 'https://img.youtube.com/vi/UPMVv5elCls/maxresdefault.jpg'
    },
    {
      id: 'gimic-radio',
      title: 'Gimic Radio Brussels',
      year: '2024',
      embedUrl: 'https://www.youtube.com/embed/B2bWISebXjM?start=1423&modestbranding=1&rel=0&showinfo=0',
      thumbnail: 'https://img.youtube.com/vi/B2bWISebXjM/maxresdefault.jpg'
    },
    {
      id: 'hand-of-blood',
      title: 'Hand of Blood - Techno Freitag',
      year: '2023',
      embedUrl: 'https://www.youtube.com/embed/m7WoV6CYoUI?start=3308&modestbranding=1&rel=0&showinfo=0',
      thumbnail: 'https://img.youtube.com/vi/m7WoV6CYoUI/maxresdefault.jpg'
    },
    {
      id: 'loone-radio',
      title: 'Loone Radio',
      year: '2023',
      embedUrl: 'https://www.youtube.com/embed/TmlyVpqfIys?start=1130&modestbranding=1&rel=0&showinfo=0',
      thumbnail: 'https://img.youtube.com/vi/TmlyVpqfIys/maxresdefault.jpg'
    },
    {
      id: 'hor-previous',
      title: 'HÖR Berlin',
      year: '2023',
      embedUrl: 'https://www.youtube.com/embed/Mid2HTmAWl8?start=3&modestbranding=1&rel=0&showinfo=0',
      thumbnail: 'https://img.youtube.com/vi/Mid2HTmAWl8/maxresdefault.jpg'
    }
  ]

  return (
    <section id="videos" className="cinematic-videos-section">
      <div className="videos-header">
        <h2>{language === 'es' ? 'CINEMATOGRÁFICO' : 'CINEMATIC'}</h2>
        <p className="videos-subtitle">
          {language === 'es' ? 'Sets en vivo y performances' : 'Live sets and performances'}
        </p>
      </div>
      
      <div className="cinematic-panels-container">
        {videos.map((video, index) => (
          <div key={video.id} className="cinematic-video-panel">
            <div className="video-thumbnail-container">
              <img 
                src={video.thumbnail} 
                alt={video.title}
                className="video-thumbnail"
              />
              <div className="video-overlay">
                <div className="play-button">▶</div>
              </div>
            </div>
            <div className="year-overlay">{video.year}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Videos
