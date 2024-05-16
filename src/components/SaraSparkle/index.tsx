import * as React from 'react';
import { SaraSparkleStates, BaseHtmlProps } from '@/common.type';
import { Player } from '@lottiefiles/react-lottie-player';
import AIIcon from './assets/AI-Icon.svg';
import Listening from './assets/AI-Listening.json';
import AIProcessingLong from './assets/AI-Processing-Long.json';
import AIProcessingShort from './assets/AI-Processing.json';
import classNames from 'classnames';
import styles from './SaraSparkle.module.css';

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
   * Specify alt text to the `SaraSparkle` for `default` state
   */
  alt?: string;
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
  const { size, state, alt, className, ...rest } = props;

  const stateMapping: Record<string, SaraSparkleStates> = {
    listening: Listening,
    'short-processing': AIProcessingShort,
    'long-processing': AIProcessingLong,
  };

  const SaraClassNames = classNames(
    {
      [styles['SaraSparkle--default']]: state === 'default',
    },
    className
  );

  if (state === 'default') {
    return (
      <div data-test="DesignSystem-AI-Sara-Sparkle" {...rest}>
        <img src={AIIcon} alt={alt} width={size} height={size} className={SaraClassNames} />
      </div>
    );
  }

  return (
    <div data-test="DesignSystem-AI-Sara-Sparkle" className={className} {...rest}>
      <Player autoplay loop src={(state && stateMapping[state]) || Listening} style={{ height: size, width: size }} />
    </div>
  );
};

SaraSparkle.defaultProps = {
  size: 24,
  state: 'default' as SaraSparkleStates,
};

export default SaraSparkle;
