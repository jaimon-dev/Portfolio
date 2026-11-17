import React from 'react';
import Button from '../common/Button';
import ArchitectureDiagram from './ArchitectureDiagram';
import { personalInfo, socialLinks } from '../../data/portfolioData';

export default function Hero({ activeLayer, onSelectLayer }) {
  return (
    <header className="hero" id="top">
      <div className="hero-content">
        <h1>{personalInfo.tagline}</h1>
        <p className="role">{personalInfo.subtagline}</p>
        <div className="hero-actions">
          <Button href="#projects" variant="main" className="hero-btn-primary">
            See my projects
          </Button>
          <div className="hero-btn-group">
            <Button href={socialLinks.github} external className="hero-btn-secondary">
              GitHub
            </Button>
            <Button href={socialLinks.leetcode} external className="hero-btn-secondary">
              LeetCode
            </Button>
          </div>
        </div>
      </div>
      <ArchitectureDiagram activeLayer={activeLayer} onSelectLayer={onSelectLayer} />
    </header>
  );
}
