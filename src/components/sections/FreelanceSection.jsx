import React from 'react';
import SectionHeader from '../common/SectionHeader';
import { freelanceProjects } from '../../data/portfolioData';

export default function FreelanceSection() {
  return (
    <section id="freelance">
      <SectionHeader
        title="Freelance & Personal Projects"
        subtitle="Independent client solutions, practical experiments, and interactive applications crafted using React.js, modern JavaScript, and web APIs."
      />

      <div className="freelance-grid">
        {freelanceProjects.map((project) => (
          <article className="freelance-card" key={project.id}>
            <div className="freelance-card-header">
              <span className="freelance-badge">{project.badge}</span>
            </div>

            <h3 className="freelance-title">{project.name}</h3>
            <p className="freelance-summary">{project.summary}</p>

            <ul className="freelance-highlights">
              {project.highlights.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>

            <div className="tags" aria-label="Technologies used">
              {project.tags.map((tag) => (
                <span className="tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
