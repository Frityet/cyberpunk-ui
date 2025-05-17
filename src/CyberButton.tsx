import React from 'react';

export interface CyberButtonProps {
  children: React.ReactNode;
}

export const CyberButton: React.FC<CyberButtonProps> = ({ children }) => (
  <button className="cyber-btn">{children}</button>
);
