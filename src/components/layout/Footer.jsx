import React from 'react';
import { personalInfo, navLinks, socialLinks } from '../../data/portfolioData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#top" className="footer-logo">
              {personalInfo.name}
            </a>
            <p className="footer-tagline">
              MERN Stack Developer building responsive apps from the screen to the server.
            </p>
          </div>

          <div className="footer-nav">
            <span className="footer-heading">Navigation</span>
            <div className="footer-links">
              {navLinks.map((link) => (
                <a key={link.label} href={link.href}>
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-connect">
            <span className="footer-heading">Connect</span>
            <div className="footer-links">
              <a href={socialLinks.github} target="_blank" rel="noopener noreferrer">
                GitHub ↗
              </a>
              <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn ↗
              </a>
              <a href={socialLinks.leetcode} target="_blank" rel="noopener noreferrer">
                LeetCode ↗
              </a>
              <a href={`mailto:${personalInfo.email}`}>
                Email ↗
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>
          <a href="#top" className="footer-back-to-top">
            ↑ Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}
