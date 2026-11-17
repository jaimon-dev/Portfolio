import React from 'react';
import SectionHeader from '../common/SectionHeader';
import { layers } from '../../data/portfolioData';

export default function SkillsSection({ activeLayer, onSelectLayer }) {
  const currentLayer = layers.find((l) => l.id === activeLayer) || layers[0];

  return (
    <section id="skills">
      <SectionHeader
        title="Skills"
        subtitle="Every app has layers. These are the tools and technologies I use across each layer."
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
        {currentLayer.skills.map((skill) => (
          <span className="chip" key={skill}>
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
