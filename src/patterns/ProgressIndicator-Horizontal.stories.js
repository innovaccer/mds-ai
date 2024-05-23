import React from 'react';
import { SaraSparkle } from '@/index';
import { Text } from '@innovaccer/design-system';
import './Patterns.css';

export default {
  title: 'Patterns/Progress Indicator/Horizontal',
  tags: ['autodocs'],
};

export const Horizontal = () => {
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
    <div className="d-flex align-items-center justify-content-center">
      <SaraSparkle size={24} state="listening" className="mr-3" />
      <Text className={'shimmer-text'}>Sara is listening</Text>
    </div>
  );
};
