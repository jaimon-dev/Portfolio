import React, { useState, useMemo } from 'react';
import SectionHeader from '../common/SectionHeader';
import Button from '../common/Button';
import { projects } from '../../data/portfolioData';

export default function ProjectsSection({ selectedSkillTag, onSelectSkillTag }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'detailed'

  // Extract categories dynamically and count items
  const categories = useMemo(() => {
    const cats = ['All'];
    projects.forEach((p) => {
      if (p.category && !cats.includes(p.category)) {
        cats.push(p.category);
      }
    });
    return cats;
  }, []);

  // Filter projects based on category, tag filter, and search query
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      // Category filter
      if (activeCategory !== 'All' && project.category !== activeCategory) {
        return false;
      }

      // Skill / Tag filter (case-insensitive substring or exact match)
      if (selectedSkillTag) {
        const hasTag = project.tags.some(
          (t) =>
            t.toLowerCase() === selectedSkillTag.toLowerCase() ||
            selectedSkillTag.toLowerCase().includes(t.toLowerCase()) ||
            t.toLowerCase().includes(selectedSkillTag.toLowerCase())
        );
        const matchesName = project.name
          .toLowerCase()
          .includes(selectedSkillTag.toLowerCase());
        const matchesKind = project.kind
          .toLowerCase()
          .includes(selectedSkillTag.toLowerCase());
        const matchesPoints = project.points.some((pt) =>
          pt.toLowerCase().includes(selectedSkillTag.toLowerCase())
        );

        if (!hasTag && !matchesName && !matchesKind && !matchesPoints) {
          return false;
        }
      }

      // Search query filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const matchesName = project.name.toLowerCase().includes(query);
        const matchesKind = project.kind.toLowerCase().includes(query);
        const matchesTags = project.tags.some((t) => t.toLowerCase().includes(query));
        const matchesPoints = project.points.some((p) =>
          p.toLowerCase().includes(query)
        );

        if (!matchesName && !matchesKind && !matchesTags && !matchesPoints) {
          return false;
        }
      }

      return true;
    });
  }, [activeCategory, selectedSkillTag, searchQuery]);

  const clearAllFilters = () => {
    setActiveCategory('All');
    setSearchQuery('');
    if (onSelectSkillTag) onSelectSkillTag(null);
  };

  const getCategoryCount = (cat) => {
    if (cat === 'All') return projects.length;
    return projects.filter((p) => p.category === cat).length;
  };

  return (
    <section id="projects">
      <div className="section-head-row">
        <div className="section-head-title">
          <SectionHeader
            title="Projects"
            subtitle={`Showing ${filteredProjects.length} of ${projects.length} application${
              projects.length === 1 ? '' : 's'
            } built from end to end.`}
          />
        </div>

        {/* View Mode Switcher (Visible on desktop & tablets, hidden on phones) */}
        <div className="view-toggle" role="group" aria-label="Project view mode">
          <button
            type="button"
            className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
            onClick={() => setViewMode('grid')}
            title="Grid View (responsive multi-column cards)"
            aria-pressed={viewMode === 'grid'}
          >
            <span aria-hidden="true">⊞</span> Grid
          </button>
          <button
            type="button"
            className={`view-btn ${viewMode === 'detailed' ? 'active' : ''}`}
            onClick={() => setViewMode('detailed')}
            title="Detailed View (expanded architecture breakdown)"
            aria-pressed={viewMode === 'detailed'}
          >
            <span aria-hidden="true">☰</span> Detailed
          </button>
        </div>
      </div>

      {/* Filter and Search Controls */}
      <div className="project-controls">
        <div className="project-tabs-container">
          <div className="tabs project-tabs" role="tablist" aria-label="Project categories">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                role="tab"
                className="tab"
                aria-selected={activeCategory === cat}
                onClick={() => setActiveCategory(cat)}
              >
                <span>{cat}</span>
                <span className="count-pill">{getCategoryCount(cat)}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="search-wrap">
          <input
            type="search"
            className="search-input"
            placeholder="Search tech (React, AWS, MongoDB)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            aria-label="Search projects by technology or keyword"
          />
        </div>
      </div>

      {/* Active Filter Notice */}
      {(selectedSkillTag || searchQuery.trim() || activeCategory !== 'All') && (
        <div className="active-filter-bar">
          <div className="active-filter-text">
            <span>Filtering by:</span>
            {activeCategory !== 'All' && (
              <span className="filter-badge">
                Category: <strong>{activeCategory}</strong>
              </span>
            )}
            {selectedSkillTag && (
              <span className="filter-badge">
                Skill: <strong>{selectedSkillTag}</strong>
              </span>
            )}
            {searchQuery.trim() && (
              <span className="filter-badge">
                Keyword: <strong>"{searchQuery.trim()}"</strong>
              </span>
            )}
          </div>
          <button
            type="button"
            className="clear-filter-btn"
            onClick={clearAllFilters}
          >
            ✕ Reset Filters
          </button>
        </div>
      )}

      {/* Projects Display: Grid View */}
      {viewMode === 'grid' && (
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <article className="proj-card" key={project.id || project.name}>
              <div className="proj-card-content">
                <div className="proj-card-meta">
                  {project.category && (
                    <span className="proj-badge">{project.category}</span>
                  )}
                  <span className="proj-date">{project.when}</span>
                </div>

                <h3 className="proj-card-title">{project.name}</h3>
                <p className="proj-card-kind">{project.kind}</p>

                <ul className="proj-card-points">
                  {project.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>

              <div className="proj-card-footer">
                <div className="tags" aria-label="Technologies used">
                  {project.tags.map((tag) => (
                    <button
                      key={tag}
                      type="button"
                      className={`tag tag-interactive ${
                        selectedSkillTag?.toLowerCase() === tag.toLowerCase()
                          ? 'tag-active'
                          : ''
                      }`}
                      onClick={() => onSelectSkillTag && onSelectSkillTag(tag)}
                      title={`Filter projects with ${tag}`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>

                <div className="proj-card-actions">
                  <Button href={project.repo} variant="main" external>
                    GitHub Code
                  </Button>
                  {project.demo && (
                    <Button href={project.demo} external>
                      Live Demo
                    </Button>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      )}

      {/* Projects Display: Detailed View */}
      {viewMode === 'detailed' && (
        <div className="projects-detailed-list">
          {filteredProjects.map((project) => (
            <article className="proj proj-detailed" key={project.id || project.name}>
              <div className="art">
                <div>
                  {project.category && (
                    <span className="proj-badge" style={{ marginBottom: '12px' }}>
                      {project.category}
                    </span>
                  )}
                  <div className="big">{project.name}</div>
                </div>

                <div className="tags">
                  {project.tags.map((tag) => (
                    <button
                      key={tag}
                      type="button"
                      className={`tag tag-interactive ${
                        selectedSkillTag?.toLowerCase() === tag.toLowerCase()
                          ? 'tag-active'
                          : ''
                      }`}
                      onClick={() => onSelectSkillTag && onSelectSkillTag(tag)}
                      title={`Filter projects with ${tag}`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>

              <div className="info">
                <h3>{project.kind}</h3>
                <div style={{ color: 'var(--soft)', marginBottom: '12px' }}>
                  {project.when}
                </div>
                <ul>
                  {project.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
                <div className="proj-actions">
                  <Button href={project.repo} variant="main" external>
                    View code on GitHub
                  </Button>
                  {project.demo && (
                    <Button href={project.demo} external>
                      Live Demo
                    </Button>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      )}

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <div className="no-projects-found">
          <p>No projects match your current filter criteria.</p>
          <button
            type="button"
            className="btn main"
            onClick={clearAllFilters}
          >
            Clear Filters & View All
          </button>
        </div>
      )}
    </section>
  );
}
