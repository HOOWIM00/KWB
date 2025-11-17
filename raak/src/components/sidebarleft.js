// Sidebar Left Component
function SidebarLeft() {
  return (
    <aside className="sidebar sidebar-left">
      <a href="https://raakvzw.be/" target="_blank"><img src="./images/raak_logo.png" alt="Link naar website van Raak VZW" /></a><br />
      <a href="https://www.monavzw.be/" target="_blank"><img src="./images/mona_logo.jpg" alt="Link naar website van Mona VZW" /></a><br />
      <div style={{ marginTop: '20px' }}>
        <a href="https://www.facebook.com/profile.php?id=61566387080870" target="_blank" rel="noreferrer" title="Raak Achtebos on Facebook" className="social-icon">
          <span className="fa fa-facebook-square" style={{ fontSize: "30px" }}></span>
        </a>
        <a href="https://www.instagram.com/raakachterbos/" target="_blank" rel="noreferrer" title="Raak Achterbos on Instagram" className="social-icon">
          <span className="fa fa-instagram" style={{ fontSize: "30px" }}></span>
        </a>
      </div>
    </aside>
  );
}
export default SidebarLeft;