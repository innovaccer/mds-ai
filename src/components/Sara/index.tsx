import * as React from 'react';
import { SaraStates, BaseHtmlProps } from '@/common.type';
import { Player } from '@lottiefiles/react-lottie-player';
import AIResting from './assets/AI-Resting.json';
import AILogo from './assets/AI-Sara.svg';
import classNames from 'classnames';
import styles from './Sara.module.css';

export interface SaraProps extends BaseHtmlProps<HTMLDivElement> {
  /**
   * Defines size of `Sara`
   */
  size?: number;
  /**
   * Defines state of `Sara`
   */
  state?: SaraStates;
  /**
   * Specify alt text to the `Sara` for `default` state
   */
  alt?: string;
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
  const { size, state, alt, className, ...rest } = props;

  const SaraClassNames = classNames(
    {
      [styles['Sara--default']]: state === 'default',
    },
    className
  );

  if (state === 'default') {
    return (
      <div data-test="DesignSystem-AI-Sara" {...rest}>
        <img src={AILogo} alt={alt} width={size} height={size} className={SaraClassNames} />
      </div>
    );
  }

  return (
    <div data-test="DesignSystem-AI-Sara" className={className} {...rest}>
      <Player autoplay={true} loop src={AIResting} style={{ height: size, width: size }} />
    </div>
  );
};

Sara.defaultProps = {
  size: 32,
  state: 'default' as SaraStates,
};

export default Sara;
