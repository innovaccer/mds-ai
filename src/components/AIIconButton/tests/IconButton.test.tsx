import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { AIIconButton } from '../index';

describe('<AIIconButton />', () => {
  test('renders without crashing', () => {
    const { getByTestId } = render(<AIIconButton />);
    expect(getByTestId('DesignSystem-AI-IconButton')).toBeInTheDocument();
  });

  test('renders with default props', () => {
    const { getByTestId } = render(<AIIconButton />);
    expect(getByTestId('DesignSystem-AI-Icon')).toHaveAttribute('width', '16');
    expect(getByTestId('DesignSystem-AI-Icon')).toHaveAttribute('height', '16');
    expect(getByTestId('DesignSystem-AI-Icon')).toHaveClass('IconButton-AI-Icon--top');
  });

  test('triggers onClick event handler when clicked', () => {
    const handleClick = jest.fn();
    const { getByTestId } = render(<AIIconButton onClick={handleClick} />);
    fireEvent.click(getByTestId('DesignSystem-AI-IconButton'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('is disabled when disabled prop is true', () => {
    const { getByTestId } = render(<AIIconButton disabled />);
    expect(getByTestId('DesignSystem-AI-IconButton')).toBeDisabled();
  });

  test('renders custom icon when provided', () => {
    const customIcon = 'my-custom-icon';
    const { getByText } = render(<AIIconButton icon={customIcon} />);
    expect(getByText(customIcon)).toBeInTheDocument();
  });

  test('has the correct size when size prop is provided', () => {
    const size = 'large';
    const { getByTestId } = render(<AIIconButton size={size} />);
    expect(getByTestId('DesignSystem-Icon')).toHaveStyle({ fontSize: '20px' });
  });

  test('has the correct class when position prop is provided', () => {
    const position = 'bottom';
    const { getByTestId } = render(<AIIconButton position={position} />);
    expect(getByTestId('DesignSystem-AI-Icon')).toHaveClass('IconButton-AI-Icon--bottom');
  });

  test('can pass additional className to the component', () => {
    const className = 'my-custom-classname';
    const { container } = render(<AIIconButton className={className} />);
    expect(container.firstChild).toHaveClass(className);
  });
});
