import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Styles from '../css/Header.module.css';
import Logo from '../ImagensUC3/logo.png'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className={Styles.header}>
      <div className={Styles.logo}>
        <h2>
          <Link to="/" onClick={handleLinkClick}><img src={Logo} alt="" /></Link>
        </h2>
      </div>

      {!menuOpen && (
        <div className={Styles.menuIcon}>
          <i
            className={`bi bi-list ${Styles.menuopen}`}
            onClick={() => setMenuOpen(true)}
          ></i>
        </div>
      )}

      {menuOpen && (
        <div className={Styles.menuitem}>
          <i
            className={`bi bi-x-lg ${Styles.menuclose}`}
            onClick={() => setMenuOpen(false)}
          ></i>

          <ul>
            <li>
              <span>01</span>
              <Link to="/" onClick={handleLinkClick}>Home</Link>
            </li>
            <li>
              <span>02</span>
              <Link to="/cursos" onClick={handleLinkClick}>Cursos</Link>
            </li>
            <li>
              <span>03</span>
              <Link to="/eventos" onClick={handleLinkClick}>Eventos</Link>
            </li>
            <li>
              <span>04</span>
              <Link to="/quiz" onClick={handleLinkClick}>Quiz</Link>
            </li>
            <li>
              <span>05</span>
              <Link to="/forum" onClick={handleLinkClick}>Fórum</Link>
            </li>
            <li>
              <span>06</span>
              <Link to="/planos" onClick={handleLinkClick}>Planos</Link>
            </li>
            <li>
              <span>07</span>
              <Link to="/mentoria" onClick={handleLinkClick}>Mentoria</Link>
            </li>
            <li>
              <span>08</span>
              <Link to="/login" onClick={handleLinkClick}>Login</Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header