import { useState } from 'react'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ nom: '', email: '', sujet: '', message: '' })

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = e => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section className="contact" id="contact">
      <div className="contact-inner">

        <div className="contact-info">
          <p className="section-label">Nous contacter</p>
          <h2 className="section-title">Une question ?<br /><em>Écrivez-nous.</em></h2>
          <p className="contact-desc">
            Notre équipe est disponible 7j/7 pour vous accompagner dans votre choix,
            personnaliser votre commande ou simplement répondre à vos questions.
          </p>
          <ul className="contact-details">
            <li>
              <div className="contact-detail-icon">📬</div>
              <div className="contact-detail-text">
                <span className="contact-detail-label">Email</span>
                <span className="contact-detail-value">hello@alya.fr</span>
              </div>
            </li>
            <li>
              <div className="contact-detail-icon">📞</div>
              <div className="contact-detail-text">
                <span className="contact-detail-label">Téléphone</span>
                <span className="contact-detail-value">+33 1 23 45 67 89</span>
              </div>
            </li>
            <li>
              <div className="contact-detail-icon">🕐</div>
              <div className="contact-detail-text">
                <span className="contact-detail-label">Disponibilité</span>
                <span className="contact-detail-value">Lun – Dim · 9h – 20h</span>
              </div>
            </li>
          </ul>
        </div>

        <div className="contact-form">
          {sent ? (
            <div className="contact-success">
              <div className="contact-success-icon">✉️</div>
              <h3>Message envoyé !</h3>
              <p>Merci pour votre message. Notre équipe vous répondra dans les plus brefs délais, généralement sous 24h.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="contact-form-title">Envoyez-nous un message</div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="nom">Nom complet</label>
                  <input
                    id="nom" name="nom" type="text"
                    placeholder="Marie Dupont"
                    value={form.nom} onChange={handleChange} required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email" name="email" type="email"
                    placeholder="marie@exemple.fr"
                    value={form.email} onChange={handleChange} required
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="sujet">Sujet</label>
                <select id="sujet" name="sujet" value={form.sujet} onChange={handleChange} required>
                  <option value="">Choisir un sujet…</option>
                  <option value="commande">Ma commande</option>
                  <option value="produit">Informations produit</option>
                  <option value="personnalisation">Personnalisation</option>
                  <option value="retour">Retour / SAV</option>
                  <option value="autre">Autre</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message" name="message"
                  rows={5}
                  placeholder="Dites-nous comment nous pouvons vous aider…"
                  value={form.message} onChange={handleChange} required
                />
              </div>
              <button type="submit" className="contact-submit">Envoyer le message →</button>
            </form>
          )}
        </div>

      </div>
    </section>
  )
}
