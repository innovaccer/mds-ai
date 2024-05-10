import * as React from 'react';
import { Size4Hierarchy, IconStates } from '@/common.type';
import { Player } from '@lottiefiles/react-lottie-player';
import AIIcon from './assets/AI-Icon.svg';
import Listening from './assets/AI-Listening.json';
import AIProcessingLong from './assets/AI-Processing-Long.json';
import AIProcessingShort from './assets/AI-Processing.json';

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
   * Defines size of `SaraSparkle`
   */
  size?: Size4Hierarchy;
  /**
   * Specify alt text to the `SaraSparkle`
   */
  alt: string;
  /**
   * Handler to be called when `SaraSparkle` is clicked
   */
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  /**
   * Defines state for the `SaraSparkle`
   */
  state?: IconStates;
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
  const { width, height, size, alt, state, ...rest } = props;

  const sizeMapping = {
    tiny: 16,
    regular: 24,
    medium: 32,
    large: 48,
  };

  const iconWidth = (size && sizeMapping[size]) || width;
  const iconHeight = (size && sizeMapping[size]) || height;

  if (state === 'default') {
    return (
      <img
        src={AIIcon}
        alt={alt}
        width={iconWidth}
        height={iconHeight}
        data-test="DesignSystem-AI-SaraSparkle"
        {...rest}
      />
    );
  }

  const stateMapping = {
    listening: Listening,
    'short-processing': AIProcessingShort,
    'long-processing': AIProcessingLong,
  };

  return (
    <div {...rest}>
      <Player
        autoplay
        loop
        src={state && stateMapping[state]}
        // style={{ height: iconHeight, width: iconWidth }}
        style={{ height: iconHeight, width: 'auto' }}
      />
    </div>
  );
};

SaraSparkle.defaultProps = {
  width: 32,
  height: 32,
  state: 'default' as IconStates,
};

export default SaraSparkle;
