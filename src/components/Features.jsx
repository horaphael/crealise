import { features } from '../data'

export default function Features() {
  return (
    <section className="features" id="tech">
      <div className="features-inner">
        <div className="features-header">
          <p className="section-label">Technologie</p>
          <h2 className="section-title">6 Raisons de<br /><em>Tomber Amoureuse</em></h2>
        </div>
        <div className="features-grid">
          {features.map((f, i) => (
            <div key={i} className="feature-card">
              <span className="feature-icon">{f.icon}</span>
              <h3 className="feature-title">{f.title}</h3>
              <p className="feature-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
