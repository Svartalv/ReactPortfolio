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

      <h3>Past Events 2024</h3>
      <ul className="events-list past">
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

