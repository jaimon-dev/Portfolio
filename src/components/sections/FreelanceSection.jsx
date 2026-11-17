import React from 'react';
import { freelanceExperience } from '../../data/portfolioData';

export default function FreelanceSection() {
  const { subheading, title, role, description, tags } = freelanceExperience;

  return (
    <section id="freelance" className="freelance-section" aria-label="Experience">
      <div id="experience" className="section-anchor-shim" aria-hidden="true" />
      <div className="freelance-split-card">
        {/* Left Column: Subheading & Title */}
        <div className="freelance-left">
          {subheading && <span className="freelance-subheading">{subheading}</span>}
          <h2 className="freelance-main-title">{title}</h2>
        </div>

        {/* Right Column: Role, Description, and Technology Tags */}
        <div className="freelance-right">
          <h3 className="freelance-role">{role}</h3>

          <div className="freelance-desc-row">
            <span className="freelance-bullet" aria-hidden="true">✦</span>
            <p className="freelance-description">{description}</p>
          </div>

          <div className="freelance-tags" aria-label="Technology tags">
            {tags.map((tag) => (
              <span className="freelance-tag-pill" key={tag}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
