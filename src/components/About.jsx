import bijouxImg from '../assets/test-bijoux.png'

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-left">
        <p className="section-label">Notre Vision</p>
        <h2 className="section-title">Luxe &<br /><em>Intelligence</em><br />Réunis</h2>
        <p className="about-text">
          Alya est né d'une conviction : la technologie la plus avancée doit aussi être la plus belle.
          Nous avons passé 3 ans à fondre l'horlogerie suisse et la biométrie médicale dans un seul bijou.
        </p>
        <p className="about-text">
          Chaque pierre est sélectionnée à la main. Chaque algorithme, calibré sur des milliers de données.
          Le résultat ? Un bijou qui vit avec vous.
        </p>
        <ul className="features-list">
          <li>Certifié bijou de luxe par le Comité Colbert</li>
          <li>Capteurs médicaux de classe II</li>
          <li>Produit en France, matériaux 100% éthiques</li>
          <li>2 ans de garantie + service personnalisé</li>
        </ul>
      </div>

      <div className="about-right">
        <div className="about-bg-text">✦</div>
        <div className="about-visual">
          <div className="about-ring-display">
            <div className="hero-jewel">
            <div className="jewel-ring" />
                <div className="jewel-inner">
                    <img src={bijouxImg} alt="Diamant" className="jewel-gem-img" />
                </div>
        </div>
          </div>
          {['Beauté', 'Bien-être', 'Technologie'].map(t => (
            <div key={t} className="about-tag">{t}</div>
          ))}
        </div>
      </div>
    </section>
  )
}
