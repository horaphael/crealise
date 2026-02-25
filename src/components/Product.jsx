import logoImg from '../assets/test-logo.png'
import bijouxImg from '../assets/test-bijoux.png'

export default function Product({ selectedColor, setSelectedColor, colors, addToCart }) {
  const specs = [
    { icon: '⚡', label: 'Autonomie', value: '7 jours' },
    { icon: '💧', label: 'Résistance', value: 'IP68 · 30m' },
    { icon: '📡', label: 'Connexion', value: 'Bluetooth 5.2' },
    { icon: '🪙', label: 'Matière', value: 'Or 18k recyclé' },
  ]

  return (
    <section className="product" id="produit">
      <div className="product-inner">
        <div className="product-visual">
          <div className="product-card">
            <div className="product-badge">Édition Limitée</div>
                <div className="hero-jewel">
                    <div className="jewel-ring" />
                        <div className="jewel-inner">
                            <img src={bijouxImg} alt="Diamant" className="jewel-gem-img" />
                        </div>
                    </div>
            <div className="product-card-name">
              <img src={logoImg} alt="Logo" className="product-logo" />
            </div>
            <div className="product-card-sub">Rubis & Or 18 carats — Collection Prestige</div>
          </div>
        </div>

        <div className="product-info">
          <p className="section-label">Le bijoux</p>
          <div className="section-title">
            <img src={logoImg} alt="Logo" className="section-logo" />
          </div>

          <div className="product-price-area">
            <div className="product-price">1 290 €</div>
            <div className="product-price-sub">Livraison offerte · Paiement 3× sans frais</div>
          </div>

          <p className="product-desc">
            Un chef-d'œuvre d'orfèvrerie aux capacités biométriques de pointe.
            Suivi du stress, du rythme cardiaque et du sommeil — le tout dissimulé dans une pierre d'exception.
          </p>

          <div className="specs-grid">
            {specs.map(s => (
              <div key={s.label} className="spec-item">
                <div className="spec-icon">{s.icon}</div>
                <div className="spec-label">{s.label}</div>
                <div className="spec-value">{s.value}</div>
              </div>
            ))}
          </div>

          <div className="color-options">
            <span className="color-label">Finition :</span>
            {colors.map((c, i) => (
              <div
                key={i}
                className={`color-dot ${selectedColor === i ? 'active' : ''}`}
                style={{ background: c.bg }}
                onClick={() => setSelectedColor(i)}
                title={c.name}
              />
            ))}
            <span style={{ fontSize: '0.8rem', color: '#999', marginLeft: '0.5rem' }}>
              {colors[selectedColor].name}
            </span>
          </div>

          <button className="btn-primary" onClick={addToCart}>
            Ajouter au panier — {colors[selectedColor].name}
          </button>
          <button className="btn-secondary">
            Réserver une consultation privée
          </button>
        </div>
      </div>
    </section>
  )
}
