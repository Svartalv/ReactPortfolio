import { useState, useEffect, useRef } from 'react'
import { useLanguage } from '../contexts/LanguageContext'

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
      type: 'Club Night',
      status: 'current',
      description: 'New edition of the underground Behave series in Berlin.',
      artists: ['PAMELA SVART'],
      link: 'https://ra.co/events/2269999'
    },
    {
      id: 'das-nov',
      date: 'Nov 8, 2025',
      title: 'Den Anden Side Anniversary',
      venue: 'Den Anden Side & Pumpehuset',
      city: 'Copenhagen - Denmark',
      type: 'Club Anniversary',
      status: 'current',
      description: 'Celebration of the iconic Copenhagen club\'s anniversary.',
      artists: ['PAMELA SVART'],
      link: 'https://www.instagram.com/p/DPOb1u1DLZ9/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='
    },
    // PAST EVENTS
    {
      id: 'lifted-rifted',
      date: 'Aug 23, 2025',
      title: 'Lifted & Rifted',
      venue: 'Marmorbar',
      city: 'Berlin - Germany',
      type: 'Club Night',
      status: 'past',
      description: 'An epic night of underground techno in the heart of Berlin.',
      artists: ['Furotica', 'Robot Girl', 'NeZoomie', 'Tronh Gabrielle (DE)', 'YETI (3)', 'PAMELA SVART']
    },
    {
      id: 'miaw-pride',
      date: 'Aug 17, 2025',
      title: 'Miaw - Sunday Pride Party',
      venue: 'Jolene',
      city: 'Copenhagen - Denmark',
      type: 'Pride Party',
      status: 'past',
      description: 'Pride celebration with electronic music in Copenhagen.',
      artists: ['PAMELA SVART', 'Liad Krispin', 'DJ John K puppy', 'Aaron Blau']
    },
    {
      id: 'singularity-tresor',
      date: 'Aug 11, 2025',
      title: 'Singularity',
      venue: 'Tresor/Globus',
      city: 'Berlin - Germany',
      type: 'Club Night',
      status: 'past',
      description: 'Legendary night at Berlin\'s iconic Tresor club.',
      artists: ['Carmen Electro', 'Ruslan Mays', 'LPV', 'P. Sara Miller', 'PAMELA SVART']
    },
    {
      id: 'behave-jun',
      date: 'Jun 14, 2025',
      title: 'Behave: A New Underground Series',
      venue: 'Nachtleben Berlin',
      city: 'Berlin - Germany',
      type: 'Underground Series',
      status: 'past',
      description: 'Launch of the new underground series Behave.',
      artists: ['PAMELA SVART', 'UNDERGROUND ARTISTS']
    },
    {
      id: 'toilet-session',
      date: 'May 15, 2025',
      title: 'Toilet Session - FLINTA TOILET',
      venue: 'Zur Klappe',
      city: 'Berlin - Germany',
      type: 'FLINTA Session',
      status: 'past',
      description: 'Special FLINTA session in the underground space.',
      artists: ['PAMELA SVART', 'FLINTA ARTISTS']
    },
    {
      id: 'hor-berlin',
      date: 'Nov 28, 2024',
      title: 'HÖR Berlin',
      venue: 'HÖR Berlin',
      city: 'Berlin - Germany',
      type: 'Streaming Set',
      status: 'past',
      description: 'Live set for HÖR Berlin, the most famous streaming channel.',
      artists: ['PAMELA SVART']
    },
    {
      id: 'singularity-watergate',
      date: 'Sep 30, 2024',
      title: 'Singularity',
      venue: 'Watergate',
      city: 'Berlin - Germany',
      type: 'Club Night',
      status: 'past',
      description: 'Memorable night at Berlin\'s famous Watergate club.',
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
      <div className="events-parallax-bg"></div>
      <div className="events-content">
        <h2>{language === 'es' ? 'Eventos' : 'Events'}</h2>
        
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
                          {language === 'es' ? 'Próximamente' : 'Coming up'}
                        </span>
                      )}
                    </div>
                    <div className="timeline-location">
                      <span className="country-flag">{getCountryFlag(event.city)}</span>
                      <span className="country-name">{event.city.split(' - ')[0]}</span>
                      <span className="location-icon">📍</span>
                      <span className="venue-name">{event.venue}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Events

