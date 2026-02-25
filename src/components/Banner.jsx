export default function Banner({ addToCart }) {
  return (
    <div className="banner">
      <div>
        <div className="banner-text">Toute la collection <em>livrée en 48h.</em></div>
        <div className="banner-sub">Livraison offerte · Retours gratuits 30 jours · Service client 7j/7 · Paiement 3× sans frais</div>
      </div>
      <button className="banner-cta" onClick={() => addToCart()}>Commander Maintenant</button>
    </div>
  )
}
