import { useLanguage } from '../contexts/LanguageContext'

const TechRider = () => {
  const { language } = useLanguage()
  return (
    <section id="tech" className="tech-section">
      <h2>Tech Rider</h2>
      <div className="tech-content">
        <div className="tech-category">
          <h3>{language === 'es' ? 'Equipamiento DJ' : 'DJ Equipment'}</h3>
          <ul>
            <li>3-4x CDJ-3000 or CDJ-2000NXS2</li>
            <li>1x Xone 96/92 or DJM-V10 or DJM-900NXS2</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default TechRider

