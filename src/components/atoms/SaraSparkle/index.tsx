import * as React from 'react';
import { Size4Hierarchy, IconStates } from '@/common.type';
import * as Listening from './assets/AI-Listening.json';
import * as AIProcessingLong from './assets/AI-Processing-Long.json';
import * as AIProcessingShort from './assets/AI-Processing.json';
import Lottie from 'react-lottie';

export interface IconProps {
  /**
   * Provide width to the `SaraSparkle`
   */
  width?: number;
  /**
   * Provide height to the `SaraSparkle`
   */
  height?: number;
  /**
   * Defines state for the `SaraSparkle`
   */
  state?: IconStates;
  /**
   * Defines size of `SaraSparkle`
   */
  size?: Size4Hierarchy;
  /**
   * Handler to be called when `SaraSparkle` is clicked
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

export const SaraSparkle = (props: IconProps) => {
  const { width, height, size, state, ...rest } = props;

  const sizeMapping = {
    tiny: 16,
    regular: 24,
    medium: 32,
    large: 48,
  };

  const iconWidth = (size && sizeMapping[size]) || width;
  const iconHeight = (size && sizeMapping[size]) || height;
  const showAnimation = state !== 'default';

  const stateMapping: Record<string, IconStates> = {
    default: Listening,
    listening: Listening,
    'short-processing': AIProcessingShort,
    'long-processing': AIProcessingLong,
  };

  const defaultOptions = {
    loop: true,
    autoplay: showAnimation,
    animationData: state && stateMapping[state],
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div data-test="DesignSystem-AI-Sara-Sparkle" {...rest}>
      <Lottie options={defaultOptions} height={iconHeight} width={iconWidth} isStopped={!showAnimation} />
    </div>
  );
};

SaraSparkle.defaultProps = {
  width: 32,
  height: 32,
  state: 'default' as IconStates,
};

export default SaraSparkle;
