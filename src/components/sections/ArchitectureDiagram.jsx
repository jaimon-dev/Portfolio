import React from 'react';
import { layers } from '../../data/portfolioData';

export default function ArchitectureDiagram({ activeLayer, onSelectLayer }) {
  // Show the top 3 structural architecture layers
  const shownLayers = layers.slice(0, 3);

  const handleLayerClick = (id) => {
    onSelectLayer(id);
    const skillsElement = document.getElementById('skills');
    if (skillsElement) {
      skillsElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="diagram">
      <h3>How a web app flows. Tap a layer to see my skills.</h3>
      <div className="diagram-items">
        {shownLayers.map((layer, index) => (
          <React.Fragment key={layer.id}>
            {index > 0 && <div className="wire" aria-hidden="true" />}
            <button
              type="button"
              className="node"
              aria-pressed={activeLayer === layer.id}
              onClick={() => handleLayerClick(layer.id)}
            >
              <b>{layer.title}</b>
              <span>{layer.where}</span>
            </button>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

