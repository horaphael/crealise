export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg" />
      <div className="hero-grain" />
      <div className="hero-orb" />

      <div className="hero-content">
        {/* <p className="brand-script">Liliana Morgan — Collection 2025</p> */}
        <div className="hero-jewel">
          <div className="jewel-ring" />
          <div className="jewel-inner">
            <img 
              src="./src/assets/test-bijoux.png"
              alt="Diamant"
              className="jewel-gem-img"
            />
          </div>
        </div>

        <div className="hero-title">
          <img src="./src/assets/test-logo.png" alt="Logo" className="hero-logo" />
        </div>

        <p className="hero-subtitle">Le bijoux qui vous protège.</p>

        <a
          className="hero-cta"
          href="#produit"
          onClick={e => {
            e.preventDefault()
            document.getElementById('produit').scrollIntoView({ behavior: 'smooth' })
          }}
        >
          Découvrir ↓
        </a>
      </div>
    </section>
  )
}