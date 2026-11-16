import React from 'react';
import SectionHeader from '../common/SectionHeader';
import Button from '../common/Button';
import { personalInfo, socialLinks } from '../../data/portfolioData';

export default function ContactSection() {
  return (
    <section id="contact">
      <SectionHeader
        title="Let’s work together"
        subtitle={personalInfo.contactSub}
      />
      <div className="contact">
        <Button href={socialLinks.linkedin} variant="main" external>
          LinkedIn
        </Button>
        <Button href={socialLinks.github} external>
          GitHub
        </Button>
        <Button href={socialLinks.leetcode} external>
          LeetCode
        </Button>
      </div>
    </section>
  );
}

