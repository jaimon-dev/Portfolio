import React from 'react';
import SectionHeader from '../common/SectionHeader';
import { layers } from '../../data/portfolioData';

export default function SkillsSection({
  activeLayer,
  onSelectLayer,
  selectedSkillTag,
  onSelectSkillTag
}) {
  const currentLayer = layers.find((l) => l.id === activeLayer) || layers[0];

  const handleSkillClick = (skill) => {
    if (onSelectSkillTag) {
      onSelectSkillTag(skill);
      // Smooth scroll to projects section to see matching projects
      const projectsSection = document.getElementById('projects');
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="skills">
      <SectionHeader
        title="Skills"
        subtitle="Every app has layers. These are the tools I use in each one. Tap a skill to filter matching projects."
      />

      <div className="tabs-container">
        <div className="tabs" role="tablist" aria-label="Skill layers">
          {layers.map((layer) => (
            <button
              key={layer.id}
              type="button"
              role="tab"
              className="tab"
              aria-selected={activeLayer === layer.id}
              onClick={() => onSelectLayer(layer.id)}
            >
              {layer.title}
            </button>
          ))}
        </div>
      </div>

      <div className="chips" role="tabpanel" aria-label={`${currentLayer.title} skills`}>
        {currentLayer.skills.map((skill) => {
          const isSelected = selectedSkillTag === skill;
          return (
            <button
              key={skill}
              type="button"
              className={`chip chip-clickable ${isSelected ? 'chip-active' : ''}`}
              onClick={() => handleSkillClick(skill)}
              title={`Click to view projects using ${skill}`}
            >
              <span>{skill}</span>
              <span className="chip-hint" aria-hidden="true">
                ↗
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
}
