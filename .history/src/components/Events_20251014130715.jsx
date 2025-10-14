const Events = () => {
  return (
    <section id="events" className="events-section">
      <h2>Latest Events & Gigs</h2>
      <div className="ra-integration">
        <div className="ra-profile">
          <h3>Resident Advisor</h3>
          <p className="ra-text">Follow on Resident Advisor for the latest events and bookings:</p>
          <a className="ra-link" href="https://ra.co/dj/pamelasvart" target="_blank" rel="noreferrer">View Full Profile</a>
        </div>
        <div className="recent-events">
          <h3>Upcoming Events</h3>
          <div className="event-list">
            <div className="event-item">
              <div className="event-date">Oct 18, 2025</div>
              <div className="event-details">
                <h4>Behave</h4>
                <p>Nachtleben Berlin, Berlin - Germany</p>
                <span className="event-type">Club Night</span>
              </div>
            </div>
            <div className="event-item">
              <div className="event-date">Nov 8, 2025</div>
              <div className="event-details">
                <h4>Den Anden Side Anniversary</h4>
                <p>Copenhagen - Denmark</p>
                <span className="event-type">Club Night</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h3>Past Events</h3>
      <ul className="events-list past">
        <li><strong>Aug 23, 2025:</strong> LIFTED & RIFTED, Marmorbar, Berlin - Germany</li>
        <li><strong>Aug 17, 2025:</strong> MIAW - SUNDAY PRIDE PARTY, Jolene, Copenhagen - Denmark</li>
        <li><strong>Aug 11, 2025:</strong> SINGULARITY (TRESOR + AURORA BAR), Tresor/Globus, Berlin - Germany</li>
        <li><strong>Jun 14, 2025:</strong> Behave: A New Underground Series, Nachtleben Berlin, Berlin - Germany</li>
        <li><strong>May 15, 2025:</strong> Toilet Session - FLINTA TOILET, Zur Klappe, Berlin - Germany</li>
        <li><strong>Nov 28, 2024:</strong> HÖR Berlin, Berlin - Germany</li>
        <li><strong>Sep 30, 2024:</strong> SINGULARITY, Watergate, Berlin - Germany</li>
      </ul>
      
      <div className="ra-note">
        <p><em>For the most up-to-date event listings and bookings, please visit my <a href="https://ra.co/dj/pamelasvart" target="_blank" rel="noreferrer">Resident Advisor profile</a>.</em></p>
      </div>
    </section>
  )
}

export default Events

