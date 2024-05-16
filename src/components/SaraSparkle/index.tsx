import * as React from 'react';
import { SaraSparkleStates, BaseHtmlProps } from '@/common.type';
import * as Listening from './assets/AI-Listening.json';
import * as AIProcessingLong from './assets/AI-Processing-Long.json';
import * as AIProcessingShort from './assets/AI-Processing.json';
import Lottie from 'react-lottie';

export interface IconProps extends BaseHtmlProps<HTMLDivElement> {
  /**
   * Defines size of `SaraSparkle`
   */
  size?: number;
  /**
   * Defines state for the `SaraSparkle`
   */
  state?: SaraSparkleStates;
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
  const { size, state, ...rest } = props;

  const showAnimation = state !== 'default';

  const stateMapping: Record<string, SaraSparkleStates> = {
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
      <Lottie options={defaultOptions} height={size} width={size} isStopped={!showAnimation} />
    </div>
  );
};

SaraSparkle.defaultProps = {
  size: 24,
  state: 'default' as SaraSparkleStates,
};

export default SaraSparkle;
