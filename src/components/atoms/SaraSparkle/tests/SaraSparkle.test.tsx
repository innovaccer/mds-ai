import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SaraSparkle, { IconProps } from '../index';
import { IconStates, Size4Hierarchy } from '@/common.type';

const mockProps: IconProps = {
  alt: 'Test Sara',
  'data-test': 'sara-test-id',
  size: 'regular' as Size4Hierarchy,
  state: 'default',
  onClick: jest.fn(),
};

describe('Sara Sparkle Component', () => {
  it('renders correctly with default state', () => {
    const { getByAltText } = render(<SaraSparkle {...mockProps} />);

    const imageElement = getByAltText(mockProps.alt);
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('width', '24');
    expect(imageElement).toHaveAttribute('height', '24');
    expect(imageElement).toHaveAttribute('data-test', 'sara-test-id');
  });

  it('renders correctly with custom size', () => {
    const customSizeProps = { ...mockProps, size: 'medium' as Size4Hierarchy };
    const { getByAltText } = render(<SaraSparkle {...customSizeProps} />);

    const imageElement = getByAltText(customSizeProps.alt);
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('width', '32');
    expect(imageElement).toHaveAttribute('height', '32');
  });

  it('renders Lottie player when state is not default', () => {
    const animatedStateProps = { ...mockProps, state: 'resting' as IconStates };
    const { getByTestId } = render(<SaraSparkle {...animatedStateProps} />);

    const lottiePlayer = getByTestId('sara-test-id');
    expect(lottiePlayer).toBeInTheDocument();
  });

  it('triggers onClick when clicked', () => {
    const { getByAltText } = render(<SaraSparkle {...mockProps} />);
    const imageElement = getByAltText(mockProps.alt);

    fireEvent.click(imageElement);

    expect(mockProps.onClick).toHaveBeenCalledTimes(1);
  });
});
