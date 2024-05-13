import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Sara, { SaraProps } from '../index';
import { SaraStates, Size3Hierarchy } from '@/common.type';

const mockProps: SaraProps = {
  alt: 'Test Sara',
  'data-test': 'sara-test-id',
  size: 'regular' as Size3Hierarchy,
  state: 'default',
  onClick: jest.fn(),
};

describe('Sara Component', () => {
  it('renders correctly with default state', () => {
    const { getByAltText } = render(<Sara {...mockProps} />);

    const imageElement = getByAltText(mockProps.alt);
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('width', '32');
    expect(imageElement).toHaveAttribute('height', '32');
    expect(imageElement).toHaveAttribute('data-test', 'sara-test-id');
  });

  it('renders correctly with custom size', () => {
    const customSizeProps = { ...mockProps, size: 'medium' as Size3Hierarchy };
    const { getByAltText } = render(<Sara {...customSizeProps} />);

    const imageElement = getByAltText(customSizeProps.alt);
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('width', '48');
    expect(imageElement).toHaveAttribute('height', '48');
  });

  it('renders Lottie player when state is not default', () => {
    const animatedStateProps = { ...mockProps, state: 'resting' as SaraStates };
    const { getByTestId } = render(<Sara {...animatedStateProps} />);

    const lottiePlayer = getByTestId('sara-test-id');
    expect(lottiePlayer).toBeInTheDocument();
  });

  it('triggers onClick when clicked', () => {
    const { getByAltText } = render(<Sara {...mockProps} />);
    const imageElement = getByAltText(mockProps.alt);

    fireEvent.click(imageElement);

    expect(mockProps.onClick).toHaveBeenCalledTimes(1);
  });
});
