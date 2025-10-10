const Bio = () => {
  const paragraph1 = `Pamela is a Chilean-born producer and DJ based in Berlin whose sound moves in shadows, merging dark, ethereal atmospheres with pulsing groove and emotional gravity. Rooted in the deeper end of techno, her work is shaped by intention and emotion, creating sonic journeys that invite deep connection, both inward and collective.`

  const paragraph2 = `Shaped by the emotional landscapes of Chile, the quiet introspection of Copenhagen, and the raw openness of Berlin, her sound is a synthesis of atmosphere and instinct. These influences merge fluidly, forming a sonic language that is immersive, restrained, and emotionally focused.`

  return (
    <section id="bio" className="bio-section">
      <div className="bio-container">
        <div className="bio-image">
          <img src="/assets/bio-image.jpg" alt="Pamela Svart" />
        </div>
        <div className="bio-content">
          <h2>BIO</h2>
          <div className="bio-text">
            <div className="paragraph-text">
              {paragraph1}
            </div>
            <div className="paragraph-text">
              {paragraph2}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Bio
