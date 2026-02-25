export default function Toast({ show, colorName }) {
  return (
    <div className={`toast ${show ? 'show' : ''}`}>
      ✓ Ajouté au panier — LUMINA Ring ({colorName})
    </div>
  )
}
