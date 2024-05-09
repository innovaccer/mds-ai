import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Chip } from '../Chip';

describe('Chip Component', () => {
  const label = 'Test Chip';
  const icon = 'test_icon';
  const mockOnClick = jest.fn();

  it('renders the Chip with provided label and icon', () => {
    render(<Chip label={label} icon={icon} />);

    expect(screen.getByText(label)).toBeInTheDocument();
    expect(screen.getByText(icon)).toBeInTheDocument();
  });

  it('calls onClick when the Chip is clicked', () => {
    const { getByTestId } = render(<Chip label={label} icon={icon} onClick={mockOnClick} />);

    const chip = getByTestId('DesignSystem-AI-Chip');
    fireEvent.click(chip!);

    expect(mockOnClick).toHaveBeenCalled();
  });

  it('does not call onClick when the Chip is disabled', () => {
    const { getByTestId } = render(<Chip label={label} icon={icon} disabled={true} onClick={mockOnClick} />);

    const chip = getByTestId('DesignSystem-AI-Chip');
    fireEvent.click(chip!);

    expect(mockOnClick).not.toHaveBeenCalled();
  });

  it('renders a custom className', () => {
    const customClassName = 'my-custom-class';
    const { getByTestId } = render(<Chip label={label} icon={icon} className={customClassName} />);
    const chip = getByTestId('DesignSystem-AI-Chip');
    expect(chip).toHaveClass(customClassName);
  });
});
