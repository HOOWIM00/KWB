import React, { useState } from 'react';

// Sidebar Right Component
function SidebarRight() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <aside className="sidebar sidebar-right">
        <img
          src={`${process.env.PUBLIC_URL}/images/20251109_LiberationGarden.jpg`}
          alt="Liberation Garden op 9 november 2025"
          onClick={() => setIsOpen(true)}
          style={{ cursor: 'pointer' }}
        />
      </aside>

      {isOpen && (
        <div className="lightbox-overlay" onClick={() => setIsOpen(false)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setIsOpen(false)}>×</button>
            <img
              src={`${process.env.PUBLIC_URL}/images/20251109_LiberationGarden.jpg`}
              alt="Liberation Garden op 9 november 2025"
            />
          </div>
        </div>
      )}
    </>
  );
}
export default SidebarRight;