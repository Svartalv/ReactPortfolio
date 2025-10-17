import { useLanguage } from '../contexts/LanguageContext'

const Footer = () => {
  const { language } = useLanguage()

  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-text">
          <p>
            <img src="/sword-icon.svg" alt="Sword" className="footer-sword-icon" />
            Made by Pamela Svart • 2025
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
