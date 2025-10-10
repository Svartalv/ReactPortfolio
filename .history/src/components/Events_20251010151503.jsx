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
          <h3>Upcoming Events 2025</h3>
          <div className="event-list">
            <div className="event-item">
              <div className="event-date">Aug 17, 2025</div>
              <div className="event-details">
                <h4>MIAW: Pride After Party</h4>
                <p>Jolene, Copenhagen - Denmark</p>
                <span className="event-type">Club Night</span>
              </div>
            </div>
            <div className="event-item">
              <div className="event-date">Aug 11, 2025</div>
              <div className="event-details">
                <h4>SINGULARITY</h4>
                <p>Tresor, Berlin - Germany</p>
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
    </section>
  )
}

export default Events
