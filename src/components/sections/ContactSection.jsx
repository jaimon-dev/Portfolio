import React, { useState } from 'react';
import SectionHeader from '../common/SectionHeader';
import Button from '../common/Button';
import { personalInfo, socialLinks } from '../../data/portfolioData';

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact">
      <SectionHeader
        title="Let’s work together"
        subtitle={personalInfo.contactSub}
      />

      {/* Prominent Email Card */}
      <div className="contact-email-card">
        <div className="email-card-info">
          <span className="email-label">Direct Email</span>
          <a href={`mailto:${personalInfo.email}`} className="email-address">
            {personalInfo.email}
          </a>
        </div>
        <div className="email-card-actions">
          <Button href={`mailto:${personalInfo.email}`} variant="main">
            Send Email
          </Button>
          <button
            type="button"
            className="btn email-copy-btn"
            onClick={handleCopyEmail}
            aria-label="Copy email address"
          >
            {copied ? '✓ Copied!' : 'Copy Email'}
          </button>
        </div>
      </div>

      {/* Social and Developer Profiles */}
      <div className="contact-profiles-group">
        <span className="profiles-label">Find me on:</span>
        <div className="contact">
          <Button href={socialLinks.linkedin} external>
            LinkedIn
          </Button>
          <Button href={socialLinks.github} external>
            GitHub
          </Button>
          <Button href={socialLinks.leetcode} external>
            LeetCode
          </Button>
        </div>
      </div>
    </section>
  );
}
