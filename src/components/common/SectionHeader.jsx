import React from 'react';

export default function SectionHeader({ title, subtitle }) {
  return (
    <>
      <h2>{title}</h2>
      {subtitle && <p className="sub">{subtitle}</p>}
    </>
  );
}

