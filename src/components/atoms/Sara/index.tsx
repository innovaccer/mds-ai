import * as React from 'react';
import { Size3Hierarchy, SaraStates } from '@/common.type';
import { Player } from '@lottiefiles/react-lottie-player';
import AIResting from './assets/AI-Resting.json';
import AILogo from './assets/AI-Sara.svg';
import classNames from 'classnames';
import styles from './Sara.module.css';

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
   * Specify alt text to the `Sara`
   */
  alt: string;
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
  const { width, height, alt, size, state, className, ...rest } = props;

  const sizeMapping = {
    regular: 32,
    medium: 48,
    large: 64,
  };

  const saraWidth = (size && sizeMapping[size]) || width;
  const saraHeight = (size && sizeMapping[size]) || height;

  const SaraClassNames = classNames(
    {
      [styles['Sara--default']]: state === 'default',
    },
    className
  );

  if (state === 'default') {
    return (
      <img
        src={AILogo}
        alt={alt}
        width={saraWidth}
        height={saraHeight}
        data-test="DesignSystem-AI-Sara"
        className={SaraClassNames}
        {...rest}
      />
    );
  }

  return (
    <div data-test="DesignSystem-AI-Sara" {...rest}>
      <Player autoplay loop src={AIResting} style={{ height: saraHeight, width: saraWidth }} />
    </div>
  );
};

Sara.defaultProps = {
  width: 32,
  height: 32,
  state: 'default' as SaraStates,
};

export default Sara;
