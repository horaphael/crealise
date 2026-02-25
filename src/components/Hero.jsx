import logoImg from '../assets/test-logo.png'
import bijoux1 from '../assets/bijoux1.png'
import bijoux2 from '../assets/bijoux2.png'
import bijoux3 from '../assets/bijoux3.png'
import bijoux4 from '../assets/bijoux4.png'

const previews = [bijoux1, bijoux2, bijoux3, bijoux4]

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg" />
      <div className="hero-grain" />
      <div className="hero-orb" />

      <div className="hero-content">
        <p className="brand-script">Collection 2025</p>

        <div className="hero-title">
          <img src={logoImg} alt="Alya" className="hero-logo" />
        </div>

        <p className="hero-subtitle">La collection qui vous ressemble.</p>

        <div className="hero-preview">
          {previews.map((img, i) => (
            <div key={i} className="hero-preview-item" style={{ animationDelay: `${0.1 * i}s` }}>
              <img src={img} alt={`Bijou ${i + 1}`} />
            </div>
          ))}
        </div>

        <a
          className="hero-cta"
          href="#produit"
          onClick={e => {
            e.preventDefault()
            document.getElementById('produit').scrollIntoView({ behavior: 'smooth' })
          }}
        >
          Découvrir la collection ↓
        </a>
      </div>

      <div className="scroll-hint">
        <span>Scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  )
}
