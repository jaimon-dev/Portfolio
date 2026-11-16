import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Hero from '../components/sections/Hero';
import SkillsSection from '../components/sections/SkillsSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import ContactSection from '../components/sections/ContactSection';

export default function HomePage() {
  const [activeLayer, setActiveLayer] = useState('front');
  const [selectedSkillTag, setSelectedSkillTag] = useState(null);

  return (
    <div className="wrap">
      <Navbar />
      <main>
        <Hero activeLayer={activeLayer} onSelectLayer={setActiveLayer} />
        <SkillsSection
          activeLayer={activeLayer}
          onSelectLayer={setActiveLayer}
          selectedSkillTag={selectedSkillTag}
          onSelectSkillTag={setSelectedSkillTag}
        />
        <ProjectsSection
          selectedSkillTag={selectedSkillTag}
          onSelectSkillTag={setSelectedSkillTag}
        />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
