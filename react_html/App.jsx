const { useState } = React;

// Header Component
function Header({ currentPage, setCurrentPage }) {
  return (
    <header className="topnav">
      <nav>
        <ul>
          <li><a href="#" className={currentPage === 'home' ? 'active' : ''} onClick={() => setCurrentPage('home')}>Home</a></li>
          <li><a href="#" className={currentPage === 'about' ? 'active' : ''} onClick={() => setCurrentPage('about')}>Over ons</a></li>
          <li><a href="#" className={currentPage === 'contact' ? 'active' : ''} onClick={() => setCurrentPage('contact')}>Contact</a></li>
          <li><a href="#" className={currentPage === 'activities' ? 'active' : ''} onClick={() => setCurrentPage('activities')}>Activiteiten</a></li>
        </ul>
      </nav>
    </header>
  );
}

// Sidebar Left Component
function SidebarLeft() {
  return (
    <aside className="sidebar sidebar-left">
      <h3>NIEUWS</h3>
    </aside>
  );
}

// Sidebar Right Component
function SidebarRight() {
  return (
    <aside className="sidebar sidebar-right">
      <img src="../public_html/images/20251109_LiberationGarden.jpg" alt="Liberation Garden op 9 november 2025" />
    </aside>
  );
}

// Home Page Component
function HomePage() {
  return (
    <section className="page">
      <img src="../public_html/images/raak_001.jpg" alt="RAAK" style={{maxWidth: '100%', marginBottom: '20px'}} />
      <h1>Welkom bij RAAK Achterbos</h1>
      <p>Een warme gemeenschap in beweging</p>
      <h2>Wat we doen</h2>
      <p>RAAK Achterbos organiseert activiteiten voor jong en oud, met focus op verbinding en plezier.</p>
    </section>
  );
}

// About Page Component
function AboutPage() {
  return (
    <section className="page">
      <h1>Over RAAK Achterbos</h1>
      <p>RAAK Achterbos is een warme, sociaal-culturele vereniging die mensen samenbrengt rond ontmoeting, creativiteit en engagement. Met een brede waaier aan activiteiten voor jong en oud, willen we bijdragen aan een verbonden buurt waar iedereen zich welkom voelt.</p>
      <p>Wat ooit begon als KWB Achterbos, is vandaag geëvolueerd tot een eigentijdse beweging die inspeelt op de noden van onze tijd. De naam RAAK staat voor Rechtvaardig, Actief, Aandachtig en Krachtig—waarden die we dagelijks in praktijk brengen.</p>
      <p>Onze leden zijn mannen en vrouwen vanaf 18 jaar, afkomstig uit alle hoeken van Mol en daarbuiten. Momenteel telt RAAK Achterbos zo'n 165 leden, verspreid over verschillende generaties. We richten ons op het hele gezin: ouders en kinderen nemen samen deel aan activiteiten die zowel ontspannend als verrijkend zijn.</p>
      <p>We geloven in levenslang leren en maatschappelijke betrokkenheid. Daarom organiseren we vormingsavonden, creatieve workshops, buurtprojecten en informatieve momenten rond actuele thema's. Via ons maandblad en onze vernieuwde website blijf je op de hoogte van alles wat leeft in Achterbos.</p>

      <h1>Een blik op onze geschiedenis</h1>
      <p>RAAK Achterbos bouwt voort op een rijke traditie. Tijdens de Tweede Wereldoorlog ontstond KWB als alternatief voor verboden vakbonden—een plek waar mensen samenkwamen om sociale thema's te bespreken. Na de oorlog bleef de beweging bestaan en groeide uit tot een sociaal-culturele motor in de buurt.</p>
      <p>Het oudste document dat we terugvonden dateert van december 1957, waarin Frans Verbraeken verslag doet van een wijkmeestersvergadering. Toen al stond gemeenschapsvorming centraal: van toneelavonden tot kerstfeesten, van discussies over betaalbare bouwgronden tot pleidooien voor veiligere fietspaden.</p>
      <p>In de jaren '60 zette KWB zich actief in voor de bouw van de parochiezaal, de oprichting van een vrouwengilde, en het verbeteren van het lokale onderwijs. De verslagen uit die tijd getuigen van een sterke wil om de buurt te versterken—met concrete acties en een kritische blik op het beleid.</p>

      <h1>Vandaag en morgen</h1>
      <p>Wat toen begon als een beweging voor arbeiders, is vandaag een open vereniging voor iedereen die zich wil inzetten voor een warme, rechtvaardige samenleving. We blijven trouw aan onze roots, maar kijken ook vooruit: met nieuwe digitale initiatieven, inclusieve projecten en een frisse visuele identiteit.</p>
      <p>Elke maand zetten we een stukje geschiedenis 'in de spotlight'—een bijzondere activiteit, een markante gebeurtenis, of een vergeten verhaal uit het archief. Zo verbinden we verleden, heden en toekomst.</p>
    </section>
  );
}

// Activities Page Component
function ActivitiesPage() {
  return (
    <section className="page">
      <h1>Activiteiten</h1>
      <ul className="activity-list">
        <li><strong>Liberation Garden</strong> – 9 november</li>
        <li><strong>Dorpsfeesten</strong> – 15 november</li>
        <li><strong>Dorpsfeesten</strong> – 15 november</li>
        <li><strong>Maandelijkse wandeling</strong> – 18 november</li>
        <li><strong>Dropping</strong> – 28 november</li>
      </ul>
      <p>Wil je meedoen? Neem contact met ons op of kom gewoon langs!</p>
    </section>
  );
}

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

// Footer Component
function Footer() {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} RAAK Achterbos. Alle rechten voorbehouden.</p>
    </footer>
  );
}

// Main App Component
function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch(currentPage) {
      case 'home': return <HomePage />;
      case 'about': return <AboutPage />;
      case 'activities': return <ActivitiesPage />;
      case 'contact': return <ContactPage />;
      default: return <HomePage />;
    }
  };

  return (
    <>
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <div className="main-container">
        <SidebarLeft />
        <main className="content">
          {renderPage()}
        </main>
        <SidebarRight />
      </div>
      <Footer />
    </>
  );
}

// Render App
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
