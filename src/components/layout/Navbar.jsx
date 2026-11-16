import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { navLinks, personalInfo } from '../../data/portfolioData';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav>
      <a className="logo" href="#top">
        {personalInfo.name}
      </a>
      <div className="links">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.external ? '_blank' : undefined}
            rel={link.external ? 'noopener noreferrer' : undefined}
          >
            {link.label}
          </a>
        ))}
        <button
          type="button"
          className="themebtn"
          onClick={toggleTheme}
          aria-label="Switch colour theme"
        >
          {theme === 'dark' ? 'Light' : 'Dark'}
        </button>
      </div>
    </nav>
  );
}

