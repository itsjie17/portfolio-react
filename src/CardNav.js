import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './CardNav.css';

const ThemeContext = React.createContext();

function CardNav({ onAboutClick }) {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="card-nav">
      <div className="card-nav-container">
        <div className="nav-cards">
          <Link to="/" className="nav-card" onClick={onAboutClick}>
            <div className="card-icon">👤</div>
            <div className="card-title">About</div>
          </Link>

          <Link to="/projects" className="nav-card">
            <div className="card-icon">💼</div>
            <div className="card-title">Projects</div>
          </Link>

          <Link to="/skills" className="nav-card">
            <div className="card-icon">🛠️</div>
            <div className="card-title">Skills</div>
          </Link>

          <Link to="/contact" className="nav-card">
            <div className="card-icon">📧</div>
            <div className="card-title">Contact</div>
          </Link>
        </div>

        <div className="theme-toggle-card">
          <button onClick={toggleTheme} className="theme-toggle-btn">
            {isDarkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardNav;
