// Home Page Component
function HomePage() {
  return (
    <section className="page">
      <img src={`${process.env.PUBLIC_URL}/images/raak_001.jpg`} alt="RAAK" style={{ maxWidth: '100%', marginBottom: '20px' }} />
      <h1>Welkom bij RAAK Achterbos</h1>
      <p>Een warme gemeenschap in beweging</p>
      <h2>Wat we doen</h2>
      <p>RAAK Achterbos organiseert activiteiten voor jong en oud, met focus op verbinding en plezier.</p>
    </section>
  );
}
export default HomePage;