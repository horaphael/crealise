export default function Banner({ addToCart }) {
  return (
    <div className="banner">
      <div>
        <div className="banner-text">Prête pour votre <em>prochaine expansion ?</em></div>
        <div className="banner-sub">Livraison en 48h · Retours gratuits 30 jours · Service client 7j/7</div>
      </div>
      <button className="banner-cta" onClick={addToCart}>Commander Maintenant</button>
    </div>
  )
}
