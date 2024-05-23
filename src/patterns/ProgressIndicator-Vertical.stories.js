import React from 'react';
import { SaraSparkle } from '@/index';
import { Text } from '@innovaccer/design-system';
import './Patterns.css';

export default {
  title: 'Patterns/Progress Indicator/Vertical',
  tags: ['autodocs'],
};

export const Vertical = () => {
  /**
   *
   * import { Text } from '@innovaccer/design-system';
   *
   * // Patterns.css
   * @keyframes shimmer {
   *  0% {
   *    background-position: -4rem top;
   *  }
   *  50% {
   *    background-position: 12.5rem top;
   *  }
   *  100% {
   *    background-position: 12.5rem top;
   *  }
   *
   * .shimmer-text {
   *    display: inline-block;
   *    color: white;
   *    background: #595959 -webkit-gradient(linear, 100% 0, 0 0, from(#595959), color-stop(0.5, #c5c5c5), to(#595959));
   *    background-position: -4rem top;
   *    background-repeat: no-repeat;
   *    animation-fill-mode: forwards;
   *    background-clip: text;
   *    -webkit-text-fill-color: transparent;
   *    animation-name: shimmer;
   *    animation-duration: 3s;
   *    animation-iteration-count: infinite;
   *    background-size: 4rem 100%;
   *  }
   *
   */

  return (
    <div className="d-flex align-items-center justify-content-center flex-column">
      <SaraSparkle size={48} state="listening" className="mb-3" />
      <Text className={'shimmer-text'} size="large">
        Sara is listening
      </Text>
    </div>
  );
};
