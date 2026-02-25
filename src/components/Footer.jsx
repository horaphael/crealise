export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div>
          <div className="footer-brand">Alya</div>
          <div className="footer-desc">
            Le bijoux connecté le plus élégant du marché. Technologie de pointe dissimulée dans un écrin d'exception.
          </div>
        </div>
        <div className="footer-col">
          <h4>Produit</h4>
          <a href="#"><img src="./src/assets/test-logo.png" alt="Logo" className="footer-link-logo" /></a>
          <a href="#">Finitions</a>
          <a href="#">App Mobile</a>
          <a href="#">FAQ</a>
        </div>
        <div className="footer-col">
          <h4>Marque</h4>
          <a href="#">Notre Histoire</a>
          <a href="#">Savoir-faire</a>
          <a href="#">Presse</a>
          <a href="#">Contact</a>
        </div>
        <div className="footer-col">
          <h4>Contact</h4>
          <a href="#">hello@lumina-ring.fr</a>
          <a href="#">www.lumina-ring.fr</a>
          <a href="#">@lumina.ring</a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2025 alya — Tous droits réservés</span>
        <span>Fabriqué en France ✦ Matériaux éthiques</span>
      </div>
    </footer>
  )
}
