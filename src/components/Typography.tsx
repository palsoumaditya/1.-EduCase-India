import React from 'react';
import type { TypographyProps } from '../types/typography';

export const Heading: React.FC<TypographyProps> = ({ children, className = '' }) => (
  <h1 className={`text-3xl font-bold text-gray-800 mb-4 ${className}`}>
    {children}
  </h1>
);

export const Description: React.FC<TypographyProps> = ({ children, className = '' }) => (
  <p className={`text-base text-gray-600 mb-8 leading-relaxed ${className}`}>
    {children}
  </p>
);
