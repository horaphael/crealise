import logoImg from '../assets/test-logo.png'

export default function Navbar({ scrolled, cart }) {
  return (
    <nav className={scrolled ? 'scrolled' : ''}>
      <div className="nav-brand">
        <img src={logoImg} alt="Logo" className="nav-logo" />
      </div>
      <ul className="nav-links">
        <li><a href="#about">À propos</a></li>
        <li><a href="#produit">Produit</a></li>
        <li><a href="#tech">Technologie</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <button className="nav-cart">Panier ({cart})</button>
    </nav>
  )
}
