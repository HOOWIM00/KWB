// Header Component
// TODO: media toevoegen, hieronder moet foto's en maandblaadjes komen
function Header({ currentPage, setCurrentPage }) {
  return (
    <header className="topnav">
      <nav>
        <ul>
          <li><a href="#" className={currentPage === 'home' ? 'active' : ''} onClick={() => setCurrentPage('home')}>Home</a></li>
          <li><a href="#" className={currentPage === 'about' ? 'active' : ''} onClick={() => setCurrentPage('about')}>Over ons</a></li>
          <li><a href="#" className={currentPage === 'contact' ? 'active' : ''} onClick={() => setCurrentPage('contact')}>Contact</a></li>
          <li><a href="#" className={currentPage === 'activities' ? 'active' : ''} onClick={() => setCurrentPage('activities')}>Activiteiten</a></li>
          <li><a href="#" className={currentPage === 'media' ? 'active' : ''} onClick={() => setCurrentPage('media')}>Media</a></li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;