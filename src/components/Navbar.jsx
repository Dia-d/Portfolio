import { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isTopNavVisible, setIsTopNavVisible] = useState(false);

  const toggleSidebar = () => {
    if (isTopNavVisible) return; // Don't open sidebar if top nav is visible
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleTopNav = () => {
    const newTopNavState = !isTopNavVisible;
    setIsTopNavVisible(newTopNavState);
    
    // Close sidebar when top nav is shown
    if (newTopNavState) {
      setIsSidebarOpen(false);
    }
  };

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const navbar = document.getElementById('navbar-sidebar');
      const toggleButton = document.getElementById('navbar-toggle');
      
      if (isSidebarOpen && navbar && !navbar.contains(event.target) && !toggleButton.contains(event.target)) {
        setIsSidebarOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSidebarOpen]);

  return (
    <>
      {/* Sidebar toggle button - only show when top nav is hidden */}
      {!isTopNavVisible && (
        <button 
          id="navbar-toggle" 
          className="navbar-toggle" 
          onClick={toggleSidebar}
          aria-label="Toggle navigation"
        >
          <div className={`hamburger ${isSidebarOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      )}
      
      {/* Top navbar visibility toggle button (slider style) */}
      <div className="toggle-switch-container">
        <label className="switch" title="Toggle top navigation">
          <input 
            type="checkbox" 
            checked={isTopNavVisible}
            onChange={toggleTopNav}
            aria-label="Toggle top navigation"
          />
          <span className="slider round"></span>
        </label>
      </div>
      
      {/* Sidebar navigation */}
      <nav id="navbar-sidebar" className={`navbar-sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <ul className="navbar-links">
          <li><a href="#home" onClick={() => setIsSidebarOpen(false)}>Home</a></li>
          <li><a href="#about" onClick={() => setIsSidebarOpen(false)}>About</a></li>
          <li><a href="#projects" onClick={() => setIsSidebarOpen(false)}>Projects</a></li>
          <li><a href="#contact" onClick={() => setIsSidebarOpen(false)}>Contact</a></li>
        </ul>
        <div className="social-icons-sidebar">
          <a href="https://github.com/Dia-d" target="_blank" rel="noopener noreferrer">
            <FaGithub className="social-icon" />
          </a>
          <a href="https://np.linkedin.com/in/sakar-nepal-72980b354" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="social-icon" />
          </a>
          <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="social-icon" />
          </a>
        </div>
      </nav>

      {/* Top navigation bar */}
      <nav className={`top-navbar ${isTopNavVisible ? 'visible' : ''}`}>
        <div className="social-icons-top">
          <a href="https://github.com/Dia-d" target="_blank" rel="noopener noreferrer">
            <FaGithub className="social-icon" />
          </a>
          <a href="https://np.linkedin.com/in/sakar-nepal-72980b354" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="social-icon" />
          </a>
          <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="social-icon" />
          </a>
        </div>
        <ul className="top-navbar-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar; 