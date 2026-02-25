export default function Toast({ show, productName }) {
  return (
    <div className={`toast ${show ? 'show' : ''}`}>
      ✓ Ajouté au panier — {productName}
    </div>
  )
}
