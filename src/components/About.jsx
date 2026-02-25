import bijoux1 from '../assets/bijoux1.png'
import bijoux2 from '../assets/bijoux2.png'
import bijoux3 from '../assets/bijoux3.png'
import bijoux4 from '../assets/bijoux4.png'

const mosaicImages = [bijoux1, bijoux2, bijoux3, bijoux4]

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-left">
        <p className="section-label">Notre Vision</p>
        <h2 className="section-title">Luxe &<br /><em>Intelligence</em><br />Réunis</h2>
        <p className="about-text">
          Alya est né d'une conviction : la technologie la plus avancée doit aussi être la plus belle.
          Nous avons passé 3 ans à fondre l'orfèvrerie traditionnelle et la biométrie médicale dans quatre bijoux d'exception.
        </p>
        <p className="about-text">
          Chaque pierre est sélectionnée à la main. Chaque algorithme, calibré sur des milliers de données.
          Le résultat ? Une collection qui vit avec vous, au quotidien.
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
        <div className="about-mosaic">
          {mosaicImages.map((img, i) => (
            <div key={i} className="about-mosaic-item">
              <img src={img} alt={`Bijou ${i + 1}`} />
            </div>
          ))}
        </div>
        <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', marginTop: '1.5rem' }}>
          {['Beauté', 'Bien-être', 'Technologie'].map(t => (
            <div key={t} className="about-tag">{t}</div>
          ))}
        </div>
      </div>
    </section>
  )
}
