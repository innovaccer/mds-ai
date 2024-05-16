import * as React from 'react';
import { SaraStates, BaseHtmlProps } from '@/common.type';
import Lottie from 'react-lottie';
import * as animationData from './assets/AI-Resting.json';

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
  const { size, state, ...rest } = props;

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
      <Lottie options={defaultOptions} height={size} width={size} isStopped={!showAnimation} />
    </div>
  );
};

Sara.defaultProps = {
  size: 32,
  state: 'default' as SaraStates,
};

export default Sara;
