import { useLanguage } from '../contexts/LanguageContext'
import { useState, useEffect, useRef } from 'react'

const Events = ({ openModal }) => {
  const { language } = useLanguage()
  const [selectedEvent, setSelectedEvent] = useState(null)
  const [progress, setProgress] = useState(0)
  const timelineRef = useRef(null)

  // Scroll animation for progress bar
  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return
      
      const timeline = timelineRef.current
      const rect = timeline.getBoundingClientRect()
      const windowHeight = window.innerHeight
      
      // Calculate progress based on scroll position
      const scrollProgress = Math.max(0, Math.min(1, 
        (windowHeight - rect.top) / (rect.height + windowHeight)
      ))
      
      setProgress(scrollProgress * 100)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const allEvents = [
    // UPCOMING EVENTS
    {
      id: 'behave-oct',
      date: 'Oct 18, 2025',
      title: 'Behave',
      venue: 'Nachtleben Berlin',
      city: 'Berlin - Germany',
      type: language === 'es' ? 'Noche de Club' : 'Club Night',
      status: 'current',
      description: language === 'es' ? 'Nueva edición de la serie underground Behave en Berlín.' : 'New edition of the underground Behave series in Berlin.',
      artists: ['LOLA KAY', 'GLIA', 'PAMELA SVART'],
      link: 'https://ra.co/events/2269999'
    },
    {
      id: 'das-nov',
      date: 'Nov 8, 2025',
      title: 'Den Anden Side Anniversary',
      venue: 'Den Anden Side & Pumpehuset',
      city: 'Copenhagen - Denmark',
      type: language === 'es' ? 'Aniversario de Club' : 'Club Anniversary',
      status: 'current',
      description: language === 'es' ? 'Celebración del aniversario del icónico club de Copenhague.' : 'Celebration of the iconic Copenhagen club\'s anniversary.',
      artists: ['PAMELA SVART', 'DEVELOPER', 'ANGEL D\'LITE', 'ALINA BABYSQUID'],
      link: 'https://www.instagram.com/p/DPOb1u1DLZ9/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='
    },
    // PAST EVENTS
    {
      id: 'lifted-rifted',
      date: 'Aug 23, 2025',
      title: 'LIFTED & RIFTED',
      venue: 'Marmorbar',
      city: 'Berlin - Germany',
      type: language === 'es' ? 'Noche de Club' : 'Club Night',
      status: 'past',
      description: language === 'es' ? 'Una noche épica de techno underground en el corazón de Berlín.' : 'An epic night of underground techno in the heart of Berlin.',
      artists: ['Furotica', 'Robot Girl', 'NeZoomie', 'Tronh Gabrielle (DE)', 'YETI (3)', 'PAMELA SVART']
    },
    {
      id: 'miaw-pride',
      date: 'Aug 17, 2025',
      title: 'MIAW - SUNDAY PRIDE PARTY',
      venue: 'Jolene',
      city: 'Copenhagen - Denmark',
      type: language === 'es' ? 'Fiesta Pride' : 'Pride Party',
      status: 'past',
      description: language === 'es' ? 'Celebración del orgullo con música electrónica en Copenhague.' : 'Pride celebration with electronic music in Copenhagen.',
      artists: ['PAMELA SVART', 'Liad Krispin', 'DJ John K puppy', 'Aaron Blau']
    },
    {
      id: 'singularity-tresor',
      date: 'Aug 11, 2025',
      title: 'SINGULARITY',
      venue: 'Tresor/Globus',
      city: 'Berlin - Germany',
      type: language === 'es' ? 'Club Night' : 'Club Night',
      status: 'past',
      description: language === 'es' ? 'Noche legendaria en el icónico Tresor de Berlín.' : 'Legendary night at Berlin\'s iconic Tresor club.',
      artists: ['Carmen Electro', 'Ruslan Mays', 'LPV', 'P. Sara Miller', 'PAMELA SVART']
    },
    {
      id: 'behave-jun',
      date: 'Jun 14, 2025',
      title: 'Behave: A New Underground Series',
      venue: 'Nachtleben Berlin',
      city: 'Berlin - Germany',
      type: language === 'es' ? 'Serie Underground' : 'Underground Series',
      status: 'past',
      description: language === 'es' ? 'Lanzamiento de la nueva serie underground Behave.' : 'Launch of the new underground series Behave.',
      artists: ['PAMELA SVART', 'UNDERGROUND ARTISTS']
    },
    {
      id: 'toilet-session',
      date: 'May 15, 2025',
      title: 'Toilet Session - FLINTA TOILET',
      venue: 'Zur Klappe',
      city: 'Berlin - Germany',
      type: language === 'es' ? 'Sesión FLINTA' : 'FLINTA Session',
      status: 'past',
      description: language === 'es' ? 'Sesión especial FLINTA en el espacio underground.' : 'Special FLINTA session in the underground space.',
      artists: ['PAMELA SVART', 'FLINTA ARTISTS']
    },
    {
      id: 'hor-berlin',
      date: 'Nov 28, 2024',
      title: 'HÖR Berlin',
      venue: 'HÖR Berlin',
      city: 'Berlin - Germany',
      type: language === 'es' ? 'Streaming Set' : 'Streaming Set',
      status: 'past',
      description: language === 'es' ? 'Set en vivo para HÖR Berlin, el canal de streaming más famoso.' : 'Live set for HÖR Berlin, the most famous streaming channel.',
      artists: ['PAMELA SVART']
    },
    {
      id: 'singularity-watergate',
      date: 'Sep 30, 2024',
      title: 'SINGULARITY',
      venue: 'Watergate',
      city: 'Berlin - Germany',
      type: language === 'es' ? 'Club Night' : 'Club Night',
      status: 'past',
      description: language === 'es' ? 'Noche memorable en el famoso Watergate de Berlín.' : 'Memorable night at Berlin\'s famous Watergate club.',
      artists: ['PAMELA SVART', 'WATERGATE RESIDENTS']
    }
  ]

  // Auto-categorize events by date
  const categorizeEventByDate = (event) => {
    const eventDate = new Date(event.date)
    const today = new Date()
    today.setHours(0, 0, 0, 0) // Reset time to start of day
    
    if (eventDate >= today) {
      return 'current'
    } else {
      return 'past'
    }
  }

  // Update events with auto-categorized status
  const categorizedEvents = allEvents.map(event => ({
    ...event,
    status: categorizeEventByDate(event)
  }))

  // Get country flag emoji
  const getCountryFlag = (city) => {
    if (city.includes('Berlin') || city.includes('Germany')) return '🇩🇪'
    if (city.includes('Copenhagen') || city.includes('Denmark')) return '🇩🇰'
    return '🌍'
  }

  // Sort events by date (current first, then past events)
  const sortedEvents = categorizedEvents.sort((a, b) => {
    const dateA = new Date(a.date)
    const dateB = new Date(b.date)
    return dateB - dateA // Most recent first
  })

  const handleEventClick = (event) => {
    setSelectedEvent(selectedEvent?.id === event.id ? null : event)
  }
  return (
    <section id="events" className="events-section">
      <h2>{language === 'es' ? 'Timeline de Eventos' : 'Events Timeline'}</h2>
      
      <div className="all-events-section">
          <h3>{language === 'es' ? 'Todos los Eventos' : 'All Events'}</h3>
          <div className="timeline-container" ref={timelineRef}>
            <div className="timeline-progress">
              <div 
                className="timeline-progress-bar" 
                style={{ height: `${progress}%` }}
              ></div>
            </div>
            {sortedEvents.map((event, index) => (
              <div 
                key={event.id} 
                className={`timeline-event ${event.status === 'current' ? 'current' : ''}`}
                onClick={() => event.link ? window.open(event.link, '_blank') : null}
              >
                <div className="timeline-content">
                  <div className="timeline-header">
                    <div className="timeline-date">{event.date}</div>
                  </div>
                  <div className="timeline-event-content">
                    <div className="timeline-title">
                      {event.title}
                      {event.status === 'current' && (
                        <span className="coming-up-badge">
                          {language === 'es' ? 'PRÓXIMO' : 'COMING UP'}
                        </span>
                      )}
                    </div>
                    <div className="timeline-location">
                      <span className="country-flag">{getCountryFlag(event.city)}</span>
                      <span className="country-name">{event.city.split(' - ')[0]}</span>
                      <span className="location-icon">📍</span>
                      <span className="venue-name">{event.venue}</span>
                    </div>
                    <div className="timeline-artists">
                      {event.artists.map((artist, artistIndex) => (
                        <span key={artistIndex} className={`timeline-artist ${artist === 'PAMELA SVART' ? 'highlighted' : ''}`}>
                          {artist}
                        </span>
                      ))}
                    </div>
                    <div className="timeline-type">{event.type}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      
      <div className="ra-note">
        <p><em>{language === 'es' ? 'Para las listas de eventos más actualizadas y contrataciones, visita mi' : 'For the most up-to-date event listings and bookings, please visit my'} <a href="https://ra.co/dj/pamelasvart" target="_blank" rel="noreferrer">{language === 'es' ? 'perfil de Resident Advisor' : 'Resident Advisor profile'}</a>.</em></p>
      </div>
    </section>
  )
}

export default Events

