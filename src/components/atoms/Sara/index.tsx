import * as React from 'react';
import { Size3Hierarchy, SaraStates } from '@/common.type';
import Lottie from 'react-lottie';
import * as animationData from './assets/AI-Resting.json';

export interface SaraProps {
  /**
   * Provide width to the `Sara`
   */
  width?: number;
  /**
   * Provide height to the `Sara`
   */
  height?: number;
  /**
   * Defines size of `Sara`
   */
  size?: Size3Hierarchy;
  /**
   * Defines state of `Sara`
   */
  state?: SaraStates;
  /**
   * Handler to be called when `Sara` is clicked
   */
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  /**
   * Adds custom class
   */
  className?: string;
  /**
   * Stores custom testing data private to the component
   */
  'data-test'?: string;
}

export const Sara = (props: SaraProps) => {
  const { width, height, size, state, ...rest } = props;

  const sizeMapping = {
    regular: 32,
    medium: 48,
    large: 64,
  };

  const saraWidth = (size && sizeMapping[size]) || width;
  const saraHeight = (size && sizeMapping[size]) || height;
  const showAnimation = state !== 'default';

  const defaultOptions = {
    loop: true,
    autoplay: showAnimation,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div data-test="DesignSystem-AI-Sara" {...rest}>
      <Lottie options={defaultOptions} height={saraHeight} width={saraWidth} isStopped={!showAnimation} />
    </div>
  );
};

Sara.defaultProps = {
  width: 32,
  height: 32,
  state: 'default' as SaraStates,
};

export default Sara;
