import React from 'react';
import { render, screen } from '@testing-library/react';
import { CyberButton } from '../src/CyberButton';

describe('CyberButton', () => {
  it('renders children text', () => {
    render(<CyberButton>Click me</CyberButton>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });
});
