import React, { useState } from 'react';

// Contact Page Component
function ContactPage() {
  const [formData, setFormData] = useState({ naam: '', email: '', bericht: '' });
  const [submitted, setSubmitted] = useState(false);
  const [activeSection, setActiveSection] = useState('bestuur');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send to PHP backend
    const response = await fetch('../public_html/api/contact.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      setSubmitted(true);
      setFormData({ naam: '', email: '', bericht: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="page">
      <div className="subnav">
        <nav>
          <ul>
            <li><a href="#" className={activeSection === 'bestuur' ? 'active' : ''} onClick={() => setActiveSection('bestuur')}>Ons bestuur</a></li>
            <li><a href="#" className={activeSection === 'contact' ? 'active' : ''} onClick={() => setActiveSection('contact')}>Contacteer ons</a></li>
          </ul>
        </nav>
      </div>

      {activeSection === 'bestuur' && (
        <div className="contact-section">
          <h1>Ons bestuur</h1>
          <p>Hier vindt u informatie over ons bestuursteam.</p>
          <ul>
            <li>Voorzitter: Bram Hannes</li>
            <li>Secretaris: Luc Sannen</li>
            <li>Penningmeester: Alex Van Decraen</li>
          </ul>
        </div>
      )}

      {activeSection === 'contact' && (
        <div className="contact-section">
          <h1>Contacteer ons</h1>
          <form onSubmit={handleSubmit} className="contact-form">
            <label>Naam:</label>
            <input type="text" name="naam" value={formData.naam} onChange={handleChange} required />

            <label>E-mail:</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />

            <label>Bericht:</label>
            <textarea name="bericht" rows="5" value={formData.bericht} onChange={handleChange} required></textarea>

            <button type="submit">Verstuur</button>
          </form>
          {submitted && (
            <div className="success-message">
              Bedankt voor je bericht, {formData.naam || 'daar'}! We nemen zo snel mogelijk contact op.
            </div>
          )}
        </div>
      )}
    </section>
  );
}
export default ContactPage;