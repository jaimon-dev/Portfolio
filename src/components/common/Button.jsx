import React from 'react';

export default function Button({
  href,
  children,
  className = '',
  variant = 'default',
  external = false,
  onClick,
  ...props
}) {
  const classes = `btn ${variant === 'main' ? 'main' : ''} ${className}`.trim();

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        onClick={onClick}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classes} onClick={onClick} {...props}>
      {children}
    </button>
  );
}

