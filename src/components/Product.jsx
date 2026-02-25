import logoImg from '../assets/test-logo.png'
import bijoux1 from '../assets/bijoux1.png'
import bijoux2 from '../assets/bijoux2.png'
import bijoux3 from '../assets/bijoux3.png'
import bijoux4 from '../assets/bijoux4.png'
import { products } from '../data'

const images = [bijoux1, bijoux2, bijoux3, bijoux4]

export default function Product({ addToCart }) {
  return (
    <section className="product" id="produit">
      <div className="catalog-header">
        <p className="section-label" style={{ justifyContent: 'center' }}>Notre Collection</p>
        <div className="catalog-logo-wrap">
          <img src={logoImg} alt="Alya" className="section-logo" />
        </div>
        <p className="catalog-subtitle">Quatre créations d'exception. Une seule passion&nbsp;: votre élégance.</p>
      </div>

      <div className="catalog-grid">
        {products.map((p, i) => (
          <div key={p.id} className="catalog-card">
            <div className="catalog-card-img-wrap">
              <img src={images[i]} alt={p.name} className="catalog-card-img" />
              <span className="catalog-badge">{p.badge}</span>
            </div>
            <div className="catalog-card-body">
              <div className="catalog-card-name">{p.name}</div>
              <div className="catalog-card-sub">{p.subtitle}</div>
              <p className="catalog-card-desc">{p.desc}</p>
              <div className="catalog-card-footer">
                <div className="catalog-price">{p.price}</div>
                <button className="catalog-btn" onClick={() => addToCart(p.name)}>
                  Ajouter au panier
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
