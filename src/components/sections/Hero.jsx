import React from 'react';
import Button from '../common/Button';
import ArchitectureDiagram from './ArchitectureDiagram';
import { personalInfo, socialLinks } from '../../data/portfolioData';

export default function Hero({ activeLayer, onSelectLayer }) {
  return (
    <header className="hero" id="top">
      <div>
        <h1>{personalInfo.tagline}</h1>
        <p className="role">{personalInfo.subtagline}</p>
        <div className="hero-actions">
          <Button href="#projects" variant="main">
            See my projects
          </Button>
          <Button href={socialLinks.github} external>
            GitHub
          </Button>
          <Button href={socialLinks.leetcode} external>
            LeetCode
          </Button>
        </div>
      </div>
      <ArchitectureDiagram activeLayer={activeLayer} onSelectLayer={onSelectLayer} />
    </header>
  );
}

